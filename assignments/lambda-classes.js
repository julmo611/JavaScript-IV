// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
            this.name = attributes.name;
             this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instattributes) {
        super(instattributes);
            this.specialty = instattributes.specialty;
          this.favLanguage = instattributes.favLanguage;
           this.catchPhrase = instattributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${this.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor (studattributes) {
        super(studattributes);
        this.previousBackground = studattributes.previousBackground;
                this.className  = studattributes.className;
               this.favSubjects = studattributes.favSubjects;               
    }

    listsSubjects() {
        return `${this.favSubjects} `;
    }
    PRAssignment(subject) {
        return `${name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${name} has begun sprint challenge on ${subject}`
    }

}


class ProjectManager extends Person { 
    constructor(pmattributes) {
        super(pmattributes);
        this.gradClassName  = pmattributes.gradClassName;
        this.favInstructor  = pmattributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject,student) {
        return `${this.name} debugs ${name}'s code on ${subject}`;
    }
}


const david = new Person({
    name: 'David',
    location: 'New York',
    age: 20,
    gender: 'male',
  });
  
  const josh = new Instructor ({
    name: 'Josh-two',
    location: 'far Away',
    age: 34,
    gender: 'male',
    favLanguage: "JavaScript, Python, React",
    specialty: "Redux",
    catchPhrase: "yaba yaba doo",
 });
  
  const julian = new Student ({
    name: 'Julian',
    location: 'Orange County',
    age: 37,
    gender: 'male',
    previousBackground: "Web Designer",
    className: "WEB17",
    favSubjects: ["HTML", "CSS", "Javascript"],
  });
  
  const jake = new ProjectManager ({
    name: 'Jake-Two',
    location: 'Utha',
    age: 28,
    gender: 'male',
    gradClassName: "Lambda",
    favInstructor: "Instructor Josh",
  });


console.log(david.name);
console.log(david.speak());
console.log(david.age);
console.log(josh);
console.log(julian.listsSubjects());
console.log(julian);
console.log(jake.favInstructor);
console.log(julian.PRAssignment('Phyton'));
console.log(julian.sprintChallenge('React'));
console.log(jake);
console.log(jake.debugsCode('JAVASCRIPT IV'));
console.log(jake.standUp('web17_Jake'));
console.log(josh.demo('JavaScript IV'));
