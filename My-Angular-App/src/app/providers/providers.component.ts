import { Component } from '@angular/core';
import { CubeService } from '../dependencies/cube.service';
import { PowerService } from '../dependencies/power.service';

@Component({
  selector: 'app-providers',
  imports: [],
  providers:[CubeService,PowerService],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
  constructor(private cubeService:CubeService){
  }

  calculate(){
    return this.cubeService.calculateCube(5);
  }
}
