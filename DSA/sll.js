class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}

class Sll {
     constructor() {
          this.head = null;
     }
     // Insert a new node at the beginning of the list
     insertAtFront(value) {
          let newNode = new Node(value);
          newNode.next = this.head;
          this.head = newNode;
     }
     // Print all elements in the list
     print() {
          let current = this.head;
          let arr = []


          while (current) {
               arr.push(current.data);
               current = current.next;
          }
          console.log(arr.join('->'))
     }
     // Insert a new node at the end of the list
     insertAtBack(value) {
          let newNode = new Node(value);
          if (!this.head) {
               this.head = newNode;
               return;
          }


          let current = this.head;


          while (current.next) {
               current = current.next;
          }
          current.next = newNode;
          return;
     }
     // Remove the first node from the list
     deleteAtFront() {
          if (!this.head) {
               return;
          }
          this.head = this.head.next;
     }
     // Remove the last node from the list
     deleteAtBack() {


          if (!this.head) {
               return;
          }
          if (!this.head.next) {
               this.head = null;
               return;
          }
          let current = this.head;


          while (current.next.next) {
               current = current.next;
          }

          current.next = null;
     }
     // Insert a new node at a specific position (0-indexed)
     insertAtPos(pos, value) {
          const newNode = new Node(value);
          if (pos === 0) {
               newNode.next = this.head;
               this.head = newNode;
               return;
          }


          let current = this.head;


          for (let i = 0; i < pos - 1; i++) {
               if (current.next) {
                    current = current.next
               }
          }
          if (!current) {
               return;
          }
          newNode.next = current.next;
          current.next = newNode;
     }
     // Reverse the linked list in place
     reverseList() {
          let current = this.head;
          let previous = null;

          while (current) {
               let next = current.next;
               current.next = previous;
               previous = current;
               current = next;

          }
          this.head = previous;
     }
     // hasCycle(){
     //      let current = this.head;
     //      let visited = new Set();

     //      while (current){
     //           if (visited.has(current)){
     //                return true;
     //           }
     //           visited.add(current);
     //           current = current.next;
     //      }
     //      return false;
     // }
     // Detect if there is a cycle in the linked list using slow and fast pointers
     hasCycle(){
          let slow = this.head;
          let fast = this.head;

          while (fast && fast.next){
               slow = slow.next;
               fast = fast.next.next;

               if (slow === fast){
                    return true;
               }
          }
          return false;
     }
     // Find the node where the cycle begins
     startNodeOfCycle(){
          let slow = this.head;
          let fast = this.head;

          while( fast && fast.next){
               slow = slow.next;
               fast = fast.next.next;

               if (slow === fast){

                    let pointer = this.head;

                    while (pointer !== slow){
                         pointer = pointer.next;
                         slow = slow.next;
                    }
                    return pointer;
               }
          }
          return null;
     }
     // Rotate the linked list to the right by k places
     rotateRight(k){
          if ( !this.head || !this.head.next || k === 0 ) return;

          let length = 0;
          let tail = this.head;

          while (tail.next){
               length ++;
               tail = tail.next;
          }

          k = k % length;

          if ( k === 0) return;

          let newTail = this.head;

          for (let i = 0;  i < length-k-1; i++){
               newTail = newTail.next;
          }

          const newHead = newTail.next;

          tail.next = this.head;

          newTail.next = null;
          this.head = newHead;
     }

}


// --- Basic Tests ---
const sll = new Sll();

console.log("Inserting 10, 20, 30 at back:");
[10, 20, 30].forEach((val) => sll.insertAtBack(val));
sll.print(); // Expected: 10->20->30

console.log("Inserting 5 at front:");
sll.insertAtFront(5);
sll.print(); // Expected: 5->10->20->30

console.log("Inserting 15 at position 2:");
sll.insertAtPos(2, 15);
sll.print(); // Expected: 5->10->15->20->30

console.log("Deleting front node:");
sll.deleteAtFront();
sll.print(); // Expected: 10->15->20->30

console.log("Deleting back node:");
sll.deleteAtBack();
sll.print(); // Expected: 10->15->20

console.log("Reversing the list:");
sll.reverseList();
sll.print(); // Expected: 20->15->10

console.log("Rotating right by 1:");
sll.rotateRight(1);
sll.print(); // Expected: 10->20->15

console.log("Has cycle?:", sll.hasCycle()); // Expected: false

// Creating a cycle to test
if (sll.head && sll.head.next) {
    sll.head.next.next.next = sll.head;
    console.log("Has cycle after modification?:", sll.hasCycle()); // Expected: true
    const cycleStart = sll.startNodeOfCycle();
    console.log("Cycle starts at node with data:", cycleStart ? cycleStart.data : null);
}