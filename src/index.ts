// ESM
import Fastify from 'fastify'
import { ProfileRoute } from './routes/profile/profile.js';


const envToLogger = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
    test: false,
}


const enviroment  = (process.env.NODE_ENV || "development") as "development"|"production"|"test";
const fastify = Fastify({
    logger: envToLogger[enviroment] ?? true
})



fastify.get('/', async (request, reply) => {
    return { hello:"welcome people" }
})

fastify.register(ProfileRoute)
/**
 * Run the server!
 */
const start = async () => {
    try {
    await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
