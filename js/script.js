const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const data = document.getElementById('data')

const tempo = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()
    let day = dateToday.getDate()
    let month = dateToday.getMonth() + 1
    let year = dateToday.getFullYear()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(seg < 10) seg = '0' + seg
    if(day < 10) day = '0' + day
    if(month < 10) month = '0' + month
 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = day + "/" + month + "/" + year;
})



