import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service'
import { TaskDto } from './dto/createTask'

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  getAllTask() {
    return this.taskService.getAllTask()
  }

  @Post()
  createTask(@Body() newTask: TaskDto) {
    return this.taskService.createTask(newTask.title, newTask.description)
  }
}
