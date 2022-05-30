import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @ViewChild('todoElement') inputTodo?:ElementRef
  @ViewChild("searchTodo") inputSearchTodo?:ElementRef
  todos:any[] = []
  filterTodos:any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
  }
  getTodos():any[] {
    return this.todos
  }
  addTodo(): void {
    let todo = this.inputTodo?.nativeElement.value
    this.todos.push({id:this.todos.length, name:todo})
   
 
  }

  removeTodo(id:number): void {
    this.todos = this.todos.filter( (todo:any) => todo.id != id )
  }
  filterTodo():void {
    //check if filter input is not empty to make filter
    let filter = this.inputSearchTodo?.nativeElement.value
    if( filter.trim().length > 0) {
        
      if( this.todos.length > 0 ) {

        // Each change on input will make iterator on todos list to check if the value exist 
        // if value exist will return new array
        this.filterTodos = this.todos.filter( (todo:any)=> todo.name.indexOf(filter) > -1 )
        
      }
        
    } 

  }

}
