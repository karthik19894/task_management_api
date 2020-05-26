import express = require("express");
import { TasksService } from "../services/tasks-service";
import {verifyToken} from "../auth/googleOAuth2"
import { Task } from "../dtos/task";


const tasksRouter = express.Router();

tasksRouter.get("/", async (req, res) => {
    try {
      const category = req.body.category;
      const authToken = req.cookies.auth_token; 
      const userId = await verifyToken(authToken);
      const tasks = await TasksService.findByUser(userId, category);
      res.status(200).send(tasks);
    } catch (err) {
      console.log(err);  
    }
  });

 tasksRouter.post("/", async (req, res) => {
    try {
        const task : Task = req.body;
        const authToken = req.cookies.auth_token; 
        const userId = await verifyToken(authToken);
        task.userId = userId
        const response = await TasksService.save(task);
        res.status(200).send(response);
      } catch (err) {
        console.log(err);
      }
 });
 
 tasksRouter.delete("/:taskId", async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const response = await TasksService.delete(taskId);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }

 });

 tasksRouter.put("/:taskId", async (req, res) => {
   try {
     const taskId = req.params.taskId;
     const task : Task = req.body;
     const response = await TasksService.update(taskId, task);
     res.status(200).send(response);
   } catch(err){
     console.log(err);
   }
 });

 export default tasksRouter;