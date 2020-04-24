import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('api/users')
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get('users')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
