//EXCLUDE and zod infer

// suppose a function accepts different types and you want to exclude some types being passed to it. example-

type Events = "click" | "change" | "hover";

type newEvent = Exclude<Events, "hover">;

//ZOD INFERENCE
// import { z } from "zod";

// type Events = "click" | "change" | "hover";

// const newEventSchema = z.union([z.literal("click"), z.literal("change")]);

// type NewEvent = z.infer<typeof newEventSchema>;
