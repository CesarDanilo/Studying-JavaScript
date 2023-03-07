// BUTTONS 
const btnIniciar = document.querySelector('.btniniciar');
const btnPausar = document.querySelector('.btnpausar');
const btnResetar = document.querySelector('.btnresetar');
const pTimer = document.querySelector('.timer');
let segundos = 0;
let timers;

//Primeiro vamos crirar a função que vai retornar nosso cronometro formatado
//Nele vamos passar um parametro que vai receber os segundos
function cronometro(segundos) {
	const temp = new Date(segundos * 1000); // dividindo por 1000 para transformar em milesimos
	return temp.toLocaleTimeString('pt-br', { // toLocaleTimeString vai formatar a nosso cronometro como horio
		hour12: false,
		timeZone: 'UTC' // vai mudar para o meu timezone
	});
}

btnIniciar.addEventListener('click', function (event){
	clearInterval(timers); // passando esse comando, se clicarmos mais vezes em iniciar não irar acelerar o tempo do cronometro, ele vai apenas trazar e continuar normalmente
	timers = setInterval(function(){
		segundos++;
		pTimer.innerHTML = cronometro(segundos);
	}, 1000);
});

btnPausar.addEventListener('click', function (event){
	clearInterval(timers); // clearInterval vai parar qualquer função de repetição que receba o setInterval()
});

btnResetar.addEventListener('click', function(event){
	segundos = 0;
	pTimer.innerHTML = cronometro(segundos);
});
