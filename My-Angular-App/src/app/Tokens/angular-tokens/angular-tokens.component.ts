import { Component, Inject, inject, OnInit } from '@angular/core';
import { Message1Service } from '../message1.service';
import { Message2Service } from '../message2.service';

@Component({
  selector: 'app-angular-tokens',
  imports: [],
  templateUrl: './angular-tokens.component.html',
  styleUrl: './angular-tokens.component.css',
  providers: [
    // type tokens
    { provide: Message1Service, useClass: Message1Service },
    { provide: Message1Service, useClass: Message2Service},
    // string tokens
    { provide:'LOG_MSG1', useClass: Message1Service },
  ],
})
export class AngularTokensComponent implements OnInit{
  private mes1 = inject(Message1Service);

  //string tokens injected inside constructor
  constructor(
    @Inject('LOG_MSG1') private logger: Message1Service
  ){}
  ngOnInit(): void {
    // this.mes1.log();
    this.logger.log();
  }
}
