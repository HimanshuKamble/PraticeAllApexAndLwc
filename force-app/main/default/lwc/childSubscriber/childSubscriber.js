import { LightningElement,track,wire } from 'lwc';
import {CurrentPageReference} from 
'lightning/navigation';
import { registerListener } from 'c/pubsub';
export default class ChildSubscriber extends LightningElement {
    viewmessage='';
    @wire(CurrentPageReference) pageRef;
    connectedCallback(){
        //registerListener = (eventName, callback, thisArg)
        // event name as like we are passing in parentPublisher.
        // this.showDetail contain values those are getting from parentPublisher to registerListener in event name.
        registerListener("AnyName_ParentPublisher",
        this.showDetails,this)
    }
    //getting value in showdetail we can store in our component property variable.
    //thats y we are providing showdeatils contain data to viewallmessage.
    showDetails(data){
        this.viewmessage=data;
    }
}