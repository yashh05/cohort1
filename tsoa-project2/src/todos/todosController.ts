// src/users/usersController.ts
import { Controller, Get, Path, Route } from "tsoa";
// import { User } from "./user";
// import { UsersService, UserCreationParams } from "./usersService";
import { TODO } from "./todo";
import { TodoService } from "./todoService";
// import path from "path";

@Route("todo")
export class TodoControllers extends Controller {
  @Get("{todoId}")
  public async getUser(@Path() todoId: string): Promise<TODO> {
    return new TodoService().get(todoId);
  }
}
