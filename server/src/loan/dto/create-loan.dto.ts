import { IsNotEmpty, IsNumber } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateLoanDto {
    @IsNotEmpty()
    title: string

    @IsNumber()
    amount:number
    
    type: 'borrow' | 'lend'
    
    user: User
}