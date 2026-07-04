/**
 * Demonstrates the use of getters and setters for encapsulation in TypeScript.
 */
class Student {
    name: string;
    // Private property to encapsulate the grade
    private _grade: number;

    /**
     * Initializes a new Student instance.
     * @param name - The name of the student.
     * @param grade - The initial grade.
     */
    constructor(name: string, grade: number) {
        this._grade = grade;
        this.name = name;
    }

    /**
     * Sets the student's grade, ensuring it is between 0 and 100.
     */
    set grade(newGrade: number) {
        if (newGrade >= 0 && newGrade <= 100) {
            this._grade = newGrade;
        }
    }

    /**
     * Gets the student's current grade.
     */
    get grade(): number {
        return this._grade;
    }
    
    /**
     * Returns a formatted string displaying the student's information.
     */
    displayInfo(): string {
        return `Student name: ${this.name} | Grade: ${this._grade}`;
    }
}

// Create a new Student instance
let student1 = new Student("Alice", 90);

console.log(student1.displayInfo());

// Update grade using setter
student1.grade = 100;

console.log(student1.displayInfo());