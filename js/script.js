document.querySelector('[data-menu-open]').addEventListener('click', function(){
   document.querySelector('[data-nav]').style.display = "block";
})

document.querySelector('[data-menu-close]').addEventListener('click', function(){
    document.querySelector('[data-nav]').style.display = "none";
})