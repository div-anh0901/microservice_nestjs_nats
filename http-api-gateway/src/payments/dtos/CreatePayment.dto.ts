import { IsNotEmpty } from "class-validator";

export class CreatePaymentDTO{

    @IsNotEmpty()
    amount: string;
}