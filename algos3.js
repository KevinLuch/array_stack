class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// we add to the head of a queue but remove from the tail

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue(value) - adds the given value to the queue (at the head)
    enqueue(value) {
        var new_node = new ListNode(value);
        if(this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    // dequeue() - removes the front (tail) value from queue and returns it
    dequeue() {
        if(this.head == null) {
            return null;
        }
        else if(this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else{
            var runner = this.head;
            while(runner.next.next != null) {
                runner = runner.next 
            }
            runner.next = null;
            temp = this.tail;
            this.tail = runner;
        return temp.value;
        }
    }
    // front() - returns the front (tail) value without removing it
    front() {
        if(this.head == null) {
            return null;
        }
        return this.tail.value;
    }

    // contains(target) - returns true if the target value is in the queue
    // false if not
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // size() - returns the size of the queue
    size() {
        var runner = this.head;
        var counter = 0;

        while (runner != null) {
            counter += 1;
            runner = runner.next;
        }
        return counter;
    }

    // compare(other_queue) - return true if this queue and the other_queue
    // have the same values in the same order and false otherwise
    compare(other_queue) {
        if(this.size() != other_queue.size()) {
            return false;
        }
        var runner = this.head;
        var runner_o = other_queue.head;
        while(runner != null && runner_o != null) {
            if(runner.value != runner_o.value) {
                return false;
            }
            runner = runner.next;
            runner_o = runner_o.next;
        }
        return true;
    }
}

var x = new SLLQueue();
console.log(x.size());
x.enqueue(9);
x.enqueue(8);
x.enqueue(7);
console.log(x.size());
console.log(x.contains(9));
console.log(x.front());
x.dequeue();
console.log(x.size());
console.log(x.front());