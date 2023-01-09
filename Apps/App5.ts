import { Cliente } from "../Classe_concreta/Cliente";
import { ContaPoupanca } from "../Classe_concreta/ContaPoupanca";
import { Credito } from "../Classe_concreta/Credito";
import { Debito } from "../Classe_concreta/Debito";
import { Endereco } from "../Classe_concreta/Endereco";

//Cliente - Juninho Batidão
const Juninho = new Cliente("Juninho Batidão",
                           "99988833311",
                           "96 99172 8212",
                           new Endereco("887712",
                                        "logradouro-1",
                                        "331","Casa azul",
                                        "São Paulo",
                                        "SP"),
                           true);

const contaJuninho = new ContaPoupanca("1",new Debito(0, new Date()),new Credito(0, new Date()), 0.01);


//1
contaJuninho.depositar(new Credito(200, new Date("2022/12/01")));
//2
contaJuninho.depositar(new Credito(200, new Date("2022/12/02")));
//3
contaJuninho.depositar(new Credito(200, new Date("2022/12/03")));
//4
contaJuninho.depositar(new Credito(200, new Date("2022/12/04")));
//5
contaJuninho.depositar(new Credito(200, new Date("2022/12/05")));
//6
contaJuninho.depositar(new Credito(200, new Date("2022/12/06")));
//7
contaJuninho.depositar(new Credito(200, new Date("2022/12/07")));
//8
contaJuninho.depositar(new Credito(200, new Date("2022/12/08")));
//9
contaJuninho.depositar(new Credito(200, new Date("2022/12/09")));
//10
contaJuninho.depositar(new Credito(200, new Date("2022/12/10")));
//11
contaJuninho.depositar(new Credito(200, new Date("2022/12/11")));
//12
contaJuninho.depositar(new Credito(200, new Date("2022/12/12")));
//13
contaJuninho.depositar(new Credito(200, new Date("2022/12/13")));
//14
contaJuninho.depositar(new Credito(200, new Date("2022/12/14")));
//15
contaJuninho.depositar(new Credito(200, new Date("2022/12/15")));
//16
contaJuninho.depositar(new Credito(200, new Date("2022/12/16")));
//17
contaJuninho.depositar(new Credito(200, new Date("2022/12/17")));
//18
contaJuninho.depositar(new Credito(200, new Date("2022/12/18")));
//19
contaJuninho.depositar(new Credito(200, new Date("2022/12/19")));
//20
contaJuninho.depositar(new Credito(200, new Date("2022/12/20")));
//21
contaJuninho.depositar(new Credito(200, new Date("2022/12/21")));
//22
contaJuninho.depositar(new Credito(200, new Date("2022/12/22")));
//23
contaJuninho.depositar(new Credito(200, new Date("2022/12/23")));
//24
contaJuninho.depositar(new Credito(200, new Date("2022/12/24")));
//25
contaJuninho.depositar(new Credito(200, new Date("2022/12/25")));
//26
contaJuninho.depositar(new Credito(200, new Date("2022/12/26")));
//27
contaJuninho.depositar(new Credito(200, new Date("2022/12/27")));
//29
contaJuninho.depositar(new Credito(200, new Date("2022/12/28")));
//28
contaJuninho.depositar(new Credito(200, new Date("2022/12/29")));
//30
contaJuninho.depositar(new Credito(200, new Date("2022/12/30")));
//31
contaJuninho.depositar(new Credito(200, new Date("2022/12/31")));

contaJuninho.calcularRendimento();

