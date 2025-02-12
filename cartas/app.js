/**
 *  Estudo do array 
 * Exemplo de uso em um jogo de cartas
 * @author Nathan Furukawa
 */

function sortear() {
    //            0    1    2    3
    let nipes = ["♥", "♦", "♣", "♠"]
    //            0   1   2   3   4...
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    // gerando números aleatórios em JS (random)
    // Math.randow()*4 (gera 4 números: 0 1 2 3)
    // Math.floor() converte para números inteiros
    let nipeSorteado = nipes [Math.floor(Math.random()*4)]
    let faceSorteado = faces [Math.floor(Math.random()* faces.length)]
    console.clear()
    ////console.log(faceSorteado,nipeSorteado)

    // Determinar a cor com o nipe sorteado 
    let cor 
    if(nipeSorteado === "♥" || nipeSorteado === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }

    // renderização do canto superior esquerdo
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteado}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo aplica o esztilo de cor ao documento do html indentificado como `supEsq`
    document.getElementById(`supEsq`).style.color = cor

    //renderização do centro
    ////document.getElementById('centroCarta').innerHTML = `${nipeSorteado}`
    ////document.getElementById(`centroCarta`).style.color = cor
    // verificar o nipe sorteado e rederizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById(`centroCarta`)
    if (faceSorteado === "J") {
        cc.innerHTML = `<img src="img/valete.png">`
    } else if (faceSorteado === "Q") {
        cc.innerHTML = `<img src="img/dama.png">`
    } else if (faceSorteado === "K") { 
        cc.innerHTML = `<img src="img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }


    //renderização de canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${faceSorteado}</div> <div>${nipeSorteado}</div>`
    document.getElementById(`infDir`).style.color = cor
}