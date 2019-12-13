
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
                    <th colspan="2">${registro.exercicio}</th>
                    <td>
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </td>
                </tr>
            </thead>
            <tbody>
                ${registro.cargas.map((el,index) => `

                        <tr>
                            <th scope="row">${index + 1}.</th>
                            <td>${el} kg</td>
                            <td>${registro.reps} reps</td>
                        </tr>

                    `).join('')}     
            </tbody>
        </table>`;

        this._element.appendChild(div);

    }

}