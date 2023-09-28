import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { NameModule } from './names/name.module';
import { NumPController } from './num_primos/num-p.controller';

@Module({
  imports: [TaskModule, NameModule],
  controllers: [NumPController],
  providers: [],
})
export class AppModule {}
