#!/bin/bash

# Generate a new version of Key.enum.d.ts
npm run scrape

# Run "git status", because for some reason the command
# below doesn't correct detect changes otherwise ¯\＿(ツ)＿/¯
git status

if git diff-index --quiet HEAD --; then
    echo -e "\033[32;1mAll auto-generated files are up to date 👍\033[0m"
    exit 0
else
    echo -e "\033[31;1m⚠️   Some auto-generated files are not up-to-date! Please run \"npm run scrape\" and commit these changes. ⚠️\033[0m"
    echo "Diff:"
    git diff

    exit 1
fi
