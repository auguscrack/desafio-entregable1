let nota;

let total=0;

let cantidadDeNotas = parseInt(prompt("Ingrese cantidad de notas"))

for(let i=1;i<=cantidadDeNotas;i++){

    nota = parseFloat(prompt(`Por favor ingrese su nota N°${i}`))

    total += nota;

}

console.log(total)

function notasAlumno(total) {

    let promedio = total / cantidadDeNotas

    return promedio

}   

if(isNaN(total)){

    alert ("No está ingresando una nota correcta, intente nuevamente")

}else{

    console.log (`Ingresaste ${cantidadDeNotas} notas. El promedio de nota del alumno es ${notasAlumno(total)} anual.`)

}