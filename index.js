'use strict'
function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setViewportHeight();
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0,0);

    const navigationDiv = document.querySelector('.navigation');
    const rightContainer=document.querySelector('.rightContainer');
    const sections=rightContainer.querySelectorAll('.text');
    const ABME = document.getElementById("linkToPage");
    const abmeID = "aboutB";
    const menuIcon = document.getElementById("menu");
    const nav = document.getElementById("navigation")
    function show(idToShow){
        nav.classList.toggle("show")
        document.body.classList.toggle("menu-open");
        sections.forEach(section =>{
            if(!section.classList.contains('hidden')){
                section.classList.add('hidden');
            }
            if(section.id===idToShow){
                section.classList.remove('hidden');
            }
        })
    }
    
    window.addEventListener('resize', setViewportHeight());
    

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("show");
        document.body.classList.toggle("menu-open");
    });
    if (navigationDiv) {
        
        const buttons = navigationDiv.querySelectorAll('button');
        
        ABME.addEventListener('click',function(){
            buttons.forEach(button => {
                    if(button.classList.contains('disabled')){
                        button.classList.add('active');
                        button.classList.remove('disabled');
                    }
                    if(document.getElementById(abmeID).classList.contains('active')){
                        document.getElementById(abmeID).classList.remove('active');
                        document.getElementById(abmeID).classList.add('disabled');
                    }
                window.scrollTo(0,0);
                show(abmeID.slice(0,-1))

                    
                })
        })
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {                
                buttons.forEach(button => {
                    if(this != button && button.classList.contains('disabled')){
                        button.classList.add('active');
                        button.classList.remove('disabled');
                    }

                    
                })

                
                if(this.classList.contains("active")){
                    this.classList.remove("active")
                    this.classList.add("disabled")
                }
                window.scrollTo(0,0);
                let buttonId=this.id;
                show(buttonId.slice(0,-1))
                    
            });
            
        });
    } else {
        console.error('Navigation div not found.');
    }
});