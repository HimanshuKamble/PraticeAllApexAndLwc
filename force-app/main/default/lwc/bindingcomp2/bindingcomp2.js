import { LightningElement } from 'lwc';

export default class Bindingcomp2 extends LightningElement {
    empname;
    empphone;
    empage;
    FullName ='Enter Full Name';

    empnamehandller(event){
        this.empname=event.target.value;
    }
    empphonehandller(event){
        this.empphone=event.target.value;
    }
    empagehandller(event){
        this.empage=event.target.value;
    }
}