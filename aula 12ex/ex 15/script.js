function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        img = document.getElementById('image')
        if (fsex[0].checked){
            genero = "homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'homem-criança.jpg'
            } else if (idade >=14 && idade < 21) {
                //Jovem
                
            } else if (idade < 50){
                //Adulto
                
            }else{
                //Idoso
                
            }
        } else if (fsex[1].checked){
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                //criança
                
            } else if (idade >=10 && idade < 21) {
                //Jovem
            } else if (idade < 50){
                //Adulto
            }else{
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
    }
}