function showDropDown()
{
    var dropDown=document.getElementById("mobTabDropdown");
    dropDown.classList.toggle("show");
    dropDown.style.animation="none";
    dropDown.style.animation="inOut 1s forwards";
}
function closeDropDown()
{
    var dropDown=document.getElementById("mobTabDropdown");
    dropDown.style.animation="none";
    dropDown.style.animation="outIn 1s forwards";
}

var slideIndex = 0;
coverSlider(slideIndex);
function plus(n) 
{
    coverSlider(slideIndex += n);
    console.log(slideIndex)
}
function coverSlider(n)
{
    var slides=document.getElementsByClassName("coverSlids");
    var dots=document.getElementsByClassName("dot");
    var i;
    if (n > slides.length-1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
        dots[i].style.opacity="0.5";
    }
    slides[slideIndex].style.display="block";
    dots[slideIndex].style.opacity="1";
}
autoCoverSlider()
function autoCoverSlider()
{
    coverSlider(slideIndex);
    slideIndex++;
    setTimeout(autoCoverSlider,5000);
}

var strengthIndex = 0;
coverSlider(strengthIndex);
function plus(n) 
{
    strengthSlider(strengthIndex += n);
    console.log(strengthIndex)
}
function strengthSlider(n)
{
    var slides=document.getElementsByClassName("clients");
    var slides1=document.getElementsByClassName("latest");
    var i;
    if (n > slides.length-1) {strengthIndex = 0}
    if (n < 0) {strengthIndex = slides.length-1}
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
        slides1[i].style.display="none";
    }
    slides[strengthIndex].style.display="block";
    slides1[strengthIndex].style.display="block";
}
autostrengthSlider()
function autostrengthSlider()
{
    strengthSlider(strengthIndex);
    strengthIndex++;
    setTimeout(autostrengthSlider,5000);
}