/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    
    constructor(
        private taskS: TasksService
    ) {}
    @Get()
    getAllTasks() {
        return this.taskS.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        console.log(newTask, 'asdasd');
        // return 'Guardando'
        return this.taskS.createTaks(newTask.title, newTask.description);
    }

    @Delete(':id') 
    deleteTask(@Param('id') id: string ) {
        this.taskS.deleteTask(id);
        return 'Eliminado';
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto ) {
        const updatedTask = this.taskS.updateTask(id, updatedFields);
        return updatedTask;
    }
}
