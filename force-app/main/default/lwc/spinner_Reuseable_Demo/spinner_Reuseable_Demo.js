import { LightningElement } from 'lwc';

export default class Spinner_Reuseable_Demo extends LightningElement {
    showone = false;
    showtwo = false;
    showthree = false;

   
    handleonclick(event){
        const {name} = event.target;
       this[name] = true ;
       let timer = window.setTimeout(()=>{
        this[name] = false
        window.clearTimeout(timer)
       },5000)
    }
}