const state = {
    tasks: [],                   // all Tasks here
    status_filter:   'all',      // filtering between ==> [all, pending, complete]
    priority_filter: 'all',      // filtering between ==> [all, low, medium, high]
    search_query:       '',      // empty string still.
    editing_id:       null,      // null still
     

    // Constant Property Functions

    init: function()
    {
        this.tasks = storage.loadTasks();
    },

    save: function()
    {
        storage.saveTasks(this.tasks);
    },
};