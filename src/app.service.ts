import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello!<br>
            Please, try out the following routs:
            <br>GET /users
            <br>GET /books
            <br>POST /api/users
            <br>POST /api/books`;
  }
}
