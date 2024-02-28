//READONLY
//sometime we notice that js allows us to modify objects and arrays which are marked as "const" ? -  the reason behind it is - actually we arenot changing the array or the object in the first place, we are just changing the values inside it.so to overcome that point and to implement the functionality that even the variables inside them do not change we use - READONLY

interface CONFIG {
  readonly name: string;
  readonly age: number;
}

const config: Readonly<CONFIG> = {
  name: "yash",
  age: 22,
};

// we can really define Readonly either during the interface declaration or while using it in an object.
