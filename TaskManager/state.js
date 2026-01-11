const state = {
    tasks: [],                   // all Tasks here
    status_filter:   'all',      // filtering between ==> [all, pending, complete]
    priority_filter: 'all',      // filtering between ==> [all, low, medium, high]
    search_query:       '',      // empty string still.
    editing_id:       null,      // null still
     

    // Constant Property Functions
    // Both methods are calling the functions from storage object (storage.js).

    init: function()
    {
        this.tasks = storage.loadTasks();      // Data Flow state.js <===== storage.js
    },

    save: function()
    {
        storage.saveTasks(this.tasks);         // Data Flow state.js =====> storage.js
    },
};