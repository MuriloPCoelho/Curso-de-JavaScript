let num = [8, 1, 7, 4, 2, 9, 5]
num.push(6)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é o ${num[0]}`)
let pos = num.indexOf(8)

if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}