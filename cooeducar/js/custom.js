//alert("carregou js")
document.querySelector('#menu-btn').addEventListener('click', function(){
    //console.log('MENU');

    document.querySelector('#menu-site').classList.toggle("active");
    document.querySelector('#menu-icon').classList.toggle("active");
});