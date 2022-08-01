import { LightningElement } from 'lwc';

export default class ChildComp1 extends LightningElement {
    handleonadd(){
        // we are passing this event to parent Comp and we can get this event by name 'add'.
        this.dispatchEvent(new CustomEvent ('add'));
    }
    handleonsubstract(){
         // we are passing this event to parent Comp and we can get this event by name 'substarct'.
        this.dispatchEvent(new CustomEvent ('substarct'));
    }

    handletoAc(){
        this.dispatchEvent(new CustomEvent('getzero'));
    }

    handleonmultiply(event){
        const factor = event.target.dataset.factor;
        //we are dispactching event to parent comp with event name and passing value in Key-value pair.
        //Note:- only we can pass  key as a 'detail'.
        this.dispatchEvent(new CustomEvent('multiply',{detail:factor}));
    }
}