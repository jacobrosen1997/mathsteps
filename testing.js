const printLatex = require('./lib/util/print');

const ChangeTypes = require('./lib/ChangeTypes');
const factor = require('./lib/factor');
const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation = require('./lib/solveEquation');
const { latex, ascii } = require('./lib/util/print');



const steps = simplifyExpression('11/3+3/3');
//console.log(steps)
steps.forEach(step => {
    
	console.log("before change: " + step.oldNode.toString());   // before change: 2 x + 2 x + x + x
	console.log("change: " + step.changeType);                  // change: ADD_POLYNOMIAL_TERMS
	console.log("after change: " + step.newNode.toString());    // after change: 6 x
	console.log("# of substeps: " + step.substeps.length);      // # of substeps: 3
    console.log(latex(step.newNode))
    console.log(ascii(step.newNode))
    
    if (step.substeps.length != 0) {
        console.log("\nSUBSTEPS\n")
        
        for(i = 0; i < step.substeps.length; i++) {
            console.log("\nPRINTING SUBSTEPS: "+(i+1))
            console.log("before change: " + step.substeps[i].oldNode.toString());   // before change: 2 x + 2 x + x + x
            console.log("change: " + step.substeps[i].changeType);                  // change: ADD_POLYNOMIAL_TERMS
            console.log("after change: " + step.substeps[i].newNode.toString());    // after change: 6 x
            console.log("# of substeps: " + step.substeps[i].substeps.length);      // # of substeps: 3
            
        }
        /*
        step.substeps.forEach(substep => {
            console.log("SUBSTEPS \n")
            console.log("SUBSTEPS \n")
            console.log("before change: " + substep.oldNode.toString());   // before change: 2 x + 2 x + x + x
            console.log("change: " + substep.changeType);                  // change: ADD_POLYNOMIAL_TERMS
            console.log("after change: " + substep.newNode.toString());    // after change: 6 x
            console.log("# of substeps: " + substep.substeps.length);      // # of substeps: 3
        })*/        
    }
});