function contar() {
    let inicio = window.document.querySelector('input#inicio')
    let fim = window.document.querySelector('input#fim')
    let passos = window.document.querySelector('input#passos')
    let res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
    if (p == 0) {
        window.alert('[ERRO] Salto invalido! Considerando como salto=1')
        p = 1
    }
    if (i <= f) {
        for(let c = i; c <= f; c += p){
            res.innerHTML += `<strong> ${c} \u{1F449}</strong>`
        }
        
    } else {
        for(let c = i; c <= f; c -=p){
            res.innerHTML += `<strong> ${c} \u{1F449}</strong>`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }
}