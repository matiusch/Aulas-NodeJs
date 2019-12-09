function ano(anobi) {
    if (anobi % 4 == 0 && anobi % 100 != 0 || anobi % 400 == 0) {
        console.log("o ano " + anobi + " \u00E9 um ano bissexto");
    }
    else {
        console.log("o ano " + anobi + " n\u00E3o \u00E9 um ano bissexto");
    }
}
ano(2012);
