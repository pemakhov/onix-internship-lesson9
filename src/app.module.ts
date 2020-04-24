import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

const mongodbUrl = 'mongodb+srv://dbUser:VEGw6D3wP642Zcum@cluster0-adcsk.mongodb.net/test?retryWrites=true&w=majority';

@Module({
  imports: [
    BooksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: mongodbUrl,
      autoLoadEntities: true,
      synchronize: true,
      useNewUrlParser: true,
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
