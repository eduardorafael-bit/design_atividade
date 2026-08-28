let nasc = prompt("digite seu ano de nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("se você esta vivo, clique em ok.");

if (viva){
    alert(`você tem ${2026-nasc} anos. `)
}else{
    alert(`você morreu`)
}