properties2xml
==============

Online convertor for java properties to XML format. 

## -> (Online convertor)[https://github.com/todvora/properties2xml]

## About properties

Standard Java properties looks something like this:

```
dbpassword=password
database=localhost
dbuser=root
```

This files are often used also for localization of applications. But it has several limitations, which makes pretty hard to use them:
 - Only supported encoding is ISO-8859-1
 - You need to use `native2ascii` to convert your texts in UTF to correct representation
 - Its very hard to read file full of \uXXXX symbols
 
 For example, this is ascii encoded version of Czech words "žluťoučký kůň" - "\u017elu\u0165ou\u010dk\u00fd k\u016f\u0148", 
 or city in Germany, "München" becomes "M\u00fcnchen".
 
 Solution could be to use smart IDE, which can convert this characters on the fly. Or switch properties to XML. They can be in UTF-8 and everything works nicely.
 
 This is how properties in XML look like:
 ```
 <?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
    <entry key="dbpassword">password</entry>
    <entry key="database">localhost</entry>
    <entry key="dbuser">root</entry>
</properties>
 ```