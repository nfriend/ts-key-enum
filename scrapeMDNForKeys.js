const rp = require('request-promise');
const cheerio = require('cheerio');
const chalk = require('chalk');
const fs = require('fs');
const _ = require('lodash');

(async () => {
    const mdnUrl = `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys`;

    console.info(chalk.gray('Making GET request to MDN...'));
    const pageHtml = await rp(mdnUrl);
    console.info(chalk.gray('Successfully received response from MDN.'));

    console.info(chalk.gray('Scraping HTML for key names...'));
    const $ = cheerio.load(pageHtml);
    const keys = [];
    const keyValueRegex = /\"([a-z0-9_]+)\"/i;
    $('tr').each((index, element) => {
        const value = $(element)
            .find('td:nth-child(1) code')
            .text();
        const description = $(element)
            .find('td:nth-child(2)')
            .text();

        const matches = keyValueRegex.exec(value);
        const extractedValue = matches ? matches[1] : undefined;

        if (extractedValue && description) {
            keys.push({ value: extractedValue, description: description });
        }
    });

    // eliminate duplicate keys
    

    console.info(
        chalk.gray('Done scraping.  Found the following keys:\n') +
            keys
                .map(
                    k =>
                        ` - ${chalk.blue(k.value)}: ${chalk.green(
                            k.description,
                        )}`,
                )
                .join('\n'),
    );

    let enumFile = `export enum Key {\n\n`;

    enumFile += keys.map(k => {
        return `    /** ${k.description} */\n    ${k.value} = '${k.value}',\n\n`;
    }).join('')

    enumFile += '}';

    fs.writeFileSync('./test.ts', enumFile);
})();
