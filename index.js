"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = process.env.PORT || 3005;

// define main schema
const schema = buildSchema(`
  type Query {
      hello: String,
      bye: String,
      age: Int,
      isActive: Boolean,
      pi: Float,
      id: ID,
  }
`);

// config resolvers that it return the query data
const resolvers = {
  hello: () => {
    return "Hello world";
  },
  bye: () => {
    return "Peace out";
  },
  age: () => {
    return 7239;
  },
  isActive: () => {
    return true;
  },
  pi: () => {
    return 3.14;
  },
  id: () => {
    return "DUIGBUI2BBBD3B32BY32TYVY7VD3";
  },
};

/**
 * middleware to use graphqlHTTP, if we don't used the doc don't works
 */
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

/**
 * init express server
 */
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/api`);
});
