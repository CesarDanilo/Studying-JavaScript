
function envioForm(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function enviandoEvento(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value, sobrenome: sobrenome.value, peso: peso.value , altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += 
            `<p>${nome.value}</p>` +  
            `<p>${sobrenome.value}</p>` +
            `<p>${peso.value}</p>` +
            `<p>${altura.value}</p>`;     
        
        console.table(pessoas)
    }   
        
    form.addEventListener('submit', enviandoEvento);
}

envioForm();
