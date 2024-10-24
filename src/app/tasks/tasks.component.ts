import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  isAddingTask = false;
  
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  closeNewTask() {
    this.isAddingTask = false;
  }
}
