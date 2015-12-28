import Tree from './Tree'
import Node from './Node'

var canvas = document.getElementById("bst-canvas");
var ctx = canvas.getContext("2d");


ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var myTree = new Tree(ctx)

var bstAdd = document.getElementById("bstAdd")
bstAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    myTree.insert(null, document.getElementById('bstAddInput').value, null)
    myTree.eraseRenderedTree()
    myTree.renderTree()
    return false
}, false)

var bstReset = document.getElementById("bstReset")
bstReset.addEventListener("click", (e) => {
    myTree.eraseRenderedTree()
    myTree = new Tree(ctx)
    return false
}, false)
