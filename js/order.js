let instruction_area = document.getElementById("instruction-area");
let files_area = document.getElementById("files");
let msgs = document.getElementById("msgs");


const instructions = document.getElementById("nav-instruction");
instructions.addEventListener("click", (e)=>{
e.preventDefault();
instruction_area.classList.remove("instructionclose");
files_area.classList.add("fileshide");
instructions.classList.add("active");
files.classList.remove("active");
messages.classList.remove("active");
msgs.classList.add("messages-area");

instruction_area.style.display = "block"


})
const files = document.getElementById("nav-files");
files.addEventListener("click", (e)=>{
e.preventDefault();
instruction_area.classList.add("instructionclose");
files_area.classList.remove("fileshide")
instructions.classList.remove("active");
messages.classList.remove("active");
files.classList.add("active");
msgs.classList.add("messages-area")

files_area.style.display = "block"
instruction_area.style.display="none";
msgs.style.display="none";
})


const messages = document.getElementById("nav-messages");
messages.addEventListener("click", (e)=>{
e.preventDefault();
instruction_area.classList.add("instructionclose");
files_area.classList.add("fileshide");
messages.classList.add("active");
files.classList.remove("active");
instructions.classList.remove("active");
msgs.classList.remove("messages-area")

msgs.style.display = "block"
instruction_area.style.display="none";
files_area.style.display="none";
})