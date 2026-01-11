// Standalone constant dealing with saving, loading data directly to the Browser_Storage.

const storage = {
   
     STORAGE_KEY : 'TASK_MANAGER_STORAGE',


     saveTasks: function(state_tasks) 
     {
        try{
            const string_tasks = JSON.stringify(state_tasks);          //Browser_Storage only accepts the data in string format!
            localStorage.setItem(this.STORAGE_KEY, string_tasks);
            return true;
        }
        catch(error){
            console.error("Error saving the tasks!")
            return false;
        }
     },

     loadTasks: function()
     {
        try{
            const string_tasks = localStorage.getItem(this.STORAGE_KEY);   
            if(string_tasks === null) { return []; }
            return JSON.parse(string_tasks);                            //Converting back to the array format for operation!
        }

        catch(error){
            console.error("Could not load the tasks!!");
            return [];
        }        
     }
};