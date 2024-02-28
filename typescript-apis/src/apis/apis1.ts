interface User1 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

//why to do use Pick - because if we have only one source of truth, it will be easier for us to manage the code.

type updateProps = Pick<User1, "name" | "age" | "email">;

//if we want to make all fields typed above , we can use Partial
type updatePropsOptional = Partial<updateProps>;
