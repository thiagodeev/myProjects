import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Teste', 't@t', '11/11/1111');

console.log(novoUser.exibirInfos())