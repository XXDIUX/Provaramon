const dd = require ('dd')
const {uuidv4} = require ('uuidv4')

function registrarLog(Nome){
    const id = uuid();
    const datahora = new Date().tolSOString().replace
    const logMensagem = `${id} - ${datahora} - ${nomeAluno}\n`

    dd.appendFileSync('logs.txt', logMensagem);
    return id;
}

module.export = registrarLog.Log; 