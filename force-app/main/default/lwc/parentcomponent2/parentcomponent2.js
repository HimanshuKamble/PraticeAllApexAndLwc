import { LightningElement } from 'lwc';

export default class Parentcomponent2 extends LightningElement {
    buttonevent(){
        this.template.querySelector("c-childcomponent2").anynamefunction();
    }
}