import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepo:Repository<Loan>
  ) {}
  
  async create(createLoanDto: CreateLoanDto, id:number) {
    const newLoan = {
      title: createLoanDto.title,
      type: createLoanDto.type,
      amount: createLoanDto.amount,
      user: {id}
    }
    return await this.loanRepo.save(newLoan)
  }

  async findAll(id:number) {
    return await this.loanRepo.find({
      where:{
        user:{id}
      }
    })
  }

  async findTotalByType(id:number, type) {
    const loan = await this.loanRepo.find({
      where:{
        user:{id},
        type
      }
    })

    const total = loan.reduce((acc, obj) => acc + obj.amount, 0)
    return total
  }

  async remove(id: number) {
    return await this.loanRepo.delete(id)
  }
}
