class RegistroController {

    constructor() {
        const $ = document.querySelector.bind(document)
        
        this._inputExercicio = $('#input-exercicio');
        this._inputSeries = $('#input-series');
        this._inputReps = $('#input-reps');
        this._inputCarga = $('#input-carga');
        
        this._listaRegistros = new ListaRegistros();
        this._registrosView = new View($('#registros-view'));

       
    }
    
    adiciona(event) {

        event.preventDefault();
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