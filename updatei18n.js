const fs = require('fs');

function createI18nFile(i18n_file_path, labels) {
    let content = '';
    Object.keys(labels).forEach(key => {
        let label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        content += `${key}=${labels[key] || label}\n`;
    });
    fs.writeFileSync(i18n_file_path, content);
}

const labels = {
    "OrderNumber": "",
    "actionLiberar": "",
    "OrderLiberar": "",
    "actionMov261": "",
    "Mov261": "",
    "actionCTEC": "",
    "Cierre": "",
    "NotifyHours": "",
    "NotifyComplete": "",
    "GeneralData": "",
    "MaterialsData": "",
    "TablaMovimientos": "",
    "material": "",
    "cantidad": "",
    "status": "",
    "OperationsData": "",
    "TablaOperaciones": "",
    "WorkCntr": "",
    "Operation": "",
    "Hours": "",
    "ComponentData": "",
    "TablaComponentes": "",
    "worklistTitle": "",
    "ButtonOrderCreate": "",
    "worklistSearchTooltip": "",
    "tableNameColumnTitle": "",
    "tableNameColumnTitle2": "",
    "tableNameColumnTitle3": "",
    "tableUnitNumberColumnTitle": "",
    "tableNameColumnTitle5": ""
};

createI18nFile('i18n.properties', labels);