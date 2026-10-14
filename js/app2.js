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

class cachorro extends animal{
    constructor(nome, cor="não tem", altura=0.3, peso=0, raca="Vira-Lata"){
        super(nome,cor,altura,peso,raca);
        this.patas = 4;
    }
    latir(){
        alert("au au");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg +"\nSou um Dog!";
        alert(msg);
    }

}
class passaro extends animal{
    constructor(nome, cor="não tem", altura=0.3, peso=0, raca="concriz"){
        super(nome,cor,altura,peso,raca);
        this.patas = 2;
    }
    latir(){
        alert("fiu fiu");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg +"\nSou um Bird!";
        alert(msg);
    }

}

const balu = new cachorro("Balu Brasil");
const mel = new animal("mel", "amarelo", 1.10, 45, "LuLu");
const leleco = new passaro("leleco Brasil", undefined, undefined, undefined, "concriz");