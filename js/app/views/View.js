
class View {

    constructor(element){
        this._element = element;
    }
    
    update(registro) {
        
        const div = document.createElement('div');

/*         div.innerHTML = `            
        <table class="table table-hover table-dark table-sm">
            <thead>
                <tr>
                    <th colspan="3">${registro.exercicio}</th>
                </tr>
            </thead>
            <tbody>
                ${(function() {
                    let tableRows = "";
                    for(let i = 1; i <= registro.series; i++) {
                        tableRows += `
                        <tr>
                            <th scope="row">${i}.</th>
                            <td>${registro.carga} kg</td>
                            <td>${registro.reps} reps</td>
                        </tr>`
                    }
                    return tableRows;
                })() }
            </tbody>
        </table>`; */
        div.innerHTML = `            
        <table class="table table-hover table-dark table-sm">
            <thead>
                <tr>
                    <th colspan="3">${registro.exercicio}</th>
                </tr>
            </thead>
            <tbody>
                ${registro.arrCargas.map((el,index) => `

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