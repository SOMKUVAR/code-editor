"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const child_process_1 = require("child_process");
const router = (0, express_1.Router)();
router.post('/run-java', (req, res) => {
    const javaCode = req.body.code;
    const inputData = req.body.inputData;
    const dockerProcess = (0, child_process_1.spawn)('docker', [
        'run',
        '--rm',
        '-e',
        `JAVA_CODE=${javaCode}`,
        '-e',
        `INPUT_DATA=${inputData}`,
        'java-service'
    ]);
    let executionOutput = '';
    dockerProcess.stdout.on('data', (data) => {
        executionOutput += data;
    });
    dockerProcess.stderr.on('data', (data) => {
        executionOutput += data;
    });
    dockerProcess.on('close', (code) => {
        if (code === 0) {
            // Java code executed successfully
            res.send(`Java Output: ${executionOutput}`);
        }
        else if (code == 127) {
            console.error(executionOutput);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.send(`Java Execution Error: ${executionOutput}`);
        }
    });
});
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});
exports.default = router;
