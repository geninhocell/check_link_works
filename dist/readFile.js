import * as fs from 'fs';
function handleError(error) {
    throw new Error(error.code + 'Erro ao ler arquivo!');
}
function extractLink(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    for (let temp = regex.exec(text); temp !== null; temp = regex.exec(text)) {
        links.push({ [temp[1]]: temp[2] });
    }
    // const links = text.match(regex);
    return links.length === 0 ? 'Não há links no texto do arquivo' : links;
}
export async function readFile(path_file) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(path_file, encoding);
        return extractLink(text);
    }
    catch (e) {
        handleError(e);
    }
}
// function readFile(path_file){
//   const encoding = 'utf-8';
//   fs.promises.readFile(path_file, encoding)
//     .then(text => console.log(text)).catch(e => handleError(e));
// }
// function readFile(path){
//   const encoding = 'utf-8';
//   fs.readFile(path, encoding, (error, text) => {
//     if(error){
//       handleError(error);
//     }
//     console.log(chalk.green(text));
//   });
// }
// readFile('./arquivos/texto1.md');
