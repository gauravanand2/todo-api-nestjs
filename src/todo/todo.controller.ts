import { Controller,Body,Param,Get,Post,Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}
    @Post()
    createTodo(@Body()body:CreateTodoDto){
        console.log('Create Todo',body)
        return this.todoService.create(body)
    }
    @Get()
    findTodod(){
        console.log("Get all todos")
        return this.todoService.find();
    }
    @Get('/:id')
    findTodoById(@Param('id') id:string){
        console.log("Get to do by id",id)
        return this.todoService.findOne(parseInt(id))
    }
    @Patch('/:id')
    updateTodoStatus(@Param('id') id:string){
        console.log("Update todo by id",parseInt(id))
        return this.todoService.update(parseInt(id))
    }
}
