var nasc = 2009;
let nome = "Eduardo";
const viva = true

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`dentro de função - idade ${idade}`);
    return idade;
}

calcIdade();
/*alert(`fora da função : idade ${idade}`); erro pois a variavel let não existe fora do escopo dela*/
alert(`fora da função : chamando calcIdade ${calcIdade(2027)}`);
