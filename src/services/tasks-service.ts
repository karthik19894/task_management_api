import Task from "../models/Task";
import { DocumentQuery } from "mongoose";

export class TasksService{
    static save(task: any) {
      const mongo_task = new Task(task);
      mongo_task.save();
    }
    static findByUser(userId: String, category : String) {
        return Task.find({'userId': userId , 'category' : category})
    }

    static delete(taskId : String){
        return Task.findByIdAndDelete({'_id':taskId});
    }

    static update(taskId : String, task: any){
        return Task.findByIdAndUpdate({taskId}, {task});
    }
}