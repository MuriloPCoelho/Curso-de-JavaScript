function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'um Homem'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src','foto-bebe-m.png')
            } else if (idade >= 5 && idade < 10){
                //criança
                img.setAttribute('src','foto-crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else if (idade < 125) {
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            } else {
                //morto
                gênero = 'um Morto'
                img.setAttribute('src','foto-morto.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade >= 5 && idade < 10){
                //criança
                img.setAttribute('src','foto-crianca-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            } else if (idade < 125) {
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            } else {
                //morto
                gênero = 'uma Morta'
                img.setAttribute('src','foto-morto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${gênero} com ${idade} anos.</strong>`
        res.appendChild(img)
    }
}