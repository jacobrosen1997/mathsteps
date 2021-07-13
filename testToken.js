//import { Token } from "./Token.js"
//import fs from 'fs'
const Token = require('./Token')
const fs = require('fs')

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

//let problem = "6/7/2"
let problemArray = [
    '3+3',
    '3+4',
    '5+4',
    '3+6',
    '6+3',
    '(2/5)*2',
    '(1/8)*3',
    '(4/9)*2',
    '(5/9)*2',
    '(6/8)*3',
    '(3/5)*5',
    '(5/9)/2',
    '(6/8)/3',
    '(3/4)/5',
    '(2/3)-(1/3)',
    '(3/4)-(2/4)',
    '(3/5)-(2/5)',
    '(3/6)-(2/6)',
    '(4/7)-(1/8)',
    '(4/8)-(1/8)',
    '(2/5)*(2/1)',
    '(1/8)*(2/3)',
    '(3/2)*(3/5)',
    '(1/9)*(1/3)',
    '(3/7)*(1/2)',
    '(5/4)*(3/7)',
    '(4/5)/2',
    '(6/7)/2',
    '(2/8)/2',
    '(12/14)/2',
    '(7/3)/3',
    '(16/4)/5',
    '(9/16)/(12/4)',
    '(3/7)/(5/6)',
    '(12/14)/(4/14)',
    '2.7-2',
    '1.6-1',
    '9.4-9',
    '7.2-7',
    '5.2+1.4',
    '8.8+1.1',
    '2.3+2.2',
    '1.5+7.3',
    '0.29-0.11',
    '0.77-0.13',
    '0.65-0.13',
    '0.97-0.81',
    '6/10',
    '8/10',
    '7/100',
    '8/100',
    '8/0.1',
    '6/0.1',
    '20/4',
    '2.0/4',
    '10/5',
    '1/5',
    '3*3',
    '3*7',
    '3*8',
    '(3*5)+2',
    '(3*4)+5',
    '(5*2)+3',
    '3*0.2',
    '0.3*5',
    '6*0.02',
    '0.1*0.3',
    '0.01*0.4',
    '29*0.2',
    '23*0.3',
    '26*0.7',
    '21*0.8',
    '3.1*0.4',
    '2.1*0.6',
    '6+(-2)',
    '8+(-3)',
    '14+(-6)',
    '16-(-8)',
    '(-4)-(-6)',
    '(-16)-(-8)',
    '4*(-2)',
    '(-3)*2',
    '6*(-3)',
    '(-6)/2',
    '7/(-2)',
    '8/(-4)',
    '35-(5+3)',
    '(5+15)-(2+2)',
    '8-(8-2)',
    '(35-10)+5',
    '7-4',
    '9-4',
    '9-5',
    '8-5',
    '9-3',
    '99+389',
    '189+39',
    '687+223',
    '5.9*7.2',
    '82*6.8',
    '204*3.92',
    '0.18/6',
    '335+697',
    '231+769',
    '4769+9032',
    '20+3+0.6+0.08',
    '200+5+0.02',
    '1.75*100',
    '3.09*1000',
    '3.9*1000',
    '0.4*200',
    '0.06*7',
    '(1/3)+(1/3)',
    '(1/4)+(2/4)',
    '(1/3)+(2/6)',
    '(1/12)+(5/6)',
    '(2/3)-(1/5)',
    '7+5',
    '19+17',]
let ops = ['+', '-', '*', '/','(',')']
let opsType = ['OP','LPAREN','RPAREN']

let addArray = []
let subArray = []
let multiArray = []
let divArray = []

problemArray.forEach(prob=>{
    // let tokens = null;
    // let tokenizer = null;
    let tokenClass = new Token()
    let tokenizer = tokenClass.getInst()
    let tokens = tokenizer.tokenize(prob)
    //console.log(prob)
    var i = 0
    //console.log(i)
    let addition = ""
    let subtraction = ""
    let multiplication = ""
    let division = ""
    let bool = true
    //console.log(tokens)
    //console.log(tokens.length)
    tokens.forEach(token=>{
        console.log(token)
        console.log(token.value)
        if (token.type === 'LPAREN') {
            bool = false
        }
        if (token.type === 'RPAREN') {
            bool = true
        }
        //console.log(token)
        if(token.type === 'OP' && bool) {
            
            addition = setCharAt(prob,i, "+")
            subtraction =  setCharAt(prob,i, "-")
            multiplication =  setCharAt(prob,i, "*")
            division =  setCharAt(prob,i, "/")
            console.log(i)
        }
        if(token.type === 'OP' || opsType.includes(token.type)) {
            i+=1
        } else if (token.type === 'NUM') {
            i+=token.value.length
        }
    });
    //console.log(addition)

    addArray.push(addition)
    subArray.push(subtraction)
    multiArray.push(multiplication)
    divArray.push(division)
    //console.log(i)
    // addArray.push(eval(addition))
    // subArray.push(eval(subtraction))
    // multiArray.push(eval(multiplication))
    // divArray.push(eval(division))
});



fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/add_answers.txt", addArray.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/sub_answers.txt", subArray.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/multi_answers.txt", multiArray.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/div_answers.txt", divArray.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

// let tokenizer = Token.getInst()
// let tokens = tokenizer.tokenize(prob)
// console.log(prob)

// const tokenizer = Token.getInst()
// const tokens = tokenizer.tokenize(problem)
// console.log(tokens)

// let addition = ""
// let subtraction = ""
// let multiplication = ""
// let division = ""

// tokens.forEach(token=>{
//     console.log(token.value)
//     if(token.type === 'OP') {
//         addition = problem.replace(token.value, "+")
//         subtraction = problem.replace(token.value, "-")
//          multiplication = problem.replace(token.value, "*")
//          division = problem.replace(token.value, "/")
//     }
// });

// console.log("Real problem: "+eval(problem))
// console.log("With addition: "+eval(addition))
// console.log("With subtraction: "+eval(subtraction))
// console.log("With multiplication: "+eval(multiplication))
// console.log("With division: "+eval(division))
