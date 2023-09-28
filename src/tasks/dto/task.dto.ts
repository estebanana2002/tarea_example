/* eslint-disable prettier/prettier */

import { TaskStatus } from "../tasks.entity"
import { 
    IsString,
    MinLength,
    IsNotEmpty,
    IsOptional,
    IsIn 
} from 'class-validator'
export class createTaskDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    title: string
    description: string
}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.INPROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
    status?: TaskStatus
}