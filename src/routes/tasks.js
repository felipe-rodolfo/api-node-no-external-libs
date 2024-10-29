import {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
} from '../services/taskService.js';

export const tasksRouter = (req, res) => {
    let body = '';

    if (req.url === '/task' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'Application/json' });
        return res.end(JSON.stringify(getTasks()));
    }

    if (req.url === '/task' && req.method === 'POST') {
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const taskData = JSON.parse(body);
                const task = createTask(taskData);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Task created successfully', task }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            }
        });

        return;
    }

    if (req.url.startsWith('/task/') && req.method === 'GET') {
        const taskId = req.url.split('/')[2];
        try {
            const task = getTaskById(taskId);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(task));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: error.message }));
        }

        return;
    }

    if (req.url.startsWith('/task/') && req.method === 'PUT') {
        const taskId = req.url.split('/')[2];
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const updatedData = JSON.parse(body);
                const updatedTask = updateTask(taskId, updatedData);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Task updated successfully', task: updatedTask }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            }
        });
        return;
    }

    if (req.url.startsWith('/task/') && req.method === 'DELETE') {
        const taskId = req.url.split('/')[2];
        try {
            deleteTask(taskId);
            res.writeHead(204);
            res.end();
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
};
