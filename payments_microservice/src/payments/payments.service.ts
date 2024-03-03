import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/typeorm/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDTO } from "./dtos/createPayment.dto";
import { lastValueFrom } from "rxjs";
import { User } from "src/typeorm/entities/User";


export class PaymentsService{
    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy){

    }

    async createPayment({userId,...createPaymentDto}:CreatePaymentDTO){
        const user = await lastValueFrom<User>(this.natsClient.send({"cmd": "getUserById"}, {userId}));

        if(user){
            const newPayment= this.paymentRepository.create({
                ...createPaymentDto,user
            });
            return this.paymentRepository.save(newPayment);
        }

        return null
    }
}