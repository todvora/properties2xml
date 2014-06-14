var joinParts = function(parts) {
    return parts.join("=")
}

var transform = function(text, separator) {
    var result = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties>';
    var lines = text.split('\n');
    for(var i = 0;i < lines.length;i++){
        var line = lines[i];
        var parts = line.split('=');
        if(parts.length > 1) {
            result = result + '\n'+separator+'<entry key="'+parts.shift().trim()+'">'+joinParts(parts)+'</entry>'
        } else {
            if(line.trim().length == 0) {
                result = result + "\n";
            }
           // for now, ignore, later lint and print error
        }
    }
    var result = result + "\n</properties>"
    return result;
}

$(document).ready(function() {
    $("#convert").click(function() {
        var source = $("#source").val();
        console.log(source);
        var transformed = transform(source, "    ");
        console.log(transformed);
        $("#target").val(transformed);
    });
});