import { LightningElement, api } from 'lwc';

export default class GetterChild extends LightningElement {
  name;

    set title(value){
        this.name=value.toUpperCase();
    }
    get getstate(){
        return this.name;
    }
}