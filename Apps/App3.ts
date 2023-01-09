import { Cliente } from '../Classe_concreta/Cliente';
import {ContaCorrente} from '../Classe_concreta/ContaCorrente';
import { Credito } from '../Classe_concreta/Credito';
import { Debito } from '../Classe_concreta/Debito';
import { Endereco } from '../Classe_concreta/Endereco';

//Cliente - Roberto Carlos
const Roberto = new Cliente("Roberto Carlos",
                           "99988833311",
                           "96 99172 8212",
                           new Endereco("887712",
                                        "logradouro-1",
                                        "331","Casa azul",
                                        "São Paulo",
                                        "SP"),
                           true);

const contaRoberto = new ContaCorrente("1",new Debito(0),new Credito(0), 1000);

contaRoberto.depositar(new Credito(100));
contaRoberto.depositar(new Credito(100));
contaRoberto.depositar(new Credito(100));

contaRoberto.sacar(new Debito(0), contaRoberto.getLimite);

contaRoberto.calSaldo();
