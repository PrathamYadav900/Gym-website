let heightInput = document.querySelector('.Height')
let weightInput = document.querySelector('.Weight')
let CalculateButton = document.querySelector(".calculate")
let statement = document.querySelector(".result-statement");
let result = document.querySelector("#result")

let height , weight , BMI , height_in_meters;

CalculateButton.addEventListener("click", ()=>{
     height = heightInput.value;
     height_in_meters = height/100;
     weight = weightInput.value;
     BMI = weight/(height_in_meters**2);
     result.value = BMI;
    
     if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
})
