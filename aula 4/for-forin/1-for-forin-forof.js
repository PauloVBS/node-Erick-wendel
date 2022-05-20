const service = require('./service')

async function main(){
    try{
        console.time('for')
        for(leti=0;i<=result.results.length-1;i++){
            const pessoa= result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')
        console.time('forin')
        for(let i in result.results){
        }
        console.timeEnd('forin')
        console.time('forof')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof')
            const pessoa=result.results[i]
            names.push(pessoa.name)
        console.log(`names`, names)
      
    }catch(error){
        console.error('erro interno', error)
    }
}
