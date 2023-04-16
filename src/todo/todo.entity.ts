import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    toDo: string;
    @Column()
    description: string;
    @Column({default:false})
    isCompleted:boolean;

}