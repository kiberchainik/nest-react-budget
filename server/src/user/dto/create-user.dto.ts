import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string

    @MinLength(6, {message: 'Короткий пароль, минимум 6 символов!'})
    password: string

    login: string
}