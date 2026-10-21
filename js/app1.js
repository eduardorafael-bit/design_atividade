let hoje = new Date();

const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;

const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario");

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, data_nasc.getMonth(), data_nasc.getDate());
    let data_formatada = `${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `ola, ${nome.value}! hoje é ${data_formatada}`;
    if (data_aniv > hoje){
        let dif = data_aniv.getMonth()-hoje.getMonth();

        aniversario.innerHTML =`diferenca de hoje para aniv ${data_aniv - hoje}`;
    }else{
        aniversario.innerHTML = `diferenca de hoje para aniv ${hoje - data_aniv}`;
    }
    cadastro.reset();
});