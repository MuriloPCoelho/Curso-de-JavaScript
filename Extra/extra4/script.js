function calcular(){
    var pri = window.document.querySelector('input#pri')
    var seg = window.document.querySelector('input#seg')
    var ter = window.document.querySelector('input#ter')
    var qua = window.document.querySelector('input#qua')
    var qui = window.document.querySelector('input#qui')
    var res = window.document.querySelector('div#res')
    var um = Number(pri.value)
    var dois = Number(seg.value)
    var tres = Number(ter.value)
    var quatro = Number(qua.value)
    var cinco = Number(qui.value)
    res.innerHTML += `<strong>${um*um}; ${dois*dois}; ${tres*tres}; ${quatro*quatro}; ${cinco*cinco}.</strong>` 
}