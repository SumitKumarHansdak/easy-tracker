import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  formSubmitted = false;
  private tasksService = inject(TasksService)

  get isTitleValid(): boolean {
    return this.enteredTitle.trim() !== '';
  }

  get isSummaryValid(): boolean {
    return this.enteredSummary.trim() !== '';
  }

  get isDateValid(): boolean {
    return this.enteredDate.trim() !== '';
  }

  isFormValid() {
    if (this.isTitleValid && this.isSummaryValid && this.isDateValid) return true;
    return false;
  }

  resetForm() {
    this.enteredDate = '';
    this.enteredSummary = '';
    this.enteredTitle = '';
  }

  onClose() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.isFormValid()) {
      let newData: NewTask = {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      }
      this.tasksService.addNewTask(newData, this.userId);
      this.onClose();
    } 
  }
}
