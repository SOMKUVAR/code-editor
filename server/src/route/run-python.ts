import { Router, Request, Response, NextFunction } from 'express';
import { spawn } from 'child_process';

const router = Router();


router.post('/run-python', (req: Request, res: Response) => {
    const pythonCode = req.body.code; 
    const inputData = req.body.inputData; 

    const dockerProcess = spawn('docker', [
        'run',
        '--rm',
        '-e',
        `PYTHON_CODE=${pythonCode}`,
        '-e',
        `INPUT_DATA=${inputData}`,
        'python-service'
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
            // Python code executed successfully
            res.send(`Python Output: ${executionOutput}`);
        }
        else if (code === 127) {
            console.error(executionOutput);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(`Python Execution Error: ${executionOutput}`);
        }
    });
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

export default router;
