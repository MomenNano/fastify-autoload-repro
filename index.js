const fastify = require('fastify')({
  logger: true
})
const { join } = require('path')

fastify.register(require('fastify-autoload'), {
  dir: join(__dirname, 'routes'),
  dirNameRoutePrefix: function rewrite (folderParent, folderName) {
    if (folderName === 'get') {
      return false
    }

    return folderName
  }
})

const start = async () => {
  try {
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()