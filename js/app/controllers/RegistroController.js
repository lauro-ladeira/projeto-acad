class RegistroController {

    constructor() {
        
        const $ = document.querySelector.bind(document)

        this._inputExercicio = $('#input-exercicio');
        this._inputSeries = $('#input-series');
        this._inputReps = $('#input-reps');
        this._inputCarga = $('#input-carga');

        this._listaRegistros = new ListaRegistros();
        this._registrosView = new View($('#registros-view'));
        this._validacaoHelper = new validacaoHelper();

    }

    adiciona(event) {

        event.preventDefault();

        //isso aqui ta validando o formulario
        this._validacaoHelper.validaFormulario(
            this._inputExercicio.value,
            this._inputSeries.value,
            this._inputReps.value, 
            this._inputCarga.value
        )
        //aqui vc coloca o span
            

        //esse zerar mensagem zera o array com as msg de erro
        this._validacaoHelper.zeraMensagemErro();

        const registro = this._criaRegistro();

        this._listaRegistros.adiciona(registro);

        this._registrosView.update(registro);

        this._limpaFormulário();
    }

    _criaRegistro() {

        const id = IdHelper.getId(this._listaRegistros.registros);

        return new Registro(
            this._inputExercicio.value,
            this._inputSeries.value,
            this._inputReps.value,
            this._inputCarga.value,
            id
        );
    }

    _limpaFormulário() {

        this._inputExercicio.value = '';
        this._inputSeries.value = '';
        this._inputReps.value = '';
        this._inputCarga.value = '';
        this._inputExercicio.focus();
    }
}