/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NumPController } from './num-p.controller';

@Module({
    controllers: [NumPController],
    providers: [],
})
export class TaskModule {
}
