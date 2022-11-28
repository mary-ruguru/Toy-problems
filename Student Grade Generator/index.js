// toy problem to solve student generator
//Write a function that prompts the user to input student marks

const maximumGrade = 100;
function gradeCalculator(){
  let grade = 0; //input the grade of the student

  //calculates the student grade
  const studentGrade = (grade / maximumGrade) *100
  if(studentGrade === 79){
    return ('A')
  }

  else if(studentGrade < 79 && studentGrade >= 60){
    return('B')
  }

  else if(studentGrade <= 59 && studentGrade >=49){
    return('C')
  }

  else if(studentGrade <= 49 && studentGrade >= 40){
    return('D')
  }
  
  else if(studentGrade < 40){
    return(E)
  }
}
console.log(gradeCalculator())
