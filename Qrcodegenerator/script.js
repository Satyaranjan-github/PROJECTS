let qtext=document.getElementById("qrtext")
let gen =document.getElementById("generator")
let qimg=document.getElementById("qrimg")


function qrcode(){
   if(qtext.value==""){
    qtext.classList.add("error")
   }
   else{
    qimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qtext.value
    btn.innerHTML="Regenerate QR"
   }
}