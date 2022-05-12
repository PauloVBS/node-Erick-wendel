
function obterUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id:1,
            nome: 'Aladim',
            dataNascimento: new Date()
        })
    },1000)

}
function obterTelefone(idUsuario,callback){
setTimeout(()=>{
    return callback(null,{
        telefone:'959840958',
        ddd:11
    })
},2000);
}
function obterEndereco(idUsuario,callback){
setTimeout(()=>{
    return callback(null,{
        rua: 'dos bobos',
        numero:0     
    })
}, 2000) 
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('DEU RUIM EM USUARIO', error)
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
        if(error1){
            console.error('DEU RUIM EM TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('DEU RUIM EM ENDEREÇO', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço:${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
