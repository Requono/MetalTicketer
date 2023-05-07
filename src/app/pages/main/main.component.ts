import { Ticket } from './../../shared/models/Ticket';
import { Component, OnInit } from '@angular/core';
import { TicketObject } from '../../shared/constants/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ticketObject?: Array<Ticket>;
  chosenTicket?: Ticket;

  constructor() {}

  ngOnInit(): void {}

  loadImage(ticketObject: Ticket) {
    this.chosenTicket = ticketObject;
  }

  reload() {}
}
