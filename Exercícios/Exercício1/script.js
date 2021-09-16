function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 10){
        img.src = "img-manha.png"
        document.body.style.background = '#eee4db'
    } else if (hora >= 10 && hora <= 16){
        img.src = "img-dia.png"
        document.body.style.background = '#bde2f2'
     } else if (hora > 16 && hora < 19) {
        img.src = "img-tarde.png"
        document.body.style.background = '#ffa787'
     } else if (hora >= 19 && hora <= 24 ) {
        img.src = "img-noite.png"
        document.body.style.background = '#322c38'
    }
}
