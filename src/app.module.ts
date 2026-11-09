import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [ConfigModule.forRoot(), studentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
