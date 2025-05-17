const myArr = []
// %DebugPrint(myArr);

// Continious, Holey

// SMI (Smole Integer)
// Packed Elements
// Duble (float, string, function)

const myArr2 = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS
 
myArr2.push(6.0)
// PACKED_DOUBLE_ELEMENTS

myArr2.push("7")
// PACKED_STRING_ELEMENTS

myArr2[10] = 11
// HOLEY_ELEMENTS

console.log(myArr2);
console.log(myArr2.length);
console.log(myArr2[8]);

// bound check
// hasOwnProperty(myArr2, 8)
// hasOwnProperty(myArr2.prototype, 8)
//hasOwnProperty(Object.prototype, 8)

// Holes are very expensive in JS 

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED 

const arrFour = new Array[4]
// Just 3 Holes. HOLEY_SMI_ELEMENTS
arrFour[0] = 1 //HOLEY_ELEMENTS
arrFour[1] = 2 //HOLEY_ELEMENTS
arrFour[2] = 3 //HOLEY_ELEMENTS

const arrFive = []
arrFive.push[0] = 1 //PACKLED_ELEMENTS
arrFive.push[0] = 2 //PACKLED_ELEMENTS
arrFive.push[0] = 3 //PACKLED_ELEMENTS

const arrSix = [1, 2, 3]

arrSix.push(Infinity) //DOUBLE_ELEMENTS

