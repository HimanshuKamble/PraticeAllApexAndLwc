import { LightningElement } from 'lwc';

export default class Parentcmp1 extends LightningElement {
    getcounterval=0;

    handleonchange(event){
        this.getcounterval=event.target.value;
    }
    handleClick(event){
        //In That we are call method from child cmp by this way. 
        //component name . method name we must decorate those  method in child as a @api 
        this.template.querySelector('c-childcmp1').addmethod();
    }
    handleClickotAc(event){
        this.getcounterval=0;
    }
}