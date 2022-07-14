import { LightningElement } from 'lwc';

export default class IFEleseCompnent2 extends LightningElement {
    name;
    age;
    sallary;
    show ='true';
     
    namehandler(event){
        this.name=event.target.value;
    }
    agehandler(event){
        this.age=event.target.value;
    }
    sallryhandler(event){
        this.sallary=event.target.value;
    }
    
    handleClick(event){
        this.show=false;
    }
}