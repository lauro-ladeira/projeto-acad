
class View {

    constructor(element){
        this._element = element;
    }
    
    update(registro) {
        
        const div = document.createElement('div');

        div.innerHTML = `            
        <table class="table table-hover table-dark table-sm">
            <thead>
                <tr>
                    <th colspan="3">${registro.exercicio}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1.</th>
                    <td>${registro.carga} kg</td>
                    <td>${registro.reps} reps</td>
                </tr>
                <tr>
                    <th scope="row">2.</th>
                    <td>${registro.carga} kg</td>
                    <td>${registro.reps} reps</td>
                </tr>
                <tr>
                    <th scope="row">3.</th>
                    <td>${registro.carga} kg</td>
                    <td>${registro.reps} reps</td>
                </tr>
            </tbody>
        </table>`;
        this._element.appendChild(div);

    }

}