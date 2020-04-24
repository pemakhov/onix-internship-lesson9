import { Entity, Column } from "typeorm";
import { Length, IsInt } from 'class-validator';

@Entity()
export class Published {
  @Column()
  @Length(2, 256)
  publisher: string;

  @Column()
  @Length(1, 4)
  @IsInt()
  year: number;
}