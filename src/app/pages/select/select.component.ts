import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectedValue: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

}
