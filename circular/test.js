const circular = require("./index");
const L = require("./linkedlist");

const { Node, LinkedList } = L;

describe("Linked list - check if it's is circular: ", () => {
  test("circular detects circular linked lists", () => {
    const l = new LinkedList();
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = b;

    expect(circular(l)).toEqual(true);
  });

  test("circular detects circular linked lists linked at the head", () => {
    const l = new LinkedList();
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = a;

    expect(circular(l)).toEqual(true);
  });

  test("circular detects non-circular linked lists", () => {
    const l = new LinkedList();
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = null;

    expect(circular(l)).toEqual(false);
  });
});
