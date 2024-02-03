import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService:JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const exist = await this.userRepository.findOne({
      where: {email: createUserDto.email}
    })

    if(exist) throw new BadRequestException('Пользователь с такими данными уже существуют!')

    const user = await this.userRepository.save({
      email: createUserDto.email,
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password)
    })

    const token = this.jwtService.sign({email: createUserDto.email})

    return {user, token};
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({where:{email}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
