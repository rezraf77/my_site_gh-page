//a program for generating password based on certain passphrase

//toHash("Amazon");
//toNum("Amazon");

//toHash is a function which converts a string to hash
function toHash(text)
    {
       var hash = "";
         for( i = 0; i < text.length ; ++ i)
         switch(text[i])
                {
                case "A" :    
                case "a" : hash = hash + "@";break;
                case "B" :
                case "b" : hash = hash + "6";break;
                case "C" :
                case "c" : hash = hash + "(";break;
                case "D" :
                case "d" : hash = hash + "cl";break;
                case "E" :
                case "e" : hash = hash + "n";break;
                case "F" :
                case "f" : hash = hash + "8";break;
                case "G" :
                case "g" : hash = hash + "9";break;
                case "H" :
                case "h" : hash = hash + "#";break;
                case "I" :
                case "i" : hash = hash + "!";break;
                case "J" :
                case "j" : hash = hash + "j";break;
                case "K" :
                case "k" : hash = hash + "lc";break;
                case "L" :
                case "l" : hash = hash + "1";break;
                case "M" :
                case "m" : hash = hash + "nn";break;
                case "N" :
                case "n" : hash = hash + "e";break;
                case "O" :
                case "o" : hash = hash + "0";break;
                case "P" :
                case "p" : hash = hash + "q";break;
                case "Q" :
                case "q" : hash = hash + "?";break;
                case "R" :
                case "r" : hash = hash + "v";break;
                case "S" :
                case "s" : hash = hash + "5";break;
                case "T" :
                case "t" : hash = hash + "+";break;
                case "U" :
                case "u" : hash = hash + "y";break;
                case "V" :
                case "v" : hash = hash + "r";break;
                case "W" :
                case "w" : hash = hash + "uu";break;
                case "X" :
                case "x" : hash = hash + "*";break;
                case "Y" :
                case "y" : hash = hash + "T";break;
                case "Z" :
                case "z" : hash = hash + "7";break;
                default :hash = hash + text[i];
                }
    return hash;
    }



    function toNum(text)
    {
       var num = "";
         for( i = 0; i < text.length ; ++ i)
         switch(text[i])
                {
                case "A" :    
                case "a" : num = num + "0";break;
                case "B" :
                case "b" : num = num + "1";break;
                case "C" :
                case "c" : num = num + "2";break;
                case "D" :
                case "d" : num = num + "3";break;
                case "E" :
                case "e" : num = num + "4";break;
                case "F" :
                case "f" : num = num + "5";break;
                case "G" :
                case "g" : num = num + "6";break;
                case "H" :
                case "h" : num = num + "7";break;
                case "I" :
                case "i" : num = num + "8";break;
                case "J" :
                case "j" : num = num + "9";break;
                case "K" :
                case "k" : num = num + "10";break;
                case "L" :
                case "l" : num = num + "11";break;
                case "M" :
                case "m" : num = num + "12";break;
                case "N" :
                case "n" : num = num + "13";break;
                case "O" :
                case "o" : num = num + "14";break;
                case "P" :
                case "p" : num = num + "15";break;
                case "Q" :
                case "q" : num = num + "16";break;
                case "R" :
                case "r" : num = num + "17";break;
                case "S" :
                case "s" : num = num + "18";break;
                case "T" :
                case "t" : num = num + "19";break;
                case "U" :
                case "u" : num = num + "20";break;
                case "V" :
                case "v" : num = num + "21";break;
                case "W" :
                case "w" : num = num + "22";break;
                case "X" :
                case "x" : num = num + "23";break;
                case "Y" :
                case "y" : num = num + "24";break;
                case "Z" :
                case "z" : num = num + "25";break;
                default :num = num + text[i];
                }
    return num;
                
    }



    function generate()
      {
        var pass1 = document.getElementById("passphrase1").value;
        var pass2 = document.getElementById("passphrase2").value;
        var pass3 = document.getElementById("passphrase3").value;

        pass4 = toNum(pass2);   //cnvrts to its num equivalent
        pass1 = toHash(pass1);  //cnvrts to
        pass2 = toHash(pass2);  //hash
        pass3 = toHash(pass3);  //equivalent
       

        var pass = "S"+pass1+pass2+pass3+pass4+"E";
        pass=pass.split("").reverse().join("");      //used to reverse the string
        document.getElementById("output").value=pass;
      }