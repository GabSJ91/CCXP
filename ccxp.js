const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const iniciar = "12 dec 2024"

function countDown(){
    const dataLan = new Date(iniciar)
    const hoje = new Date()

    const segTotal = (dataLan - hoje)/1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) %60;

    dias.innerHTML = finalDias
    horas.innerHTML = finalHoras
    minutos.innerHTML = finalMinutos
    segundos.innerHTML = finalSegundos
}

countDown();
setInterval(countDown, 1000)