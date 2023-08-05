let header = document.getElementById("header")
let result = document.getElementById("result")
let decrease= document.getElementById("decrease")
let reset= document.getElementById("reset")
let increase= document.getElementById("increase")

class Counter{
    constructor(header, result, decrease, reset, increase){

        this.headerElement = header
        this.resultElement = result
        this.decreaseElement = decrease
        this.resetElement = reset
        this.increaseElement = increase

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)

        this.increaseElement.addEventListener("click",this.increase)
        this.decreaseElement.addEventListener("click",this.decrease)
        this.resetElement.addEventListener("click",this.reset)

    }

    increase() {

        this.resultElement.style.color = "green"
        this.resultElement.innerHTML = Number(this.resultElement.innerHTML) + 1

    }
    decrease() {
        if(Number(this.resultElement.innerHTML) >= 1){
            this.resultElement.style.color = "green";
        }
        else{
            this.resultElement.style.color = "red"
        }
        this.resultElement.innerHTML = Number(this.resultElement.innerHTML) - 1

    }

    reset() {
        this.resultElement.innerHTML = 0
        this.resultElement.style.color = "black"


    }

}


const myCounter = new Counter(header, result, decrease, reset,increase);
