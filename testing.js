const arrayProblems = ['-5+6+3=x-2',
'7x  * 2 - 4 * 3 =',
'(-2x-3)(4x-6)',
'(130+150)/4=x',
'(2*a*b)/4+3-2',
'(2*a*b*2)/(a*6)',
'(2*x^(2)*y)/(4*x*y)',
'(2*x^(2)*y^(2))/(4*x*y)',
'(2*x^(3)*y^(2))/(2*x)',
'(2*y^(5))/(4*x*y)',
'(2a-2b)^2',
'(2a-b)^2',
'(2a^2+b)^2',
'(2a+2b)^2',
'(2a+2b^2)^2',
'(2a+b)^2',
'(2a+b^2)^2',
'(2a+b^4)^2',
'(2x-1)(2x+1)',
'(2x-1)*(2x+1)',
'(2x-1)^2',
'(2x-2)^2',
'(2x-4)x',
'(2x-x)^2',
'(2x^2-2x)^2',
'(2x^2+2x)^2',
'(2x^2+4)(2x+1)',
'(2x^2y)/2x',
'(2x+1)(2x-4)',
'(2x+1)^2',
'(2x+1)^2',
'(2x+3)^2',
'(2x+x)^2',
'(3+2x)(2x+1)',
'(3+5)-(x+2)',
'(3a-b)^2',
'(3a+2b)^2',
'(3a+b)^2',
'(3x-2)^2',
'(3x-3)^2',
'(3x)/3+x/4=3/4',
'(3x^2-2)^2',
'(3x^2)/2-1-23=0',
'(3x^2)/2-1-23=0',
'(3x^3+2)(2-x)',
'(3x^4-5)(2x^2+3)',
'(3x+2)(2x-4)',
'(3x+2)^2',
'(3x+2)^2',
'(4-2x)(3-x)',
'(4*a*b^2+4b^3+18*a*b^4)/(2b)',
'(4*a*b+4*b+18a*b)/2b',
'(4*x-2y+2)/2',
'(4x+1)^2',
'(4x+3^(1/2))*(4x-3^(1/2))',
'(5+b)*(5-b)',
'(6+b)*(6-b)',
'(6a*b)/(a*4)',
'(8x)/2+3y+4-y',
'(a-2b)^2',
'(a-b)/(a*4)',
'(a*b)/(a*4)',
'(a*b)/(a*4)+3',
'(a*b*27)/(b*4*3)',
'(a*b*a*2)/(a*4)',
'(a*b*a*2)/(a*4)',
'(a*b+2)/(a*4)',
'(a^2+b^2)^2',
'(a+2*b)*(a-*b)',
'(a+2b)^2',
'(a+7)*(a-7)',
'(a+9)*(a-9)',
'(a+b)*(a-b)',
'(b*a*2)/(5b)',
'(b*a*4)/(b*4*3)',
'(x-1)^2',
'(x-1)^2-4=0',
'(x-1)^2-4=0',
'(x-10)^2-16=0',
'(x-10)^2-16=0',
'(x-10)^2-81=0',
'(x-10)^2-81=0',
'(x-12)^2-25=0',
'(x-12)^2-25=0',
'(x-2)(x-3)',
'(x-2)(x+4)',
'(x-2)^2-5',
'(x-2)^2-5',
'(x-2)^2-9=0',
'(x-2)^2-9=0',
'(x-3)(x+1)',
'(x-4)^2',
'(x-4)^2-3=0',
'(x-4)^2-3=0',
'(x-4)^2-4=0',
'(x-4)^2-4=0',
'(x*y^(5))/(y^(2)*x)',
'(x^(4)*y^(2))/(3*x^(2))',
'(x^(4)*y^(2))/(3*x^(2))',
'(x^2)/3-21-6=0',
'(x^2)/3-21-7=0',
'(x^2+1)^2',
'(x+1/2)*(x-1/2)',
'(x+2)(x+1)',
'(x+3)(x-3)',
'(x+3)*(x-3)',
'(x+3)^2',
'(x+3)^2',
'(x+4)^2',
'(x+x+y)+y',
'(y^(5)*x)/(y^(4)*x)',
'(y^(5)*x^(2))/(y^(4)*x)+7',
'(y^(5)*x^(2))/(y^(5)*x)+8x',
'(y^(8))/(3*x^(2)y^(4))',
'0.6x+14.7-3=3.7+2.6x',
'1+x+2(x+y)+y',
'1+x+x+y+y+1',
'10-(x+2)*2',
'10-4=x',
'100-9z=46',
'11x+35-(10x-5)',
'12=4x/3+4',
'13-15=x-7',
'13-15=x-7',
'13+5-x=22-2x',
'14-x=0',
'14.5=3x/4-5',
'14+x=3x+2',
'14=x/3+11',
'15+13x=4+14x',
'16-2x+4x=3',
'18=4-3x',
'2(x+y)+x+4',
'2*3x',
'2*3x+4+1',
'2*4/2-6/2=x',
'2*4x*3',
'2*9+3=x',
'2*9=x',
'2+x=11',
'2=16/x+4',
'2=8x/12-3',
'20*3.5-42/7=x',
'20+15+x=10+10+x+x',
'20=5x',
'20=x+2',
'20x/4',
'20x+20x+60+30x',
'22x - 23x + 2*11x',
'238=x+13+2x+2x-18+x-3',
'24/3-3*6+12=x',
'24/x+9=11',
'25-(x+3)',
'250-3*75+75/3=x',
'27-13=x+18-6',
'27=x/6-5',
'2x - 4x + 3',
'2x + 4 - 5x + 3',
'2x + x + 1 - 5',
'2x-1=7',
'2x-2=6',
'2x-2=8',
'2x-4=3-x/2',
'2x(3x+4)',
'2x*4=72/3',
'2x^2-8=0',
'2x^2-8=0',
'2x^2*2x',
'2x^3*x^3',
'2x+2=48',
'2x+6=3x-2',
'3-(a*2)/(4*b)+3',
'3-2(2-x)+(3+x)',
'3(x-2)+2+2x',
'3(x-2)+y+2x',
'3(x-3)=2x-5',
'3*2(x+x+y)+4',
'3*2+2x=6x/2+4',
'3*4=8/x+11',
'3*x-2*y+2*x',
'3*x-2*y+2+2*x-1',
'3*x+2*x',
'3+(a*b*a)/(a*3)',
'3+0.25x=15',
'3+2x/5=x',
'3=2x-5',
'32-2x',
'36-13+5=19+x+6',
'3x - x + 3',
'3x * 4 - 7 + 3x - 2x',
'3x + 2x + 1 + 3',
'3x-(2+x)',
'3x-2(2+x)',
'3x-2=2x+5',
'3x-2=2x+5',
'3x-2=3-x',
'3x-2=3+2x',
'3x-3=x+5',
'3x-5=7',
'3x*3x^2',
'3x*3x^3',
'3x/4=2x-5',
'3x/5+7=10',
'3x/9-7=8',
'3x^2-27=0',
'3x^2-27=0',
'3x^2*2x',
'3x^2*4x^2',
'3x+17-4x=5',
'3x+18-4x=5',
'3x+3(x+8)',
'3x+3=5+(2x)/3',
'3x+4+2x=x/3+11',
'3x+4+6x+12',
'3x+4=10',
'3x+4=16',
'3x+4=16+x',
'3x+8=2x+5',
'3x=6',
'4-x/3=x+3',
'4(x-2)+4y+8/4',
'4(x-2)=3x+4',
'4*32/8-32=x',
'4*x-5',
'4+2x/7=8',
'4+x=2',
'4=x/3-2',
'40x+35-3(10x-5)',
'42=x/3+7',
'4x + 2x + 3 - 4',
'4x-(x-4)',
'4x-1=3x+5',
'4x-10=5+x',
'4x-2x=7+x',
'4x-6=x-4',
'4x-8 = 2(x-2)',
'4x-x=24',
'4x*2x^2',
'4x^2*3x^2',
'4x+1=x+2',
'4x+2',
'4x+3=15',
'4x+4x=x/2+60',
'4x+8x',
'4x+9=2x+1',
'4x+9=3x+2',
'5 - 2x + 3 * 3x',
'5-(8*b)/(a*4)',
'5(x-2)=2x-1',
'58=x+5+2x-3+20',
'5x + 4 - 2x - 3',
'5x-1=1-x',
'5x-2=2x-4',
'5x-2=x+2',
'5x-4*2x',
'5x-9=4x',
'5x*7x',
'5x*x^2',
'5x+2=2x+4',
'5x+4=2-2x',
'5x+8=4x+2',
'5x=25',
'5x=3x+4',
'5x=4+4x',
'5x=6+4x',
'6*5-2=36/x+4',
'6+2=x',
'6+3/x=7/x+3',
'6+x+3=16',
'6800-40x=0',
'6x-4=14',
'6x-5=5+x',
'6x+6=4x+2',
'6x=18',
'6x=18',
'6x=36',
'6y-8-3y-10',
'7+3x=4x',
'7=x/3',
'7=x/3',
'746=96+5x',
'784=3x-48+247+2x+60',
'7x-3(x-4)',
'7x-8=4+3x',
'7x-8=4+3x',
'7x+3x-x',
'7x+5x-13=6+9+11x',
'7x+x+4',
'8-4+x=6',
'8*x/2+3*y+4-y',
'8/2-3=x',
'8+0.25x/4=12',
'8+x-2=12',
'8=(5x)/3-7',
'8=18/x+2',
'8x-40=16',
'8x^3*x^3',
'9.6x+39-3.4x=4.2x+65',
'9+3x=4x+3',
'9=2x+5',
'9x+16=6x+4',
'9x+3-4*(5+2x)',
'x + 3x - 5 + 7',
'x-3+7=8',
'x-3=2',
'x-3=8',
'x-4',
'x*y*2/(x*3)',
'x*y*2/(x*4)',
'x*y*2/(x*8)',
'x/1000-2=0.2',
'x/2-2=3',
'x/2=3',
'x/3-1=2',
'x/3+4=x/4-3',
'x/3=4',
'x/3=6',
'x/4-5=6',
'x/4+2=14',
'x/4+5=8',
'x/4=1',
'x/5=2',
'x^2-49=0',
'x^2-49=0',
'x^2-64-36=0',
'x^2-64-36=0',
'x^2-64=0',
'x^2-64=0',
'x^2-81=0',
'x^2-81=0',
'x^2*x',
'x+2',
'x+2(x+3)',
'x+2*x',
'x+23+12=63',
'x+23=63',
'x+2x+2x+4x',
'x+2x+3x=90',
'x+2x+8',
'x+3=10',
'x+3=13',
'x+3=8',
'x+3x',
'x+6x=3x+8',
'x+8=12',
'x+x',
'x+x+2(y+x)',
'x+x+2*y',
'x+x+2*y+4',
'x+x+x+4',
'x+x+x+x',
'x+x+x+x',
'x+x+y+y+',
'x=12-3*2',
'x=12+2',
'x=13-8',
'x=13+12+2',
'x=23-18/4-2*3',
'x=250*5-24*2-12*3+47',
'x=3+6',
'x=300/15',
'x=5*7-4*3',
'x=8-6',]

const printLatex = require('./lib/util/print');

const ChangeTypes = require('./lib/ChangeTypes');
const factor = require('./lib/factor');
const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation = require('./lib/solveEquation');
const { latex, ascii } = require('./lib/util/print');



const jsonHints = [];
const jsonActions = [];




for(j=0;j<arrayProblems.length;j++) {
    try {
    jsonHint = "NONE"
    jsonAction = "NONE"
    const steps = simplifyExpression(arrayProblems[j]);
    if(steps.length != 0) {
        if(steps[0].substeps.length != 0) {
            jsonAction =  steps[0].substeps[0].changeType;
            jsonHint = ascii(steps[0].substeps[0].newNode);
        } else {
            jsonAction = steps[0].changeType,
            jsonHint = ascii(steps[0].newNode)
        }

        // steps.forEach(step => {
        
            // if (step.substeps.length != 0) {
            //     jsonAction =  step.substeps[0].changeType;
            //     jsonHint = ascii(step.substeps[0].newNode);
        //         //console.log(latex(step.substeps[0].newNode))
                      
        //     } else {
                // jsonAction = step.changeType,
                // jsonHint = ascii(step.newNode)
        //     }
        // });
    } else {
        console.log(j)
        const steps2 = solveEquation(arrayProblems[j])
        if(steps2.length != 0) {
            if (steps2[0].substeps.length != 0) {
                jsonAction =  steps2[0].substeps[0].changeType;
                jsonHint = steps2[0].substeps[0].newEquation.ascii();      
            } else {
                jsonAction = steps2[0].changeType,
                jsonHint = steps2[0].newEquation.ascii()
                
            }

        }

        // steps2.forEach(step => {
        //     jsonAction = "EQUATION"
        //     jsonHint = "EQUATION_HINT"

        //     jsonAction = step.changeType,
        //     jsonHint = step.newEquation.ascii()


        //     if (step.substeps.length != 0) {
        //         jsonAction =  step.substeps[0].changeType;
        //         jsonHint = step.substeps[0].newEquation.ascii();
        //         // console.log(step.substeps[0].changeType);
        //         // console.log(step.substeps[0].newEquation.latex())
        //         // console.log(j)   
        //         // console.log(jsonAction)
                      
        //     } else {
        //         jsonAction = step.changeType,
        //         jsonHint = step.newEquation.ascii()
        //         // console.log(step.changeType);
        //         // console.log(step.newEquation.latex())
        //     } 
            
        // });
    }
    } catch(e) {
        console.log("Något gick fel")
    }
    jsonHints.push(jsonHint)
    jsonActions.push(jsonAction)
}



const fs = require('fs');
fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/hints.txt", jsonHints.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

fs.writeFile("C:/Users/jacob/OneDrive/Dokument/GitHub/mathsteps/actions.txt", jsonActions.join('\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
