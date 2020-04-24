import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('api/books')
  async create(@Body() createBookDto: CreateBookDto) {
    await this.booksService.create(createBookDto);
  }

  @Get('books')
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
