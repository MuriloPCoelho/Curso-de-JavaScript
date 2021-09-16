let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 85.4,
    idade: 38,
    engordar(p=0){
        
        this.peso += p //autocitação
    }
}

var mais = 3
amigo.engordar(mais)

console.log(`nome: ${amigo.nome}`)
console.log(`sexo: ${amigo.sexo}`)
console.log(`peso: ${amigo.peso}`)
console.log(`${amigo.nome} engordou ${mais}Kg`)
console.log(`idade: ${amigo.idade}`)