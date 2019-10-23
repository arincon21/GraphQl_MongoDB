const { graphql, buildSchema } = require('graphql')

// Definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Configurar los resolvers
const resolvers = {
    hello: () => 'Hola mundo',
    saludo: () => 'como estan todos',
}

// Ejecutar el query
graphql(schema, '{ hello }', resolvers).then((data) => console.log(data))