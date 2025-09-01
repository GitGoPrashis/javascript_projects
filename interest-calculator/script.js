// creating the interest calculation function

function calculate(){
    const principalInput = document.getElementById("principal");
     const interestlInput = document.getElementById("interest");
      const timeInput = document.getElementById("time");
       const totalAmount = document.getElementById("total-amount");

       let principal = Number(principalInput.value);
       let interest = Number(interestlInput.value/100);
       let time = Number(timeInput.value);

       const result = principal * Math.pow((1 + interest / 1), 1 * time)

       totalAmount.textContent = result
    //    console.log(result)

}