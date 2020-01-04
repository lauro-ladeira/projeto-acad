class validacaoHelper {

  constructor() {
    this._erros = [];
  }

  validaFormulario(exercicio, serie, rep, carga) {
    if (exercicio.length === 0 || serie.length === 0 || rep.length === 0 || carga.length === 0) {
      this._erros.push('Verifique o Formulario existem campos em branco')
    } else if (!exercicio.match(/^[A-Za-z]+$/)) {
      this._erros.push('O campo exercício não pode conter números')
    }
  }

  get mensagemErro() {
    return this._erros
  }

  zeraMensagemErro() {
    this._erros = []
  }

}



