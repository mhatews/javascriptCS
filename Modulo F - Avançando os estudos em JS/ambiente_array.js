let num = [5,8,4]

console.log(`Nosso vetor é ${num}`)
/*
num[3] = 9 

console.log(`Nosso vetor agora é ${num}`)

num.push(7) //adiciona um valor no vetor

console.log(`Nosso vetor agora é ${num}`)

console.log(`O vetor tem ${num.length} posições`)  // conta quantos elementos tem seu vetor

num.sort() // ordena seu vetor em ordem crescente

console.log(`O vetor ordenado é ${num}`)

let c = num.length

for(let pos = 0; pos < c; pos++){
    console.log(`${num[pos]}`)
}*/

/*for(let pos in num){
    console.log(`${num[pos]}`)
}*/



let pos = num.indexOf(8)// busca um item desejado dentro do vetor e retorna a posição do mesmo
//caso não exista esse número o valor retornado é -1

if(pos == -1){
    console.log('Valor não existe no vetor')
}else{
    console.log(`Valor foi encontrado na posição ${pos}`)
}