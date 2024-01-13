import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema.js"
import db from "./db.js";

const resolvers = {
  Query: {
    games(){
      return db.games;
    },
    authors(){
      return db.authors;
    },
    reviews(){
      return db.reviews;
    },
    review(_, args){
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Game: {
    reviews(parent){
      return db.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Review: {
    author(parent){
      return db.authors.find((review) => review.id === parent.author_id)
    },
    game(parent){
      return db.games.find((review) => review.id === parent.game_id)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);