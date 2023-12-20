"use strict";

// task 1

class Employee {
  name = "";
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(this.name);
  }
}

class Manager extends Employee {
  department = "";
  constructor(name, department) {
    super();
    this.name = name;
    this.department = department;
  }
  displayInfo() {
    console.log(`Name: ${this.name},
Department: ${this.department}`);
  }
}
const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// task 2

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
    this.totalPrise = 0;
  }

  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    for (let value in this.products) {
      this.totalPrise += this.products[value].price;
    }
    return this.totalPrise;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600
