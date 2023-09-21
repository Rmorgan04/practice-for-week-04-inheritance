const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(st1, st2) {
    if (st1.GPA < st2.GPA) {
      return st2.firstName + ' ' + st2.lastName + ' has the higher GPA.'
      
    }
    else if (st1.GPA > st2.GPA) {
      return st1.firstName + " " + st1.lastName + " has the higher GPA."
    }
    else {
      return "Both students have the same GPA";
    }
  }

}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}