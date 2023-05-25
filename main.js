// start header 

let xmark = document.querySelector('header .container .search .xmark');
let inpSearch = document.querySelector("header .container .search input");

xmark.style.display = "none";

inpSearch.onkeyup = function(){

if(inpSearch.value !== ""){
xmark.style.display = "block";

}
else{
xmark.style.display = "none";
    
}

};

xmark.addEventListener("click",function(){
 inpSearch.value = "";
 if(inpSearch.value == ""){
xmark.style.display = "none";
inpSearch.focus();
 }


});



// end header 

// start landing 

let job = document.querySelectorAll(".landing .container .images .card .jobs .job");

job.forEach((jb)=>{
    let parentJb = jb.parentElement;
    if(jb.innerHTML.split(" ").length > 1){
        for(let i = 0 ; i < jb.innerHTML.split(" ").length;i++){
            if(jb.innerHTML.split(" ")[i] !== ""){
                let sp = document.createElement("span");
                sp.setAttribute("class","job");
                sp.innerHTML = jb.innerHTML.split(" ")[i];
                parentJb.appendChild(sp);
            }

        }
        parentJb.firstElementChild.remove();
    }
    if(jb.innerHTML.trim() === ""){
        jb.remove();
    }


});


let swap = document.querySelector(".landing .container .swap");
let dots = document.querySelectorAll(".landing .container .swap .dot");
let imgs = document.querySelectorAll(".landing .container .images .card");
let imgPr = document.querySelector(".landing .container .images");


let i=0;


for(let n = 0 ; n< dots.length;n++){

dots[n].onclick = function(){

    dots.forEach((el)=>{
        el.classList.remove("active");
    });
    dots[n].classList.add("active");

    imgs.forEach((img)=>{
        img.classList.remove("active");
    });
    imgs[n].classList.add("active");


    i=n;
    if(n == 0){  
        imgPr.scrollTo(0,0);
    }
    if(window.innerWidth<992){
        if(n == 1){
            imgPr.scrollTo(200,0);
        }
        if(n == 2){
            imgPr.scrollTo(400,0);
        }
        if(n == 3){
            imgPr.scrollTo(600,0);
        }
       
        if(n == 4){
            imgPr.scrollTo(800,0);
        }
        
    }


    if(window.innerWidth>=992){
        if(n == 1){
            imgPr.scrollTo(280,0);
        }
        if(n == 2){
            imgPr.scrollTo(560,0);
        }
        if(n == 3){
            imgPr.scrollTo(840,0);
        }
       
        if(n == 4){
            imgPr.scrollTo(1120,0);
        }
         
    }
    
 
    


};
}


imgPr.onscroll = function(){
if(window.innerWidth<=400){
    if(imgPr.scrollLeft<180){
        i=0;
        dots.forEach((dot)=>{
            if(dot.classList.item("1")==="active"){
                dot.classList.remove("active");
            }
        });
    
        imgs.forEach((img)=>{
            if(img.classList.item("1")==="active"){
                img.classList.remove("active");
            }
        });
    
        dots[i].classList.add("active");
        imgs[i].classList.add("active");
    }
    
    if(imgPr.scrollLeft>=180 && imgPr.scrollLeft<380){
        i=1;
        dots.forEach((dot)=>{
            if(dot.classList.item("1")==="active"){
                dot.classList.remove("active");
            }
        });
    
        imgs.forEach((img)=>{
            if(img.classList.item("1")==="active"){
                img.classList.remove("active");
            }
        });
    
        dots[i].classList.add("active");
        imgs[i].classList.add("active");
    }
    
    if(imgPr.scrollLeft>=380 && imgPr.scrollLeft<580){
        i=2;
        dots.forEach((dot)=>{
            if(dot.classList.item("1")==="active"){
                dot.classList.remove("active");
            }
        });
    
        imgs.forEach((img)=>{
            if(img.classList.item("1")==="active"){
                img.classList.remove("active");
            }
        });
    
        dots[i].classList.add("active");
        imgs[i].classList.add("active");
    }
    
    if(imgPr.scrollLeft>=580 && imgPr.scrollLeft<630){
        i=3;
        dots.forEach((dot)=>{
            if(dot.classList.item("1")==="active"){
                dot.classList.remove("active");
            }
        });
    
        imgs.forEach((img)=>{
            if(img.classList.item("1")==="active"){
                img.classList.remove("active");
            }
        });
    
        dots[i].classList.add("active");
        imgs[i].classList.add("active");
    }
    
    if(imgPr.scrollLeft>=630){
        i=4;
        dots.forEach((dot)=>{
            if(dot.classList.item("1")==="active"){
                dot.classList.remove("active");
            }
        });
    
        imgs.forEach((img)=>{
            if(img.classList.item("1")==="active"){
                img.classList.remove("active");
            }
        });
    
        dots[i].classList.add("active");
        imgs[i].classList.add("active");
    }
}


if(window.innerWidth>400 && window.innerWidth<=600){


if(imgPr.scrollLeft<180){
    i=0;
    dots.forEach((dot)=>{
        if(dot.classList.item("1")==="active"){
            dot.classList.remove("active");
        }
    });

    imgs.forEach((img)=>{
        if(img.classList.item("1")==="active"){
            img.classList.remove("active");
        }
    });

    dots[i].classList.add("active");
    imgs[i].classList.add("active");
}

if(imgPr.scrollLeft>=180 && imgPr.scrollLeft<380){
    i=1;
    dots.forEach((dot)=>{
        if(dot.classList.item("1")==="active"){
            dot.classList.remove("active");
        }
    });

    imgs.forEach((img)=>{
        if(img.classList.item("1")==="active"){
            img.classList.remove("active");
        }
    });

    dots[i].classList.add("active");
    imgs[i].classList.add("active");
}

if(imgPr.scrollLeft>=380 && imgPr.scrollLeft<420){
    i=2;
    dots.forEach((dot)=>{
        if(dot.classList.item("1")==="active"){
            dot.classList.remove("active");
        }
    });

    imgs.forEach((img)=>{
        if(img.classList.item("1")==="active"){
            img.classList.remove("active");
        }
    });

    dots[i].classList.add("active");
    imgs[i].classList.add("active");
}

if(imgPr.scrollLeft>=420 && imgPr.scrollLeft<440){
    i=3;
    dots.forEach((dot)=>{
        if(dot.classList.item("1")==="active"){
            dot.classList.remove("active");
        }
    });

    imgs.forEach((img)=>{
        if(img.classList.item("1")==="active"){
            img.classList.remove("active");
        }
    });

    dots[i].classList.add("active");
    imgs[i].classList.add("active");
}

if(imgPr.scrollLeft>=440){
    i=4;
    dots.forEach((dot)=>{
        if(dot.classList.item("1")==="active"){
            dot.classList.remove("active");
        }
    });

    imgs.forEach((img)=>{
        if(img.classList.item("1")==="active"){
            img.classList.remove("active");
        }
    });

    dots[i].classList.add("active");
    imgs[i].classList.add("active");
}
}




};




 setInterval(() => {
 

   imgs.forEach((img)=>{
    if(img.classList.item("1")==="active"){
        img.classList.remove("active");

    }

   });
 

    dots.forEach((dot)=>{
        if(dot.classList[1] === "active"){
            dot.classList.remove("active");

        }
    });
    i++;
    if(window.innerWidth<992){
        if(i == 1){
            imgPr.scrollTo(200,0);
        }
        if(i == 2){
            imgPr.scrollTo(400,0);
        }
        if(i == 3){
            imgPr.scrollTo(600,0);
        }
       
        if(i == 4){
            imgPr.scrollTo(800,0);
        }
        if(i == dots.length){
            i=0;
            imgPr.scrollTo(0,0);
        } 
    }

    if(window.innerWidth>=992){
        if(i == 1){
            imgPr.scrollTo(280,0);
        }
        if(i == 2){
            imgPr.scrollTo(560,0);
        }
        if(i == 3){
            imgPr.scrollTo(840,0);
        }
       
        if(i == 4){
            imgPr.scrollTo(1120,0);
        }
    }
    
 
    if(i == dots.length){
        i=0;
        imgPr.scrollTo(0,0);
    }
    dots[i].classList.add("active");

    imgs[i].classList.add("active");
  
    
   
}, 4000);




let mediaIcons = document.querySelectorAll(".landing .container .images .card .person-media i");

mediaIcons.forEach((ic)=>{
ic.addEventListener("click",()=>{
window.scrollTo(0,0);
})
});


// end landing 

// start footer 

let inputsFooter = document.querySelectorAll("footer .container .contents .content-one form input");
let inputText = inputsFooter[0];
let inputSubmit = inputsFooter[1];


inputText.onkeyup = function(){
   
    if(/\w+@\w+\.\w{3,}/.test(inputText.value)){
        
        inputSubmit.style.cssText = "cursor: pointer; opacity: 1";
    }
    else{
        inputSubmit.style.cssText = "cursor: no-drop; opacity: 0.3";
       
    }

};


inputSubmit.onmouseenter = function(){
    if(/\w+@\w+\.\w{3,}/.test(inputText.value)){
    this.style.backgroundColor = "var(--primary-color)";
    }
}

inputSubmit.onmouseleave = function(){
    if(/\w+@\w+\.\w{3,}/.test(inputText.value)){
        this.style.backgroundColor = "var(--secondary-color)";
        }
}



document.forms[1].onsubmit = function(e){

if(inputSubmit.style.cursor === "no-drop"){
e.preventDefault();
    
}
};

//animated placeholder

let inputFocus = document.querySelectorAll(".contact .container form .input input,.contact .container form .input textarea");
let fakePlaceholder = document.querySelectorAll(".contact .container form .input .fake-placeholder");

for(let i = 0 ; i < inputFocus.length ; i++){
    inputFocus[i].onblur = function(){
        if(this.value !== ""){
        
            if(inputFocus[i].tagName.toLowerCase() !== "textarea"){
                fakePlaceholder[i].style.cssText = "font-size: 14px; top: 10%; transform: translateY(0)";

            }
            else{
                fakePlaceholder[i].style.cssText = "font-size: 14px; top: 10px; transform: translateY(0)"
            }
        
        }
        
        else{
            if(inputFocus[i].tagName.toLowerCase() !== "textarea"){
                fakePlaceholder[i].style.cssText = "font-size: 16px; top: 50%; transform: translateY(-50%)";

            }
            else{
                fakePlaceholder[i].style.cssText = "font-size: 16px; top: 20px; transform: translateY(0)";

            }
        }
        };
}



//update current date by system
let currentDate = document.querySelector("footer .container .end p span");
currentDate.innerHTML = new Date().getFullYear();

// end footer 

