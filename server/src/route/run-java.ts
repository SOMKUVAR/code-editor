import { Router, Request, Response, NextFunction } from 'express';
import { spawn } from 'child_process';

const router = Router();


router.post('/run-java', (req: Request, res: Response) => {
    const javaCode = req.body.code; 
    const inputData = req.body.inputData; 

    const dockerProcess = spawn('docker', [
        'run',
        '--rm',
        '-e',
        `JAVA_CODE=${javaCode}`,
        '-e',
        `INPUT_DATA=${inputData}`,
        'java-code-containers'
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
        else if(code == 127) {
            console.log(executionOutput);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(`Java Execution Error: ${executionOutput}`);
        }
    });
});


router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

export default router;
