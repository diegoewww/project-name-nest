import { Injectable } from '@nestjs/common';
import { Task, StatusTask } from './task.entity';
import { v4 } from 'uuid'

@Injectable()
export class TaskService {

  private tasks: Task[] = [
    {
      id: "1",
      title: "Nest JS",
      description: "Aprendiendo a la mala",
      status: StatusTask.PENDING // Asegúrate de incluir el estado aquí también
    }
  ];

  getAllTask() {
    return this.tasks;
  }

  createTask(title: string, description: string): Task { // Debes especificar el tipo de retorno como Task
    const newTask: Task = {
      id: v4(),
      title,
      description,
      status: StatusTask.PENDING
    };

    this.tasks.push(newTask); // Agrega la nueva tarea al arreglo de tareas

    return newTask; // Devuelve la nueva tarea creada
  }
}
