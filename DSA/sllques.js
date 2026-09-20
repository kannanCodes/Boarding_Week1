// SLL — Employee Object Linked List :

const employee1 = {
     id: 101,
     name: "Arun",
     salary: 50000
};

const employee2 = {
     id: 102,
     name: "Rahul",
     salary: 70000
};

const employee3 = {
     id: 103,
     name: "Vishnu",
     salary: 60000
};


class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}

class Sll {
     constructor() {
          this.head = null;
          this.length = 0;
     }
     insert(value) {
          let newNode = new Node(value);

          if (!this.head) {
               this.head = newNode;
               this.length++;
               return;
          }

          let current = this.head;

          while (current.next) {
               current = current.next;
          }
          current.next = newNode;
          this.length++
     }
     findEmployeebyId(id) {
          let current = this.head;

          while (current) {
               if (current.data.id === id) {
                    return current.data
               }
               current = current.next;
          }
          return null;
     }
     sortBySalary() {
          for (let i = 0; i < this.length - 1; i++) {
               let current = this.head;

               for (let j = 0; j < this.length - i - 1; j++) {
                    if (current.data.salary > current.next.data.salary) {
                         const temp = current.data;

                         current.data = current.next.data;

                         current.next.data = temp;
                    }
                    current = current.next;
               }
               
          }
     }
     print(){
          let current = this.head;

          while (current){
               console.log(current.data);
               current = current.next;
          }
     }
}

const sll = new Sll();
sll.insert(employee1);
sll.insert(employee2);
sll.insert(employee3);

sll.sortBySalary()
sll.print()