import path from 'path'
import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import config from '../../webpack.config'

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, { publicPath: config.output.publicPath }))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err => console.log(err ? err : 'listening on 3000...'))