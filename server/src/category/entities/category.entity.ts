import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({name: 'cadegoryId'})
    id: number

    @Column()
    title:string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'userId'})
    user: User

    @OneToMany(() => Transaction, (transaction) => transaction.category)
    @JoinColumn({name: 'transactionId'})
    transactions: Transaction[]

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}