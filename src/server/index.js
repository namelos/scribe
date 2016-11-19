import path from 'path'
import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import config from '../../webpack.config'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../common/graphql/resolvers'
import typeDefs from '../common/graphql/typeDef'

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, { publicPath: config.output.publicPath }))

const schema = makeExecutableSchema({ typeDefs, resolvers })
const graphql = graphqlExpress({ schema })
const graphiql = graphiqlExpress({ endpointURL: '/graphql' })

app.use('/graphql', bodyParser.json(), graphql)
app.use('/graphiql', graphiql)

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err => console.log(err ? err : 'listening on 3000...'))