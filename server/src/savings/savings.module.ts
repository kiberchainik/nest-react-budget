import { Module } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { SavingsController } from './savings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saving } from './entities/saving.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Saving])],
  controllers: [SavingsController],
  providers: [SavingsService],
})
export class SavingsModule {}
