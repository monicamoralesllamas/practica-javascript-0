
  const students = [
    {
        age: 20,
        examScores: [],
        gender: 'female',
        name: 'zaida'
      },    
    {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'edu'
  },
  {
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'laura'
  },
  {
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'elisabet'
  }]
  
  
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
  function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;}
  // 

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

  /*DONE------------------### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.CON UN FILTER POR CHICOS Y CON UN FILTER POR CHICAS Y LA LONGITUD*/ 
  function numberGirlsAndBoys(students){
  let girlsStudents = students.filter(students=> students.gender === "female")
  let numberGirls= girlsStudents.length
  let boysStudents = students.filter(students=> students.gender === "male")
  let numberBoys = boysStudents.length
 console.log (`7.Number of girls:${numberGirls}\nNumber of boys:${numberBoys}`)
  }
  
  /*8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.BOOLEANO CHICAS*/
  console.log('8:')

  function isFemale(students){
    let result;

    if (students.gender === "female"){
      result = true;
    } else {
      result = false;
    }
    console.log (result)
  }

  isFemale(students)


    
  
    //let result;
    //if (students.gender === "female"){
      //result = true;
    //} else{
      //result = false;
   // }
    
  

 

  /*DONE------------------ 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.FILTER EDAD CON UN IF */   
  function showNamesStudentesBetween20and25(students) {
    students = students.filter( students => (students.age >= 20 && students.age <=25 )); 
    console.log("The students between 20 and 25 years old are:")
    for (var i=0; i < students.length; i++) {
      var student = students[i];
              console.log(student.name);
  }}



  
  /*DONE------------------10- Añadir un alumno nuevo con los siguientes datos:
    - nombre aleatorio.
    - edad aleatoria entre 20 y 50 años.
    - género aleatorio.
    - listado de calificaciones vacío.
  ¡OJO!, el nombre y el género tienen que ir acordes.*/ 
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

  /*### 11- Mostrar por consola el nombre de la persona más joven de la clase.
  ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.*/

  function showYoungerStudent(students){


  }
  //comparar las edades 
//devolver la edad más baja



  //function showYoungerStudent(students)
  
  /*DONE------------------ 12- Mostrar por consola la edad media de todos los alumnos de la clase.*/
  function mediumAgeStudents(students) {
    let totalAges = 0 
    students.map(({age}) => totalAges+=age)
    console.log ( students)
    let mediumAges =  (totalAges / totalStudents)
    console.log('12.La media de edad de los estudiantes es de: ')   
    console.log (mediumAges)
    
   // var agesStudents = []
    //for (var i=0; i < students.length; i++) 
      //var student = students[i];
              //agesStudents += (student.age);
      //return console.log (agesStudents);
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
  //crear funcion que añada nota random
    //calcular la nota random entre 0 y 10 
    //añadir la 

    //function calculateRandomNumber(min, max) {
      //const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      //return randomNumber;
 

    console.log('14:')
  /*### 15- Ordenar el array de alumnos alfabéticamente según su nombre.*/
  
  let studentsAlfabetic = students.sort(name)

  console.log('15:') 
  console.log(studentsAlfabetic)