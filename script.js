const menu=document.querySelector("#menubar");
const xmark=document.querySelector("#x-mark");
if(menu){
    const navbar=document.querySelector("#navbar");
    menu.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}
if(xmark){
    xmark.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}