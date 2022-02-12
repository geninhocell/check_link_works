import {readFile} from './readFile.js';

const text = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  },
  {
    '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input'
  },
  {
    DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer'
  },
  {
    HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement'
  },
  {
    'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes'
  }
]


describe('testing readFile file', () => {
  test('must be a function', () => {
    expect(typeof readFile).toBe('function');
  });

  test('should return array with results', async () => {
    const result = await readFile('./arquivos_tests/texto1.md');

    expect(result).toEqual(text);
  });

  test('must return message "Não há links no texto do arquivo"', async () => {
    const result = await readFile('./arquivos_tests/no_link.md');

    expect(result).toBe('Não há links no texto do arquivo');
  });

  test('should throw a missing file error', async () => {
    await expect(readFile('./arquivos_tests/')).rejects.toThrow(/Erro ao ler arquivo!/);
  });
});
