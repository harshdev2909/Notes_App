const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
    console.log(localStorage);
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    console.log(localStorage);
}
creatBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p")
    let image = document.createElement("img")
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    image.src="./delete.png";
    notesContainer.appendChild(inputBox).appendChild(image);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})