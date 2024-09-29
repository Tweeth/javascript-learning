//Primitive types
const stringType = 'Some text'  // 1. String 
const booleanType = true        // 2. Boolean
const numberType = 2.54         // 3. Number
let undefinedType               // 4. Undefined
const nullType = null           // 5. Null


//Reference type - Object       Силочний тип лише 1 - Обєкт
const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA
copyOfA.c = 'abc'
console.log(objectA)           // { a: 10, b: true, c: 'abc' }




