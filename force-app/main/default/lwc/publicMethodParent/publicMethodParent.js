import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value;
    CheckboxSelectehandler(){
        //querySelector: Returns the first element that is a descendent of the element on which it is invoked that matches the specified group of selectors.
        const childComponent=this.template.querySelector('c-public-method-child');
      const returnMessag=  childComponent.selectCheckbox(this.value);
console.log(returnMessag);
    }
    onInputChangehandler(event){
        this.value=event.target.value;
    }
}