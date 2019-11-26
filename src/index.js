import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insertNode(node, newNode) {
    /**
     * if newNode is less then move left
     */
    if (newNode.data <= node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  remove(data) {
    this.root = this._removeNode(this.root, data);
  }

  _removeNode(root, data) {
    /**
     * If the root is null, then the tree is empty
     */
    if (root === null) {
      return null;
    } else if (data < root.data) {
      /**
       * if data to be deleted is less than the root then move to  the left subtree
       */
      root.left = this._removeNode(root.left, data);
      return root;
    } else if (data > root.data) {
      /**
       * if data to be deleted is more than the root then move to the right subtree
       */
      root.right = this._removeNode(root.right, data);
      return root;
    } else {
      /**
       * delete a node with no children
       */
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      /**
       * if there is only right node
       */
      if (root.left === null) {
        root = root.right;
        return root;
      }

      /**
       * if there is only left node
       */

      if (root.right === null) {
        root = root.left;
        return root;
      }

      var aux = this._findMinNode(root.right);
      root.data = aux.data;
      root.right = this._removeNode(root.right, aux.data);
      return root;
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  /**
   * Keep
   */
  _findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    /**
     * Empty tree
     */
    if (node === null) {
      return null;
    } else if (data < node.data) {
      /**
       * search for the left subtree
       */
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else if (data === node.data) {
      return node;
    }
  }
}

var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
console.log(root);
console.log(BST.inorder(root));
