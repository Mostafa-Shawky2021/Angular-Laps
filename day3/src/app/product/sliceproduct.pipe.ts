import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceDescription'
})
export class SliceproductPipe implements PipeTransform {

  transform(value: any): string {
    
    return value.slice(0,31) + "....";
  }

}
