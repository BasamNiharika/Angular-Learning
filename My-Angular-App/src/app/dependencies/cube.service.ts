import { Injectable } from '@angular/core';
import { PowerService } from './power.service';

@Injectable()
// ({
//   providedIn: 'root'
// })
export class CubeService {

  constructor(private powerservice:PowerService) { }

  calculateCube(value:number){
    return this.powerservice.calculatePower(value,3);
  }
}
