module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (req, res) => {
      console.log('inside login route')

      return { login : true }
    }
  })
}