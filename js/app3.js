let dia = prompt("escolha um dia da semana\nsendo 1:domingo - 7:sabado ");
dia = Number(dia);
switch(dia){
    case 1 : alert("voce escolheu domingo");break;
    case 2 : alert("voce escolheu segunda");break;
    case 3 : alert("voce escolheu terça");break;
    case 4 : alert("voce escolheu quarta");break;
    case 5 : alert("voce escolheu quinta");break;
    case 6 : alert("voce escolheu sexta");break;
    case 7 : alert("voce escolheu sabado");break;
    default: alert("dia invalido");break;
}

