import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-config',
  templateUrl: './shift-config.component.html',
  styleUrls: ['./shift-config.component.css']
})
export class ShiftConfigComponent implements OnInit {
  startTime = 0;
  endTime = 0;
  day = 0;
  constructor() { }

  ngOnInit() {
  }

}
