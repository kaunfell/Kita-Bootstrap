// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()*/
      


      const serviceID = "service_0acfy3t";
      const templateID = "template_icdvzcd";
      emailjs.init("4Dd8EVBLCuJ4_OKBJ");



      //const myModal = document.getElementById("#myModal");

//Sends email
        
function onSubmit(event, token){
  

  const form = document.getElementById("myForm");
  if (!form.checkValidity()) {
    // If the form is not valid (missing required fields), return and don't proceed
    form.reportValidity();
    return;
  }

  document.getElementById("myForm").submit(); 
  //checkProperties(event, token)

}


        function checkProperties(token) {
          //event.preventDefault();


          const remailArea =  document.querySelector("#remail");

          const params = {
            email : document.querySelector("#email").value,
            remail : document.querySelector("#remail").value,
            name : document.querySelector("#nameOrganization").value,
            subject: document.querySelector("#subject").value,
            question: document.querySelector("#question").value,
            recaptchaToken: token

          }
  

          
          for (const key in params) {
              if (params[key] === null || params[key] === ""){
                //alert("fill!");
                return;
              }
            }    

            if(params.email !== params.remail){

                remailArea.style.border = "1px solid red";
                setTimeout(() => {
                  remailArea.style.border = "";  
                }, 4000); 
               
                return;
              }

          

          sendMail(params, token)

        }

/*
        function onSubmit(token, event) {
          document.getElementById("myForm").submit();
          sendMail(event);
        } */
        
      //function to emailjs
      function sendMail(params,token){
        //event.preventDefault();
        console.log("Token:"); // Log the token to check if it's passed correctly
  
        const submitButton = document.getElementById("submitButton");
        const myModal = new bootstrap.Modal(document.getElementById("myModal"));
//      emailjs.send(serviceID,templateID, params).then(function(resp){
  submitButton.style.backgroundColor = "green";
       // document.getElementById("myForm").reset(); 

  
        document.getElementById("myForm").submit(); 
        myModal.show();

        


      }
    
    
   
