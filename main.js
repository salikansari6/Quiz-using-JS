var questions=[{
    question:" Grand Central Terminal, Park Avenue, New York is the world's",
    options:["largest railway station","highest railway station","longest railway station","None of the above"],
    answer:[1,0,0,0]
},
{
    question:" Entomology is the science that studies",
    options:["Behavior of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks"],
    answer:[0,1,0,0]
},
{
    question:" Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    options:["Asia","Africa","Europe","Australia"],
    answer:[0,1,0,0]
},
{
    question:"Garampani sanctuary is located at ",
    options:["Junagarh, Gujarat","Diphu, Assam","Gangtok Sikkim","Kohima, Nagaland "],
    answer:[0,1,0,0]
},
{
    question:"For which of the following disciplines is Nobel Prize awarded?",
    options:["Physics and Chemistry","Physiology or Medicine","Literaure,Peace and Economics","All of the above"],
    answer:[0,0,0,1]
},
{
    question:"Hitler party which came into power in 1933 is known as  ",
    options:["Labour Party","Nazi Party","Ku-Klux-Klan","Democratic Party"],
    answer:[0,1,0,0]
},
{
    question:"FFC stands for ",
    options:["Foreign Finance Corporation","Film Finance Corporation","Federation of Football Council","None of the above"],
    answer:[0,1,0,0]
},
{
    question: "Fastest shorthand writer was",
    options:["Dr. G. D. Bist","	J.R.D. Tata","J.M. Tagore","Khudada Khan "],
    answer:[0,1,0,0]
},
{
    question:"Epsom (England) is the place associated with ",
    options:["Horse racing","Polo","Shooting","Snooker "],
    answer:[1,0,0,0]
},
{
    question:"First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted ",
    options:["1967","1968","1958","1922 "],
    answer:[1,0,0,0]
},
{
    question:"Galileo was an Italian astronomer who ",
    options:["developed the telescope","discovered four satellites of Jupiter","discovered that the movement of pendulum produces a regular time measurement","All of the above "],
    answer:[0,0,0,1]
},
{
    question:"Habeas Corpus Act 1679 ",
    options:["states that no one was to be imprisoned without a writ or warrant stating the charge against him","provided facilities to a prisoner to obtain either speedy trial or release in bail","safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders","All of the above"],
    answer:[0,0,0,1]
},
{
    question:"Exposure to sunlight helps a person improve his health because ",
    options:["The infrared light kills bacteria in the body","resistance power increases","the pigment cells in the skin get stimulated and produce a healthy tan","the ultraviolet rays convert skin oil into Vitamin D "],
    answer:[0,0,0,1]
},
{
    question:"Golf player Vijay Singh belongs to which country? ",
    options:["Junagarh, Gujarat","Diphu, Assam","Gangtok Sikkim","Kohima, Nagaland "],
    answer:[0,1,0,0]
},
{
    question:"Which is the largest country out of the given? ",
    options:["USA","Fiji","India","UK"],
    answer:[1,0,0,0]
},
{
    question:"First Afghan War took place in ",
    options:["1839","1843","1833","1848 "],
    answer:[1,0,0,0]
},
{
    question:"Gulf cooperation council was originally formed by ",
    options:["Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and United Arab Emirates","Second World Nations","Third World Nations","Fourth World Nations "],
    answer:[1,0,0,0]
},
{
    question:"First China War was fought between ",
    options:["China and Britain","China and France","China and Egypt","China and Greek"],
    answer:[1,0,0,0]
},
{
    question:"Friction can be reduced by changing fromt ",
    options:["sliding to rolling","rolling to sliding","potential energy to kinetic energy","dynamic to static "],
    answer:[1,0,0,0]
},
{
    question:" The ozone layer restricts",
    options:["Visible light","Infrared radiation","X-rays and gamma rays","Ultraviolet radiation"],
    answer:[0,0,0,1]
}



]


function renderQuestion(){


    
    
    
    let container=document.querySelector("form")

    for(no=0;no<5;no++){
        let randomQuestionNo=Math.round(Math.random()*19)

        container.innerHTML+=`
        <div class="row my-5 d-flex justify-content-center">
                <div class="col-12 rounded bg-info p-3 text-white h5 question${no} text-center "></div>
                <div class="col-md-5 col-12 font-weight-bold text-dark rounded m-2 bg-warning p-3 0 text-justify"><span><input type="radio"  class="radio"  name="option${no}" value="option1">A.   &nbsp;&nbsp;<label class="options${no}" for="option1"></label></span></div>
                <div class="col-md-5 col-12 font-weight-bold text-dark rounded m-2 bg-warning p-3 1 text-justify"><span><input type="radio"  class="radio"  name="option${no}" value="option2">B.   &nbsp;&nbsp;<label class="options${no}" for="option2"></label></span></div>
                <div class="col-md-5 col-12 font-weight-bold text-dark rounded m-2 bg-warning p-3 2 text-justify"><span><input type="radio"  class="radio" name="option${no}" value="option3">C.   &nbsp;&nbsp;<label class="options${no}" for="option3"></label></span></div>
                <div class="col-md-5 col-12 font-weight-bold text-dark rounded m-2 bg-warning p-3 3 text-justify"><span><input type="radio" class="radio"  name="option${no}" value="option4">D.   &nbsp;&nbsp;<label class="options${no}" for="option4"></label></span></div>
                <div class="col-md-8 col-11 correct-answer font-weight-bold d-none rounded m-2 text-white bg-success p-3 3 text-justify"></div>
              </div>
        `



        
        document.querySelector(`.question${no}`).innerHTML=no+1+". "+questions[randomQuestionNo].question;
         optionsDOM=document.querySelectorAll(`.options${no}`)
         




        for(i=0;i<optionsDOM.length;i++)
        {
            optionsDOM[i].innerHTML+=questions[randomQuestionNo].options[i];
            let correctAnswer=questions[randomQuestionNo].answer.indexOf(1);
            optionsDOM[correctAnswer].classList.add("answer")
            
            optionsDOM[correctAnswer].parentNode.parentNode.parentNode.lastElementChild.innerHTML=`The correct answer is ${questions[randomQuestionNo].options[correctAnswer]}`


            

        
            
            


            



            // optionsDOM[i].addEventListener('click',function checkAnswer(e){
            //     console.log(e.target)
            //     if(e.target.classList.contains(answer)){
            //         e.target.classList.add("bg-primary"); 
            //         score++;
            //     }
        
            //     else
            //     {
            //         e.target.classList.add("bg-danger")
            //     }
            
            
            // }
            
            
            // );

        }


        
    
        
    
   
    }
    
    
    let score=0;
 
    let form=document.querySelector("#form")

    form.addEventListener('submit',function(e){
        e.preventDefault();
        let displayAnswer=document.querySelectorAll(".correct-answer")
        for(dispanswer of displayAnswer){
            dispanswer.classList.remove("d-none")
        }
        let radios=document.querySelectorAll('input[type="radio"]')
    // console.log(radios);
    for(radio of radios){
        if(radio.checked)
        {
            if(radio.nextElementSibling.classList.contains("answer")){

                console.log(++score)

            }
        }
        
    }
        let modal=document.querySelector(".modal-body")

        score<3?modal.innerHTML=`Oops! You can try again,Your score is ${score}`:modal.innerHTML=`Well done! Your score is ${score} out of 5`

        
        let playAgain=document.querySelector("#play-again")
    playAgain.addEventListener('click',function(){
        

    
            location.reload();


       


    })

    let close=document.querySelector("#close")
    close.addEventListener('click',function(){
        document.querySelector("#submit").setAttribute("disabled",true)


    })


       
})

   
    
    
    }    



    
 








    
    renderQuestion()



   

