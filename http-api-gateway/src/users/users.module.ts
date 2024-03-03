
import {Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatsModule } from 'src/nats-clients/natsClient.module';

@Module({
    imports:[NatsModule],
    controllers: [UsersController],
    exports:[]
})

export class UsersModule{} 
