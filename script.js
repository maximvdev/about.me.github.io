const form = document.querySelector("form");

function sendEmail () {

    var name = document.getElementById("name").value;
	

    var subject = document.getElementById("subject").value;
	

    var message = document.getElementById("message").value;
	

    var email = document.getElementById("email").value;
	

    var phone = document.getElementById("phone").value;

    const bodyMessage = `Full name: ${name}<br> Email: ${email}
    <br> Phone Number: ${phone}<br> Message: ${message}`;
    

    if(checkInputs() == 1){
        return
    }

    
    

    Email.send({
        SecureToken:"743cf008-41cb-444a-bb28-ecd87eb96928",
        To : 'maxi.mv.dev001@gmail.com',
        From : "maxi.mv.dev001@gmail.com",
        Subject : subject,
        Body : bodyMessage,
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Succes!",
                text: "Message Sent!",
                icon: "success"
              });
        }
      }
    );
    
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            return 1;
        }
        
        item.addEventListener("keyup", () => { 
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
                
            } 
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                
            }
        });

    }
}


form.addEventListener("submit", (e) => { 
    e.preventDefault();
    

    sendEmail();
});



