import { Cliente } from "../Classe_concreta/Cliente";
import { Endereco } from "../Classe_concreta/Endereco";


const Jurema = new Cliente("Jurema",
                           "99988833311",
                           "96 99172 8212",
                           new Endereco("887712",
                                        "logradouro-1",
                                        "331","Casa azul",
                                        "São Paulo",
                                        "SP"),
                           true);


Jurema.addEndereco(new Endereco("331122","logradouro-2","122","Casa Verde","São Paulo","SP"));

Jurema.addEndereco(new Endereco("446655","logradouro-3","488","Casa Vermelho","São Paulo","SP"));

Jurema.listarEndereco();

