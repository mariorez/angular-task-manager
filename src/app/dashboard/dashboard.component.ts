import { Component, OnInit } from '@angular/core';
import { TaskAllResponse } from '../proto/task/task_pb';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: TaskAllResponse;

  constructor(private taskSevice: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskSevice.getAllTasks('task', 1).then((data: object) => {
      console.log(JSON.parse(JSON.stringify(data)))
      this.tasks = data['taskList'] as TaskAllResponse;
    });
  }
}
