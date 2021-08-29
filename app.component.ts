import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' Blog ';
  todos =[];
  userName : any;

  addData() {
    this.todos = this.todos.concat(this.userName);
  }

  deleteData(todo : string){
    console.log(todo);
    this.todos = this.todos.filter(item => item !== todo);

  }
}
