import { LightningElement } from 'lwc';

export default class ParentComp1 extends LightningElement {
    Counter=0;

    handleCounterAdd(){
        this.Counter++
    }
    handleCounterSubstact(){
        this.Counter--
    }

    handleonAc(){
        this.Counter=0;
    }

    handleCounterMultiply(event){
        // we are wright event in that case when any valu we want to get from child component and we are try 
        // to access those value to parent component we can use.
        // or suppose in same component we want any tag value to variable taht time also we use .
        // in this senario we are pass the value fro child in the for of key value pair like"'datail:factor'"
        // detail can store the value of factor in child component. those detail work as key in prent .
        // those detail we  gave value in factor var in parent component like "const factor=event.datail;".
        const factor=event.detail;
        this.Counter=this.Counter*factor;
        //'factor' is 2 or 3 from child we click 2x that time factor value is 2 & if 3x then factor val is 3.

    }
}