import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 
'lightning/navigation'
import { fireEvent } from 'c/pubsub';
export default class ParentPublisher extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    handleonchnage(event){
        //passing parameter to fireevent.
        //fireEvent = (pageRef, eventName, payload)
   fireEvent(this.pageRef,"AnyName_ParentPublisher",event.target.value)
   // we are giving value to the pubsub component and pubsub provide those value to registerListener event in pubsub.
    }
}