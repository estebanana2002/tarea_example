import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { NameModule } from './names/name.module';

@Module({
  imports: [TaskModule, NameModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
