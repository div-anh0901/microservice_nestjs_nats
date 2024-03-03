import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDTO } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";


@Controller()
export class UsersMicroserviceController{
    constructor(private usersService: UsersService){}
    @MessagePattern({'cmd':'createUser'})
    createUser(@Payload() data : CreateUserDTO){
        return this.usersService.createUser(data)
    }

    @MessagePattern({'cmd':'getUserByID'})
    getUserByID(@Payload() data ){
        const {userId} = data
        return this.usersService.getUserById(userId)
    }

    @EventPattern('paymentCreated')
    paymentCreated(@Payload() data: any){
        console.log(data)
    }
}