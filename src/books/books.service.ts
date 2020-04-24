import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new Book();
    createdBook.blogpost = createBookDto.blogpost;
    createdBook.title = createBookDto.title;
    createdBook.author = createBookDto.author;
    createdBook.published = createBookDto.published;
    createdBook.published.publisher = createBookDto.published.publisher;
    createdBook.published.year = createBookDto.published.year;

    return this.booksRepository.save(createdBook);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }
}
