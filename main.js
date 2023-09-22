function submit() {
    var mostrarArrayEstudantes = [];

    for (var j = 1; j <= 4; j++) {

        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log (nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);

    }

    console.log (nameOfTheStudentArray);

    var tamanhoDaListaDeEstudantes = nameOfTheStudentArray.length;
    console.log (tamanhoDaListaDeEstudantes);
    
    for (var k = 0; k < tamanhoDaListaDeEstudantes; k++) {

        mostrarArrayEstudantes.push("<h4> -" + nameOfTheStudentArray[k] + "</h4>")
        console.log (mostrarArrayEstudantes)
    };

    console.log (mostrarArrayEstudantes);
    document.getElementById("displayNameWithCommas").innerHTML = mostrarArrayEstudantes;

    var removeCommas = mostrarArrayEstudantes.join("");
    console.log (removeCommas);
    document.getElementById("displayNameWithCommas").innerHTML = removeCommas;

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

    
}

function sorting() {
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) {
        displayStudentArraySorting.push("<h4>NOME - " + nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}