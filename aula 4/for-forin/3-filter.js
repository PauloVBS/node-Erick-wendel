const {obterPessoas} = require('./service')


Array.prototype.meuFilter = function (callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, this)
        if(!result)continue;
        listaa.push(item)
    }
}
async function main(){
    try{
        const {
            results
        }= await obterPessoas('a')
        /* const familiaLars = results.filter(function (item){
            const result = item.name.toLowerCase().indexOf('lars')!==-1
            return result
        }) */
        const familiaLars = results.meuFilter(item => item.name.toLowerCase().indexOf('lars')!==-1)
        console.log(`index: ${index}`, lista.length)
        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names)

    }catch(e){
        console.lerror('DEU RUIM', e)
    }
    
}
main()