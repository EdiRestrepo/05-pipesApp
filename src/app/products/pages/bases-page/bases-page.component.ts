import { Component } from '@angular/core';

@Component({
  selector: 'app-bases-page',
  templateUrl: './bases-page.component.html',
  styleUrls: ['./bases-page.component.css']
})
export class BasesPageComponent {

  public nameLower: string = 'edison';
  public nameUpper: string = 'EDISON';
  public fullName: string = 'eDIsoN resTREpO';

  public customDate:Date = new Date();

}
