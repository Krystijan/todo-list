const storage = require('azure-storage')
const service = storage.createTableService('mojmagazynek','w0k9Ctlm3GaVzyv8Gk4uFblIglgcIM9YWG4Aul8WAYabZf1djMtlJDsCs5MCzs4VuMw+z/XidFDh3Y+e0yt+ww==')
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}