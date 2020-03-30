/**
Calculo das batidas
O nosso coração bate uma média de 75 vezes por minuto aproximadamente. Sabemos que 1 hora tem 60 minutos. 
Com essa informação conseguimos descobrir quantas batidas por hora o coração dá.

Agora que sabemos as batidas por hora, conseguimos saber quantas batidas ele da por dia já que sabemos quantas horas tem o dia.

Com a informação da quantidade de batida que o coração da por dia, 
conseguimos calcular quantas batidas o coração da por ano já que sabemos quantos dias o ano tem. 
Agora é só calcular quanto o coração já bateu durante toda nossa vida.

Em breve aprenderemos como usar ferramentas, como o codepen, para poder trocar código entre nós.
*/

let form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let age = document.getElementById('age').value
    
    calc(age);
});


const calc = (age) => {
    let name = document.getElementById('name').value
    let teste = document.querySelector('p');
    let calc = ((((75*60)*24)*365)*age)
    
    teste.innerHTML = `Olá ${name}, seu coração bateu aproximadamente ${calc} vezes`; //Insert in first position
}
