import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn({name: 'transactionId'})
    id: number

    @Column()
    title: string

    @Column()
    amount: number

    @Column({nullable: true})
    type: string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'userId'})
    user: User

    @ManyToOne(() => Category, (category) => category.transactions, {onDelete: 'SET NULL'})
    @JoinColumn({name: 'categoryId'})
    category: Category

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}