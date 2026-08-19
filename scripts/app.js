alert("olá mundo!");

var nasc = 2009;
let nome = "eduardo";
const viva = true;
let altura = 1.83;

if(viva){
    let saudacao = "ola" + nome + "!";
    let msg = ` altura ${altura}m | idade ${2026-nasc}`;
    alert (saudacao+"\n"+msg);
}else{
   alert("rip");
}