import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";

const app = express();
const port = 4000;

const typeDefs = readFileSync("./scheme.graphql", { encoding: "utf-8" });

// data
const data = {
  books: [
    {
      id: 1,
      name: "book 1",
      author: {
        id: 1,
        name: "author 1",
      },
      genre: {
        id: 1,
        name: "Horror",
      },
    },
    {
      id: 2,
      name: "book 2",
      author: {
        id: 2,
        name: "author 2",
      },
    },
  ],
};

// Resolver for books
const resolvers = {
  Query: {
    books: (obj, args, context) => {
      console.log(obj, "obj");
      console.log(args, "args");
      console.log(context, "context");
      //   {
      //     books {
      //       id
      //       name
      //       author {id, name}
      //     }
      //   }
      return context.books;
    },
    findBook: (obj, args, context) => {
      console.log(obj, "obj");
      console.log(args, "args");
      console.log(context, "context");
      //   query{
      //     findBook(id: 1){
      //       name
      //       author { name }
      //       genre { name }
      //     }
      //   }
      return context.books.find((book) => book.id === args.id);
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Entrypoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
