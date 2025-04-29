# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Orbitrix")
const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

// console.log(btn);
// console.log(body);

btn.forEach(function(button){
    // console.log(button);
    button.addEventListener("click", function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        
    })
})

```

## Project 2

```javascript
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

```

## Project 3

```javascript

let clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()

    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```