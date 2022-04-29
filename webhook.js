const update = require('./update')
const signale = require('signale')

module.exports = async app => {
  // app.route('/dato').post('/', (_, res) => {
  //   signale.await('DatoCMS changes detected...')
  //   updateTypesFile(app).then(
  //     () => res.json({ success: true }),
  //     () => res.json({ error: 'Server error' })
  //   )
  // })

  updateTypesFile(app)
}

async function updateTypesFile(app) {
  const base = {
    owner: 'overnice',
    repo: 'datocms-types'
  }
  const targetFile = 'index.d.ts'

  // authenticate with access to this specific repo
  signale.await('Authenticating with GitHub...')
  let github = await app.auth()
  const installation = await github.apps.getRepoInstallation(base)
  github = await app.auth(installation.data.id)

  // get the contents of `index.d.ts` so we can diff
  signale.await('Fetching repo contents...')
  const fileContents = await github.repos.getContent(
    Object.assign(base, { path: targetFile })
  )
  const currentFile = fileContents.data

  // generate new types from dato
  const updatedTypes = await update()
  const fileContent = Buffer.from(currentFile.content, 'base64').toString()

  // check to see if the result is any different from the existing fle
  signale.await('Comparing newly generated types with previous types...')
  if (updatedTypes === fileContent) {
    signale.success('No changes to types from last run')
    return Promise.resolve()
  }

  // if so, write them to the file and commit
  signale.success('Types changed, committing new file')
  return github.repos.createOrUpdateFileContents(
    Object.assign(base, {
      path: targetFile,
      message: 'chore: update types from DatoCMS changes',
      content: Buffer.from(updatedTypes).toString('base64'),
      sha: currentFile.sha,
      committer: {
        name: 'Overnice Bot',
        email: 'hello@overnice.com'
      }
    })
  )
}
