const math = require('mathjs');
const simplifyExpressionString = require('./lib/simplifyExpression')
let expr = "(7/3)+3*3+2"
const node = math.parse(expr)
//const node = math.parse('3 * x + 2')

function logtraverse(node) {
    node.traverse(function (node, path, parent) {
        switch (node.type) {
          case 'OperatorNode':
            console.log(node.type, node.op)
            break
          case 'ConstantNode':
            console.log(node.type, node.value)
            break
          case 'SymbolNode':
            console.log(node.type, node.name)
            break
          default:
            console.log(node.type)
        }
      })
}

// console.log(node)
// console.log(node.args)
console.log(node)
console.log(simplifyExpressionString(expr))
