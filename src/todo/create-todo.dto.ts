import { IsNotEmpty,IsString } from "class-validator";


export class CreateTodoDto{
    @IsNotEmpty()
    @IsString()
    toDo:string;
    @IsNotEmpty()
    @IsString()
    description:string;


}