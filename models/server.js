const express = require("express")

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.port;
        this.ontainNewsPath = '/api/obtain-news'
        this.deleteNewsPath = '/api/delete-news'

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.ontainNewsPath, require('../routes/obtain-news'));
        this.app.use(this.deleteNewsPath, require('../routes/delete-news'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;
