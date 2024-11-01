import * as fs from "fs";
import * as path from "path";
import { generateSwaggerRepresentation , swaggerJsonDefinition} from "projeto_validacao";


function loadModules(dir: string) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        
        // Verifica se é um arquivo TypeScript e não é o próprio arquivo index.ts
        if (file.endsWith('.ts') && file !== 'index.ts') {
            const moduleExports = require(filePath);
            Object.keys(moduleExports).forEach(key=> {
                generateSwaggerRepresentation(new moduleExports[key]());
            })
            
        }
    });
    return swaggerJsonDefinition;
}
export  function getSwaggerRepresentation(){

    return loadModules(path.join(__dirname, "/representation"));
}