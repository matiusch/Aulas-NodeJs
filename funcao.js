function texto() {
    var palavra = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        palavra[_i] = arguments[_i];
    }
    var div = "";
    for (var i = 0; i < palavra.length; i++) {
        div += ("<div>" + palavra[i] + "</div>\n");
        return div;
    }
    var html = ("<HTML><head></head><body>\n " + div + " </body></html>");
    return html;
}
console.log(texto("valorA", "valorB", "valorC"));
