export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  #montaObjUser(){
    return ({
      nome: this.#nome,
      nascimento: this.#nascimento,
      email: this.#email,
      role: this.#role,
      ativo: this.#ativo
    })
  }

  exibirInfos(){
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.nascimento}, ${objUser.email}, ${objUser.role}, ${objUser.ativo}`;
  }
}