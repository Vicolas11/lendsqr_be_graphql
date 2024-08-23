import express, { Request, Response, NextFunction } from "express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import { resolvers } from "./mocks";
import cors from "cors";

async function startServer() {
  const app = express();

  // CORS middleware
  app.use(cors());  

  // Apollo Server instance
  const server = new ApolloServer({ typeDefs, resolvers });

  // Error-handling middleware
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).send(`Something went wrong. ${err.message}`);
  });

  // Simple root route
  app.get("/", (_req: Request, res: Response) => {
    res.send(
      '<h1 style="text-align: center;">GraphQL Server is running 🥰!</h1>'
    );
  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
