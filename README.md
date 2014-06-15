properties2xml
==============

Online convertor for java .properties files to XML format. 

### → [Online convertor](http://todvora.github.io/properties2xml)

## About properties

Standard Java properties looks something like this:

```
dbpassword=password
database=localhost
dbuser=root

czech=\u017elu\u0165ou\u010dk\u00fd k\u016f\u0148
deutsch=M\u00fcnchen
```

This files are often used also for localization of applications. But it has several limitations, which makes pretty hard to use them:
 - Only supported encoding is ISO-8859-1
 - You need to use `native2ascii` to convert your texts in UTF to correct representation
 - Its very hard to read file full of \uXXXX symbols
 
For example, this is ascii encoded version of Czech words "žluťoučký kůň" - "\u017elu\u0165ou\u010dk\u00fd k\u016f\u0148",  or city in Germany, "München" becomes "M\u00fcnchen".
 
Solution could be to use smart IDE, which can convert this characters on the fly. Or switch properties to XML. Once you convert your files to XML, you don't need to convert symbols anymore, they can be UTF-8 encoded. Everything else works in the same way, as with .properties files.

This is how properties in XML look like:
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
    <entry key="dbpassword">password</entry>
    <entry key="database">localhost</entry>
    <entry key="dbuser">root</entry>
    
    <entry key="czech">žluťoučký kůň</entry>
    <entry key="deutsch">München</entry>
</properties>
 ```

## Limitations - multiline, semicolons
There are currently two not implement features of .properties files. The first one is multiline value, for example 
```
message = Welcome to \
          Wikipedia
```
where the backslash before end of line says, that second line is continuation of the first line.

Second not implemented feature is `:` as key and value separator. For example:
```
label: text description of input field
```

Example of really complicated input can be seen on [wikipedia](http://en.wikipedia.org/wiki/.properties). 
