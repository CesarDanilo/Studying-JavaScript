
function calcular(){
    const form = document.querySelector('.form');

    function caulculaIMC(event){
        event.preventDefault();
        
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultado = (parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)));
        
        if(resultado < 18.5){
            window.alert('MAGRESA');
        }else if(resultado >= 18.5 && resultado <= 24.9){
            window.alert('NORMAL');
        }else if(resultado >= 25.0 && resultado <= 29.9){
            window.alert('SOBREPESO');
        }else if(resultado >= 30.0 && resultado <= 39.9){
            window.alert('OBESIDADE');
        }else if(resultado > 40.0){
            window.alert('OBESIDADE GRAVE');
        }

        console.log(resultado);
    }

    form.addEventListener('submit', caulculaIMC);
};

calcular();