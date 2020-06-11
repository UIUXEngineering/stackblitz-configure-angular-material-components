import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography-compare',
  templateUrl: './typography-compare.component.html',
  styleUrls: ['./typography-compare.component.scss']
})
export class TypographyCompareComponent implements OnInit {

  resetText = 'The quick brown fox jumps over the lazy dog';
  compareText = this.resetText

  constructor() { }

  ngOnInit(): void {
  }



}
