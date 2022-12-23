import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'USERS_RABBIT_PROXY_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://rabbit:5672'],
            queue: 'users_queue',
            queueOptions: {
              durable: false
            },
          }
        })
     }
    },
    AppService],
})
export class AppModule {}
