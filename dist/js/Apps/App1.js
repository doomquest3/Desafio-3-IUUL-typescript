//Importes de outras classes
import { Cargo } from "../Classe_concreta/Cargo";
import { Funcionario } from "../Classe_concreta/Funcionario";
const Pablo = new Funcionario("Pablo", "99988877766", "97 12345-1234", new Cargo("Atendente"), 2750);
console.log(`Autenticação do funcionário ${Pablo.getNome}.`);
console.log(`A autenticação do funcionário é: ${Pablo.userInterface()}.`);
//FUNCIONÁRIO KÁTIA
const Katia = new Funcionario("Katia", "111222333444", "91 54321-6789", new Cargo("Gerente"), 7600);
console.log(`Autenticação do funcionário ${Katia.getNome}.`);
console.log(`A autenticação do funcionário é: ${Katia.userInterface()}.`);
