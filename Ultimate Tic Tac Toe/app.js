// reset and reload the page

const reset = document.querySelector(".reset")

reset.onclick = () => {
    location.reload()
}

let turn = "X";

















const part1 = document.querySelector(".unit1")
const part2 = document.querySelector(".unit2")
const part3 = document.querySelector(".unit3")

const part4 = document.querySelector(".unit4")
const part5 = document.querySelector(".unit5")
const part6 = document.querySelector(".unit6")

const part7 = document.querySelector(".unit7")
const part8 = document.querySelector(".unit8")
const part9 = document.querySelector(".unit9")









// display which turn is going on in html



const displayturn = document.querySelector(".displayturn")

function turntext() {
    if (turn == "X") {
        displayturn.style.color = "#c73e1d"
        displayturn.innerHTML = "X"
        console.log("work")
    }
    if (turn == "O") {
        displayturn.style.color = "#53c14b"
        displayturn.innerHTML = "O"
        console.log("ing")
    }
}












// now check and change th color if the chance is there

// these are used to check if its their position or not

let position1 = 1
let position2 = 1
let position3 = 1

let position4 = 1
let position5 = 1
let position6 = 1

let position7 = 1
let position8 = 1
let position9 = 1

// green elements

const g1 = document.querySelector(".g1")
const g2 = document.querySelector(".g2")
const g3 = document.querySelector(".g3")

const g4 = document.querySelector(".g4")
const g5 = document.querySelector(".g5")
const g6 = document.querySelector(".g6")

const g7 = document.querySelector(".g7")
const g8 = document.querySelector(".g8")
const g9 = document.querySelector(".g9")

// red elements

const r1 = document.querySelector(".r1")
const r2 = document.querySelector(".r2")
const r3 = document.querySelector(".r3")

const r4 = document.querySelector(".r4")
const r5 = document.querySelector(".r5")
const r6 = document.querySelector(".r6")

const r7 = document.querySelector(".r7")
const r8 = document.querySelector(".r8")
const r9 = document.querySelector(".r9")

// check position 
// repshadow()

const area1 = document.querySelectorAll(".unit1")
const area2 = document.querySelectorAll(".unit2")
const area3 = document.querySelectorAll(".unit3")

const area4 = document.querySelectorAll(".unit4")
const area5 = document.querySelectorAll(".unit5")
const area6 = document.querySelectorAll(".unit6")

const area7 = document.querySelectorAll(".unit7")
const area8 = document.querySelectorAll(".unit8")
const area9 = document.querySelectorAll(".unit9")

area6.forEach(element => {
    element.style.backgroundColor = "#cfcece";
});





function repshadow() {


    if (position1 == 1) {
        if (turn == "X") {
            r1.classList.toggle("show")
            g1.classList.remove("show")
            area1.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });

        }
        if (turn == "O") {
            g1.classList.toggle("show")
            r1.classList.remove("show")
            area1.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position2 == 1) {
        if (turn == "X") {
            r2.classList.toggle("show")
            g2.classList.remove("show")
            area2.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g2.classList.toggle("show")
            r2.classList.remove("show")
            area2.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position3 == 1) {
        if (turn == "X") {
            r3.classList.toggle("show")
            g3.classList.remove("show")
            area3.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g3.classList.toggle("show")
            r3.classList.remove("show")
            area3.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position4 == 1) {
        if (turn == "X") {
            r4.classList.toggle("show")
            g4.classList.remove("show")
            area4.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g4.classList.toggle("show")
            r4.classList.remove("show")
            area4.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position5 == 1) {
        if (turn == "X") {
            r5.classList.toggle("show")
            g5.classList.remove("show")
            area5.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g5.classList.toggle("show")
            r5.classList.remove("show")
            area5.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position6 == 1) {
        if (turn == "X") {
            r6.classList.toggle("show")
            g6.classList.remove("show")
            area6.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g6.classList.toggle("show")
            r6.classList.remove("show")
            area6.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position7 == 1) {
        if (turn == "X") {
            r7.classList.toggle("show")
            g7.classList.remove("show")
            area7.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g7.classList.toggle("show")
            r7.classList.remove("show")
            area7.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position8 == 1) {
        if (turn == "X") {
            r8.classList.toggle("show")
            g8.classList.remove("show")
            area8.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g8.classList.toggle("show")
            r8.classList.remove("show")
            area8.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

    if (position9 == 1) {
        if (turn == "X") {
            r9.classList.toggle("show")
            g9.classList.remove("show")
            area9.forEach(element => {
                element.style.backgroundColor = "#ccaca4";
            });
        }
        if (turn == "O") {
            g9.classList.toggle("show")
            r9.classList.remove("show")
            area9.forEach(element => {
                element.style.backgroundColor = "#b0ccac";
            });
        }
    }

}














// now we have to declare all of the rows and columns indicidual cells for on click function to be used

// unit1 

const row11 = document.querySelector(".row11")
const row12 = document.querySelector(".row12");
const row13 = document.querySelector(".row13");

const row14 = document.querySelector(".row14");
const row15 = document.querySelector(".row15");
const row16 = document.querySelector(".row16");

const row17 = document.querySelector(".row17");
const row18 = document.querySelector(".row18");
const row19 = document.querySelector(".row19");


// unit2 

const row21 = document.querySelector(".row21");
const row22 = document.querySelector(".row22");
const row23 = document.querySelector(".row23");

const row24 = document.querySelector(".row24");
const row25 = document.querySelector(".row25");
const row26 = document.querySelector(".row26");

const row27 = document.querySelector(".row27");
const row28 = document.querySelector(".row28");
const row29 = document.querySelector(".row29");


// unit3 

const row31 = document.querySelector(".row31");
const row32 = document.querySelector(".row32");
const row33 = document.querySelector(".row33");

const row34 = document.querySelector(".row34");
const row35 = document.querySelector(".row35");
const row36 = document.querySelector(".row36");

const row37 = document.querySelector(".row37");
const row38 = document.querySelector(".row38");
const row39 = document.querySelector(".row39");


// unit 4

const row41 = document.querySelector(".row41");
const row42 = document.querySelector(".row42");
const row43 = document.querySelector(".row43");

const row44 = document.querySelector(".row44");
const row45 = document.querySelector(".row45");
const row46 = document.querySelector(".row46");

const row47 = document.querySelector(".row47");
const row48 = document.querySelector(".row48");
const row49 = document.querySelector(".row49");


// unit 5

const row51 = document.querySelector(".row51");
const row52 = document.querySelector(".row52");
const row53 = document.querySelector(".row53");

const row54 = document.querySelector(".row54");
const row55 = document.querySelector(".row55");
const row56 = document.querySelector(".row56");

const row57 = document.querySelector(".row57");
const row58 = document.querySelector(".row58");
const row59 = document.querySelector(".row59");


// unit 6

const row61 = document.querySelector(".row61");
const row62 = document.querySelector(".row62");
const row63 = document.querySelector(".row63");

const row64 = document.querySelector(".row64");
const row65 = document.querySelector(".row65");
const row66 = document.querySelector(".row66");

const row67 = document.querySelector(".row67");
const row68 = document.querySelector(".row68");
const row69 = document.querySelector(".row69");


// UNIT 7 

const row71 = document.querySelector(".row71");
const row72 = document.querySelector(".row72");
const row73 = document.querySelector(".row73");

const row74 = document.querySelector(".row74");
const row75 = document.querySelector(".row75");
const row76 = document.querySelector(".row76");

const row77 = document.querySelector(".row77");
const row78 = document.querySelector(".row78");
const row79 = document.querySelector(".row79");


// UNIT 8

const row81 = document.querySelector(".row81");
const row82 = document.querySelector(".row82");
const row83 = document.querySelector(".row83");

const row84 = document.querySelector(".row84");
const row85 = document.querySelector(".row85");
const row86 = document.querySelector(".row86");

const row87 = document.querySelector(".row87");
const row88 = document.querySelector(".row88");
const row89 = document.querySelector(".row89");


// unit 9

const row91 = document.querySelector(".row91");
const row92 = document.querySelector(".row92");
const row93 = document.querySelector(".row93");

const row94 = document.querySelector(".row94");
const row95 = document.querySelector(".row95");
const row96 = document.querySelector(".row96");

const row97 = document.querySelector(".row97");
const row98 = document.querySelector(".row98");
const row99 = document.querySelector(".row99");

// deckaring check variables

let check11 = 0;
let check12 = 0;
let check13 = 0;
let check14 = 0;
let check15 = 0;
let check16 = 0;
let check17 = 0;
let check18 = 0;
let check19 = 0;

let check21 = 0;
let check22 = 0;
let check23 = 0;
let check24 = 0;
let check25 = 0;
let check26 = 0;
let check27 = 0;
let check28 = 0;
let check29 = 0;

let check31 = 0;
let check32 = 0;
let check33 = 0;
let check34 = 0;
let check35 = 0;
let check36 = 0;
let check37 = 0;
let check38 = 0;
let check39 = 0;

let check41 = 0;
let check42 = 0;
let check43 = 0;
let check44 = 0;
let check45 = 0;
let check46 = 0;
let check47 = 0;
let check48 = 0;
let check49 = 0;

let check51 = 0;
let check52 = 0;
let check53 = 0;
let check54 = 0;
let check55 = 0;
let check56 = 0;
let check57 = 0;
let check58 = 0;
let check59 = 0;

let check61 = 0;
let check62 = 0;
let check63 = 0;
let check64 = 0;
let check65 = 0;
let check66 = 0;
let check67 = 0;
let check68 = 0;
let check69 = 0;

let check71 = 0;
let check72 = 0;
let check73 = 0;
let check74 = 0;
let check75 = 0;
let check76 = 0;
let check77 = 0;
let check78 = 0;
let check79 = 0;

let check81 = 0;
let check82 = 0;
let check83 = 0;
let check84 = 0;
let check85 = 0;
let check86 = 0;
let check87 = 0;
let check88 = 0;
let check89 = 0;

let check91 = 0;
let check92 = 0;
let check93 = 0;
let check94 = 0;
let check95 = 0;
let check96 = 0;
let check97 = 0;
let check98 = 0;
let check99 = 0;


// declaring again variables

let again11 = 0;
let again12 = 0;
let again13 = 0;
let again14 = 0;
let again15 = 0;
let again16 = 0;
let again17 = 0;
let again18 = 0;
let again19 = 0;

let again21 = 0;
let again22 = 0;
let again23 = 0;
let again24 = 0;
let again25 = 0;
let again26 = 0;
let again27 = 0;
let again28 = 0;
let again29 = 0;

let again31 = 0;
let again32 = 0;
let again33 = 0;
let again34 = 0;
let again35 = 0;
let again36 = 0;
let again37 = 0;
let again38 = 0;
let again39 = 0;

let again41 = 0;
let again42 = 0;
let again43 = 0;
let again44 = 0;
let again45 = 0;
let again46 = 0;
let again47 = 0;
let again48 = 0;
let again49 = 0;

let again51 = 0;
let again52 = 0;
let again53 = 0;
let again54 = 0;
let again55 = 0;
let again56 = 0;
let again57 = 0;
let again58 = 0;
let again59 = 0;

let again61 = 0;
let again62 = 0;
let again63 = 0;
let again64 = 0;
let again65 = 0;
let again66 = 0;
let again67 = 0;
let again68 = 0;
let again69 = 0;

let again71 = 0;
let again72 = 0;
let again73 = 0;
let again74 = 0;
let again75 = 0;
let again76 = 0;
let again77 = 0;
let again78 = 0;
let again79 = 0;

let again81 = 0;
let again82 = 0;
let again83 = 0;
let again84 = 0;
let again85 = 0;
let again86 = 0;
let again87 = 0;
let again88 = 0;
let again89 = 0;

let again91 = 0;
let again92 = 0;
let again93 = 0;
let again94 = 0;
let again95 = 0;
let again96 = 0;
let again97 = 0;
let again98 = 0;
let again99 = 0;


// ROW 1

row11.onclick = () => {
    if (again11 == 0 && position1 == 1) {
        if (turn == "X") {
            row11.innerHTML = "X"
            row11.style.color = "#c73e1d"
            check11 = 1
        }
        if (turn == "O") {
            row11.innerHTML = "O"
            row11.style.color = "#53c14b"
            check11 = 2
        }
        changeturn()
        again11++
        specificplay1()
        wincheck1()
    }
}

row12.onclick = () => {
    if (again12 == 0 && position1 == 1) {
        if (turn == "X") {
            row12.innerHTML = "X"
            row12.style.color = "#c73e1d"
            check12 = 1
        }
        if (turn == "O") {
            row12.innerHTML = "O"
            row12.style.color = "#53c14b"
            check12 = 2
        }
        changeturn()
        again12++
        specificplay2()
        wincheck1()
    }
}

row13.onclick = () => {
    if (again13 == 0 && position1 == 1) {
        if (turn == "X") {
            row13.innerHTML = "X"
            row13.style.color = "#c73e1d"
            check13 = 1
        }
        if (turn == "O") {
            row13.innerHTML = "O"
            row13.style.color = "#53c14b"
            check13 = 2
        }
        changeturn()
        again13++
        specificplay3()
        wincheck1()
    }
}

row14.onclick = () => {
    if (again14 == 0 && position1 == 1) {
        if (turn == "X") {
            row14.innerHTML = "X";
            row14.style.color = "#c73e1d";
            check14 = 1;
        }
        if (turn == "O") {
            row14.innerHTML = "O";
            row14.style.color = "#53c14b";
            check14 = 2;
        }
        changeturn();
        again14++;
        specificplay4();
        wincheck1();
    }
}

row15.onclick = () => {
    if (again15 == 0 && position1 == 1) {
        if (turn == "X") {
            row15.innerHTML = "X";
            row15.style.color = "#c73e1d";
            check15 = 1;
        }
        if (turn == "O") {
            row15.innerHTML = "O";
            row15.style.color = "#53c14b";
            check15 = 2;
        }
        changeturn();
        again15++;
        specificplay5();
        wincheck1();
    }
}

row16.onclick = () => {
    if (again16 == 0 && position1 == 1) {
        if (turn == "X") {
            row16.innerHTML = "X";
            row16.style.color = "#c73e1d";
            check16 = 1;
        }
        if (turn == "O") {
            row16.innerHTML = "O";
            row16.style.color = "#53c14b";
            check16 = 2;
        }
        changeturn();
        again16++;
        specificplay6();
        wincheck1();
    }
}

row17.onclick = () => {
    if (again17 == 0 && position1 == 1) {
        if (turn == "X") {
            row17.innerHTML = "X";
            row17.style.color = "#c73e1d";
            check17 = 1;
        }
        if (turn == "O") {
            row17.innerHTML = "O";
            row17.style.color = "#53c14b";
            check17 = 2;
        }
        changeturn();
        again17++;
        specificplay7();
        wincheck1();
    }
}

row18.onclick = () => {
    if (again18 == 0 && position1 == 1) {
        if (turn == "X") {
            row18.innerHTML = "X";
            row18.style.color = "#c73e1d";
            check18 = 1;
        }
        if (turn == "O") {
            row18.innerHTML = "O";
            row18.style.color = "#53c14b";
            check18 = 2;
        }
        changeturn();
        again18++;
        specificplay8();
        wincheck1();
    }
}

row19.onclick = () => {
    if (again19 == 0 && position1 == 1) {
        if (turn == "X") {
            row19.innerHTML = "X";
            row19.style.color = "#c73e1d";
            check19 = 1;
        }
        if (turn == "O") {
            row19.innerHTML = "O";
            row19.style.color = "#53c14b";
            check19 = 2;
        }
        changeturn();
        again19++;
        specificplay9();
        wincheck1();
    }
}

// ROW 2

row21.onclick = () => {
    if (again21 == 0 && position2 == 1) {
        if (turn == "X") {
            row21.innerHTML = "X"
            row21.style.color = "#c73e1d"
            check21 = 1
        }
        if (turn == "O") {
            row21.innerHTML = "O"
            row21.style.color = "#53c14b"
            check21 = 2
        }
        changeturn()
        again21++
        specificplay1()
        wincheck2()
    }
}

row22.onclick = () => {
    if (again22 == 0 && position2 == 1) {
        if (turn == "X") {
            row22.innerHTML = "X";
            row22.style.color = "#c73e1d";
            check22 = 1;
        }
        if (turn == "O") {
            row22.innerHTML = "O";
            row22.style.color = "#53c14b";
            check22 = 2;
        }
        changeturn();
        again22++;
        specificplay2();
        wincheck2();
    }
}

row23.onclick = () => {
    if (again23 == 0 && position2 == 1) {
        if (turn == "X") {
            row23.innerHTML = "X";
            row23.style.color = "#c73e1d";
            check23 = 1;
        }
        if (turn == "O") {
            row23.innerHTML = "O";
            row23.style.color = "#53c14b";
            check23 = 2;
        }
        changeturn();
        again23++;
        specificplay3();
        wincheck2();
    }
}

row24.onclick = () => {
    if (again24 == 0 && position2 == 1) {
        if (turn == "X") {
            row24.innerHTML = "X";
            row24.style.color = "#c73e1d";
            check24 = 1;
        }
        if (turn == "O") {
            row24.innerHTML = "O";
            row24.style.color = "#53c14b";
            check24 = 2;
        }
        changeturn();
        again24++;
        specificplay4();
        wincheck2();
    }
}

row25.onclick = () => {
    if (again25 == 0 && position2 == 1) {
        if (turn == "X") {
            row25.innerHTML = "X";
            row25.style.color = "#c73e1d";
            check25 = 1;
        }
        if (turn == "O") {
            row25.innerHTML = "O";
            row25.style.color = "#53c14b";
            check25 = 2;
        }
        changeturn();
        again25++;
        specificplay5();
        wincheck2();
    }
}

row26.onclick = () => {
    if (again26 == 0 && position2 == 1) {
        if (turn == "X") {
            row26.innerHTML = "X";
            row26.style.color = "#c73e1d";
            check26 = 1;
        }
        if (turn == "O") {
            row26.innerHTML = "O";
            row26.style.color = "#53c14b";
            check26 = 2;
        }
        changeturn();
        again26++;
        specificplay6();
        wincheck2();
    }
}

row27.onclick = () => {
    if (again27 == 0 && position2 == 1) {
        if (turn == "X") {
            row27.innerHTML = "X";
            row27.style.color = "#c73e1d";
            check27 = 1;
        }
        if (turn == "O") {
            row27.innerHTML = "O";
            row27.style.color = "#53c14b";
            check27 = 2;
        }
        changeturn();
        again27++;
        specificplay7();
        wincheck2();
    }
}

row28.onclick = () => {
    if (again28 == 0 && position2 == 1) {
        if (turn == "X") {
            row28.innerHTML = "X";
            row28.style.color = "#c73e1d";
            check28 = 1;
        }
        if (turn == "O") {
            row28.innerHTML = "O";
            row28.style.color = "#53c14b";
            check28 = 2;
        }
        changeturn();
        again28++;
        specificplay8();
        wincheck2();
    }
}

row29.onclick = () => {
    if (again29 == 0 && position2 == 1) {
        if (turn == "X") {
            row29.innerHTML = "X";
            row29.style.color = "#c73e1d";
            check29 = 1;
        }
        if (turn == "O") {
            row29.innerHTML = "O";
            row29.style.color = "#53c14b";
            check29 = 2;
        }
        changeturn();
        again29++;
        specificplay9();
        wincheck2();
    }
}

// ROW 4

row31.onclick = () => {
    if (again31 == 0 && position3 == 1) {
        if (turn == "X") {
            row31.innerHTML = "X"
            row31.style.color = "#c73e1d"
            check31 = 1
        }
        if (turn == "O") {
            row31.innerHTML = "O"
            row31.style.color = "#53c14b"
            check31 = 2
        }
        changeturn()
        again31++
        specificplay1()
        wincheck3()
    }
}

row32.onclick = () => {
    if (again32 == 0 && position3 == 1) {
        if (turn == "X") {
            row32.innerHTML = "X";
            row32.style.color = "#c73e1d";
            check32 = 1;
        }
        if (turn == "O") {
            row32.innerHTML = "O";
            row32.style.color = "#53c14b";
            check32 = 2;
        }
        changeturn();
        again32++;
        specificplay2();
        wincheck3();
    }
}

row33.onclick = () => {
    if (again33 == 0 && position3 == 1) {
        if (turn == "X") {
            row33.innerHTML = "X";
            row33.style.color = "#c73e1d";
            check33 = 1;
        }
        if (turn == "O") {
            row33.innerHTML = "O";
            row33.style.color = "#53c14b";
            check33 = 2;
        }
        changeturn();
        again33++;
        specificplay3();
        wincheck3();
    }
}

row34.onclick = () => {
    if (again34 == 0 && position3 == 1) {
        if (turn == "X") {
            row34.innerHTML = "X";
            row34.style.color = "#c73e1d";
            check34 = 1;
        }
        if (turn == "O") {
            row34.innerHTML = "O";
            row34.style.color = "#53c14b";
            check34 = 2;
        }
        changeturn();
        again34++;
        specificplay4();
        wincheck3();
    }
}

row35.onclick = () => {
    if (again35 == 0 && position3 == 1) {
        if (turn == "X") {
            row35.innerHTML = "X";
            row35.style.color = "#c73e1d";
            check35 = 1;
        }
        if (turn == "O") {
            row35.innerHTML = "O";
            row35.style.color = "#53c14b";
            check35 = 2;
        }
        changeturn();
        again35++;
        specificplay5();
        wincheck3();
    }
}

row36.onclick = () => {
    if (again36 == 0 && position3 == 1) {
        if (turn == "X") {
            row36.innerHTML = "X";
            row36.style.color = "#c73e1d";
            check36 = 1;
        }
        if (turn == "O") {
            row36.innerHTML = "O";
            row36.style.color = "#53c14b";
            check36 = 2;
        }
        changeturn();
        again36++;
        specificplay6();
        wincheck3();
    }
}

row37.onclick = () => {
    if (again37 == 0 && position3 == 1) {
        if (turn == "X") {
            row37.innerHTML = "X";
            row37.style.color = "#c73e1d";
            check37 = 1;
        }
        if (turn == "O") {
            row37.innerHTML = "O";
            row37.style.color = "#53c14b";
            check37 = 2;
        }
        changeturn();
        again37++;
        specificplay7();
        wincheck3();
    }
}

row38.onclick = () => {
    if (again38 == 0 && position3 == 1) {
        if (turn == "X") {
            row38.innerHTML = "X";
            row38.style.color = "#c73e1d";
            check38 = 1;
        }
        if (turn == "O") {
            row38.innerHTML = "O";
            row38.style.color = "#53c14b";
            check38 = 2;
        }
        changeturn();
        again38++;
        specificplay8();
        wincheck3();
    }
}

row39.onclick = () => {
    if (again39 == 0 && position3 == 1) {
        if (turn == "X") {
            row39.innerHTML = "X";
            row39.style.color = "#c73e1d";
            check39 = 1;
        }
        if (turn == "O") {
            row39.innerHTML = "O";
            row39.style.color = "#53c14b";
            check39 = 2;
        }
        changeturn();
        again39++;
        specificplay9();
        wincheck3();
    }
}

// ROW 4 

row41.onclick = () => {
    if (again41 == 0 && position4 == 1) {
        if (turn == "X") {
            row41.innerHTML = "X"
            row41.style.color = "#c73e1d"
            check41 = 1
        }
        if (turn == "O") {
            row41.innerHTML = "O"
            row41.style.color = "#53c14b"
            check41 = 2
        }
        changeturn()
        again41++
        specificplay1()
        wincheck4()
    }
}

row42.onclick = () => {
    if (again42 == 0 && position4 == 1) {
        if (turn == "X") {
            row42.innerHTML = "X";
            row42.style.color = "#c73e1d";
            check42 = 1;
        }
        if (turn == "O") {
            row42.innerHTML = "O";
            row42.style.color = "#53c14b";
            check42 = 2;
        }
        changeturn();
        again42++;
        specificplay2();
        wincheck4();
    }
}

row43.onclick = () => {
    if (again43 == 0 && position4 == 1) {
        if (turn == "X") {
            row43.innerHTML = "X";
            row43.style.color = "#c73e1d";
            check43 = 1;
        }
        if (turn == "O") {
            row43.innerHTML = "O";
            row43.style.color = "#53c14b";
            check43 = 2;
        }
        changeturn();
        again43++;
        specificplay3();
        wincheck4();
    }
}

row44.onclick = () => {
    if (again44 == 0 && position4 == 1) {
        if (turn == "X") {
            row44.innerHTML = "X";
            row44.style.color = "#c73e1d";
            check44 = 1;
        }
        if (turn == "O") {
            row44.innerHTML = "O";
            row44.style.color = "#53c14b";
            check44 = 2;
        }
        changeturn();
        again44++;
        specificplay4();
        wincheck4();
    }
}

row45.onclick = () => {
    if (again45 == 0 && position4 == 1) {
        if (turn == "X") {
            row45.innerHTML = "X";
            row45.style.color = "#c73e1d";
            check45 = 1;
        }
        if (turn == "O") {
            row45.innerHTML = "O";
            row45.style.color = "#53c14b";
            check45 = 2;
        }
        changeturn();
        again45++;
        specificplay5();
        wincheck4();
    }
}

row46.onclick = () => {
    if (again46 == 0 && position4 == 1) {
        if (turn == "X") {
            row46.innerHTML = "X";
            row46.style.color = "#c73e1d";
            check46 = 1;
        }
        if (turn == "O") {
            row46.innerHTML = "O";
            row46.style.color = "#53c14b";
            check46 = 2;
        }
        changeturn();
        again46++;
        specificplay6();
        wincheck4();
    }
}

row47.onclick = () => {
    if (again47 == 0 && position4 == 1) {
        if (turn == "X") {
            row47.innerHTML = "X";
            row47.style.color = "#c73e1d";
            check47 = 1;
        }
        if (turn == "O") {
            row47.innerHTML = "O";
            row47.style.color = "#53c14b";
            check47 = 2;
        }
        changeturn();
        again47++;
        specificplay7();
        wincheck4();
    }
}

row48.onclick = () => {
    if (again48 == 0 && position4 == 1) {
        if (turn == "X") {
            row48.innerHTML = "X";
            row48.style.color = "#c73e1d";
            check48 = 1;
        }
        if (turn == "O") {
            row48.innerHTML = "O";
            row48.style.color = "#53c14b";
            check48 = 2;
        }
        changeturn();
        again48++;
        specificplay8();
        wincheck4();
    }
}

row49.onclick = () => {
    if (again49 == 0 && position4 == 1) {
        if (turn == "X") {
            row49.innerHTML = "X";
            row49.style.color = "#c73e1d";
            check49 = 1;
        }
        if (turn == "O") {
            row49.innerHTML = "O";
            row49.style.color = "#53c14b";
            check49 = 2;
        }
        changeturn();
        again49++;
        specificplay9();
        wincheck4();
    }
}

// ROW 5

row51.onclick = () => {
    if (again51 == 0 && position5 == 1) {
        if (turn == "X") {
            row51.innerHTML = "X";
            row51.style.color = "#c73e1d";
            check51 = 1;
        }
        if (turn == "O") {
            row51.innerHTML = "O";
            row51.style.color = "#53c14b";
            check51 = 2;
        }
        changeturn();
        again51++;
        specificplay1();
        wincheck5();
    }
}

row52.onclick = () => {
    if (again52 == 0 && position5 == 1) {
        if (turn == "X") {
            row52.innerHTML = "X";
            row52.style.color = "#c73e1d";
            check52 = 1;
        }
        if (turn == "O") {
            row52.innerHTML = "O";
            row52.style.color = "#53c14b";
            check52 = 2;
        }
        changeturn();
        again52++;
        specificplay2();
        wincheck5();
    }
}

row53.onclick = () => {
    if (again53 == 0 && position5 == 1) {
        if (turn == "X") {
            row53.innerHTML = "X";
            row53.style.color = "#c73e1d";
            check53 = 1;
        }
        if (turn == "O") {
            row53.innerHTML = "O";
            row53.style.color = "#53c14b";
            check53 = 2;
        }
        changeturn();
        again53++;
        specificplay3();
        wincheck5();
    }
}

row54.onclick = () => {
    if (again54 == 0 && position5 == 1) {
        if (turn == "X") {
            row54.innerHTML = "X";
            row54.style.color = "#c73e1d";
            check54 = 1;
        }
        if (turn == "O") {
            row54.innerHTML = "O";
            row54.style.color = "#53c14b";
            check54 = 2;
        }
        changeturn();
        again54++;
        specificplay4();
        wincheck5();
    }
}

row55.onclick = () => {
    if (again55 == 0 && position5 == 1) {
        if (turn == "X") {
            row55.innerHTML = "X";
            row55.style.color = "#c73e1d";
            check55 = 1;
        }
        if (turn == "O") {
            row55.innerHTML = "O";
            row55.style.color = "#53c14b";
            check55 = 2;
        }
        changeturn();
        again55++;
        specificplay5();
        wincheck5();
    }
}

row56.onclick = () => {
    if (again56 == 0 && position5 == 1) {
        if (turn == "X") {
            row56.innerHTML = "X";
            row56.style.color = "#c73e1d";
            check56 = 1;
        }
        if (turn == "O") {
            row56.innerHTML = "O";
            row56.style.color = "#53c14b";
            check56 = 2;
        }
        changeturn();
        again56++;
        specificplay6();
        wincheck5();
    }
}

row57.onclick = () => {
    if (again57 == 0 && position5 == 1) {
        if (turn == "X") {
            row57.innerHTML = "X";
            row57.style.color = "#c73e1d";
            check57 = 1;
        }
        if (turn == "O") {
            row57.innerHTML = "O";
            row57.style.color = "#53c14b";
            check57 = 2;
        }
        changeturn();
        again57++;
        specificplay7();
        wincheck5();
    }
}

row58.onclick = () => {
    if (again58 == 0 && position5 == 1) {
        if (turn == "X") {
            row58.innerHTML = "X";
            row58.style.color = "#c73e1d";
            check58 = 1;
        }
        if (turn == "O") {
            row58.innerHTML = "O";
            row58.style.color = "#53c14b";
            check58 = 2;
        }
        changeturn();
        again58++;
        specificplay8();
        wincheck5();
    }
}

row59.onclick = () => {
    if (again59 == 0 && position5 == 1) {
        if (turn == "X") {
            row59.innerHTML = "X";
            row59.style.color = "#c73e1d";
            check59 = 1;
        }
        if (turn == "O") {
            row59.innerHTML = "O";
            row59.style.color = "#53c14b";
            check59 = 2;
        }
        changeturn();
        again59++;
        specificplay9();
        wincheck5();
    }
}




// ROW 6

row61.onclick = () => {
    if (again61 == 0 && position6 == 1) {
        if (turn == "X") {
            row61.innerHTML = "X"
            row61.style.color = "#c73e1d"
            check61 = 1
        }
        if (turn == "O") {
            row61.innerHTML = "O"
            row61.style.color = "#53c14b"
            check61 = 2
        }
        changeturn()
        again61++
        specificplay1()
        wincheck6()
    }
}

row62.onclick = () => {
    if (again62 == 0 && position6 == 1) {
        if (turn == "X") {
            row62.innerHTML = "X";
            row62.style.color = "#c73e1d";
            check62 = 1;
        }
        if (turn == "O") {
            row62.innerHTML = "O";
            row62.style.color = "#53c14b";
            check62 = 2;
        }
        changeturn();
        again62++;
        specificplay2();
        wincheck6();
    }
}

row63.onclick = () => {
    if (again63 == 0 && position6 == 1) {
        if (turn == "X") {
            row63.innerHTML = "X";
            row63.style.color = "#c73e1d";
            check63 = 1;
        }
        if (turn == "O") {
            row63.innerHTML = "O";
            row63.style.color = "#53c14b";
            check63 = 2;
        }
        changeturn();
        again63++;
        specificplay3();
        wincheck6();
    }
}

row64.onclick = () => {
    if (again64 == 0 && position6 == 1) {
        if (turn == "X") {
            row64.innerHTML = "X";
            row64.style.color = "#c73e1d";
            check64 = 1;
        }
        if (turn == "O") {
            row64.innerHTML = "O";
            row64.style.color = "#53c14b";
            check64 = 2;
        }
        changeturn();
        again64++;
        specificplay4();
        wincheck6();
    }
}

row65.onclick = () => {
    if (again65 == 0 && position6 == 1) {
        if (turn == "X") {
            row65.innerHTML = "X";
            row65.style.color = "#c73e1d";
            check65 = 1;
        }
        if (turn == "O") {
            row65.innerHTML = "O";
            row65.style.color = "#53c14b";
            check65 = 2;
        }
        changeturn();
        again65++;
        specificplay5();
        wincheck6();
    }
}

row66.onclick = () => {
    if (again66 == 0 && position6 == 1) {
        if (turn == "X") {
            row66.innerHTML = "X";
            row66.style.color = "#c73e1d";
            check66 = 1;
        }
        if (turn == "O") {
            row66.innerHTML = "O";
            row66.style.color = "#53c14b";
            check66 = 2;
        }
        changeturn();
        again66++;
        specificplay6();
        wincheck6();
    }
}

row67.onclick = () => {
    if (again67 == 0 && position6 == 1) {
        if (turn == "X") {
            row67.innerHTML = "X";
            row67.style.color = "#c73e1d";
            check67 = 1;
        }
        if (turn == "O") {
            row67.innerHTML = "O";
            row67.style.color = "#53c14b";
            check67 = 2;
        }
        changeturn();
        again67++;
        specificplay7();
        wincheck6();
    }
}

row68.onclick = () => {
    if (again68 == 0 && position6 == 1) {
        if (turn == "X") {
            row68.innerHTML = "X";
            row68.style.color = "#c73e1d";
            check68 = 1;
        }
        if (turn == "O") {
            row68.innerHTML = "O";
            row68.style.color = "#53c14b";
            check68 = 2;
        }
        changeturn();
        again68++;
        specificplay8();
        wincheck6();
    }
}

row69.onclick = () => {
    if (again69 == 0 && position6 == 1) {
        if (turn == "X") {
            row69.innerHTML = "X";
            row69.style.color = "#c73e1d";
            check69 = 1;
        }
        if (turn == "O") {
            row69.innerHTML = "O";
            row69.style.color = "#53c14b";
            check69 = 2;
        }
        changeturn();
        again69++;
        specificplay9();
        wincheck6();
    }
}



// ROW 7 

row71.onclick = () => {
    if (again71 == 0 && position7 == 1) {
        if (turn == "X") {
            row71.innerHTML = "X";
            row71.style.color = "#c73e1d";
            check71 = 1;
        }
        if (turn == "O") {
            row71.innerHTML = "O";
            row71.style.color = "#53c14b";
            check71 = 2;
        }
        changeturn();
        again71++;
        specificplay1();
        wincheck7();
    }
}

row72.onclick = () => {
    if (again72 == 0 && position7 == 1) {
        if (turn == "X") {
            row72.innerHTML = "X";
            row72.style.color = "#c73e1d";
            check72 = 1;
        }
        if (turn == "O") {
            row72.innerHTML = "O";
            row72.style.color = "#53c14b";
            check72 = 2;
        }
        changeturn();
        again72++;
        specificplay2();
        wincheck7();
    }
}

row73.onclick = () => {
    if (again73 == 0 && position7 == 1) {
        if (turn == "X") {
            row73.innerHTML = "X";
            row73.style.color = "#c73e1d";
            check73 = 1;
        }
        if (turn == "O") {
            row73.innerHTML = "O";
            row73.style.color = "#53c14b";
            check73 = 2;
        }
        changeturn();
        again73++;
        specificplay3();
        wincheck7();
    }
}

row74.onclick = () => {
    if (again74 == 0 && position7 == 1) {
        if (turn == "X") {
            row74.innerHTML = "X";
            row74.style.color = "#c73e1d";
            check74 = 1;
        }
        if (turn == "O") {
            row74.innerHTML = "O";
            row74.style.color = "#53c14b";
            check74 = 2;
        }
        changeturn();
        again74++;
        specificplay4();
        wincheck7();
    }
}

row75.onclick = () => {
    if (again75 == 0 && position7 == 1) {
        if (turn == "X") {
            row75.innerHTML = "X";
            row75.style.color = "#c73e1d";
            check75 = 1;
        }
        if (turn == "O") {
            row75.innerHTML = "O";
            row75.style.color = "#53c14b";
            check75 = 2;
        }
        changeturn();
        again75++;
        specificplay5();
        wincheck7();
    }
}

row76.onclick = () => {
    if (again76 == 0 && position7 == 1) {
        if (turn == "X") {
            row76.innerHTML = "X";
            row76.style.color = "#c73e1d";
            check76 = 1;
        }
        if (turn == "O") {
            row76.innerHTML = "O";
            row76.style.color = "#53c14b";
            check76 = 2;
        }
        changeturn();
        again76++;
        specificplay6();
        wincheck7();
    }
}

row77.onclick = () => {
    if (again77 == 0 && position7 == 1) {
        if (turn == "X") {
            row77.innerHTML = "X";
            row77.style.color = "#c73e1d";
            check77 = 1;
        }
        if (turn == "O") {
            row77.innerHTML = "O";
            row77.style.color = "#53c14b";
            check77 = 2;
        }
        changeturn();
        again77++;
        specificplay7();
        wincheck7();
    }
}

row78.onclick = () => {
    if (again78 == 0 && position7 == 1) {
        if (turn == "X") {
            row78.innerHTML = "X";
            row78.style.color = "#c73e1d";
            check78 = 1;
        }
        if (turn == "O") {
            row78.innerHTML = "O";
            row78.style.color = "#53c14b";
            check78 = 2;
        }
        changeturn();
        again78++;
        specificplay8();
        wincheck7();
    }
}

row79.onclick = () => {
    if (again79 == 0 && position7 == 1) {
        if (turn == "X") {
            row79.innerHTML = "X";
            row79.style.color = "#c73e1d";
            check79 = 1;
        }
        if (turn == "O") {
            row79.innerHTML = "O";
            row79.style.color = "#53c14b";
            check79 = 2;
        }
        changeturn();
        again79++;
        specificplay9();
        wincheck7();
    }
}

// ROW 8

row81.onclick = () => {
    if (again81 == 0 && position8 == 1) {
        if (turn == "X") {
            row81.innerHTML = "X";
            row81.style.color = "#c73e1d";
            check81 = 1;
        }
        if (turn == "O") {
            row81.innerHTML = "O";
            row81.style.color = "#53c14b";
            check81 = 2;
        }
        changeturn();
        again81++;
        specificplay1();
        wincheck8();
    }
}

row82.onclick = () => {
    if (again82 == 0 && position8 == 1) {
        if (turn == "X") {
            row82.innerHTML = "X";
            row82.style.color = "#c73e1d";
            check82 = 1;
        }
        if (turn == "O") {
            row82.innerHTML = "O";
            row82.style.color = "#53c14b";
            check82 = 2;
        }
        changeturn();
        again82++;
        specificplay2();
        wincheck8();
    }
}

row83.onclick = () => {
    if (again83 == 0 && position8 == 1) {
        if (turn == "X") {
            row83.innerHTML = "X";
            row83.style.color = "#c73e1d";
            check83 = 1;
        }
        if (turn == "O") {
            row83.innerHTML = "O";
            row83.style.color = "#53c14b";
            check83 = 2;
        }
        changeturn();
        again83++;
        specificplay3();
        wincheck8();
    }
}

row84.onclick = () => {
    if (again84 == 0 && position8 == 1) {
        if (turn == "X") {
            row84.innerHTML = "X";
            row84.style.color = "#c73e1d";
            check84 = 1;
        }
        if (turn == "O") {
            row84.innerHTML = "O";
            row84.style.color = "#53c14b";
            check84 = 2;
        }
        changeturn();
        again84++;
        specificplay4();
        wincheck8();
    }
}

row85.onclick = () => {
    if (again85 == 0 && position8 == 1) {
        if (turn == "X") {
            row85.innerHTML = "X";
            row85.style.color = "#c73e1d";
            check85 = 1;
        }
        if (turn == "O") {
            row85.innerHTML = "O";
            row85.style.color = "#53c14b";
            check85 = 2;
        }
        changeturn();
        again85++;
        specificplay5();
        wincheck8();
    }
}

row86.onclick = () => {
    if (again86 == 0 && position8 == 1) {
        if (turn == "X") {
            row86.innerHTML = "X";
            row86.style.color = "#c73e1d";
            check86 = 1;
        }
        if (turn == "O") {
            row86.innerHTML = "O";
            row86.style.color = "#53c14b";
            check86 = 2;
        }
        changeturn();
        again86++;
        specificplay6();
        wincheck8();
    }
}

row87.onclick = () => {
    if (again87 == 0 && position8 == 1) {
        if (turn == "X") {
            row87.innerHTML = "X";
            row87.style.color = "#c73e1d";
            check87 = 1;
        }
        if (turn == "O") {
            row87.innerHTML = "O";
            row87.style.color = "#53c14b";
            check87 = 2;
        }
        changeturn();
        again87++;
        specificplay7();
        wincheck8();
    }
}

row88.onclick = () => {
    if (again88 == 0 && position8 == 1) {
        if (turn == "X") {
            row88.innerHTML = "X";
            row88.style.color = "#c73e1d";
            check88 = 1;
        }
        if (turn == "O") {
            row88.innerHTML = "O";
            row88.style.color = "#53c14b";
            check88 = 2;
        }
        changeturn();
        again88++;
        specificplay8();
        wincheck8();
    }
}

row89.onclick = () => {
    if (again89 == 0 && position8 == 1) {
        if (turn == "X") {
            row89.innerHTML = "X";
            row89.style.color = "#c73e1d";
            check89 = 1;
        }
        if (turn == "O") {
            row89.innerHTML = "O";
            row89.style.color = "#53c14b";
            check89 = 2;
        }
        changeturn();
        again89++;
        specificplay9();
        wincheck8();
    }
}

// ROW 9

row91.onclick = () => {
    if (again91 == 0 && position9 == 1) {
        if (turn == "X") {
            row91.innerHTML = "X";
            row91.style.color = "#c73e1d";
            check91 = 1;
        }
        if (turn == "O") {
            row91.innerHTML = "O";
            row91.style.color = "#53c14b";
            check91 = 2;
        }
        changeturn();
        again91++;
        specificplay1();
        wincheck9();
    }
}

row92.onclick = () => {
    if (again92 == 0 && position9 == 1) {
        if (turn == "X") {
            row92.innerHTML = "X";
            row92.style.color = "#c73e1d";
            check92 = 1;
        }
        if (turn == "O") {
            row92.innerHTML = "O";
            row92.style.color = "#53c14b";
            check92 = 2;
        }
        changeturn();
        again92++;
        specificplay2();
        wincheck9();
    }
}

row93.onclick = () => {
    if (again93 == 0 && position9 == 1) {
        if (turn == "X") {
            row93.innerHTML = "X";
            row93.style.color = "#c73e1d";
            check93 = 1;
        }
        if (turn == "O") {
            row93.innerHTML = "O";
            row93.style.color = "#53c14b";
            check93 = 2;
        }
        changeturn();
        again93++;
        specificplay3();
        wincheck9();
    }
}

row94.onclick = () => {
    if (again94 == 0 && position9 == 1) {
        if (turn == "X") {
            row94.innerHTML = "X";
            row94.style.color = "#c73e1d";
            check94 = 1;
        }
        if (turn == "O") {
            row94.innerHTML = "O";
            row94.style.color = "#53c14b";
            check94 = 2;
        }
        changeturn();
        again94++;
        specificplay4();
        wincheck9();
    }
}

row95.onclick = () => {
    if (again95 == 0 && position9 == 1) {
        if (turn == "X") {
            row95.innerHTML = "X";
            row95.style.color = "#c73e1d";
            check95 = 1;
        }
        if (turn == "O") {
            row95.innerHTML = "O";
            row95.style.color = "#53c14b";
            check95 = 2;
        }
        changeturn();
        again95++;
        specificplay5();
        wincheck9();
    }
}

row96.onclick = () => {
    if (again96 == 0 && position9 == 1) {
        if (turn == "X") {
            row96.innerHTML = "X";
            row96.style.color = "#c73e1d";
            check96 = 1;
        }
        if (turn == "O") {
            row96.innerHTML = "O";
            row96.style.color = "#53c14b";
            check96 = 2;
        }
        changeturn();
        again96++;
        specificplay6();
        wincheck9();
    }
}

row97.onclick = () => {
    if (again97 == 0 && position9 == 1) {
        if (turn == "X") {
            row97.innerHTML = "X";
            row97.style.color = "#c73e1d";
            check97 = 1;
        }
        if (turn == "O") {
            row97.innerHTML = "O";
            row97.style.color = "#53c14b";
            check97 = 2;
        }
        changeturn();
        again97++;
        specificplay7();
        wincheck9();
    }
}

row98.onclick = () => {
    if (again98 == 0 && position9 == 1) {
        if (turn == "X") {
            row98.innerHTML = "X";
            row98.style.color = "#c73e1d";
            check98 = 1;
        }
        if (turn == "O") {
            row98.innerHTML = "O";
            row98.style.color = "#53c14b";
            check98 = 2;
        }
        changeturn();
        again98++;
        specificplay8();
        wincheck9();
    }
}

row99.onclick = () => {
    if (again99 == 0 && position9 == 1) {
        if (turn == "X") {
            row99.innerHTML = "X";
            row99.style.color = "#c73e1d";
            check99 = 1;
        }
        if (turn == "O") {
            row99.innerHTML = "O";
            row99.style.color = "#53c14b";
            check99 = 2;
        }
        changeturn();
        again99++;
        specificplay9();
        wincheck9();
    }
};







// const cell1 = document.querySelectorAll(".cells");

// cell1.forEach((element, x) => {
//     element.onclick = () => {
//         position2=1
//     }
// });












// to change turn after every click

function changeturn() {
    if (turn == "X") {
        turn = "O"
    }
    else if (turn == "O") {
        turn = "X"
    }
    turntext()
}




















let mainwin1 = 0;
let mainwin2 = 0;
let mainwin3 = 0;
let mainwin4 = 0;
let mainwin5 = 0;
let mainwin6 = 0;
let mainwin7 = 0;
let mainwin8 = 0;
let mainwin9 = 0;

const winimg1 = document.querySelector(".win1");
const winimg2 = document.querySelector(".win2");
const winimg3 = document.querySelector(".win3");
const winimg4 = document.querySelector(".win4");
const winimg5 = document.querySelector(".win5");
const winimg6 = document.querySelector(".win6");
const winimg7 = document.querySelector(".win7");
const winimg8 = document.querySelector(".win8");
const winimg9 = document.querySelector(".win9");





let isdraw = 0

function gameover() {

}

function wincheck1() {
    if ((check11 == check12 && check12 == check13 && check13 == 1) ||
        (check14 == check15 && check15 == check16 && check16 == 1) ||
        (check17 == check18 && check18 == check19 && check19 == 1) ||
        (check11 == check14 && check14 == check17 && check17 == 1) ||
        (check12 == check15 && check15 == check18 && check18 == 1) ||
        (check13 == check16 && check16 == check19 && check19 == 1) ||
        (check11 == check15 && check15 == check19 && check19 == 1) ||
        (check13 == check15 && check15 == check17 && check17 == 1)) {
        mainwin1 = 1
        gameover()
        again11++
        again12++;
        again13++;
        again14++;
        again15++;
        again16++;
        again17++;
        again18++;
        again19++;
        console.log("visibile")
        winimg1.innerHTML = "X"
        winimg1.style.color = "#c73e1d"
        winimg1.classList.toggle("show")
        mainwincheck()
        isdraw++
    }

    else if ((check11 == check12 && check12 == check13 && check13 == 2) ||
        (check14 == check15 && check15 == check16 && check16 == 2) ||
        (check17 == check18 && check18 == check19 && check19 == 2) ||
        (check11 == check14 && check14 == check17 && check17 == 2) ||
        (check12 == check15 && check15 == check18 && check18 == 2) ||
        (check13 == check16 && check16 == check19 && check19 == 2) ||
        (check11 == check15 && check15 == check19 && check19 == 2) ||
        (check13 == check15 && check15 == check17 && check17 == 2)) {
        mainwin1 = 2
        gameover()
        again11++
        again12++;
        again13++;
        again14++;
        again15++;
        again16++;
        again17++;
        again18++;
        again19++;
        winimg1.innerHTML = "O"
        winimg1.style.color = "#53c14b"
        winimg1.classList.toggle("show")
        mainwincheck()

        isdraw++
    }

    else if ((again11 + again12 + again13 + again14 + again15 + again16 + again17 + again18 + again19) == 9) {
        mainwin1 = 3
        gameover()
        again11++
        again12++;
        again13++;
        again14++;
        again15++;
        again16++;
        again17++;
        again18++;
        again19++;
        winimg1.innerHTML = ""
        winimg1.style.color = "#000000"
        winimg1.classList.toggle("show")
        mainwincheck()

        isdraw++
    }
}

function wincheck2() {
    if ((check21 == check22 && check22 == check23 && check23 == 1) ||
        (check24 == check25 && check25 == check26 && check26 == 1) ||
        (check27 == check28 && check28 == check29 && check29 == 1) ||
        (check21 == check24 && check24 == check27 && check27 == 1) ||
        (check22 == check25 && check25 == check28 && check28 == 1) ||
        (check23 == check26 && check26 == check29 && check29 == 1) ||
        (check21 == check25 && check25 == check29 && check29 == 1) ||
        (check23 == check25 && check25 == check27 && check27 == 1)) {
        mainwin2 = 1;
        gameover();
        again21++;
        again22++;
        again23++;
        again24++;
        again25++;
        again26++;
        again27++;
        again28++;
        again29++;
        winimg2.innerHTML = "X";
        winimg2.style.color = "#c73e1d";
        winimg2.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check21 == check22 && check22 == check23 && check23 == 2) ||
        (check24 == check25 && check25 == check26 && check26 == 2) ||
        (check27 == check28 && check28 == check29 && check29 == 2) ||
        (check21 == check24 && check24 == check27 && check27 == 2) ||
        (check22 == check25 && check25 == check28 && check28 == 2) ||
        (check23 == check26 && check26 == check29 && check29 == 2) ||
        (check21 == check25 && check25 == check29 && check29 == 2) ||
        (check23 == check25 && check25 == check27 && check27 == 2)) {
        mainwin2 = 2;
        gameover();
        again21++;
        again22++;
        again23++;
        again24++;
        again25++;
        again26++;
        again27++;
        again28++;
        again29++;
        winimg2.innerHTML = "O";
        winimg2.style.color = "#53c14b";
        winimg2.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again21 + again22 + again23 + again24 + again25 + again26 + again27 + again28 + again29) == 9) {
        mainwin2 = 3;
        gameover();
        again21++;
        again22++;
        again23++;
        again24++;
        again25++;
        again26++;
        again27++;
        again28++;
        again29++;
        winimg2.innerHTML = "";
        winimg2.style.color = "#000000";
        winimg2.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck3() {
    if ((check31 == check32 && check32 == check33 && check33 == 1) ||
        (check34 == check35 && check35 == check36 && check36 == 1) ||
        (check37 == check38 && check38 == check39 && check39 == 1) ||
        (check31 == check34 && check34 == check37 && check37 == 1) ||
        (check32 == check35 && check35 == check38 && check38 == 1) ||
        (check33 == check36 && check36 == check39 && check39 == 1) ||
        (check31 == check35 && check35 == check39 && check39 == 1) ||
        (check33 == check35 && check35 == check37 && check37 == 1)) {
        mainwin3 = 1;
        gameover();
        again31++;
        again32++;
        again33++;
        again34++;
        again35++;
        again36++;
        again37++;
        again38++;
        again39++;
        winimg3.innerHTML = "X";
        winimg3.style.color = "#c73e1d";
        winimg3.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check31 == check32 && check32 == check33 && check33 == 2) ||
        (check34 == check35 && check35 == check36 && check36 == 2) ||
        (check37 == check38 && check38 == check39 && check39 == 2) ||
        (check31 == check34 && check34 == check37 && check37 == 2) ||
        (check32 == check35 && check35 == check38 && check38 == 2) ||
        (check33 == check36 && check36 == check39 && check39 == 2) ||
        (check31 == check35 && check35 == check39 && check39 == 2) ||
        (check33 == check35 && check35 == check37 && check37 == 2)) {
        mainwin3 = 2;
        gameover();
        again31++;
        again32++;
        again33++;
        again34++;
        again35++;
        again36++;
        again37++;
        again38++;
        again39++;
        winimg3.innerHTML = "O";
        winimg3.style.color = "#53c14b";
        winimg3.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again31 + again32 + again33 + again34 + again35 + again36 + again37 + again38 + again39) == 9) {
        mainwin3 = 3;
        gameover();
        again31++;
        again32++;
        again33++;
        again34++;
        again35++;
        again36++;
        again37++;
        again38++;
        again39++;
        winimg3.innerHTML = "";
        winimg3.style.color = "#000000";
        winimg3.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck4() {
    if ((check41 == check42 && check42 == check43 && check43 == 1) ||
        (check44 == check45 && check45 == check46 && check46 == 1) ||
        (check47 == check48 && check48 == check49 && check49 == 1) ||
        (check41 == check44 && check44 == check47 && check47 == 1) ||
        (check42 == check45 && check45 == check48 && check48 == 1) ||
        (check43 == check46 && check46 == check49 && check49 == 1) ||
        (check41 == check45 && check45 == check49 && check49 == 1) ||
        (check43 == check45 && check45 == check47 && check47 == 1)) {
        mainwin4 = 1;
        gameover();
        again41++;
        again42++;
        again43++;
        again44++;
        again45++;
        again46++;
        again47++;
        again48++;
        again49++;
        winimg4.innerHTML = "X";
        winimg4.style.color = "#c73e1d";
        winimg4.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check41 == check42 && check42 == check43 && check43 == 2) ||
        (check44 == check45 && check45 == check46 && check46 == 2) ||
        (check47 == check48 && check48 == check49 && check49 == 2) ||
        (check41 == check44 && check44 == check47 && check47 == 2) ||
        (check42 == check45 && check45 == check48 && check48 == 2) ||
        (check43 == check46 && check46 == check49 && check49 == 2) ||
        (check41 == check45 && check45 == check49 && check49 == 2) ||
        (check43 == check45 && check45 == check47 && check47 == 2)) {
        mainwin4 = 2;
        gameover();
        again41++;
        again42++;
        again43++;
        again44++;
        again45++;
        again46++;
        again47++;
        again48++;
        again49++;
        winimg4.innerHTML = "O";
        winimg4.style.color = "#53c14b";
        winimg4.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again41 + again42 + again43 + again44 + again45 + again46 + again47 + again48 + again49) == 9) {
        mainwin4 = 3;
        gameover();
        again41++;
        again42++;
        again43++;
        again44++;
        again45++;
        again46++;
        again47++;
        again48++;
        again49++;
        winimg4.innerHTML = "";
        winimg4.style.color = "#000000";
        winimg4.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck5() {
    if ((check51 == check52 && check52 == check53 && check53 == 1) ||
        (check54 == check55 && check55 == check56 && check56 == 1) ||
        (check57 == check58 && check58 == check59 && check59 == 1) ||
        (check51 == check54 && check54 == check57 && check57 == 1) ||
        (check52 == check55 && check55 == check58 && check58 == 1) ||
        (check53 == check56 && check56 == check59 && check59 == 1) ||
        (check51 == check55 && check55 == check59 && check59 == 1) ||
        (check53 == check55 && check55 == check57 && check57 == 1)) {
        mainwin5 = 1;
        gameover();
        again51++;
        again52++;
        again53++;
        again54++;
        again55++;
        again56++;
        again57++;
        again58++;
        again59++;
        winimg5.innerHTML = "X";
        winimg5.style.color = "#c73e1d";
        winimg5.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check51 == check52 && check52 == check53 && check53 == 2) ||
        (check54 == check55 && check55 == check56 && check56 == 2) ||
        (check57 == check58 && check58 == check59 && check59 == 2) ||
        (check51 == check54 && check54 == check57 && check57 == 2) ||
        (check52 == check55 && check55 == check58 && check58 == 2) ||
        (check53 == check56 && check56 == check59 && check59 == 2) ||
        (check51 == check55 && check55 == check59 && check59 == 2) ||
        (check53 == check55 && check55 == check57 && check57 == 2)) {
        mainwin5 = 2;
        gameover();
        again51++;
        again52++;
        again53++;
        again54++;
        again55++;
        again56++;
        again57++;
        again58++;
        again59++;
        winimg5.innerHTML = "O";
        winimg5.style.color = "#53c14b";
        winimg5.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again51 + again52 + again53 + again54 + again55 + again56 + again57 + again58 + again59) == 9) {
        mainwin5 = 3;
        gameover();
        again51++;
        again52++;
        again53++;
        again54++;
        again55++;
        again56++;
        again57++;
        again58++;
        again59++;
        winimg5.innerHTML = "";
        winimg5.style.color = "#000000";
        winimg5.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck6() {
    if ((check61 == check62 && check62 == check63 && check63 == 1) ||
        (check64 == check65 && check65 == check66 && check66 == 1) ||
        (check67 == check68 && check68 == check69 && check69 == 1) ||
        (check61 == check64 && check64 == check67 && check67 == 1) ||
        (check62 == check65 && check65 == check68 && check68 == 1) ||
        (check63 == check66 && check66 == check69 && check69 == 1) ||
        (check61 == check65 && check65 == check69 && check69 == 1) ||
        (check63 == check65 && check65 == check67 && check67 == 1)) {
        mainwin6 = 1;
        gameover();
        again61++;
        again62++;
        again63++;
        again64++;
        again65++;
        again66++;
        again67++;
        again68++;
        again69++;
        winimg6.innerHTML = "X";
        winimg6.style.color = "#c73e1d";
        winimg6.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check61 == check62 && check62 == check63 && check63 == 2) ||
        (check64 == check65 && check65 == check66 && check66 == 2) ||
        (check67 == check68 && check68 == check69 && check69 == 2) ||
        (check61 == check64 && check64 == check67 && check67 == 2) ||
        (check62 == check65 && check65 == check68 && check68 == 2) ||
        (check63 == check66 && check66 == check69 && check69 == 2) ||
        (check61 == check65 && check65 == check69 && check69 == 2) ||
        (check63 == check65 && check65 == check67 && check67 == 2)) {
        mainwin6 = 2;
        gameover();
        again61++;
        again62++;
        again63++;
        again64++;
        again65++;
        again66++;
        again67++;
        again68++;
        again69++;
        winimg6.innerHTML = "O";
        winimg6.style.color = "#53c14b";
        winimg6.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again61 + again62 + again63 + again64 + again65 + again66 + again67 + again68 + again69) == 9) {
        mainwin6 = 3;
        gameover();
        again61++;
        again62++;
        again63++;
        again64++;
        again65++;
        again66++;
        again67++;
        again68++;
        again69++;
        winimg6.innerHTML = "";
        winimg6.style.color = "#000000";
        winimg6.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck7() {
    if ((check71 == check72 && check72 == check73 && check73 == 1) ||
        (check74 == check75 && check75 == check76 && check76 == 1) ||
        (check77 == check78 && check78 == check79 && check79 == 1) ||
        (check71 == check74 && check74 == check77 && check77 == 1) ||
        (check72 == check75 && check75 == check78 && check78 == 1) ||
        (check73 == check76 && check76 == check79 && check79 == 1) ||
        (check71 == check75 && check75 == check79 && check79 == 1) ||
        (check73 == check75 && check75 == check77 && check77 == 1)) {
        mainwin7 = 1;
        gameover();
        again71++;
        again72++;
        again73++;
        again74++;
        again75++;
        again76++;
        again77++;
        again78++;
        again79++;
        winimg7.innerHTML = "X";
        winimg7.style.color = "#c73e1d";
        winimg7.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check71 == check72 && check72 == check73 && check73 == 2) ||
        (check74 == check75 && check75 == check76 && check76 == 2) ||
        (check77 == check78 && check78 == check79 && check79 == 2) ||
        (check71 == check74 && check74 == check77 && check77 == 2) ||
        (check72 == check75 && check75 == check78 && check78 == 2) ||
        (check73 == check76 && check76 == check79 && check79 == 2) ||
        (check71 == check75 && check75 == check79 && check79 == 2) ||
        (check73 == check75 && check75 == check77 && check77 == 2)) {
        mainwin7 = 2;
        gameover();
        again71++;
        again72++;
        again73++;
        again74++;
        again75++;
        again76++;
        again77++;
        again78++;
        again79++;
        winimg7.innerHTML = "O";
        winimg7.style.color = "#53c14b";
        winimg7.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again71 + again72 + again73 + again74 + again75 + again76 + again77 + again78 + again79) == 9) {
        mainwin7 = 3;
        gameover();
        again71++;
        again72++;
        again73++;
        again74++;
        again75++;
        again76++;
        again77++;
        again78++;
        again79++;
        winimg7.innerHTML = "";
        winimg7.style.color = "#000000";
        winimg7.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck8() {
    if ((check81 == check82 && check82 == check83 && check83 == 1) ||
        (check84 == check85 && check85 == check86 && check86 == 1) ||
        (check87 == check88 && check88 == check89 && check89 == 1) ||
        (check81 == check84 && check84 == check87 && check87 == 1) ||
        (check82 == check85 && check85 == check88 && check88 == 1) ||
        (check83 == check86 && check86 == check89 && check89 == 1) ||
        (check81 == check85 && check85 == check89 && check89 == 1) ||
        (check83 == check85 && check85 == check87 && check87 == 1)) {
        mainwin8 = 1;
        gameover();
        again81++;
        again82++;
        again83++;
        again84++;
        again85++;
        again86++;
        again87++;
        again88++;
        again89++;
        winimg8.innerHTML = "X";
        winimg8.style.color = "#c73e1d";
        winimg8.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check81 == check82 && check82 == check83 && check83 == 2) ||
        (check84 == check85 && check85 == check86 && check86 == 2) ||
        (check87 == check88 && check88 == check89 && check89 == 2) ||
        (check81 == check84 && check84 == check87 && check87 == 2) ||
        (check82 == check85 && check85 == check88 && check88 == 2) ||
        (check83 == check86 && check86 == check89 && check89 == 2) ||
        (check81 == check85 && check85 == check89 && check89 == 2) ||
        (check83 == check85 && check85 == check87 && check87 == 2)) {
        mainwin8 = 2;
        gameover();
        again81++;
        again82++;
        again83++;
        again84++;
        again85++;
        again86++;
        again87++;
        again88++;
        again89++;
        winimg8.innerHTML = "O";
        winimg8.style.color = "#53c14b";
        winimg8.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again81 + again82 + again83 + again84 + again85 + again86 + again87 + again88 + again89) == 9) {
        mainwin8 = 3;
        gameover();
        again81++;
        again82++;
        again83++;
        again84++;
        again85++;
        again86++;
        again87++;
        again88++;
        again89++;
        winimg8.innerHTML = "";
        winimg8.style.color = "#000000";
        winimg8.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

function wincheck9() {
    if ((check91 == check92 && check92 == check93 && check93 == 1) ||
        (check94 == check95 && check95 == check96 && check96 == 1) ||
        (check97 == check98 && check98 == check99 && check99 == 1) ||
        (check91 == check94 && check94 == check97 && check97 == 1) ||
        (check92 == check95 && check95 == check98 && check98 == 1) ||
        (check93 == check96 && check96 == check99 && check99 == 1) ||
        (check91 == check95 && check95 == check99 && check99 == 1) ||
        (check93 == check95 && check95 == check97 && check97 == 1)) {
        mainwin9 = 1;
        gameover();
        again91++;
        again92++;
        again93++;
        again94++;
        again95++;
        again96++;
        again97++;
        again98++;
        again99++;
        winimg9.innerHTML = "X";
        winimg9.style.color = "#c73e1d";
        winimg9.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((check91 == check92 && check92 == check93 && check93 == 2) ||
        (check94 == check95 && check95 == check96 && check96 == 2) ||
        (check97 == check98 && check98 == check99 && check99 == 2) ||
        (check91 == check94 && check94 == check97 && check97 == 2) ||
        (check92 == check95 && check95 == check98 && check98 == 2) ||
        (check93 == check96 && check96 == check99 && check99 == 2) ||
        (check91 == check95 && check95 == check99 && check99 == 2) ||
        (check93 == check95 && check95 == check97 && check97 == 2)) {
        mainwin9 = 2;
        gameover();
        again91++;
        again92++;
        again93++;
        again94++;
        again95++;
        again96++;
        again97++;
        again98++;
        again99++;
        winimg9.innerHTML = "O";
        winimg9.style.color = "#53c14b";
        winimg9.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

    else if ((again91 + again92 + again93 + again94 + again95 + again96 + again97 + again98 + again99) == 9) {
        mainwin9 = 3;
        gameover();
        again91++;
        again92++;
        again93++;
        again94++;
        again95++;
        again96++;
        again97++;
        again98++;
        again99++;
        winimg9.innerHTML = "";
        winimg9.style.color = "#000000";
        winimg9.classList.toggle("show");
        mainwincheck()
        isdraw++
    }

}

const winpop = document.querySelector(".popup1")
const losepop = document.querySelector(".popup2")
const drawpop = document.querySelector(".popup3")

const playagain = document.querySelector(".again")

playagain.onclick = () => {
    location.reload()
}

function mainwincheck() {
    console.log(isdraw, " isdraw")
    if ((mainwin1 == mainwin2 && mainwin2 == mainwin3 && mainwin3 == 1) ||
        (mainwin4 == mainwin5 && mainwin5 == mainwin6 && mainwin6 == 1) ||
        (mainwin7 == mainwin8 && mainwin8 == mainwin9 && mainwin9 == 1) ||
        (mainwin1 == mainwin4 && mainwin4 == mainwin7 && mainwin7 == 1) ||
        (mainwin2 == mainwin5 && mainwin5 == mainwin8 && mainwin8 == 1) ||
        (mainwin3 == mainwin6 && mainwin6 == mainwin9 && mainwin9 == 1) ||
        (mainwin1 == mainwin5 && mainwin5 == mainwin9 && mainwin9 == 1) ||
        (mainwin3 == mainwin5 && mainwin5 == mainwin7 && mainwin7 == 1)) {
        winpop.classList.toggle("show")
    }

    else if ((mainwin1 == mainwin2 && mainwin2 == mainwin3 && mainwin3 == 2) ||
        (mainwin4 == mainwin5 && mainwin5 == mainwin6 && mainwin6 == 2) ||
        (mainwin7 == mainwin8 && mainwin8 == mainwin9 && mainwin9 == 2) ||
        (mainwin1 == mainwin4 && mainwin4 == mainwin7 && mainwin7 == 2) ||
        (mainwin2 == mainwin5 && mainwin5 == mainwin8 && mainwin8 == 2) ||
        (mainwin3 == mainwin6 && mainwin6 == mainwin9 && mainwin9 == 2) ||
        (mainwin1 == mainwin5 && mainwin5 == mainwin9 && mainwin9 == 2) ||
        (mainwin3 == mainwin5 && mainwin5 == mainwin7 && mainwin7 == 2)) {
        losepop.classList.toggle("show")
    }

    else if (isdraw == 8) {
        console.log(isdraw)
        drawpop.classList.toggle("show")
    }
}













const everycell = document.querySelectorAll(".cells")

function specificplay() {
    everycell.forEach(element => {
        element.style.backgroundColor = "#cfcece";
    });
}

function mainwinshadow() {
    if (mainwin1 == 0) {
        position1 = 1;
    } else {
        position1 = 0;
    }

    if (mainwin2 == 0) {
        position2 = 1;
    } else {
        position2 = 0;
    }

    if (mainwin3 == 0) {
        position3 = 1;
    } else {
        position3 = 0;
    }

    if (mainwin4 == 0) {
        position4 = 1;
    } else {
        position4 = 0;
    }

    if (mainwin5 == 0) {
        position5 = 1;
    } else {
        position5 = 0;
    }

    if (mainwin6 == 0) {
        position6 = 1;
    } else {
        position6 = 0;
    }

    if (mainwin7 == 0) {
        position7 = 1;
    } else {
        position7 = 0;
    }

    if (mainwin8 == 0) {
        position8 = 1;
    } else {
        position8 = 0;
    }

    if (mainwin9 == 0) {
        position9 = 1;
    } else {
        position9 = 0;
    }


}



function specificplay1() {
    specificplay()
    if (mainwin1 == 0) {
        
        position1 = 1
        position2 = 0
        position3 = 0
        position4 = 0
        position5 = 0
        position6 = 0
        position7 = 0
        position8 = 0
        position9 = 0

        r1.classList.remove("show");

        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show");

        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    }
    else {
        r1.classList.remove("show")
        g1.classList.remove("show")
        mainwinshadow()
    }
    repshadow()
}

function specificplay2() {
    specificplay()
    if (mainwin2 == 0) {
        position1 = 0
        position2 = 1
        position3 = 0
        position4 = 0
        position5 = 0
        position6 = 0
        position7 = 0
        position8 = 0
        position9 = 0

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    }
    else {
        mainwinshadow()
    }
    repshadow()
}

function specificplay3() {
    specificplay()
    if (mainwin3 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 1;
        position4 = 0;
        position5 = 0;
        position6 = 0;
        position7 = 0;
        position8 = 0;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay4() {
    specificplay()
    if (mainwin4 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 1;
        position5 = 0;
        position6 = 0;
        position7 = 0;
        position8 = 0;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay5() {
    specificplay()
    if (mainwin5 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 0;
        position5 = 1;
        position6 = 0;
        position7 = 0;
        position8 = 0;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay6() {
    specificplay()
    if (mainwin6 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 0;
        position5 = 0;
        position6 = 1;
        position7 = 0;
        position8 = 0;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay7() {
    specificplay()
    if (mainwin7 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 0;
        position5 = 0;
        position6 = 0;
        position7 = 1;
        position8 = 0;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay8() {
    specificplay()
    if (mainwin8 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 0;
        position5 = 0;
        position6 = 0;
        position7 = 0;
        position8 = 1;
        position9 = 0;

        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");
    } else {
        mainwinshadow();
    }
    repshadow();
}

function specificplay9() {
    specificplay()
    if (mainwin9 == 0) {
        position1 = 0;
        position2 = 0;
        position3 = 0;
        position4 = 0;
        position5 = 0;
        position6 = 0;
        position7 = 0;
        position8 = 0;
        position9 = 1;


        r1.classList.remove("show")
        r2.classList.remove("show");
        r3.classList.remove("show");
        r4.classList.remove("show");
        r5.classList.remove("show");
        r6.classList.remove("show");
        r7.classList.remove("show");
        r8.classList.remove("show");
        r9.classList.remove("show");


        g1.classList.remove("show")
        g2.classList.remove("show");
        g3.classList.remove("show");
        g4.classList.remove("show");
        g5.classList.remove("show");
        g6.classList.remove("show");
        g7.classList.remove("show");
        g8.classList.remove("show");
        g9.classList.remove("show");

    } else {
        mainwinshadow();
    }
    repshadow();
}

repshadow()


function goback(){
    window.location.href = '../index.html';
}

function gorulebook(){
    console.log("rule")
    var websiteURL = "https://www.youtube.com/watch?v=37PC0bGMiTI"; 

    window.location.href = websiteURL;
}



const pos1 = document.querySelectorAll(".cell1")
const pos2 = document.querySelectorAll(".cell2")
const pos3 = document.querySelectorAll(".cell3")

const pos4 = document.querySelectorAll(".cell4")
const pos5 = document.querySelectorAll(".cell5")
const pos6 = document.querySelectorAll(".cell6")

const pos7 = document.querySelectorAll(".cell7")
const pos8 = document.querySelectorAll(".cell8")
const pos9 = document.querySelectorAll(".cell9")

// if(check11==0 && again31==0 && position3==1){
//     row31.addEventListener('mouseenter', () => {
//         // Check your condition here
//         if (check11==0 && again31==0 && turn=="X" && position3==1) {
//             position1=1
//             repshadow()
//             console.log("YAYYY!!")
//         }
//         if (check11==0 && again31==0 && turn=="O" && position3==1) {
//             position1=1
//             repshadow()
//             console.log("YAYYY!!")
//         }
//     });
    
//     row31.addEventListener('mouseleave', () => {
//         if(check11==0 && again31 && position3==1)
//         {
//             position1=0
//             repshadow()
//         }
//     });}
    
    
    
    
    
    // if(check4!=1 && check4!=2 && winstatus==false){
    //     row2_1.addEventListener('mouseenter', () => {
    //         // Check your condition here
    //         if (turn=="X" && check4!=1 && check4!=2 && winstatus==false) {
    //             row2_1.innerHTML="X"
    //             row2_1.style.color="#c73e1d"
    //         }
    //         if (turn=="O" && check4!=1 && check4!=2 && winstatus==false) {
    //             row2_1.innerHTML="O"
    //             row2_1.style.color="#53c14b"
    //         }
    //     });
        
    //     row2_1.addEventListener('mouseleave', () => {
    //         if(check4!=1 && check4!=2){
    //         row2_1.innerHTML=""
    //         row2_1.style.color="#cfcece00"}
    //     });}
