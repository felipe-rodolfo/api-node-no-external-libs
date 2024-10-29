import { randomUUID } from 'node:crypto';

let tasks = [];

export const getTasks = () => {
    return tasks;
};

export const createTask = (taskData) => {
    if (!taskData.title || !taskData.description) {
        throw new Error('Title and description are required');
    }
    const task = {
        ...taskData,
        id: randomUUID(),
        created_at: new Date(),
        completed_at: null,
    };
    tasks.push(task);
    return task;
};

export const getTaskById = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
};

export const updateTask = (taskId, updatedData) => {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        throw new Error('Task not found');
    }
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
    return tasks[taskIndex];
};

export const deleteTask = (taskId) => {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        throw new Error('Task not found');
    }
    tasks.splice(taskIndex, 1);
};
