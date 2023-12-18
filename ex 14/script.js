
function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var fundo = document.getElementById('fundo')
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12){
        img.src = 'manhã.jpg'
        fundo.style.background = '#edf7d2'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        fundo.style.background = '#c4915f'
    } else {
        img.src = 'noite.jpg'
        fundo.style.background = '#001118'
    }
    
}