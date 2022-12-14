import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Teste', 't@t', '11/11/1111');

const novoAdmin = new Admin('Thia', 'ad@min', '23/12/2000');
console.log(novoAdmin.nome)
novoAdmin.nome = 'Jão Dória';
console.log(novoAdmin.nome)