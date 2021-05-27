
function insertHtml(str, value) { // inserting buttons
    str = str.replace("{{value}}", value);
    return str;
}

function check(buttons, count) { // checking for result
    let a = [];
    for(let i=0;i<9;i++) {
        a[i] = buttons[i].textContent;
    }
    if((a[0]!="") && ((a[0]==a[1] && a[0]==a[2]) || (a[0]==a[3] && a[0]==a[6]))) {
        if(a[0]=="X") {
            alert("Congratulations! Player1 wins");
        }
        else {
            alert("Congratulations! Player2 wins");
        }
    }
    else if((a[8]!="") && ((a[8]==a[7] && a[8]==a[6]) || (a[8]==a[5] && a[8]==a[2]))) {
        if(a[8]=="X") {
            alert("Congratulations! Player1 wins");
        }
        else {
            alert("Congratulations! Player2 wins");
        }
    }
    else if((a[4]!="") && ((a[4]==a[0] && a[4]==a[8]) || (a[4]==a[2] && a[4]==a[6]) || (a[4]==a[1] && a[4]==a[7]) || (a[4]==a[3] && a[4]==a[5]))) {
        if(a[4]=="X") {
            alert("Congratulations! Player1 wins");
        }
        else {
            alert("Congratulations! Player2 wins");
        }
    }
    else if(count==9) {
        alert("Draw!");
    }
}

// Start
// Inserting button html
let html = "";
for(let i=1;i<=9;i++) {
    let str = '<button id="{{value}}"></button>';
    html += insertHtml(str, i);
}
document.getElementById("container").innerHTML = html;
// End of inserting button html

// Responding to clicks
let count = 0;
let buttons = document.querySelectorAll("button");
for(let i of buttons) {
    i.addEventListener("click", () => {
        if(count<9 && i.textContent=="") {
            count++;
            if(count%2!=0) {
                i.textContent = "X";
            }
            else {
                i.textContent = "O";
            }
            setTimeout(() => {
                check(buttons,count);
            }, 0);
        }
    });
}
// End