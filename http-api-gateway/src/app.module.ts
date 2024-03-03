import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices'
import { UsersModule } from './users/users.module';
import { NatsModule } from './nats-clients/natsClient.module';
import { PaymentModule } from './payments/payments.module';

@Module({
  imports: [NatsModule,UsersModule,PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
