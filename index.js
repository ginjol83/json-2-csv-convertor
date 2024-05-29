import json from "./test/test.js"

const jsonToCSV = (jsonObject, config) => {
    const delimiter = config && config.delimiter || ','

    // Función para convertir un objeto JSON a CSV
    const rows = [];
    const headers = Object.keys(jsonObject).join(delimiter);

    // Añadir encabezados al CSV
    rows.push(headers);

    // Procesar los valores
    const values = Object.values(jsonObject).map(value => {
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return value;
    }).join(delimiter);

    // Añadir valores al CSV
    rows.push(values);

    // Convertir el array de filas a una cadena CSV
    const csvString = rows.join('\n');
    
    return csvString;
};

console.log( jsonToCSV( json.json, { delimiter: ";" }) )
