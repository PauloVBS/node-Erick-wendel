const{
    obterPessoas
}= require ('./service')

Array.prototype.meuReduce = function(callback, valorInicial){
    let valorFinal =typeof valorInicial !== undefined? valorInicial: this[0]
    for(let index =0; index <= this.length -1; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
}

async function main(){
    try{
        const{ results } = await obterPessoas('a')
        const pesos = results.map(item=> parseInt(item.height))

        const total = pesos.reduce((anterior, proximo)=> {
            return anterior + proximo
        },0)

        console.log('total', total)
    }catch(e){
        console.error("deu ruim", e)
    }
}
main()