import { LightningElement , api } from 'lwc';

export default class SpinnerLodder extends LightningElement {
 
   @api spinnerText = ''; // data-text
   @api size = 'small' ; // Small,medium,large.
   @api variant ='Base';  //Base,Brand, Inverse.

   get helpText (){
      return this.spinnerText? this.spinnerText: 'Loading Spinner';
    //   <!-- help text is always required may or may not be required spinner text is not 
    // always required but help text is always required for accessibility point of view say 
    // if a user is passing  a text(this.spinnerTest?) take spinner text 
    // as a help text (.spinnerText: 'Loading Spinner') otherwise shows loading spinner. -->
   } 

   get className(){
    return `loader ${this.variant === 'Inverse' ? 'Inverse': ''}`
   }

}