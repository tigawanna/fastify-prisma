import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from 'fastify';



export function ProfileRoute(fastify: FastifyInstance, opts: RouteOptions, done: () => void){
    fastify.get('/profile', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('Hello, profile');
    });
    done();
};
