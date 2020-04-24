import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Length, IsEmail, IsPhoneNumber, IsBoolean } from 'class-validator';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Length(2, 40)
  firstName: string;

  @Column()
  @Length(2, 40)
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsPhoneNumber('ZZ')
  phone: string;

  @Column()
  @IsBoolean()
  isAdmin: boolean;

  @Column()
  @IsBoolean()
  verified: boolean;
}
