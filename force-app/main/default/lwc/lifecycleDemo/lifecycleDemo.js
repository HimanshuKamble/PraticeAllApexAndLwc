import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    
constructor(){
    super();
    console.log('Constructor Called');
    window.alert('Constructor Called');
}
connectedCallback(){
    console.log('Component Connected Callback is called');
    window.alert('Component Connected Callback is called');
}
renderedCallback(){
    console.log('Component Rendered Callback is called');
    window.alert('Component Rendered Callback is called');
}
disconnectedCallback(){
    console.log('Component DisConnected Callback is called');
    window.alert('Component DisConnected Callback is called');
}
  
}