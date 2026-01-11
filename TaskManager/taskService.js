const taskService =
{
    addTask: function(title, priority)
    {                                                                //In here, we have to understand that, 
        if (title.trim() === '') { return false; }                   //We could just call the state.save(new_task),
        const new_task = this.createTask(title, priority);           //But state.tasks, that state will be empty even,
        state.tasks.push(new_task);                                  //a new task entered the localStoage, because, state()
        state.save();  return true;                                  //only calls the storage.init() to save it but nothing is
    },                                                               //updating the state.tasks, which will be used later for many references



    createTask: function(title, priority)                            //This is just helper function to fill,
    {                                                                //necessary details of a single task record.
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