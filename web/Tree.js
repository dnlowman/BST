import Node from './Node'

export default class Tree {
    constructor(canvasContext) {
        this.rootNode = null
        this.canvasContext = canvasContext || null
    }

    search(key, callback, node) {
        node = node || this.rootNode
        if(node.key === key) {
            callback(true)
            return
        }
        if(key <= node.key && node.leftNode !== null)
            this.search(key, callback, node.leftNode)
        else if(key > node.key && node.rightNode !== null)
            this.search(key, callback, node.rightNode)
        else
            return
    }

    insert(node, key, value) {
        if(this.rootNode === null)
            return this.rootNode = new Node(null, null, key, value)
        node = (node === null ) ? this.rootNode : node
        if(key <= node.key) {
            if(node.leftNode === null)
                node.leftNode = new Node(null, null, key, value)
            else
                this.insert(node.leftNode, key, value)
        }
        else {
            if(node.rightNode === null)
                node.rightNode = new Node(null, null, key, value)
            else
                this.insert(node.rightNode, key, value)
        }
    }

    delete(key, node, parent) {
        node = node || this.rootNode
        parent = parent || null

        if(node.key === key) {
            if(parent === null) {
                this.rootNode = null
                return true
            }

            // One child left
            if(node.leftNode !== null && node.rightNode === null) {
                if(parent.leftNode === node)
                    parent.leftNode = node.leftNode
                else if(parent.rightNode === node)
                    parent.rightNode = node.leftNode
                node = node.leftNode
                node.leftNode = null
                return true
            }

            // One child right
            if(node.leftNode === null && node.rightNode !== null) {
                if(parent.leftNode === node)
                    parent.leftNode = node.rightNode
                else if(parent.rightNode === node)
                    parent.rightNode = node.rightNode
                node = node.rightNode
                node.rightNode = null
                return true
            }

            // Two children...
            if(node.leftNode !== null && node.rightNode !== null) {
                var min = this.findMin(node.rightNode, node)
                min.node = node.rightNode
                if(parent.leftNode == node)
                    parent.leftNode = min.node
                else
                    parent.rightNode = min.node
                node = min.node
                return true
            }
            else { // No children
                if(parent.leftNode === node)
                    parent.leftNode = null
                else
                    parent.rightNode = null
                node = null
                return true
            }
        }

        if(key < node.key) {
            if(node.leftNode === null)
                return false
            else
                this.delete(key, node.leftNode, node)
        }
        else {
            if(node.rightNode === null)
                return false
            else
                this.delete(key, node.rightNode, node)
        }
    }

    findMin(node, parent) {
        if(node.leftNode !== null)
            findMin(node.leftNode, node)
        else
            return { node: node, parent: parent }
    }


    renderTree() {
        if(this.rootNode === null || this.canvasContext === null) return
        let xPos = window.innerWidth / 2
        let yPos = 30
        let radius = 25

        this.renderTreeRecursive(xPos, yPos, radius, this.rootNode, null)
    }

    renderTreeRecursive(xPos, yPos, radius, currentNode, parentNode) {
        this.canvasContext.beginPath()
        this.canvasContext.arc(xPos, yPos, radius, 0, Math.PI*2, true)
        this.canvasContext.stroke()
        this.canvasContext.font = "12px serif";
        this.canvasContext.fillText("Key: " + currentNode.key, xPos - 15, yPos + 4);

        if(currentNode.leftNode !== null) {
            this.canvasContext.beginPath()
            this.canvasContext.moveTo(xPos, yPos);
            this.canvasContext.lineTo(xPos - 60, yPos + 60);
            this.canvasContext.stroke();
            this.renderTreeRecursive(xPos - 60, yPos + 60, radius, currentNode.leftNode, currentNode)
        }
        if(currentNode.rightNode !== null) {
            this.canvasContext.beginPath()
            this.canvasContext.moveTo(xPos, yPos);
            this.canvasContext.lineTo(xPos + 60, yPos + 60);
            this.canvasContext.stroke();
            this.renderTreeRecursive(xPos + 60, yPos + 60, radius, currentNode.rightNode, currentNode)
        }
    }

    eraseRenderedTree() {
        this.canvasContext.clearRect(0, 0, this.canvasContext.canvas.width, this.canvasContext.canvas.height);
    }

    traverse() {

    }

    verify() {

    }
}
