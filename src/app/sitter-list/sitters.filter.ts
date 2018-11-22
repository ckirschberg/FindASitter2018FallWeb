import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Sitter } from '../entities/sitter';

@Pipe({name: 'filterSitters'})
@Injectable({
  providedIn: 'root'
})
export class FilterSitters implements PipeTransform {
     transform(items: Sitter[], args: string): any {
      // your custom code here
      
      console.log(items);
      console.log(args);
      
      // What you return, is what will be displayed.
      return items;
 }
}
