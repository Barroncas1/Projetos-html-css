let students = [
    {
        name: 'Gabriel',
        nota1: 10,
        nota2: 8,
    },
    {
        name: 'Julia',
        nota1: 8,
        nota2: 3,
    },
    {
        name: 'Robson',
        nota1: 7,
        nota2: 9,
    },
]

function averege(students) {
    let avg = 0
    for (let student of students){
        avg = (student.nota1 + student.nota2)/2
        avg = avg.toFixed(1)

        if (avg >= 7) {
            alert(` A média do(a) aluno(a) ${student.name} é: ${avg} \nParabéns ${student.name}! Você foi aprovado no concurso`)
        } else {
            alert(` A média do(a) aluno(a) ${student.name} é: ${avg} \nNão foi dessa vez, ${student.name}! Tente novamente!`)
        }
    } 
}

averege(students)