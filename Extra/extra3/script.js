function calcular(){
    var pri = window.document.querySelector('input#um')
    var seg = window.document.querySelector('input#dois')
    var ter = window.document.querySelector('input#tres')
    var med = window.document.querySelector('input#meta')
    var res = window.document.querySelector('div#res')
    var um = Number(pri.value)
    var dois = Number(seg.value)
    var tres = Number(ter.value)
    var meta = Number(med.value)
    var mtotal = (um+dois+tres)/3
    

    if (mtotal >= meta){
        res.innerHTML += `Sua média é <strong>${mtotal}</strong></br> Você está <strong>Aprovado!</strong>`
    } 
    if (mtotal <= meta) {
        res.innerHTML += `Sua média é <strong>${mtotal}</strong></br> Você está <strong>Reprovado!</strong>`
    }
    
}
