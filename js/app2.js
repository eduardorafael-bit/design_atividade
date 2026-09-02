let dia = prompt("escolha um dia da semana\nsendo 1:domingo - 7:sabado ");
dia = Number(dia);

if(dia <=0 || dia >=8){
    alert("dia invalido");
}else if( dia == 1 ){
    alert("você escolheu domingo");
}else if( dia == 2 ){
    alert("você escolheu segunda");
}else if( dia == 3 ){
    alert("você escolheu terça");
}else if( dia == 4 ){
    alert("você escolheu quarta");
}else if( dia == 5 ){
    alert("você escolheu quinta");
}else if( dia == 6 ){
    alert("você escolheu sexta");
}else{
    alert("você escolheu sabado")
}