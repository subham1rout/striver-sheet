const prompt = require("prompt-sync")({ sigint: true });

//js datatypes
/*

primitive data types
1. Number - 8 bytes
2. Boolean - 1 bit
3. String - depend upon character
4. null - 0 bytes
5. undefined - 0 bytes
6. BigInt - not known
7. Symbol - object

non-primitive data types
1. Object
  
*/

//input datatype
const datatype = prompt("enter the name of the datatype : ");

function dataTypeSize(datatype) {
    if (datatype === "number" || datatype === "Number") {
        return "8 bytes";
    } else if (datatype === "string" || datatype === "String") {
        return "depend upon character";
    } else if (datatype === "Boolean" || datatype === "boolean") {
        return "1 bit";
    } else if (datatype === "Null" || datatype === "null") {
        return "is a object";
    } else if (datatype === "undefined" || datatype === "Undefined") {
        return "is a object";
    } else if (datatype === "Bigint" || datatype === "bigint" || datatype === "BigInt") {
        return "not known";
    } else if (datatype === "Symbol" || datatype === "symbol") {
        return "is a object";
    } else if (datatype === "Object" || datatype === "object") {
        return "is a object";
    } else {
        return "no data type exist with " + datatype + " name";
    }
}

console.log("Size of " + datatype + " : ", dataTypeSize(datatype));