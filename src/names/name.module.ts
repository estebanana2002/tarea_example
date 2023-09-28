/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NamesController } from './names.controller';


@Module({
    controllers: [NamesController],
    providers: [],
})
export class NameModule {
}
