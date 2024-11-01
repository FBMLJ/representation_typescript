import * as fs from "fs";
import * as path from "path";
import { generateSwaggerRepresentation , swaggerJsonDefinition} from "projeto_validacao";


function loadModules(dir: string) {
    fs.readdirSync(dir, { withFileTypes: true }).filter(file => !file.name.includes(".d.")).forEach(file => {
        const filePath = path.join(dir, file.name);
        
        // Verifica se é um arquivo TypeScript e não é o próprio arquivo index.ts
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()){
            loadModules(fullPath)
        }
        if (file.name.endsWith('.ts') || file.name.endsWith(".js")) {
            const moduleExports = require(filePath);
            Object.keys(moduleExports).forEach(key=> {
                generateSwaggerRepresentation(new moduleExports[key]());
            })
            
        }
    });
    return swaggerJsonDefinition;
}
export  function getSwaggerRepresentation(){
    console.log(swaggerJsonDefinition)
    return loadModules(path.join(__dirname, "/representation"));
}