import { LightningElement } from 'lwc';

export default class ReturningAndArrowComponent extends LightningElement {
    connectedCallback(){
        let calldividefunction = this.dividefuction (10,2);
        window.alert("calldividefunction"+":--"+calldividefunction); 
    } 
  /**  This Is Normal function
    dividefuction(divident,divisor){
        return(divident/divisor);
    }*/

    /**This is Arrow Function */
    dividefuction=(divident,divisor)=>{
        return (divident/divisor);
    }
}