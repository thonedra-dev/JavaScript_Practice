const taskService =
{
    addTask: function(title, priority)
    {
        if (title.trim() === '') { return false; }
        const new_task = this.createTask(title, priority);
        state.tasks.push(new_task);
        state.save();
    },

    createTask: function(title, priority) 
    {
        return {
            id: utils.generateId(),
            title: title.trim(),
            priority: priority || 'medium',
            status: 'pending',
            createdAt: utils.getCurrentTimestamp(),
            updatedAt: utils.getCurrentTimestamp()
              }; 
    },
    
}