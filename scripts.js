string ="Hello, world"
char="A"
morse=".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
charM="...-"
//Change a string on uppercase and put each letter in a list
function getLatinCharacterList(string){
    let majString= string.toUpperCase()
    let listChar = []
    listChar = majString.split('')
    console.log(listChar)
    return listChar
}
//Take a char and look in dictionnary, return the morse char
function translateLatinCharacter(char){
    let morseChar=[]
    for (const elements in latinToMorse) {
        if (elements==char){
            console.log(`${latinToMorse[elements]}`)
             morseChar=`${latinToMorse[elements]}`
        }     
     }
     return morseChar
}

//take a string, use getLatinCharacterList and loop on translateLatinCharacter, change the morse list in morse string
function encode(string){
    let listMorse=[]
    let listChar=getLatinCharacterList(string)
    //console.log(listChar)
    for (i=0;i<listChar.length;i++){
        listMorse.push(translateLatinCharacter(listChar[i]))
    }
    //console.log(`${listMorse.join(" ")}`)
    return listMorse.join(" ")
}
//Change a morse string put each letter in a list
function getMorseCharacterList(string){
    let listMorse = []
    listMorse = string.split(' ')
    //console.log(listMorse)
    return listMorse
}
//Take a morse char and look in dictionnary, return the latin char
function translateMorseCharacter(charM){
    let latinChar=[]
    for (const element in morseToLatin){
        if (element==charM){
            latinChar=`${morseToLatin[element]}`
            //console.log(`${morseToLatin[element]}`)
        }
    }
//console.log(latinChar)
return latinChar
}
//take a morse string, use getMorseCharacterList and loop on translateMorseCharacter, change the list char in string
// put a space when /
function decode(string){
    let listChar=[]
    let listMorse=getMorseCharacterList(string)
    for (i=0;i<listMorse.length;i++){
        if(listMorse[i]!="/"){
            listChar.push(translateMorseCharacter(listMorse[i]))
        }else{
            listChar.push(" ") 
        }
    }
//console.log(listChar.join(""))
return listChar.join("")
}