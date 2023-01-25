

var a = document.getElementById('a');
a.style.backgroundImage = "url(https://www.funbrain.com/assets/img/content-cards/F2qRmLhRnmebc8jJAUjr_GuessTheNumber%403x.png)";
a.style.backgroundSize = "30rem";
var c = document.createElement('div');
c.style.marginLeft = "20rem";
var c1 = document.createElement('input');
c.appendChild(c1);
c1.style.height = "3rem";
c1.style.width = "30rem";
var c2 = document.createElement('button');
c2.innerText = "Search";
c2.style.height = "3.5rem";
c2.style.width = "8rem";
c.appendChild(c2);
var d = document.createElement('div');
// d.style.height = "200px";
// d.style.width = "200px";
// d.style.backgroundColor = "black";
// d.style.border = "5px solid limegreen";
// d.style.marginLeft = "32rem";
// d.style.marginTop = "2rem";
// var d1=document.createElement('input');
// d.appendChild(d1);
var e=document.createElement('div');

a.appendChild(c);
a.appendChild(d);
a.appendChild(e);




c2.addEventListener("click", () => {
    var x = [1 - 100];
    var y = Math.floor(Math.random(x) * (100 - 1) + 1);
console.log(y);

    if (c1 == y) {
        // document.write("you are legend bro");
        console.log("You won");
        d.innerHTML="you won";
        d.style.color="white";
        d.style.fontSize="3rem";
        
    }
    else {
        // document.write("better luck next time");
        console.log("You lose");
        d.innerHTML="you lose";
        d.style.color="white";
        d.style.fontSize="6rem";
        d.style.marginLeft="25rem";
        d.style.marginTop="10rem";

    }
    // if(y>0&&y<=17)
    // {
    //     document.write("Small boy");
    // }
    // else if(y>18&&y<=30)
    // {
    //     document.write("YES YOU CAN");
    // }
    // else if(y>31&&y<=45)
    // {
    //     document.write("Middle aged");
    // }
    // else if(y>46&&y<=60)
    // {
    //     document.write("Near old");
    // }
    // else if(y>=60)
    // {
    //     document.write("Old Age");
    // }
})