import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Payment } from './typeorm/entities/Payment';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'mysql_db',
      port:3307,
      entities:[User,Payment],
      synchronize: true,
      username:"testuser",
      password:"testuser123"
    })
    ,PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
