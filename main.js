if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.indexOf(str) == 0;
    };
}

var joinParts = function(parts) {
    var orig = parts.join("=").trim();
    return orig.replace(/\\u(\w{4})/gi, function(token) {
        return String.fromCharCode(parseInt(token.substr(2), 16));
    })
};

var createCommentElement = function(line) {
    return "<!-- " + line + " -->";
};

var createEntryElement = function(key, value) {
    return '<entry key="' + key + '">' + value + '</entry>';
};

var formatLineOutput = function(output, separator) {
    return separator + output + "\n";
} ;

var parseLines = function(lines, separator) {
    if(lines.length == 0) {
        return "";
    }

    var line = lines.shift().trim();
    console.log("Line:" + line);

    if(line.length == 0) {
        return formatLineOutput("", separator) + parseLines(lines, separator);
    }

    if(line.startsWith("!") || line.startsWith("#")) {
        return formatLineOutput(createCommentElement(line.substr(1)), separator) + parseLines(lines, separator);
    }

    var parts = line.split("=");
    var key = parts.shift().replace(/\\\ /g, " ");
    var value = joinParts(parts);
    return  formatLineOutput(createEntryElement(key,value), separator) + parseLines(lines, separator);
};


var transform = function(text, separator) {
    var result = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties>';
    var lines = text.split('\n');
    result = result + "\n" + parseLines(lines, separator) + "</properties>";
    return result;
};

$(document).ready(function() {
    $("#convert").click(function() {
        var source = $("#source").val().trim();
        var transformed = transform(source, "    ");
        $("#target").val(transformed);
    });
});
