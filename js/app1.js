const balu = {
    nome:"Balu Brasil",
    cor:"preto",
    altura:0.58,
    peso:11.5,
    raca:"Vira-Lata",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    },
    saudar(){
        let msg = `ola meu nome é ${this.nome}\n`;
        msg = msg+`cor: ${this.cor} raça: ${this.raca}\n`;
        msg = msg+`peso: ${this.peso}\n`;
        msg = msg+`altura: ${this.altura}\n`;
        alert(msg)
    }
}