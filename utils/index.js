
//===========================================================================
//==                                判断                                   ==
//===========================================================================
/**
 * 字母
 * @param {*} char 
 * @returns 
 */
function IsVariableLetter(char) {
  if (char < 65) {
    return char === 36
  }
  else if (char < 91) return true
  else if (char < 97) {
    return char === 95
  }
  else if (char < 123) return true

  return false
}


function IsSymbol(char) {
  return SymbolCharCode.includes(char)
}

function IsNumber(char) {
  return char > 47 && char < 58
}

function getChatCode(char) {
  return String(char).charCodeAt(0)
}


//===========================================================================
//==                                常量                                   ==
//===========================================================================
const LetterCode = {
  // a -z code: 97 -> 122
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: 113,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,
  // A - Z  code: 65 -> 90
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90
}

const numberCode = {
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57
}