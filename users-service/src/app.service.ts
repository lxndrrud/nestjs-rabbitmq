import { Injectable } from '@nestjs/common';
import { User } from 'entities/user.entity';

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      new User(1, 'admin', 'Ivan', 'Ivanov'),
      new User(2, 'guest1', 'Anton', 'Ivanov'),
      new User(1, 'guest2', 'Grigoriy', 'Ivanov'),
    ];
  }
}
