
    let open1=document.getElementById('open')
    let menu=document.querySelector('#main')
    menu.style.display="none"
    
    open1.addEventListener('click',()=>{
        if(menu.style.display==="none"){
            menu.style.display='inline-block'
        }
        else if(menu.style.display==='inline-block'){
               menu.style.display='none'
        }
    })
