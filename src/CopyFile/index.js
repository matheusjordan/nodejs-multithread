import { readFileSync, writeFileSync } from 'fs';

export class CopyFile {
    static start(fileId) {
        const fileContent = readFileSync('./src/assets/index.txt', {
            encoding: 'utf8'
        });

        this.createCopy(fileId, fileContent);
    }

    static createCopy(name, content) {
        writeFileSync(`./src/assets/copies/${name}.txt`, content)
    }
}