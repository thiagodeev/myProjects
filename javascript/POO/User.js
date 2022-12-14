export default class User {
  #nome;
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nomeCompleto, email, nascimento, role, ativo = true) {
    let [nome, ...sobrenome] = nomeCompleto.split(' ');
    sobrenome = sobrenome.join(' ');

    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome(){
    if(this.#sobrenome !== ''){
      return this.#nome + ' ' + this.#sobrenome;
    } else {
      return this.#nome;
    }
  }

  get sobrenome(){
    return this.#sobrenome
  }

  get email(){
    return this.#email
  }

  get nascimento(){
    return this.#nascimento
  }

  get role(){
    return this.#role
  }

  get ativo(){
    return this.#ativo
  }

  set nome(novoNome){
    if(novoNome === ''){
      throw new Error('Formato inválido.')
    }
    let [nome, ...sobrenome] = novoNome.split(' ');
    sobrenome = sobrenome.join(' ');
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  }

  set email(novoEmail){
    this.#email = novoEmail
  }

  set nascimento(novoNascimento){
    this.#nascimento = novoNascimento
  }

  set role(novaRole){
    this.#role = novaRole
  }

  set ativo(novoAtivo){
    this.#ativo = novoAtivo
  }

  exibirInfos(){
    return `${this.nome}, ${this.nascimento}, ${this.email}, ${this.role}, ${this.ativo}`;
  }
}