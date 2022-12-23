import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('USERS_RABBIT_CLIENT_SERVICE') private readonly usersRabbitProxyService: ClientProxy,
    private readonly appService: AppService
  ) {}

  @MessagePattern('get_users')
  getUsers(): void {
    const users = this.appService.getUsers()
    this.usersRabbitProxyService.send({ cmd: 'get_users_result' },  users)
  }
}
