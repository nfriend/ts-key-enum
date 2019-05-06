import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
import chalk from 'chalk';
import * as bluebird from 'bluebird';
import { writeFile } from 'fs';
import * as _ from 'lodash';

const writeFileAsync = bluebird.promisify(writeFile);

(async () => {
    const mdnUrl =
        'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys';

    console.info(chalk.gray('Making GET request to MDN...'));

    const pageHtml: string = await rp(mdnUrl);

    console.info(chalk.gray('Successfully received response from MDN.'));

    console.info(chalk.gray('Scraping HTML for key names...'));

    const $ = cheerio.load(pageHtml);

    // the list of of all keys found in the page.
    let keys: {
        value: string;
        description: string;
    }[] = [];

    // extracts the key name (i.e. LaunchCalculator) i.e.
    // from a string like "LaunchCalculator" [5].
    // Example: https://regex101.com/r/fq05ov/1
    const keyValueRegex = /\"([a-z0-9_]+)\"/i;

    // iterate over each <tr> in the page
    $('tr').each((index, element) => {
        // select the value of the <code> element inside
        // the first <td> element, if it exists.
        const value = $(element)
            .find('td:nth-child(1) code')
            .text();

        // select the value of the second <td> element
        const description = $(element)
            .find('td:nth-child(2)')
            .text();

        // extract the key name from the <code> element's
        // contents using the regex defined above
        const matches = keyValueRegex.exec(value);
        const extractedValue = matches ? matches[1] : undefined;

        // if both of these values were found, we assume that
        // this was a valid match.  Create a new entry.
        if (extractedValue && description) {
            keys.push({ value: extractedValue, description: description });
        }
    });

    console.info(chalk.gray('Eliminating duplicate keys...'));

    // elimination of duplicate key is necessary because
    // (at the time of writing) there is one duplicate entry on
    // the page - "Clear".
    keys = _.uniqBy(keys, k => k.value);

    console.info(chalk.gray('Generating .ts file...'));

    const enumFile =
        `/**\n` +
        `  * An enum that includes all non-printable string values one can expect from $event.key.\n` +
        `  * For example, this enum includes values like "CapsLock", "Backspace", and "AudioVolumeMute",\n` +
        `  * but does not include values like "a", "A", "#", "é", or "¿".\n` +
        `  * Auto generated from MDN: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys\n` +
        `  */\n` +
        `export const enum Key {\n\n` +
        keys
            .map(k => {
                // prettier-ignore
                return `    /** ${k.description} */\n    ${k.value} = '${k.value}',`;
            })
            .join('\n\n') +
        '\n}';

    console.info(chalk.gray('Writing result to Key.enum.ts...'));

    await writeFileAsync('./Key.enum.ts', enumFile);

    console.info(chalk.green('✓ All done! Successfully updated Key.enum.ts.'));
})();
