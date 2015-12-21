import Tree from '../../Tree'
import Node from '../../Node'

describe("A Binary Search Tree", function() {
    describe("A Tree", function() {
        it("should contain required properties and methods", function() {
            // Given & When
            var tree = new Tree()

            // Then
            expect(tree).toBeDefined()
            expect(tree.rootNode).toBeDefined()
            expect(tree.search).toBeDefined()
            expect(tree.insert).toBeDefined()
            expect(tree.delete).toBeDefined()
            expect(tree.traverse).toBeDefined()
            expect(tree.verify).toBeDefined()
        })

        describe("the insert method", function() {
            it("should set the root node equal to the provided node if it is null", function() {
                // Given
                var tree = new Tree()

                // When
                tree.insert(null, 1, null)

                // Then
                expect(tree.rootNode.key).toBe(1)
            })

            it("populates tree", function() {
                // Given
                var tree = new Tree()

                // When
                tree.insert(null, 1, null)
                tree.insert(null, 0, null)
                tree.insert(null, -1, null)
                tree.insert(null, 2, null)

                // Then
                expect(tree.rootNode.leftNode.key).toBe(0)
                expect(tree.rootNode.leftNode.leftNode.key).toBe(-1)
                expect(tree.rootNode.rightNode.key).toBe(2)
            })
        })

        describe("the delete method", function() {
            it("deletes child", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 1, null)
                tree.insert(null, 0, null)

                // When
                tree.delete(0)

                // Then
                expect(tree.rootNode.leftNode).toBe(null)
            })

            it("deletes left child replace", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 1, null)
                tree.insert(null, 0, null)
                tree.insert(null, -1, null)

                // When
                tree.delete(0)

                // Then
                expect(tree.rootNode.leftNode.key).toBe(-1)
            })

            it("deletes right child replace", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 6, null)
                tree.insert(null, 2, null)
                tree.insert(null, 3, null)

                // When
                tree.delete(2)

                // Then
                expect(tree.rootNode.leftNode.key).toBe(3)
            })

            it("deletes two children replace", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 6, null)
                tree.insert(null, 2, null)
                tree.insert(null, 1, null)
                tree.insert(null, 3, null)

                // When
                tree.delete(2)

                // Then
                expect(tree.rootNode.leftNode.key).toBe(3)
            })

            it("deletes root", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 1, null)

                // When
                tree.delete(1)

                // Then
                expect(tree.rootNode).toBe(null)
            })
        })

        describe("the search method", function() {
            it("finds child", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 1, null)
                tree.insert(null, 0, null)

                // When
                var result = tree.search(0, (found) => {

                    // Then...
                    expect(found).toBe(true)
                })
            })

            it("finds nested child", function() {
                // Given
                var tree = new Tree()
                tree.insert(null, 1, null)
                tree.insert(null, 0, null)
                tree.insert(null, 3, null)
                tree.insert(null, 2, null)
                tree.insert(null, 4, null)

                // When
                var result = tree.search(4, (found) => {

                    // Then...
                    expect(found).toBe(true)
                })
            })
        })
    })

    describe("A Node", function() {
        it("should contain value, leftNode and rightNode properties", function() {
            // Given & When
            var node = new Node(null, null, null, null)

            // Then
            expect(node).toBeDefined()
            expect(node.value).toBeDefined()
            expect(node.key).toBeDefined()
            expect(node.leftNode).toBeDefined()
            expect(node.rightNode).toBeDefined()
        })

        it("should contain a constructor", function() {
            // Given
            var leftNode = new Node(null, null, null, null)
            var rightNode = new Node(null, null, null, null)
            var value = 12
            var key = 1

            // When
            var node = new Node(leftNode, rightNode, key, value)

            // Then
            expect(node).toBeDefined()
            expect(node.value).toBeDefined()
            expect(node.leftNode).toBeDefined()
            expect(node.rightNode).toBeDefined()
            expect(node.value).toBe(value)
            expect(node.key).toBe(key)
            expect(node.leftNode).toBe(leftNode)
            expect(node.rightNode).toBe(rightNode)
        })
    })
})
