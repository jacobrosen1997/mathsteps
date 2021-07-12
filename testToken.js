import { isFraction } from "./lib/node/CustomType.js"
import { Token } from "./Token.js"

let problem = "6/7/2"
let ops = ['+', '-', '*', '/']


const tokenizer = Token.getInst()
const tokens = tokenizer.tokenize(problem)
console.log(tokens)

let addition = ""
let subtraction = ""
let multiplication = ""
let division = ""

tokens.forEach(token=>{
    console.log(token.value)
    if(token.type === 'OP') {
        addition = problem.replace(token.value, "+")
        subtraction = problem.replace(token.value, "-")
         multiplication = problem.replace(token.value, "*")
         division = problem.replace(token.value, "/")
    }
});

console.log("Real problem: "+eval(problem))
console.log("With addition: "+eval(addition))
console.log("With subtraction: "+eval(subtraction))
console.log("With multiplication: "+eval(multiplication))
console.log("With division: "+eval(division))

