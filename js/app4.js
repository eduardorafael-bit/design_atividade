let vezes = Number(prompt("digite a quantidade de vezes: "));
for (let i = 1; i<=vezes; i++){
    if (vezes > 100){
        alert("valor invalido, digite um entre 0 e 100");
        break
    }
    alert(`contei ${i} vezes`);
    if(i%2!=0){
        continue;
    }
    alert(`${i} é par`);
}