class Registro {

    constructor(exercicio, series, reps, carga, id) {

        this._exercicio = exercicio;
        this._series = series;
        this._reps = reps;
        this._cargas = [];
        this._id = id;

        for (let i = 0; i < this._series; i++) {
            this._cargas.push(parseInt(carga));
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

    get cargas() {
        return this._cargas;
    }

    get id() {
        return this._id;
    }
}
