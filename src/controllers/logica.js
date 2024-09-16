
//LOGICA AREA INICIAL
exports.area_inicial = (req,res) =>{
    res.render('treino')
  }

//LOGICA SAQUE NOTAS
exports.saque_notas = (req,res) =>{
  
    let cont = 0 //Contador para verificar quantasvezes o numero foi diminuido e atribuir a lista
    //por exemplo se tem um valor de 500 e na condicional 100 o contador da um total de 5 ,significa que foram retiradas 5 notas de 100
    
    let lista_notas=[] //Armazenar as notas ((o valor do contador)
    
    let valorsaque = req.body.numeral //Valor que o usuario insere saque
    // Condicional para bloquear valores inteiros e valores do tipo float, aceitar somente valores do tipo inteiro
    
    if(  valorsaque <= 0){
        res.json('Saque invalido , tente numero inteiros e positivos por favor')
    }
    
    
    //Saque das notas de 100
    while (valorsaque >= 100){
        valorsaque -= 100
        cont ++ //Contador para ver quanto do valor saque vai ser retirado    
    }
    lista_notas.push(`Notas de 100 : ${cont}`) 
    cont = 0 //zerar o contador para nova contagem 
    
    //Saque das notas de 50
    while(valorsaque >= 50){
        valorsaque -=50
        cont ++
    }
    lista_notas.push(`Notas de 50 : ${cont}`)
    cont = 0 //zerar o contador para nova contagem
    
    //Saque das notas de 20
    while(valorsaque >= 20){
        valorsaque -= 20
        cont ++
    }
    lista_notas.push(`Notas de 20 : ${cont}`)
    cont =0 //zerar o contador para nova contagem
    
    //Saque das notas de 10
    while(valorsaque>= 10){
        valorsaque -= 10
        cont ++
    }
    lista_notas.push(`Notas de 10  : ${cont}`)
    cont = 0 //zerar o contador para nova contagem
    
    //Saque das notas de 5
    while(valorsaque>= 5){
        valorsaque -=5
        cont ++
    }
    lista_notas.push(`Notas de 5 : ${cont}`)
    cont = 0 //zerar o contador para nova contagem
    
    //Saque das notas de 2
    while(valorsaque>= 2){
        valorsaque -=2
        cont ++
    }
    lista_notas.push(`Notas de 2 : ${cont}`)
    cont = 0 //zerar o contador para nova contagem
    
    res.json({
        //valorsaque exibi se todo valor foi retirado ou se sobrou algum valor
        valorsaque: 'Valor do saque restante é de R$ ' +valorsaque+ ' ', 
        lista_notas:lista_notas,     
    })
   
}



