//import { isNum, isOp } from './util.js'
const {isNum,isOp} = require("./util")

class Token {
    constructor() {
        this.inst = null
        this.tokens = []
    }
    getInst() {
        if (!this.inst)
            this.inst = new Token()
        return this.inst
    }
    tokenize(str) {
        str = str.trim()
        var s = ''
        for (var index = 0; index < str.length; index++) {
            s += str[index];
            const peek = str[index + 1]
            if (isNum(s.trim()) && !isNum(peek)) {
                this.tokens.push({ type: 'NUM', value: s.trim() })
                s = ''
            }
            if (s.trim() == '(' || s.trim() == ')') {
                s.trim() == '(' ? this.tokens.push({ type: 'LPAREN' }) : this.tokens.push({ type: 'RPAREN' })
                s = ''
            }
            if (isOp(s.trim()) && !isOp(peek)) {
                this.tokens.push({ type: 'OP', value: s.trim() })
                s = ''
            }
            if (s == ';' || s == '\n') {
                this.tokens.push({ type: 'EOL' })
                s = ''
            }
            if (index == (str.length - 1)) {
                this.tokens.push({ type: 'EOF' })
                s = ''
            }
        }
        return this.tokens
    }
}

module.exports = Token
//exports.Token = Token
