
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
    gender: 'male',
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
  let studentsTable = console.table(students);
  studentsTable
  
  /*DONE----------- 2- Mostrar por consola la cantidad de alumnos que hay en clase. */
  let totalStudents = students.length
  console.log(`Número total de alumnos: ${students.length}`);
  
  /*DONE------------ 3- Mostrar por consola todos los nombres de los alumnos.*/
  console.log('3. STUDENTS NAMES:')

  function showStudentsNames(students){
      for (var i=0; i < students.length; i++) {
        var student = students[i];
                console.log(student.name);
      }   
  }

  showStudentsNames(students)

  
  /*DONE------------4- Eliminar el último alumno de la clase.*/
  function eliminateLastStudent(students){
    students.pop()
    return console.log(students)
  }
  console.log('4:') 
  eliminateLastStudent(students)
  //console.log('4: nada')

  //function eliminateLastStudent(students)
  /*### 5- Eliminar un alumno aleatoriamente de la clase.*/
  console.log('5:')
  console.log('comprobacion:')+ console.log(students)
  function eliminateRandomeStudent(students){




  }
  
console.log('cuantos alumnos hay ahora')
  console.log(totalStudents)
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
  
  
  /*DONE--------------- 6- Mostrar por consola todos los datos de los alumnos que son chicas. CON UN FILTER*/
function showGirlsStudents(students){
    students = students.filter(students=> students.gender === "female");
    console.log ('6.Girls from the class:')
    return console.log(students)
}
showGirlsStudents(students)

  //let girlsStudents = students.filter(students=> students.gender === "female");
  //console.log('6: Girls from the class: ') + console.log(girlsStudents);
  

  /*DONE---------------------------### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.CON UN FILTER POR CHICOS Y CON UN FILTER POR CHICAS Y LA LONGITUD*/
  console.log('7:')
  function numberGirlsAndBoys(students){
  let girlsStudents = students.filter(students=> students.gender === "female")
  let numberGirls= girlsStudents.length
  let boysStudents = students.filter(students=> students.gender === "male")
  let numberBoys = boysStudents.length
 console.log (`Number of girls:${numberGirls}\nNumber of boys:${numberBoys}`)
  }

 numberGirlsAndBoys(students)

  
  
  /*DONE-------------------8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.BOOLEANO CHICAS*/
  console.log('8:')

  function isFemale(students){
    return students.gender === "female";
    //let result;
    //if (students.gender === "female"){
      //result = true;
    //} else{
      //result = false;
   // }
    
  }

 console.log (isFemale(students))

  /*DONE------------------ 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.FILTER EDAD CON UN IF */

    let studentsBetween20and25 = students.filter( students => (students.age >= 20 && students.age <=25 )); 
    console.log("The students between 20 and 25 years old are:") + showStudentsNames(studentsBetween20and25)



  
  /*### 10- Añadir un alumno nuevo con los siguientes datos:
    - nombre aleatorio.
    - edad aleatoria entre 20 y 50 años.
    - género aleatorio.
    - listado de calificaciones vacío.
  

  ¡OJO!, el nombre y el género tienen que ir acordes.*/
  console.log('10:')
  function addStudent(){
    student = []
 


    
  
  }
  
  /*### 11- Mostrar por consola el nombre de la persona más joven de la clase.
  ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.*/

  //comparar las edades 
//devolver la edad más baja


  console.log('11:')
  //function showYoungerStudent(students)
  
  /*### 12- Mostrar por consola la edad media de todos los alumnos de la clase.*/
  //console.log('12:')
  

  function mediumAgeStudents(students) {
    let totalAges = 0 
    students.map(({age}) => totalAges+=age)
    console.log ( students)
    let mediumAges =  (totalAges / totalStudents)
    console.log('12')
    console.log(students)
    console.log (totalStudents)
    console.log (mediumAges)
    console.log (totalAges)
   // var agesStudents = []
    //for (var i=0; i < students.length; i++) 
      //var student = students[i];
              //agesStudents += (student.age);
      //return console.log (agesStudents);
  }

  mediumAgeStudents(students)

  //creamos una funcion que suma las edades de todos los alumnos
    // hacemos una lista con las edades
    // hacemos la mediana de esa lista
    //imprimimos la mediana
  
  /*### 13- Mostrar por consola la edad media de las chicas de la clase.*/
  //Desde la funcion de las chicas de clase filtramos las edades
    // hacemos la mediana de las edades
    console.log('13:')
  /*### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.*/
  //crear funcion que añada nota random
    //calcular la nota random entre 0 y 10 
    //añadir la 

    function calculateRandomNumber(min, max) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
  }

    console.log('14:')
  /*### 15- Ordenar el array de alumnos alfabéticamente según su nombre.*/
  
  let studentsAlfabetic = students.sort(name)

  console.log('15:') 
  console.log(studentsAlfabetic)