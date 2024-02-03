import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>
  ) {}

  async create(createTransactionDto: CreateTransactionDto, id:number) {
    const newTransaction = {
      title: createTransactionDto.title,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
      user: {id},
      category: {id: +createTransactionDto.category}
    }

    if(!newTransaction)
      throw new BadRequestException('Что-то пошло не так, в итоге транзакция не добавилась!')

    return await this.transactionRepo.save(newTransaction)
  }

  async findAll(id:number) {
    const transactions = await this.transactionRepo.find({
      where: {user:{id}},
      relations: {
        category: true
      },
      order: {
        createAt: 'DESC'
      }
    })

    if(!transactions)
      throw new NotFoundException('Транзакция не найдена')

    return transactions
  }

  async findOne(id: number) {
    const transaction = await this.transactionRepo.findOne({
      where: {id},
      relations:{
        user:true,
        category: true
      }
    })

    if(!transaction)
      throw new NotFoundException('Транзакция не найдена')

    return transaction
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepo.findOne({
      where: {id}
    })

    if(!transaction)
      throw new NotFoundException('Транзакция не найдена')

    return await this.transactionRepo.update(id, updateTransactionDto)
  }

  async findAllByType (id:number, type:string) {
    const transaction = await this.transactionRepo.find({
      where:{
        user: {id},
        type
      }
    })

    const total = transaction.reduce((acc, obj) => acc + obj.amount, 0)
    return total
  }

  async findAllWithPagination(id:number, page: number, limit: number) {
    const transaction = await this.transactionRepo.find({
      where: {
        user: {id}
      },
      relations: {
        category: true,
        user:true
      },
      order: {
        createAt: 'DESC'
      },
      take: limit,
      skip: (page - 1) * limit
    })

    return transaction
  }

  async remove(id: number) {
    return await this.transactionRepo.delete(id)
  }
}
