class Pets{
    name;
    energy = 50;
    hunger = 50;

    constructor(name, hunger, energy){
        this.name = name;
        this.hunger = hunger;
        this.energy = energy;
    }

    eat(){
        console.log('eat');
    } //increases energy, reduse hunger
    sleep(){
        console.log('sleep');
    } //increate energy
    play(){
        console.log('play');
    } // decrease energer, increases hunger
}



class Dog extends Pets{
    constructor(name, hunger, energy, breed){
        super(name, hunger, energy);
        this.breed = breed;
    }
}

class Buttons{
    constructor(id){
        this.id = id;
    }
    getButts(){
        const divElement = document.getElementById(this.id);
        const buttons = divElement.querySelectorAll('button');
        for (const button of buttons){
            console.log(button);
            button.addEventListener('click', ()=>{console.log('asdf')})
        }

    }
}

class GetDataFromDom{
    constructor (liElement) {
        this.liElement = liElement;
    }

    getData(){
        const divElement = document.getElementById(this.liElement)
        const name = divElement.querySelector('h1').textContent;
        const breed = divElement.querySelector('h2').textContent;
        const energy = divElement.querySelector('#energy').value;
        const hunger =divElement.querySelector('#hunger').value;
        
        const sam = new Dog(name, energy, hunger, breed);
        console.log(sam);
    }
}

class PetList{
    getList(){
        const list = document.querySelectorAll('#pets li');
        for (const li of list){
            const divElement = li.querySelector('div');
            const newdata = new GetDataFromDom(divElement.id);
            newdata.getData();


            const callButtons = new Buttons(divElement.id);
            callButtons.getButts();

        }
    }
}

class App{
    static init(){
        const newdata = new PetList;
        newdata.getList();


    }
}

App.init();

