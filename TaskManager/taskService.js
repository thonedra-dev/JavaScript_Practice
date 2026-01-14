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

    getFilteredTasks: function()
    {
        let current_filter = state.tasks;

        if(state.status_filter !== 'all'){ 
            current_filter = current_filter.filter(task => task.status === state.status_filter); }

        if(state.priority_filter !== 'all'){
            current_filter = current_filter.filter(task=> task.priority === state.priority_filter); }

        if(state.search_query.trim() !== ''){
            const query = state.search_query.toLowerCase();
            current_filter = current_filter.filter(task => task.title.toLowerCase().includes(query) ); }

        return current_filter;
    },


    toogleStatus: function(id_from_app_js)
    {
       const finding_task_from_state = state.tasks.find(task=> task.id === id_from_app_js);

       if(!finding_task_from_state) { return false; }

       finding_task_from_state.status = finding_task_from_state.status === 'pending' ? 'completed' : 'pending';
       finding_task_from_state.updatedAt = utils.getCurrentTimestamp();

       state.save();
       return true;
    },

    getStats: function() 
     {
             return {
                  total: state.tasks.length,
                  pending: state.tasks.filter(t => t.status === 'pending').length,
                  completed: state.tasks.filter(t => t.status === 'completed').length,
                  high: state.tasks.filter(t => t.priority === 'high').length,
                  medium: state.tasks.filter(t => t.priority === 'medium').length,
                  low: state.tasks.filter(t => t.priority === 'low').length  };
     }

}