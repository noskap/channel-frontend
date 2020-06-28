import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = '';

  constructor(private sidebar: NbSidebarService) {
  }

  public openSidebar(): void {
    this.sidebar.toggle();
  }

}
