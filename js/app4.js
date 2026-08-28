let nasc = prompt("digite seu ano de nascimento: ");
nasc = parseInt(nasc);

let fds = confirm("se hoje for final de semana, clique ok");
let idade = 2026 - nasc;

alert (`você é maior de idade: ${idade >= 18}`);
alert(`hoje é final de semana: ${fds}`);

if(idade >= 18 && fds){
    alert("você pode beber ")
}else{
    alert("você não pode beber")
}