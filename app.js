const Hapi = require("hapi");

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

server.route({
    method: "GET",
    path: "/",
    handler: function(response, h) {
        return "Hello World!";
    }
});

server.start(error => {
    if(error) {
        throw error;
    }
    console.log("Listening at" + server.info.uri); //host e port

});