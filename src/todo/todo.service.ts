import { Injectable,NotFoundException } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm'
import {Todo} from "./todo.entity";
import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private repo:Repository<Todo>){}

    create(body:CreateTodoDto){
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }

    find(){
        return this.repo.find();
    }

    findOne(id:number){
        if(!id)return null;
        return this.repo.findOneBy({id:id});
    }

    async update(id:number){
        const todo =await this.repo.findOneBy({id:id});
        if(!todo){
            throw new NotFoundException('Todo not found') 
        }
        return this.repo.save({...todo,isCompleted:true})

    }
}
