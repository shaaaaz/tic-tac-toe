const row1_1 = document.querySelector(".row1-1")
const row1_2 = document.querySelector(".row1-2")
const row1_3 = document.querySelector(".row1-3")

const row2_1 = document.querySelector(".row2-1")
const row2_2 = document.querySelector(".row2-2")
const row2_3 = document.querySelector(".row2-3")

const row3_1 = document.querySelector(".row3-1")
const row3_2 = document.querySelector(".row3-2")
const row3_3 = document.querySelector(".row3-3")

const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")

const popup1 = document.querySelector(".popup1")
const popup2 = document.querySelector(".popup2")

const again = document.querySelector(".again")

let winstatus = false

let win = 0

let qwe = 0

const reset = document.querySelector(".reset")

reset.onclick = () =>{
    location.reload();
} 

again.onclick = () => {
    location.reload();   
}

let draw = 0

const roundnumber = document.querySelector(".roundno")

const disp = document.querySelector(".display-text")

let cell = document.querySelectorAll(".cell")

let score1 = 0
let score2 = 0

let round = 1

let wincount1 = 0
let wincount2 = 0

const p1score = document.querySelector(".p1score")
const p2score = document.querySelector(".p2score")

const res = document.querySelector(".result")

let check1 = 0
let check2 = 0
let check3 = 0

let check4 = 0
let check5 = 0
let check6 = 0

let check7 = 0
let check8 = 0
let check9 = 0

let turn = "X"

let again1 = 0
let again2 = 0
let again3 = 0

let again4 = 0
let again5 = 0
let again6 = 0

let again7 = 0
let again8 = 0
let again9 = 0

let game = 1


// 1st

if(check1!=1 && check1!=2 && winstatus==false){
row1_1.addEventListener('mouseenter', () => {
    // Check your condition here
    if (turn=="X" && check1!=1 && check1!=2 && winstatus==false) {
        row1_1.innerHTML="X"
        row1_1.style.color="#c73e1d"
    }
    if (turn=="O" && check1!=1 && check1!=2 && winstatus==false) {
        row1_1.innerHTML="O"
        row1_1.style.color="#53c14b"
    }
});

row1_1.addEventListener('mouseleave', () => {
    if(check1!=1 && check1!=2){
    row1_1.innerHTML="."
    row1_1.style.color="#cfcece"}
});}

// // 2nd

if(check2!=1 && check2!=2 && winstatus==false){
    row1_2.addEventListener('mouseenter', () => {
        // Check your condition here
        if (turn=="X" && check2!=1 && check2!=2 && winstatus==false) {
            row1_2.innerHTML="X"
            row1_2.style.color="#c73e1d"
        }
        if (turn=="O" && check2!=1 && check2!=2 && winstatus==false) {
            row1_2.innerHTML="O"
            row1_2.style.color="#53c14b"
        }
    });
    
    row1_2.addEventListener('mouseleave', () => {
        if(check2!=1 && check2!=2){
        row1_2.innerHTML="."
        row1_2.style.color="#cfcece"}
    });}

// 3rd

if(check3!=1 && check3!=2 && winstatus==false){
    row1_3.addEventListener('mouseenter', () => {
        // Check your condition here
        if (turn=="X" && check3!=1 && check3!=2 && winstatus==false) {
            row1_3.innerHTML="X"
            row1_3.style.color="#c73e1d"
        }
        if (turn=="O" && check3!=1 && check3!=2 && winstatus==false) {
            row1_3.innerHTML="O"
            row1_3.style.color="#53c14b"
        }
    });
    
    row1_3.addEventListener('mouseleave', () => {
        if(check3!=1 && check3!=2){
        row1_3.innerHTML="."
        row1_3.style.color="#cfcece"}
    });}

// 1st

if(check4!=1 && check4!=2 && winstatus==false){
    row2_1.addEventListener('mouseenter', () => {
        // Check your condition here
        if (turn=="X" && check4!=1 && check4!=2 && winstatus==false) {
            row2_1.innerHTML="X"
            row2_1.style.color="#c73e1d"
        }
        if (turn=="O" && check4!=1 && check4!=2 && winstatus==false) {
            row2_1.innerHTML="O"
            row2_1.style.color="#53c14b"
        }
    });
    
    row2_1.addEventListener('mouseleave', () => {
        if(check4!=1 && check4!=2){
        row2_1.innerHTML="."
        row2_1.style.color="#cfcece"}
    });}
    
// // 2nd
    
if(check5!=1 && check5!=2 && winstatus==false){
        row2_2.addEventListener('mouseenter', () => {
            // Check your condition here
            if (turn=="X" && check5!=1 && check5!=2 && winstatus==false) {
                row2_2.innerHTML="X"
                row2_2.style.color="#c73e1d"
            }
            if (turn=="O" && check5!=1 && check5!=2 && winstatus==false) {
                row2_2.innerHTML="O"
                row2_2.style.color="#53c14b"
            }
        });
        
        row2_2.addEventListener('mouseleave', () => {
            if(check5!=1 && check5!=2){
            row2_2.innerHTML="."
            row2_2.style.color="#cfcece"}
    });}
    
// // 3rd
    
if(check6!=1 && check6!=2 && winstatus==false){
        row2_3.addEventListener('mouseenter', () => {
            // Check your condition here
            if (turn=="X" && check6!=1 && check6!=2 && winstatus==false) {
                row2_3.innerHTML="X"
                row2_3.style.color="#c73e1d"
            }
            if (turn=="O" && check6!=1 && check6!=2 && winstatus==false) {
                row2_3.innerHTML="O"
                row2_3.style.color="#53c14b"
            }
        });
        
        row2_3.addEventListener('mouseleave', () => {
            if(check6!=1 && check6!=2){
            row2_3.innerHTML="."
            row2_3.style.color="#cfcece"}
    });}

// 1st

if(check7!=1 && check7!=2 && winstatus==false){
    row3_1.addEventListener('mouseenter', () => {
        // Check your condition here
        if (turn=="X" && check7!=1 && check7!=2 && winstatus==false) {
            row3_1.innerHTML="X"
            row3_1.style.color="#c73e1d"
        }
        if (turn=="O" && check7!=1 && check7!=2 && winstatus==false) {
            row3_1.innerHTML="O"
            row3_1.style.color="#53c14b"
        }
    });
    
    row3_1.addEventListener('mouseleave', () => {
        if(check7!=1 && check7!=2){
        row3_1.innerHTML="."
        row3_1.style.color="#cfcece"}
    });}
    
// // 2nd
    
if(check8!=1 && check8!=2 && winstatus==false){
        row3_2.addEventListener('mouseenter', () => {
            // Check your condition here
            if (turn=="X" && check8!=1 && check8!=2 && winstatus==false) {
                row3_2.innerHTML="X"
                row3_2.style.color="#c73e1d"
            }
            if (turn=="O" && check8!=1 && check8!=2 && winstatus==false) {
                row3_2.innerHTML="O"
                row3_2.style.color="#53c14b"
            }
        });
        
        row3_2.addEventListener('mouseleave', () => {
            if(check8!=1 && check8!=2){
            row3_2.innerHTML="."
            row3_2.style.color="#cfcece"}
    });}
    
// // 3rd
    
if(check9!=1 && check9!=2 && winstatus==false){
        row3_3.addEventListener('mouseenter', () => {
            // Check your condition here
            if (turn=="X" && check9!=1 && check9!=2 && winstatus==false) {
                row3_3.innerHTML="X"
                row3_3.style.color="#c73e1d"
            }
            if (turn=="O" && check9!=1 && check9!=2 && winstatus==false) {
                row3_3.innerHTML="O"
                row3_3.style.color="#53c14b"
            }
        });
        
        row3_3.addEventListener('mouseleave', () => {
            if(check9!=1 && check9!=2){
            row3_3.innerHTML="."
            row3_3.style.color="#cfcece"}
    });}


function enterclick(){
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter' && qwe==0) {
            winstatus = false 
            check1 = 0
            check2 = 0
            check3 = 0
            check4 = 0
            check5 = 0
            check6 = 0
            check7 = 0
            check8 = 0
            check9 = 0

            win = 0

            again1 = 0
            again2 = 0
            again3 = 0
            again4 = 0
            again5 = 0
            again6 = 0
            again7 = 0
            again8 = 0
            again9 = 0

            for (i = 0; i < cell.length; ++i) {
                cell[i].style.color = "#cfcece";
                cell[i].style.backgroundColor = "transperent"
              }

            row1_1.innerHTML=""
            row1_2.innerHTML=""
            row1_3.innerHTML=""
            row2_1.innerHTML=""
            row2_2.innerHTML=""
            row2_3.innerHTML=""
            row3_1.innerHTML=""
            row3_2.innerHTML=""
            row3_3.innerHTML=""

              disp.style.color="#cfcece"
              disp.innerHTML = ".<br>."

            turn="X"

            colornone()
        }
    });
}



function printOutput(){
    if(game==1)
    {
        wincount1++
        if(wincount1==3)
        {
        disp.innerHTML = "PLAYER 1 IS <br> THE WINNER!!"
        disp.style.color = "#c73e1d"
        winstatus=true
        popup1.classList.toggle("show")
        qwe = 1
        }
        else if(wincount1<3)
        {
        disp.innerHTML = "Round Winner: <br> Player 1"
        disp.style.color = "#c73e1d"
        }
        
    }

    else if(game==2)
    {
        wincount2++
        if(wincount2==3)
        {
        disp.innerHTML = "PLAYER 2 IS <br> THE WINNER!!"
        disp.style.color = "#53c14b"
        winstatus=true
        popup2.classList.toggle("show")
        qwe = 1
        }
        else if(wincount2<3)
        {
        disp.innerHTML = "Round Winner: <br> Player 2"
        disp.style.color = "#53c14b"
        }
        
    }

    else if(game==3)
    {
        disp.innerHTML = "ROUND <br> DRAW!"
        disp.style.color = "Black"
    }
}

function wincheck(){

    if((check1 == check2 && check2 == check3 && check3 == 1) || 
       (check4 == check5 && check5 == check6 && check6 == 1) || 
       (check7 == check8 && check8 == check9 && check9 == 1) || 
       (check1 == check4 && check4 == check7 && check7 == 1) || 
       (check2 == check5 && check5 == check8 && check8 == 1) || 
       (check3 == check6 && check6 == check9 && check9 == 1) || 
       (check1 == check5 && check5 == check9 && check9 == 1) || 
       (check3 == check5 && check5 == check7 && check7 == 1) ) 
       
    {
        wincolor()

        printOutput()

        gameover()

        

        round = round + 1
            console.log(round)
            roundnumber.innerHTML = round
        game = 1 

        score1++

        p1.innerHTML = score1

        enterclick()

        winstatus = true
    }

    else if((check1 == check2 && check2 == check3 && check3 == 2) || 
            (check4 == check5 && check5 == check6 && check6 == 2) || 
            (check7 == check8 && check8 == check9 && check9 == 2) || 
            (check1 == check4 && check4 == check7 && check7 == 2) || 
            (check2 == check5 && check5 == check8 && check8 == 2) || 
            (check3 == check6 && check6 == check9 && check9 == 2) || 
            (check1 == check5 && check5 == check9 && check9 == 2) || 
            (check3 == check5 && check5 == check7 && check7 == 2) )
    {
        game = 2

        wincolor()

        printOutput()

        gameover()

        

        round = round + 1
            console.log(round)
            roundnumber.innerHTML = round
        game = 1 

        score2++

        enterclick()

        p2.innerHTML = score2

        winstatus = true
    }

    else if((again1+again2+again3+again4+again5+again6+again7+again8+again9)==8)
    {
        game = 3

        printOutput()

        gameover()

        

        round = round + 1
        console.log(round)
        roundnumber.innerHTML = round
        game = 1 

        draw++
        p3.innerHTML = draw

        enterclick()
    }

}

function colornone(){
    row1_1.style.backgroundColor="#cfcece"
    row1_2.style.backgroundColor="#cfcece"
    row1_3.style.backgroundColor="#cfcece"

    row2_1.style.backgroundColor="#cfcece"
    row2_2.style.backgroundColor="#cfcece"
    row2_3.style.backgroundColor="#cfcece"

    row3_1.style.backgroundColor="#cfcece"
    row3_2.style.backgroundColor="#cfcece"
    row3_3.style.backgroundColor="#cfcece"
}

function wincolor(){
    if(check1 == check2 && check2 == check3 && check3 != 0)
    {
        row1_1.style.backgroundColor="#ffec00"
        row1_2.style.backgroundColor="#ffec00"
        row1_3.style.backgroundColor="#ffec00"
    }  
    else if(check4 == check5 && check5 == check6 && check6 != 0) 
    {
        row2_1.style.backgroundColor="yellow"
        row2_2.style.backgroundColor="yellow"
        row2_3.style.backgroundColor="yellow"
    }
    else if(check7 == check8 && check8 == check9 && check9 != 0) 
    {
        row3_1.style.backgroundColor="#ffec00"
        row3_2.style.backgroundColor="#ffec00"
        row3_3.style.backgroundColor="#ffec00"
    }
    else if(check1 == check4 && check4 == check7 && check7 != 0) 
    {
        row1_1.style.backgroundColor="#ffec00"
        row2_1.style.backgroundColor="#ffec00"
        row3_1.style.backgroundColor="#ffec00"
    }
    else if(check2 == check5 && check5 == check8 && check8 != 0) 
    {
        row1_2.style.backgroundColor="#ffec00"
        row2_2.style.backgroundColor="#ffec00"
        row3_2.style.backgroundColor="#ffec00"
    } 
    else if(check3 == check6 && check6 == check9 && check9 != 0) 
    {
        row1_3.style.backgroundColor="#ffec00"
        row2_3.style.backgroundColor="#ffec00"
        row3_3.style.backgroundColor="#ffec00"
    }
    else if(check1 == check5 && check5 == check9 && check9 != 0)
    {
        row1_1.style.backgroundColor="#ffec00"
        row2_2.style.backgroundColor="#ffec00"
        row3_3.style.backgroundColor="#ffec00"
    }  
    else if(check3 == check5 && check5 == check7 && check7 != 0) 
    {
        row1_3.style.backgroundColor="#ffec00"
        row2_2.style.backgroundColor="#ffec00"
        row3_1.style.backgroundColor="#ffec00"
    }
}

function gameover(){
    win++

    again1++
    again2++
    again3++

    again4++
    again5++
    again6++

    again7++
    again8++
    again9++
}

function changeturn(){
    if(turn=="X")
    {
        turn="O";
    }
    else if(turn=="O")
    {
        turn="X"
    }
}

// ROW1

row1_1.onclick = () => {

    if(again1==0)
    {
        if (turn=="X")
        {
            row1_1.innerHTML="X"
            check1 = 1
            row1_1.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row1_1.innerHTML="O"
            check1 = 2
            row1_1.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again1++
    }

}

row1_2.onclick = () => {

    if(again2==0)
    {
        if (turn=="X")
        {
            row1_2.innerHTML="X"
            check2 = 1
            row1_2.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row1_2.innerHTML="O"
            check2 = 2
            row1_2.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again2++
    }

}

row1_3.onclick = () => {

    if(again3==0)
    {
        if (turn=="X")
        {
            row1_3.innerHTML="X"
            check3 = 1
            row1_3.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row1_3.innerHTML="O"
            check3 = 2
            row1_3.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again3++
    }

}

// ROW2

row2_1.onclick = () => {

    if(again4==0)
    {
        if (turn=="X")
        {
            row2_1.innerHTML="X"
            check4 = 1
            row2_1.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row2_1.innerHTML="O"
            check4 = 2
            row2_1.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again4++

    }

}

row2_2.onclick = () => {

    if(again5==0)
    {
        if (turn=="X")
        {
            row2_2.innerHTML="X"
            check5 = 1
            row2_2.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row2_2.innerHTML="O"
            check5 = 2
            row2_2.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again5++
    }

}

row2_3.onclick = () => {

    if(again6==0)
    {
        if (turn=="X")
        {
            row2_3.innerHTML="X"
            check6 = 1
            row2_3.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row2_3.innerHTML="O"
            check6 = 2
            row2_3.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again6++
    }

}

// ROW3

row3_1.onclick = () => {

    if(again7==0)
    {
        if (turn=="X")
        {
            row3_1.innerHTML="X"
            check7 = 1
            row3_1.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row3_1.innerHTML="O"
            check7 = 2
            row3_1.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again7++
    }

}

row3_2.onclick = () => {

    if(again8==0)
    {
        if (turn=="X")
        {
            row3_2.innerHTML="X"
            check8 = 1
            row3_2.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row3_2.innerHTML="O"
            check8 = 2
            row3_2.style.color = "#53c14b"
        }

        wincheck()

        changeturn()

        again8++
    }

}

row3_3.onclick = () => {

        if(again9==0)
        {
        if (turn=="X")
        {
            row3_3.innerHTML="X"
            check9 = 1
            row3_3.style.color = "#c73e1d"
        }
        else if(turn=="O")
        {
            row3_3.innerHTML="O"
            check9 = 2
            row3_3.style.color = "#53c14b"
        }

        wincheck()

        changeturn()
        again9++
    }

}

