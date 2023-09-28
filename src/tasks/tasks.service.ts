/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: '1',
            title: 'My first task',
            description: 'The first task of the tasks',
            status: TaskStatus.PENDING

        }
    ]
    getAllTasks() {
        return this.tasks;
    }
    createTaks(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);
        return task
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id: string, updatedFields: updateTaskDto) {
        const task = this.getTaskById(id);
        if ( task ) {
            const newTask = Object.assign(task, updatedFields);
            this.tasks = this.tasks.map(t => t.id === id ? newTask : task);
            return newTask;
        } else {
            return 'Cambiale algo mamahuevo';
        }
    }
    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
