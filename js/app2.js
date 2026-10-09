class animal{
    constructor(nome, cor="não tem", altura=0.3, peso=0, raca="Vira-Lata"){
        this.nome = nome;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.raca = raca;
    }
    latir(){
        alert("au au");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    }
    saudar(){
        let msg = `ola meu nome é ${this.nome}\n`;
        msg = msg+`cor: ${this.cor} raça: ${this.raca}\n`;
        msg = msg+`peso: ${this.peso}\n`;
        msg = msg+`altura: ${this.altura}\n`;
        alert(msg)
    }
}

const balu = new animal("Balu Brasil");
const mel = new animal("mel", "amarelo", 1.10, 45, "LuLu");