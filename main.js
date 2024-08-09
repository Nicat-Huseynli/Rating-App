const rateElements = document.querySelectorAll(".rate")
const showRate = document.querySelector(".show-rate");

rateElements.forEach(rate => {
        rate.addEventListener("click", function(){

            if(rate.classList.contains("active")){
                rate.classList.remove("active")
                showRate.textContent =  "0";
                return  
            } 

            rateElements.forEach(rate => rate.classList.remove("active"))

            rate.classList.add("active")

            showRate.textContent = rate.textContent;
        })
})


const submitBtn = document.querySelector(".submit-btn")
const ratePart = document.querySelector(".rate-part")
const resultPart = document.querySelector(".result-part")

submitBtn.addEventListener("click", function(){
    ratePart.style.display = "none"
    resultPart.style.display = "flex"
})