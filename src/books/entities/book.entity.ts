import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Published } from './published.entity';
import { Length, IsInt } from 'class-validator';

@Entity()
export class Book {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Length(1, 10)
  @IsInt()
  blogpost: number;

  @Column()
  @Length(2, 256)
  title: string;

  @Column()
  @Length(2, 256)
  author: string;

  @Column()
  published: Published;
}
