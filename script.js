const inputbox=document.getElementById('input-box');
const texts=document.querySelector('.texts');

function add(){
    if(inputbox.value==""){
        alert("Insert some data in the Input bar");
    }
    else{
        let new_element=document.createElement("ul");
        new_element.innerHTML=`${inputbox.value} <i class="fa-solid fa-xmark"></i>`;
        texts.appendChild(new_element);
        inputbox.value="";
        new_element.querySelector("i").addEventListener('click',remove);
        function remove(){
            new_element.remove();
        }
        // let div=documnet.createElement("div");
        // div.innerHTML="Remove";
        // new_element.appendChild(div);
    }
}