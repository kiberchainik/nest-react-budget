import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { Observable } from "rxjs";
import { CategoryService } from "src/category/category.service";
import { TransactionService } from "src/transaction/transaction.service";

@Injectable()
export class AuthorGuard implements CanActivate {
    constructor(
        private readonly transactionService:TransactionService,
        private readonly categoryService:CategoryService
    ) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const {id, type} = request.params

        let entity

        switch (type) {
            case 'transaction':
                entity = await this.transactionService.findOne(id)
                break;
            
            case 'category':
                entity = await this.categoryService.findOne(id)
                break;
        
            default:
                throw new NotFoundException('Что-то пошло не так, тип не определен');
        }

        const user = request.user
        if(entity && user && user.id === entity.user.id) return true

        throw new BadRequestException('У Вас нет доступа!');
    }
}