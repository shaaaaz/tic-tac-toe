const row1_1 = document.querySelector(".row1-1")
const row1_2 = document.querySelector(".row1-2")
const row1_3 = document.querySelector(".row1-3")

const row2_1 = document.querySelector(".row2-1")
const row2_2 = document.querySelector(".row2-2")
const row2_3 = document.querySelector(".row2-3")

const row3_1 = document.querySelector(".row3-1")
const row3_2 = document.querySelector(".row3-2")
const row3_3 = document.querySelector(".row3-3")

const disp = document.querySelector(".display-text")

let cell = document.querySelectorAll(".cell")

let score1 = 0
let score2 = 0

// let gree = color(40,40,40);
// --green-color: #cfcece;

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

function enterclick(){
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            check1 = 0
            check2 = 0
            check3 = 0
            check4 = 0
            check5 = 0
            check6 = 0
            check7 = 0
            check8 = 0
            check9 = 0

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

            row1_1.innerHTML="."
            row1_2.innerHTML="."
            row1_3.innerHTML="."
            row2_1.innerHTML="."
            row2_2.innerHTML="."
            row2_3.innerHTML="."
            row3_1.innerHTML="."
            row3_2.innerHTML="."
            row3_3.innerHTML="."

              disp.style.color="black"
              disp.innerHTML = "."

            turn = "X"
        }
    });
}

function printOutput(){
    if(game==1)
    {
        disp.innerHTML = "Player 1 wins this Round!"
        disp.style.color = "#c73e1d"
    }

    else if(game==2)
    {
        disp.innerHTML = "Player 2 wins this Round!"
        disp.style.color = "#53c14b"
    }

    else if(game==3)
    {
        disp.innerHTML = "DRAW!"
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
        game = 1 

        printOutput()

        gameover()

        enterclick()
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

        printOutput()

        gameover()

        enterclick()
    }

    else if((again1+again2+again3+again4+again5+again6+again7+again8+again9)==8)
    {
        game = 3

        printOutput()

        gameover()

        enterclick()
    }

}

function gameover(){
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

