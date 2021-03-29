function mathsExpression(expr) {
    console.log(expr)
    if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
      expr = expr.substr(2, expr.length - 4)
      return katex.renderToString(expr, { displayMode: true })
    } else if (expr.match(/^\$[\s\S]*\$$/)) {
      expr = expr.substr(1, expr.length - 2)
      return katex.renderToString(expr, { isplayMode: false })
    }
}
  
const katexRenderer = {
    code(code, lang, escaped) {
        if (!lang) {
            console.log(code);
            const math = mathsExpression(code)
            if (math) {
                return math
            }
        }

        // use original code renderer by returning false
        return false
    },

    codespan(text) {
        console.log(text)
        const math = mathsExpression(text)

        if (math) {
            return math
        }

        // use original codespan renderer by returning false
        return false
    }
}