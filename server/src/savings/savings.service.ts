import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Saving } from './entities/saving.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SavingsService {
  constructor (
    @InjectRepository(Saving)
    private readonly savingRepo:Repository<Saving>
  ) {}

  async create(createSavingDto: CreateSavingDto, id:number) {
    const newSaving = {
      title: createSavingDto.title,
      amount: createSavingDto.amount,
      user: {id}
    }

    return await this.savingRepo.save(newSaving)
  }

  async findAll(id:number) {
    return await this.savingRepo.find({
      where: {
        user:{id}
      }
    })
  }

  async remove(id: number) {
    return await this.savingRepo.delete(id)
  }
}
