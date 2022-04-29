require('dotenv').config()
const signale = require('signale')
const fs = require('fs-extra')
const prettier = require('prettier')
const { loadSchema } = require('@graphql-tools/load')
const { UrlLoader } = require('@graphql-tools/url-loader')
const { codegen } = require('@graphql-codegen/core')
const { printSchema, parse } = require('graphql')
const { plugin: typescriptPlugin } = require('@graphql-codegen/typescript')
const prettierConfig = require('./prettier.config')

module.exports = async function updateDatoTypes() {
  signale.await('Fetching graphql schema from DatoCMS...')
  const schema = await loadSchema('https://graphql.datocms.com', {
    loaders: [new UrlLoader()],
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  })
  signale.await('Creating Typescipt file...')
  const outputFile = 'index.d.ts'
  const config = {
    filename: outputFile,
    schema: parse(printSchema(schema)),
    plugins: [
      {
        typescript: {} // Here you can pass configuration to the plugin
      }
    ],
    pluginMap: {
      typescript: {
        plugin: typescriptPlugin
      }
    },
    documents: [],
    config: {},
    skipDocumentsValidation: true
  }
  // codegen runs prettier by default, but it doesn't pick up our prettier
  // config correctly, so we need to run it again
  const prettierOptions = {
    parser: 'typescript',
    ...prettierConfig
  }
  const output = prettier.format(await codegen(config), prettierOptions)
  fs.writeFileSync(outputFile, output)
  signale.success('Types updated from DatoCMS!')
  return output
}
