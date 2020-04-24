import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new User();
    createdUser.firstName = createUserDto.firstName;
    createdUser.lastName = createUserDto.lastName;
    createdUser.email = createUserDto.email;
    createdUser.phone = createUserDto.phone;
    createdUser.isAdmin = createUserDto.isAdmin;
    createdUser.verified = createUserDto.verified;

    const errors = await validate(createdUser);

    if (errors.length > 0) {
      throw new HttpException('Validation failed!', HttpStatus.BAD_REQUEST);
    }

    return this.usersRepository.save(createdUser);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
