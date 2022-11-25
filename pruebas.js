
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
  console.log(students)
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  
  const gender = ['female' , 'male']

  function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;}

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

addStudent(students)
  