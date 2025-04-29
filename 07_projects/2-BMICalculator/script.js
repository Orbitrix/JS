const form = document.querySelector("form")

form.addEventListener("click", function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("results")

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valed height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valed height ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`
    }
})