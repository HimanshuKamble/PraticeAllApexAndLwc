import { api, LightningElement } from 'lwc';

export default class Childcmp1 extends LightningElement {
   //Note: when we use setter&getter method that time we not decorate variable as @api.
   counterval=0; // remove @api due tu use of set and get method.

   @api addmethod(){
        this.counterval=this.counterval+1000;
   }

   currentcount=0;
   priorcount=0;

   @api
   get counterval(){
      return this.currentcount;
   }
   set counterval(value){
       this.priorcount=this.currentcount;
       this.currentcount=value;
   }

}