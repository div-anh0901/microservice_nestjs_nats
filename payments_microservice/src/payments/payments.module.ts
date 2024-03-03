import { Module } from "@nestjs/common";
import { PaymentMicroserviceController } from "./payments.controller";
import { NatsModule } from "src/nats-clients/natsClient.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Payment } from "src/typeorm/entities/Payment";
import { PaymentsService } from "./payments.service";

@Module({
    imports:[NatsModule,TypeOrmModule.forFeature([User,Payment])],
    exports:[],
    controllers:[PaymentMicroserviceController],
    providers: [PaymentsService]
})

export class PaymentsModule{}