import { Injectable } from '@angular/core';
import { TaskServiceClient } from './proto/task/task_pb_service';
import { FindAllRequest, TaskAllResponse, TaskProto } from './proto/task/task_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  client: TaskServiceClient

  constructor() {
    this.client = new TaskServiceClient('http://localhost:8081');
  }

  getAllTasks(path, val): Promise<object> {
    return new Promise((resolve, reject) => {
      console.log('task.service.getAllTasks', path, val);
      const req = new FindAllRequest();
      this.client.findAll(req, null, (err, response: TaskAllResponse) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  }

}
