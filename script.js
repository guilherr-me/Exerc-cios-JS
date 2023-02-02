
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
        if (minutos < 10){
            minutos = '0'+ minutos
        }
    msg.innerHTML = `Agora são exatamente ${hora}:${minutos} horas.`
    if (hora >= 0 && hora<12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src= 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src= 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    
}