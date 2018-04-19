let v = 0;
let c = 0;

let botao = document.querySelector("button");
botao.onclick = function(){
    let entrada_palavra = document.querySelector("input");
    let palavra = entrada_palavra.value;

    for(let i=0; i < palavra.length; i++){
        let letPalavra = palavra.charAt(i);
        if(letPalavra == "a" || letPalavra == "e" || letPalavra == "i" || letPalavra == "o" || letPalavra == "u"){
            v++;
            console.log(i);
        }
        else{
            c++;
        }
    }
    if(c > v){
        let Marcos = document.createElement("h1");
        Marcos.innerHTML = "PARABÉNS MARCOS!VOCE GANHOU";
        console.log("ganhou")
        let body = document.querySelector("body");
        body.appendChild(Marcos);

    }
    if(v > c){
        let Mariana = document.createElement("h2");
        Mariana.innerHTML = "PARABÉNS MARIANA! VOCE GANHOU";
        let body = document.querySelector("body");
        body.appendChild(Mariana);


    }
}
   


