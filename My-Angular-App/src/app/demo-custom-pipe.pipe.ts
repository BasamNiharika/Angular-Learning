import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoCustomPipe'
})
export class DemoCustomPipePipe implements PipeTransform {

  // transform(value:string, suffixVal:string): string {
  //   return value+suffixVal;
  // }

  // transform(arr:number[], sortOrder: 'asc' | 'desc'):number[] {
  //   if(sortOrder === 'asc'){
  //     return arr.sort((a,b)=>a-b);
  //   }
  //   else{
  //     return arr.sort((a,b)=>b-a);
  //   }
  // }

  transform(input: string) : number{
    let count =0;
    for(const ch of input){
      console.log(ch);
      if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
        count++;
      }
    }
    console.log(count);
    return count;
  }

}
