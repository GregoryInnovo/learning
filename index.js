"use strict";

const { graphql, buildSchema } = require("graphql");

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

// config resolvers
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

// execute query hello
graphql(schema, "{ id }", resolvers).then((data) => {
  console.log(data);
});
