
function setName(){
    localStorage.myName = document.getElementById("name").value;
    document.getElementById("my-name").value = localStorage.myName;
}

function setBoard(){
    localStorage.myBoard = document.getElementById("board").value;
    document.getElementById("my-board").value = localStorage.myBoard;
}

function storeChoice(){
    if(localStorage.myName.length === 0 && localStorage.myBoard.length === 0){
        localStorage.myName = "";
        localStorage.myBoard = "";
        document.getElementById("likes").style.setProperty("visible", "none");
    }else{
        document.getElementById("my-name").value = localStorage.myName;
        document.getElementById("my-board").value = localStorage.myBoard;
    }
}