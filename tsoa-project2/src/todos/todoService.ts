import { TODO } from "./todo";

export type todoCreationParams = Pick<TODO, "title" | "description">;

export class TodoService {
  public get(todoId: string): TODO {
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
  public create(todoCreationParams: todoCreationParams): TODO {
    console.log("mocked db call");

    return {
      id: "1",
      title: todoCreationParams.title,
      description: todoCreationParams.description,
      done: false,
    };
  }
}
