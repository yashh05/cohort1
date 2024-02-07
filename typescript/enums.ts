enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}

const move = (keypressed: Direction) => {
  if (keypressed === Direction.Up) {
    console.log("up");
  }
};

move(Direction.Up);
