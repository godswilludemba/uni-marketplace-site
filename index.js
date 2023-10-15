let primaryNav = document.querySelector('.nav-ul');
let navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', ()=>{
let visibility = primaryNav.getAttribute('data-visible');
if(visibility === "false"){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
}else{
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);

}
})