const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName,);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    for (const teacher of teachers) {
      sum += Number(teacher.yearsOfExperience);
    }
    return sum;
  }

}

//Examples:

// const reb = new Teacher ('Reb', "Tevya", '41', 'English', '12' )
// const emma = new Teacher ('Emma', "Foyer", '34', 'Parapsychology', '6' )
// const dan = new Teacher ('Dan', "Foyer", '35', 'Film', '8' )
// let teachers = [reb, emma, dan]

// console.log(Teacher.combinedYearsOfExperience(teachers));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}