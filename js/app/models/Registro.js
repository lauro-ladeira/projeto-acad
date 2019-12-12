class Registro {

    constructor(exercicio, series, reps, carga, id) {

        this._exercicio = exercicio;
        this._series = series;
        this._reps = reps;
        this._carga = carga;
        this._id = id;
        this._arrCargas = [];

        for(let i = 0; i < this._series; i++) {
            this._arrCargas.push(parseInt(this._carga));
        }
        Object.freeze(this); //serve p/lidar com as atribuições aos underline ex. obj._age = 23;
    }

    get exercicio() {
        return this._exercicio;
    }

    get series() {
        return this._series;
    }

    get reps() {
        return this._reps;
    }

    get carga() {
        return this._carga;
    }

    get id() {
        return this._id;
    }

    get arrCargas() {
        return this._arrCargas;
    }
}
