
var init = function() {
    firstScreen = [];
    secondScreen = "";
    result = 0;
    operande = "";
};

init();

function numberCount(number) {
    console.log("click sur : " + number);
    
    if ((firstScreen.length === 0) && (number == ".")) {
        firstScreen.push("0",number);
        var a = document.getElementById("result");
        a.textContent = firstScreen.join("");
        
    } else if ((firstScreen.length !== 0) || (number !== "0" && number !== ".")) {
        firstScreen.push(number);
        var b = document.getElementById("result");
        b.textContent = firstScreen.join("");
    }
}

function deleteNumber(arg) {
    
    if (((firstScreen[firstScreen.length-1] === ".") && (firstScreen[firstScreen.length-2] === "0")) || (arg == "CE")) {
        firstScreen = [];
    } else {
        firstScreen.pop();
    }
    var c = document.getElementById("result");
    if (firstScreen.length === 0) {
        c.textContent = "0";
    } else {
        c.textContent = firstScreen.join("");
    }
    
}

function eraseAll() {
    init();
    
    var a = document.getElementById("result");
    var b = document.getElementById("calcul");
    a.textContent = "0";
    b.textContent = "0";
}

function inverseNumber() {
    
    var i = parseFloat(firstScreen.join(""));
    
    if ( i < 0 ) {
        firstScreen.shift();
    } else if ( i > 0 ) {
        firstScreen.unshift("-");
    }
    
    var a = document.getElementById("result");
        a.textContent = firstScreen.join("");
    
}

function makeCalcul(technic) {
    
    if (technic == "add") {
        result += parseFloat(firstScreen.join(""));
    } else if (technic == "soustract") {
        result -= parseFloat(firstScreen.join(""));
    } else if (technic == "multiply") {
        result = result * parseFloat(firstScreen.join(""));
    } else if (technic == "divide") {
        result = result / parseFloat(firstScreen.join(""));
    }
    
}

function addOperande(op) {
    if (firstScreen.length !== 0) {
        if (op == "add") {
            secondScreen += firstScreen.join("") + " + ";

        } else if (op == "soustract") {
            secondScreen += firstScreen.join("") + " - ";
        } else if (op == "multiply") {
            secondScreen += firstScreen.join("") + " * ";
        } else if (op == "divide") {
            secondScreen += firstScreen.join("") + " / ";
        }
        
        var d = document.getElementById("calcul");
            
        d.textContent = secondScreen;
            
        if (result === 0) {
            result = parseFloat(firstScreen.join(""));
        } else {
            makeCalcul(operande);
        }
        
        operande = op;
        
        var e = document.getElementById("result");
            
        e.textContent = result;
            
        firstScreen = [];
    }

}