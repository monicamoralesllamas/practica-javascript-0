import readline from 'readline';
//GUARDAMOS A VER SI ASI SALEN CAMBIOS (PROBLOEMAS)
//cambios
// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});


const requiriments = ('1-Mostrar en formato de tabla todos los alumnos.\n2- Mostrar por consola la cantidad de alumnos que hay en clase.\n3- Mostrar por consola todos los nombres de los alumnos.\n4- Eliminar el último alumno de la clase.\n5- Eliminar un alumno aleatoriamente de la clase. \n6- Mostrar por consola todos los datos de los alumnos que son chicas.\n7- Mostrar por consola el número de chicos y chicas que hay en la clase. \n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas. \n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n10- Añadir un alumno nuevo. \n11- Mostrar por consola el nombre de la persona más joven de la clase.\n12- Mostrar por consola la edad media de todos los alumnos de la clase.\n13- Mostrar por consola la edad media de las chicas de la clase.\n14- Añadir nueva nota a los alumnos.\n15- Ordenar el array de alumnos alfabéticamente según su nombre.')

const isInt = (str) => {
  const integer = parseInt(str);
  if (Number.isNaN(integer)) {
    return false;
  } else {
    return true;
  }
};

///// PROMESA PARA SOLICITAR EL NÚMERO 
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question(`Introduce the number of the requiriment that you wnat to realice between:\n${requiriments}: `, (num) => {
            rl.pause();
            if (isInt(num)) {
              num = Number.parseInt(num);
              resolve(num);
            } else {
              reject("You have to introduce a number!");
            }
          });
        });
    return promise;
}
async function askRequirement() {

  let numberFromConsole;
//SWITCH CON REQUERIMIENTOS
  do {
    try {
        numberFromConsole = await getNumberFromConsole();
    {  switch(numberFromConsole) {
    case 1:
      showStudentsTable(students)
      break;
    case 2:
      showTotalStudents(students)
      break;
    case 3:
      showStudentsNames(students)
        break;
    case 4:
      eliminateLastStudent(students)
      break;
    case 5:
      eliminateRandomeStudent(students)
      break;
    case 6:
        showGirlsStudents(students)
        break;
    case 7:
      numberGirlsAndBoys(students)
      break;
    case 8:
      printIsFemale(students)
      break; 
    case 9:
      showNamesStudentesBetween20and25(students)
      break;
    case 10:
      addStudent(students)
      break;
    case 11:
      showYoungerStudent(students)
      break;
    case 12:
      mediumAgeStudents(students)
      break;
    case 13:
      mediumAgeGirls(students)
      break;
    case 14:
      addMark(students)
      break;
    case 15:
      ordenateStudentsAlfabetic(students)
      break;
    }
      }
    } catch (error) {
      console.log(error);
      process.exit(0);
    }

    if (numberFromConsole === 0  ) {
      rl.close();
      console.log("Thanks for using this programm. BYE!");
    }

  } while (numberFromConsole >=1 && numberFromConsole<=15 ); // condiciones de continuar jugando
}

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  
///llamamos a la función
askRequirement()

/////////FUNCIONES PARA LOS REQUERIMIENTOS 
 
  
  /*DONE----------- 1- Mostrar en formato de tabla todos los alumnos. */
  function showStudentsTable() {
    console.table ('1:')
    console.table(students)
   } 

  /*DONE----------- 2- Mostrar por consola la cantidad de alumnos que hay en clase. */
  let totalStudents = students.length
  function showTotalStudents(){
  console.log(`2. Número total de alumnos: ${students.length}`);
  }
  
  /*DONE------------ 3- Mostrar por consola todos los nombres de los alumnos.*/
  function showStudentsNames(students){
    console.log('3.Names from the class:')
      for (var i=0; i < students.length; i++) {
        var student = students[i];
                console.log(student.name);
      }   
  }

  /*DONE------------4- Eliminar el último alumno de la clase.*/
  function eliminateLastStudent(students){
    students.pop()
    console.log('4.Lista tras eliminar último alumno:')
    showStudentsTable()
  }
 
  /*DONE--------------- 5- Eliminar un alumno aleatoriamente de la clase.*/
  //función para calcular número random
  function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;}
  //funcion para eliminar alumno
  function eliminateRandomeStudent(students){
    let randomposition = calculateRandomNumber(0,(totalStudents-1));
    students.splice(randomposition,1);
    console.table(students)
  }
  
 
  /*DONE--------------- 6- Mostrar por consola todos los datos de los alumnos que son chicas. CON UN FILTER*/
function showGirlsStudents(students){
    students = students.filter(students=> students.gender === "female");
    console.log ('6.Girls from the class:')
    return console.log(students)
}

  /*DONE------------------7- Mostrar por consola el número de chicos y chicas que hay en la clase.CON UN FILTER POR CHICOS Y CON UN FILTER POR CHICAS Y LA LONGITUD*/ 
  function numberGirlsAndBoys(students){
  let girlsStudents = students.filter(students=> students.gender === "female")
  let numberGirls= girlsStudents.length
  let boysStudents = students.filter(students=> students.gender === "male")
  let numberBoys = boysStudents.length
 console.log (`7.Number of girls:${numberGirls}\nNumber of boys:${numberBoys}`)
  }
  
  /*DONE-----------------8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.BOOLEANO CHICAS*/

  function isFemale(students){
    return students.gender === 'female'
  }

  function printIsFemale(){
    console.log ('All students are girls:')
    console.log(students.every(isFemale))
  }

  /*DONE------------------ 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.FILTER EDAD CON UN IF */   
  function showNamesStudentesBetween20and25(students) {
    students = students.filter( students => (students.age >= 20 && students.age <=25 )); 
    console.log("The students between 20 and 25 years old are:")
    for (var i=0; i < students.length; i++) {
      var student = students[i];
              console.log(student.name);
  }}
 
  /*DONE------------------10- Añadir un alumno nuevo con datos aleatorios.*/ 
  function addStudent(students){
    let randomName;
    let randomAge = calculateRandomNumber(20,50)
    let randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];{
      if (randomGender === "female"){
      randomName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)]}
      else {  randomName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];}
    let newstudent = {age: randomAge , examScores: [], gender: randomGender, name: randomName }
    students.push(newstudent)
      }
      console.log(students)
  }

  /*DONE------------------11- Mostrar por consola el nombre de la persona más joven de la clase.
  ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.*/

  function showYoungerStudent(students){
    let minAge;
    minAge = Math.min(...students.map(students=>parseInt(students.age)))
    console.log(minAge)
    students = students.filter( students => (students.age === minAge ));
    console.log("The younger student:")
    for (var i=0; i < students.length; i++) {
      var student = students[i];
              console.log(student.name);
  }
  }

  /*DONE------------------ 12- Mostrar por consola la edad media de todos los alumnos de la clase.*/
  function mediumAgeStudents(students) {
    let totalAges = 0 
    students.map(({age}) => totalAges+=age)
    let mediumAges =  (totalAges / students.length)
    console.log('12.La media de edad de los estudiantes es de: ')   
    console.log (mediumAges)
  }
  
  /*DONE------------------ 13- Mostrar por consola la edad media de las chicas de la clase.*/
  function mediumAgeGirls(students){
    students = students.filter(students=> students.gender === "female")
    let ageGirls = 0
    students.map(({age}) => ageGirls+=age)
    let mediumGirls = (ageGirls / students.length)
    console.log ('13.La edad media de las chicas de clase es de:')
    console.log(mediumGirls)
    console.log(students)
  }

  /*### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.*/
  function addMark(students){
    let newMark;
    for (var i=0; i < students.length; i++) {
      var student = students[i];
          newMark = calculateRandomNumber(0,10)
          student.examScores.push(newMark)
          console.log(student)
  }
}
   
  /*### 15- Ordenar el array de alumnos alfabéticamente según su nombre.*/
function ordenateStudentsAlfabetic(students){
  students.sort ((a,b) => {
    if (a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  });
  console.log(students)
}

