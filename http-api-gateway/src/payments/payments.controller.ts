import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDTO } from "./dtos/CreatePayment.dto";


@Controller("payments")
export class PaymentsController{
    constructor(@Inject() private natsClient: ClientProxy){}

    @Post()
    createPayment(@Body() createPaymentDTO: CreatePaymentDTO){
        this.natsClient.emit('createPayment',createPaymentDTO)

    }



}