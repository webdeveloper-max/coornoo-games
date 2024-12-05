


    
  


  
  function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

         
         
  const txts=document.querySelector(".animate-text").children,
  txtsLen=txts.length;
let index=0;
const textInTimer=3000,
   textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
 txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
   txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

 if(index == txtsLen-1){
     index=0;
   }
  else{
      index++;
    }
   animateText();
},textInTimer); 
}

window.onload=animateText;

let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }

        function myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");
        
          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
          }
        }

        function sendMail(){
          let params={
              name:document.getElementById("name").value="",
              email:document.getElementById("email").value="",
              message:document.getElementById("message").value=""
          }
          emailjs.send("service_evwe37h", "template_kvoxk3j", params).then((res)=>{
              console.log(res);
              alert("your message sent successfully!")
      
          })
          .catch(err=>console.log(err))
      }
            
         
         
   