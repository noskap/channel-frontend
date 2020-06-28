import {Component} from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {Title} from "@angular/platform-browser";
import {title} from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = title;

  constructor(private sidebar: NbSidebarService, private titles: Title) {
    titles.setTitle(this.title)
  }

  public openSidebar(): void {
    this.sidebar.toggle();
  }

}
