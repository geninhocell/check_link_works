#!/usr/bin/env node
import chalk from 'chalk';
import {readFile} from './readFile.js';
import {validate} from './http-validate.js';
// array
// 2 caminhos
// [0] binários do node
// [1] caminho da execução
const [,,path_file, validateAction] = process.argv;

async function processText(path_file: string){
  const result = await readFile(path_file);

  if(validateAction === 'validate' && typeof result !== 'string'){
    console.log(chalk.yellow('lista de links validados'), await validate(result!));
  }else{
    console.log(chalk.yellow('lista de links'), result);
  }

}

processText(path_file);

