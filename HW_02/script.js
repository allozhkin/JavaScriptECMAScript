"use strict";

// task 1

class Book {
  tittle = "Сила окружения";
  author = "Максим Фельдман";
  pages = 300;
  displayInfo() {
    console.log(`Название книги "${this.tittle}"
Автор кнги "${this.author}"
Количество страниц: ${this.pages}`);
  }
}
const newBook = new Book();
newBook.displayInfo();

// task 2

class Student {
  name = "";
  age = 0;
  grade = "";

  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}`);
  }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
