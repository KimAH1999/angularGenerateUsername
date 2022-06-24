import { Component } from '@angular/core';
import { AppservService } from './appserv.service';
//Component import connector for html, css ...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGenerateUsername';

  message: string="";
  constructor(private appServ: AppservService){}

  ngOnInit(): void {
    this.message = this.appServ.getMsg();
  }
}
