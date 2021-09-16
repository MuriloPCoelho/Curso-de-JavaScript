function buscar(){
    var ntxt = window.document.querySelector('input#ntxt')
    var nvalue = Number(ntxt.value)
    var engrenagem = 1
    var tab = window.document.querySelector('select#tab')
    tab.innerHTML = ''
    while (engrenagem <= 10){
        var mult = Number(engrenagem * nvalue)
        var item = window.document.createElement('option')
        item.innerHTML += `<p><strong>${nvalue} x ${engrenagem} = ${mult}</strong> </p>`
        tab.appendChild(item)
        engrenagem++
    }
}
