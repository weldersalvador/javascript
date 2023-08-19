const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')
const passo = document.getElementById('passo')
const res = document.getElementById('resultado')
function contar(){
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }else if(passo.value == 0){
        alert('PASSO INVALIDO! CONSIDERANDO PASSO 1')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            for(let c = i; c <= f; c += 1)
            res.innerHTML += ` ${c}`
        }else{
            for(let c = i; c>= f; c -= 1)
            res.innerHTML += ` ${c}`
        }
        

    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            for(let c = i; c <= f; c += p)
            res.innerHTML += ` ${c} `
        }else{
            for (let c = i; c >= f; c -= p)
    
            res.innerHTML += ` ${c}`
        }
        

        
    }
        
}
