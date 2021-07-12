import { Token } from "./Token.js"
import fs from 'fs'

let problem = "6/7/2"
let problemArray = ['1/4+2/4',
'1/3+1/3',
'4/8-1/8',
'4/7-1/8',
'3/6-2/6',
'3/5-2/5',
'3/4-2/4',
'2/3-1/3',
'3/5*5',
'6/8*3',
'5/9*2',
'4/9*2',
'1/8*3',
'2/5*2',
'(2/8)/2',
'6/7/2',
'4/5/2',
'3/4/5',
'6/8/3',
'5/9/2',
'1/12+5/6',
'1/3+2/6',
'2/3-1/5',
'5/4*3/7',
'3/7*1/2',
'1/9*1/3',
'3/2*3/5',
'1/8*2/3',
'2/5*2/1',
'(12/14)/(4/14)',
'(3/7)/(5/6)',
'(9/16)/(12/4)',
'(16/4)/5',
'(7/3)/3',
'(12/14)/2',
'6/7+4/7',
'1/8+2/8',
'2/3+5/3',
'2/3+2/3',
'5/9+3/9',
'1/5+3/5',
'19+17',
'7+5',
'3*8',
'3*7',
'3*3',
'6+3',
'6+3',
'3+6',
'5+4',
'3+4',
'3+3',
'9-3',
'8-5',
'9-5',
'9-4',
'7-4',
'687+223',
'189+39',
'99+389',
'204*3.92',
'82*6.8',
'5.9*7.2',
'5*2+3',
'3*4+5',
'3*5+2',
'(35-10)+5',
'8-(8-2)',
'(5+15)-(2+2)',
'35-(5+3)',
'14+(-6)',
'8+(-3)',
'6+(-2)',
'(-16)-(-8)',
'(-4)-(-6)',
'16-(-8)',
'6*(-3)',
'(-3)*2',
'4*(-2)',
'8/(-4)',
'7/(-2)',
'(-6)/2',
'4769+9032',
'231+769',
'335+697',
'200+5+0.02',
'20+3+0.6+0.08',
'1.5+7.3',
'2.3+2.2',
'8.8+1.1',
'5.2+1.4',
'7.2-7',
'9.4-9',
'1.6-1',
'2.7-2',
'0.97-0.81',
'0.65-0.13',
'0.77-0.13',
'0.29-0.11',
'6*0.02',
'0.3*5',
'3*0.2',
'3.9*1000',
'3.09*1000',
'1.75*100',
'0.06*7',
'0.4*200',
'21*0.8',
'26*0.7',
'23*0.3',
'29*0.2',
'0.01*0.4',
'0.1*0.3',
'2.1*0.6',
'3.1*0.4',
'8/100',
'7/100',
'8/10',
'6/10',
'848/400',
'64/800',
'6/0.1',
'8/0.1',
'63/0.007',
'0.8/0.04',
'1/5',
'10/5',
'2.0/4',
'20/4',
'0.18/6',
'4*16.7',
'0.09+3.7+4.1',
'25.4-6.7',]
let ops = ['+', '-', '*', '/']

let addArray = []
let subArray = []
let multiArray = []
let divArray = []

problemArray.forEach(prob=>{
    const tokenizer = Token.getInst()
    const tokens = tokenizer.tokenize(prob)
    //console.log(tokens)

    tokens.forEach(token=>{
        //console.log(token.value)
        if(token.type === 'OP') {
            addArray.push(eval(problem.replace(token.value, "+")))
            subArray.push(eval(problem.replace(token.value, "-")))
            multiArray.push(eval(problem.replace(token.value, "*")))
            divArray.push(eval(problem.replace(token.value, "/")))
        }
    });
});



fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/add_answers.txt", addArray.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

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

