class School {
    constructor(name, level, numberOfStudent){
      this._name = name;
      this._level = level;
      this._numberOfStudent = numberOfStudent;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
  
    set numberOfStudent(input){
      if(input.isNaN()){
        this._numberOfStudent = input;
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
   quickFacts(){
      console.log(`${this.name} educates ${this._numberOfStudent} students at the ${this.level} school level.`);
    }
  
  static pickSubstituteTeacher(substituteTeachers){
    const randomInt = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randomInt];
  }
  
  }
  
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudent, pickUpPolicy){
      super(name, 'Primary', numberOfStudent );
      this._pickUpPolicy = pickUpPolicy;
    }
  
    get pickUpPolicy(){
      return this.pickUpPolicy;
    }
  }
  
  class HighSchool extends School{
    constructor(name,numberOfStudent, sportsTeams){
      super(name, 'HighSchool', numberOfStudent);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
  
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514 , 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  console.log(lorraineHansbury);
  
  lorraineHansbury.quickFacts();
  
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(sub)
  
  
  // High school Instance
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  alSmith.sportsTeams;
  
  
  
  