class Counter  {
    value:number
    constructor(value:number) {
        this.value = value
    }
    counterUp() :void {
        this.value++
        this.displayValue();
    }
    counterdown() :void{
        this.value--
        this.displayValue();
    }
    displayValue() :void {
        const value = document.getElementById('counter') as HTMLElement
        value.textContent = this.value.toString()
        
    }
}

const counter = new Counter(0)

document.getElementById('increment')?.addEventListener('click' , () =>{
    counter.counterUp()
})
document.getElementById('decrement')?.addEventListener('click' , () => {
    counter.counterdown()
})