const L = require("./index");

const { LinkedList, Node } = L;

describe("Linked List", () => {
  test("LinkedList is a class", () => {
    expect(typeof LinkedList.prototype.constructor).toEqual("function");
  });

  test("Node is a class", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  describe("A Node", () => {
    test('has properties "data" and "next"', () => {
      const node = new Node("a", "b");
      expect(node.data).toEqual("a");
      expect(node.next).toEqual("b");
    });
  });

  describe("Insert First", () => {
    test("appends a node to the start of the LinkedList", () => {
      const l = new LinkedList();
      l.insertFirst(1);
      expect(l.head.data).toEqual(1);
      l.insertFirst(2);
      expect(l.head.data).toEqual(2);
    });
  });

  describe("Size", () => {
    test("returns the number of items in the linked LinkedList", () => {
      const l = new LinkedList();
      expect(l.size()).toEqual(0);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      expect(l.size()).toEqual(4);
    });
  });

  describe("GetFirst", () => {
    test("returns the first element", () => {
      const l = new LinkedList();
      l.insertFirst(1);
      expect(l.getFirst().data).toEqual(1);
      l.insertFirst(2);
      expect(l.getFirst().data).toEqual(2);
    });
  });

  describe("GetLast", () => {
    test("returns the last element", () => {
      const l = new LinkedList();
      l.insertFirst(2);
      expect(l.getLast()).toEqual({ data: 2, next: null });
      l.insertFirst(1);
      expect(l.getLast()).toEqual({ data: 2, next: null });
    });
  });

  describe("Clear", () => {
    test("empties out the LinkedList", () => {
      const l = new LinkedList();
      expect(l.size()).toEqual(0);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      expect(l.size()).toEqual(4);
      l.clear();
      expect(l.size()).toEqual(0);
    });
  });

  describe("RemoveFirst", () => {
    test("removes the first node when the LinkedList has a size of one", () => {
      const l = new LinkedList();
      l.insertFirst("a");
      l.removeFirst();
      expect(l.size()).toEqual(0);
      expect(l.getFirst()).toEqual(null);
    });

    test("removes the first node when the LinkedList has a size of three", () => {
      const l = new LinkedList();
      l.insertFirst("c");
      l.insertFirst("b");
      l.insertFirst("a");
      l.removeFirst();
      expect(l.size()).toEqual(2);
      expect(l.getFirst().data).toEqual("b");
      l.removeFirst();
      expect(l.size()).toEqual(1);
      expect(l.getFirst().data).toEqual("c");
    });
  });

  describe("RemoveLast", () => {
    test("RemoveLast removes the last node when LinkedList is empty", () => {
      const l = new LinkedList();
      expect(() => {
        l.removeLast();
      }).not.toThrow();
    });

    test("RemoveLast removes the last node when LinkedList is length 1", () => {
      const l = new LinkedList();
      l.insertFirst("a");
      l.removeLast();
      expect(l.head).toEqual(null);
    });

    test("RemoveLast removes the last node when LinkedList is length 2", () => {
      const l = new LinkedList();
      l.insertFirst("b");
      l.insertFirst("a");

      l.removeLast();

      expect(l.size()).toEqual(1);
      expect(l.head.data).toEqual("a");
    });

    test("RemoveLast removes the last node when LinkedList is length 3", () => {
      const l = new LinkedList();
      l.insertFirst("c");
      l.insertFirst("b");
      l.insertFirst("a");
      l.removeLast();

      expect(l.size()).toEqual(2);
      expect(l.getLast().data).toEqual("b");
    });
  });

  describe("InsertLast", () => {
    test("adds to the end of the LinkedList", () => {
      const l = new LinkedList();
      l.insertFirst("a");

      l.insertLast("b");

      expect(l.size()).toEqual(2);
      expect(l.getLast().data).toEqual("b");
    });
  });

  describe("GetAt", () => {
    test("returns the node at given index", () => {
      const l = new LinkedList();
      expect(l.getAt(10)).toEqual(null);

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      expect(l.getAt(0).data).toEqual(1);
      expect(l.getAt(1).data).toEqual(2);
      expect(l.getAt(2).data).toEqual(3);
      expect(l.getAt(3).data).toEqual(4);
    });
  });

  describe("RemoveAt", () => {
    test("removeAt doesnt crash on an empty LinkedList", () => {
      const l = new LinkedList();
      expect(() => {
        l.removeAt(0);
        l.removeAt(1);
        l.removeAt(2);
      }).not.toThrow();
    });

    test("removeAt doesnt crash on an index out of bounds", () => {
      const l = new LinkedList();
      expect(() => {
        const l = new LinkedList();
        l.insertFirst("a");
        l.removeAt(1);
      }).not.toThrow();
    });

    test("removeAt deletes the first node", () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(0).data).toEqual(1);
      l.removeAt(0);
      expect(l.getAt(0).data).toEqual(2);
    });

    test("removeAt deletes the node at the given index", () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(1).data).toEqual(2);
      l.removeAt(1);
      expect(l.getAt(1).data).toEqual(3);
    });

    test("removeAt works on the last node", () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(3).data).toEqual(4);
      l.removeAt(3);
      expect(l.getAt(3)).toEqual(null);
    });
  });

  describe("InsertAt", () => {
    test("inserts a new node with data at the 0 index when the LinkedList is empty", () => {
      const l = new LinkedList();
      l.insertAt("hi", 0);
      expect(l.getFirst().data).toEqual("hi");
    });

    test("inserts a new node with data at the 0 index when the LinkedList has elements", () => {
      const l = new LinkedList();
      l.insertLast("a");
      l.insertLast("b");
      l.insertLast("c");
      l.insertAt("hi", 0);
      expect(l.getAt(0).data).toEqual("hi");
      expect(l.getAt(1).data).toEqual("a");
      expect(l.getAt(2).data).toEqual("b");
      expect(l.getAt(3).data).toEqual("c");
    });

    test("inserts a new node with data at a middle index", () => {
      const l = new LinkedList();
      l.insertLast("a");
      l.insertLast("b");
      l.insertLast("c");
      l.insertLast("d");
      l.insertAt("hi", 2);
      expect(l.getAt(0).data).toEqual("a");
      expect(l.getAt(1).data).toEqual("b");
      expect(l.getAt(2).data).toEqual("hi");
      expect(l.getAt(3).data).toEqual("c");
      expect(l.getAt(4).data).toEqual("d");
    });

    test("inserts a new node with data at a last index", () => {
      const l = new LinkedList();
      l.insertLast("a");
      l.insertLast("b");
      l.insertAt("hi", 2);
      expect(l.getAt(0).data).toEqual("a");
      expect(l.getAt(1).data).toEqual("b");
      expect(l.getAt(2).data).toEqual("hi");
    });

    test("insert a new node when index is out of bounds", () => {
      const l = new LinkedList();
      l.insertLast("a");
      l.insertLast("b");
      l.insertAt("hi", 30);

      expect(l.getAt(0).data).toEqual("a");
      expect(l.getAt(1).data).toEqual("b");
      expect(l.getAt(2).data).toEqual("hi");
    });
  });

  describe("ForEach", () => {
    test("applies a transform to each node", () => {
      const l = new LinkedList();

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      l.forEach(node => {
        node.data += 10;
      });

      expect(l.getAt(0).data).toEqual(11);
      expect(l.getAt(1).data).toEqual(12);
      expect(l.getAt(2).data).toEqual(13);
      expect(l.getAt(3).data).toEqual(14);
    });
  });

  describe("for...of loops", () => {
    test("works with the linked LinkedList", () => {
      const l = new LinkedList();

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      for (let node of l) {
        node.data += 10;
      }

      expect(l.getAt(0).data).toEqual(11);
      expect(l.getAt(1).data).toEqual(12);
      expect(l.getAt(2).data).toEqual(13);
      expect(l.getAt(3).data).toEqual(14);
    });

    test("for...of works on an empty LinkedList", () => {
      const l = new LinkedList();
      expect(() => {
        for (let node of l) {
        }
      }).not.toThrow();
    });
  });
});
