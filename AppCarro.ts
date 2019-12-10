import { Carro } from "./Carro";

let c1: Carro;
let c2: Carro;

c1 = new Carro();
c2 = new Carro();

c1.setAno(1998);
c1.setModelo("fusca Isidro");
c1.setPlaca("ABC1234");
c1.setLigado(false);

c2.setAno(1999);
c2.setModelo("fusca francisco");
c2.setPlaca("ABC5678");
c2.setLigado(false);

c1.andar();
c1.parar();

console.log("------------------------------------------")

c2.ligar();
c2.andar();
c2.parar();
c2.desligar();

