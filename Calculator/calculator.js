let string="";
let btn=document.querySelectorAll('.button');
Array.from(btn).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='c'){
            string="";
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='M+'){
            string=string+string;
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='M-'){
            string=string-string;
            document.querySelector('input').value=string;
        }
        else{
      string=string+e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})