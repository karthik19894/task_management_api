"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const secrets_1 = require("./config/secrets");
dotenv_1.default.config();
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.PORT || 5000; // default port to listen
const uri = process.env.ATLAS_URI;
app.use(cookie_parser_1.default(secrets_1.COOKIE_SECRET));
app.use(cors_1.default({ credentials: true, origin: 'http://tasks.com:3000' }));
mongoose_1.default
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("mongo connection established successfully"))
    .catch((err) => console.log(err));
app.use("/oauth2", auth_1.default);
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(port, () => {
    console.log(`hoooHooo!! server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map