"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const example_1 = __importDefault(require("./routes/example"));
const app = express_1.default();
const port = process.env.SERVER_PORT; // default port to listen
app.use("/example", example_1.default);
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`hoooHooo!! server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map