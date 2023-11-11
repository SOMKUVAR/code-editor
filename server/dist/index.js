"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const run_java_1 = __importDefault(require("./route/run-java"));
const run_python_1 = __importDefault(require("./route/run-python"));
const run_cpp_1 = __importDefault(require("./route/run-cpp"));
const run_c_1 = __importDefault(require("./route/run-c"));
const run_javascript_1 = __importDefault(require("./route/run-javascript"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/", run_java_1.default);
app.use("/", run_python_1.default);
app.use("/", run_cpp_1.default);
app.use("/", run_c_1.default);
app.use("/", run_javascript_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
