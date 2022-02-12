module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (req, res) => {
      console.log('inside route')

      return { done: true }
    }
  })
}