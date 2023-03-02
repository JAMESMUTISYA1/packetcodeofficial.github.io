const message = document.getElementById("send-messagearea");
const close = document.getElementById("closemessage");
const cancel = document.getElementById("cancelmessage");

const sendmessage = document.getElementById("send-message");
sendmessage.addEventListener("click", (e)=>{
e.preventDefault();
message.classList.add("send-meslsage-visibe")
})

close.addEventListener("click", (e)=>{
e.preventDefault();
message.classList.remove("send-meslsage-visibe")
})

cancel.addEventListener("click", (e)=>{
    e.preventDefault();
    message.classList.remove("send-meslsage-visibe");
})

