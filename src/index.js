import cluster from 'cluster';
import { CopyFile } from './CopyFile/index.js';

const runMultiThread = () => {
    console.log('Cluster primário: 10 processos em multi thread\n');

    for (let cpu = 0; cpu < 10; cpu++) {
        const currentWorker = cluster.fork();
        console.time(`#multiThreadCopyItem ${cpu} pid: ${currentWorker.process.pid}`);
        CopyFile.start(cpu)
        console.timeEnd(`#multiThreadCopyItem ${cpu} pid: ${currentWorker.process.pid}`);
    }
}

const runSingleThread = () => {
    console.log('Cluster primário: 10 processos em single thread\n');
    const currentWorker = cluster.fork();
    for (let cpu = 0; cpu < 10; cpu++) {
        
        console.time(`#singleThreadCopyItem ${cpu} pid: ${currentWorker.process.pid}`);
        CopyFile.start(cpu)
        console.timeEnd(`#singleThreadCopyItem ${cpu} pid: ${currentWorker.process.pid}`);
    }
}

if (cluster.isPrimary) {
    // runSingleThread();
    runMultiThread();
}