import Task from "../models/Task";

export class TasksService{
    static save(task: any) {
      const mongoTask = new Task(task);
      mongoTask.save();
    }
    static findByUser(userId: string, category : string) {
        return Task.find({'userId': userId , 'category' : category})
    }

    static delete(taskId : string){
        return Task.findByIdAndDelete({'_id':taskId});
    }

    static update(taskId : string, task: any){
        return Task.findByIdAndUpdate({taskId}, {task});
    }
}