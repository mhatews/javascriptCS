function contar(){
    var ini =  document.getElementById('txti')
    var fim =  document.getElementById('txtf')
    var passo =  document.getElementById('txtp')
    var res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = `<p> Impossivel contar !</p>`
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo inválido ! Considerando PASSO = 1')
            p = 1
        }
        if(i < f){
            let c = i
            while(c <= f){
                res.innerHTML += `${c} \u{1F449}`
                c = c + p
            }
        }else{
            let c = i
            while(c <= f){
                res.innerHTML += `${c} \u{1F449}`
                c = c - p
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}