export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [string!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Bollean!
  }
  type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
  }
` 