import { IsNotEmpty } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateSavingDto {
    @IsNotEmpty()
    title:string

    @IsNotEmpty()
    amount:number

    user:User
}