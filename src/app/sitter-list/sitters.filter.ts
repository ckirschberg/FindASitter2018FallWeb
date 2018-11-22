import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Sitter } from '../entities/sitter';
import { sittersReducer } from '../sitters.reducer';

@Pipe({name: 'filterSitters'})
@Injectable({
  providedIn: 'root'
})
export class FilterSitters implements PipeTransform {
     transform(items: Sitter[], args: string): any {
      // your custom code here
      
      // const results = items.filter(item => {
      //   const searchString = args.replace(/ /g,'').toLowerCase();
      //   const a = item.firstname.concat(item.lastname.toString(), item.location.toString()).toLowerCase();
      //   return a.includes(searchString);
      // });
      
      console.log(items);
      console.log(args);
      

      // solution no. 2
      if (items) { // filter run before the ws responds with the dataset.
        return items.filter(function(item) {
          return item.firstname.toLowerCase().includes(args.toLowerCase()) ||
            item.lastname.toLowerCase().includes(args.toLowerCase()) ||
            item.location.toLowerCase().includes(args.toLowerCase())
        });
      } else {
        return [];
      }

      
      // What you return, is what will be displayed.
      
 }
}
