var totalForm = document.getElementById('forms');
var errorMessage = document.getElementsByClassName('error');
var show = document.getElementById('pop');

totalForm.addEventListener("submit", element =>{
    let name = totalForm['name'].value;
    if(name == ""){
        errorMessage[0].innerHTML="Enter your Name";
    }

    let phoneNumber = totalForm['phno'].value;
    if(phoneNumber==""){
        errorMessage[1].innerHTML="Enter a Phone Number";
    }
    else if(phoneNumber.length !=10){
        errorMessage[1].innerHTML="Enter a Valid Phone Number";
    }

    let city = totalForm['city'].value;
    if(city==""){
        errorMessage[2].innerHTML="Enter a City Name";
    }

    if(name!="" || phoneNumber.length==10 || city!=""){
        show.classList.add("open");
    } 
}
)
    

