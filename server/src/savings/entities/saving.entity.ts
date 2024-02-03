import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Saving {
    @PrimaryGeneratedColumn({name: 'savingId'})
    id:number

    @Column()
    title:string

    @Column()
    amount:number

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({name: 'userId'})
    user: User
    
    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}