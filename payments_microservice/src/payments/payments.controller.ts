import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDTO } from './dtos/createPayment.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentMicroserviceController{
    constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy,
        private paymentsService:PaymentsService
    ){}
    @EventPattern('createPayment')
    async createPayment(@Payload() createPaymentDto: CreatePaymentDTO){
        const newPayment =
        await this.paymentsService.createPayment(createPaymentDto);
      if (newPayment) this.natsClient.emit('paymentCreated', newPayment);
    }


}
