import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dtos/CreateUser.dto";

export class UsersService{
    constructor(@InjectRepository(User) private  userRepository: Repository<User>){}
    
    createUser(createUserDto: CreateUserDTO){
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    getUserById(userId: string){
        return this.userRepository.findOne({
            where:{id: userId},
            relations: ['payments']
        })
    }
}