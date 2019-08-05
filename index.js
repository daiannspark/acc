const http = require("http");
const schedule = require("./schedule.json");
const DefaultController = require("./controller/DefaultController.js");
const port = 3000;

const requestHandler = (request, response) => {
    switch (request.url) {
        case "/":
            response.end("Ok, you are at home");
            break;
        case "/home":
            response.end("Ok, you are at home");
            break;
        case "/about":
            response.end("Name: Diana");
            break;
        case "/schedule":
            response.end(JSON.stringify(schedule));
        default:
            response.statusCode = 404;
            response.end("page not found");
    }

    // if (response.url === "/about") {
    //     response.end("Name: Diana")
    // } else if (request.url === "/schedule") {
    //     response.end(JSON.stringify(schedule))
    // } else if (request.url === "/home" || request.url === "/") {
    //     response.end("Ok, you are at home")
    // } else {
    //     response.statusCode = 404;
    //     response.end("page not found");
    // }

    response.end("Hello WORLD!")
};

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
