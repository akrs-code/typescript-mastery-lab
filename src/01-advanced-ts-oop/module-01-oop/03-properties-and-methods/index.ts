/**
 * Demonstrates static properties and methods in TypeScript classes.
 */
class Student {
    // Static properties shared across all instances
    static schoolName: string = "Greenwood High";
    static count: number = 0;
    
    name: string;
    private _grade: number;

    constructor(name: string, grade: number) {
        this._grade = grade;
        this.name = name;
        // Increment the total student count on every instantiation
        Student.count++;
    }

    set grade(newGrade: number) {
        if (newGrade >= 0 && newGrade <= 100) {
            this._grade = newGrade;
        }
    }

    get grade(): number {
        return this._grade;
    }

    displayInfo(): string {
        return `Student name: ${this.name} | Grade: ${this._grade}`;
    }

    /**
     * Changes the static school name for all students.
     */
    static changeSchool(newName: string): void {
        this.schoolName = newName;
    }

    /**
     * Returns the total number of student instances created.
     */
    static totalStudents(): number {
       return Student.count;
    }
}

let student1 = new Student("Alice", 90);
let student2 = new Student("Mark", 80);

console.log(student1.displayInfo(), " | School:", Student.schoolName);

student1.grade = 100;
// Modify the static property via a static method
Student.changeSchool("Milton Academy");

console.log(student1.displayInfo(), " | School:", Student.schoolName);
console.log(student2.displayInfo(), " | School:", Student.schoolName);

console.log("Number of Students: ", Student.totalStudents());