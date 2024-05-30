const fs = require('fs');
const xml2js = require('xml2js');

function extractI18nKeys(file_path) {
    const content = fs.readFileSync(file_path, 'utf8');
    const pattern = /{i18n>(.*?)}/g;
    let match;
    const keys = [];
    while ((match = pattern.exec(content)) !== null) {
        keys.push(match[1]);
    }
    return keys;
}

function updateI18nFile(i18n_file_path, keys) {
    const i18n_data = JSON.parse(fs.readFileSync(i18n_file_path, 'utf8'));
    keys.forEach(key => {
        if (!(key in i18n_data)) {
            i18n_data[key] = "";
        }
    });
    fs.writeFileSync(i18n_file_path, JSON.stringify(i18n_data, null, 4));
}

const keys = extractI18nKeys('../zetpmorders/webapp/view/worklist.view.xml');
updateI18nFile('i18n.json', keys);