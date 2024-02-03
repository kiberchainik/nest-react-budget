import { Category } from "src/category/entities/category.entity";
import { Loan } from "src/loan/entities/loan.entity";
import { Saving } from "src/savings/entities/saving.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    login: string

    @Column({default: false})
    isAuth: boolean

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Category, (category) => category.user, {onDelete: 'CASCADE'})
    categories: Category[]

    @OneToMany(() => Transaction, (transaction) => transaction.user, {onDelete: 'CASCADE'})
    transaction: Transaction[]

    @OneToMany(() => Loan, loan => loan.user, {onDelete: 'CASCADE'})
    loan: Loan[]

    @OneToMany(() => Saving, saving => saving.user, {onDelete: 'CASCADE'})
    saving: Saving[]

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}