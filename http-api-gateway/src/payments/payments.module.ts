import { Module } from "@nestjs/common";
import { NatsModule } from "src/nats-clients/natsClient.module";



@Module({
    imports:[NatsModule],
    exports:[],
    controllers:[]
})

export class PaymentModule{}