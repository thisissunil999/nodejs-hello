import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import HelloTeam from '../client/components/helloTeam'

const app = express()

app.get('/', (req, res) => {
  // Loads a template.
  const pathToHtml = path.join(__dirname, './views/index.html')
  const template = fs.readFileSync(pathToHtml, 'utf8')

  // Inserts a rendered react component to the loaded template (server-side rendering).
  const renderedHelloTeam = renderToString(<HelloTeam />)
  const page = template.replace('<!-- CONTENT -->', renderedHelloTeam)

  res.status(200).send(page)
})

// Opens a socket and listens for connections only if there is no parent module running the script.
if (!module.parent) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app
