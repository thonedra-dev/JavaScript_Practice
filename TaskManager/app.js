// ============================================
// FILE: app.js
// Purpose: Main application logic and event handlers
// ============================================

const app = {
  // Initialize the application
  init: function() 
  {
    
    state.init();
    this.setupEventListeners();
    ui.render();

  },

  
  setupEventListeners: function() 
  {
    
document.getElementById('addTaskBtn').addEventListener('click', () => {this.handleAddTask();  } );
  
document.getElementById('newTaskTitle').addEventListener('keypress', (e) => {if (e.key === 'Enter') { this.handleAddTask(); } });
      
document.getElementById('statusFilter').addEventListener('change', (e) => {state.status_filter = e.target.value; ui.render(); });
     
document.getElementById('priorityFilter').addEventListener('change', (e) => {state.priority_filter = e.target.value; ui.render(); });

document.getElementById('searchInput').addEventListener('input', (e) => {state.search_query = e.target.value; ui.render(); });
  },

  
  handleAddTask: function() 
  {

    const titleInput = document.getElementById('newTaskTitle');
    const prioritySelect = document.getElementById('newTaskPriority');
    
    const title = titleInput.value;
    const priority = prioritySelect.value;
    
    if (title.trim() === '') { alert('Please enter a task title'); return; }
    
    taskService.addTask(title, priority);
    
    
    titleInput.value = ''; prioritySelect.value = 'medium';  // Clear input
    ui.renderTasks();       // Refresh display

  },

  handleToggleStatus: function(id_from_ui_js)    // We take the id, we call the method from ui.js to update it,
  {                                              // and we reload the whole ui.js to be able to handle update info.
    taskService.toggleStatus(id_from_ui_js);
    ui.render();   
  },


  handlePriorityChange: function(id_from_ui_js, newPriority)
  {
    taskService.updateTask(id_from_ui_js, { priority: newPriority }); 
    ui.render();
  },

  handleStartEdit: function(id_from_ui_js) 
   {
    state.editingTaskId = id_from_ui_js; ui.render();
    
    // Focus on the input after render
    setTimeout(() => {
      const input = document.getElementById(`edit-input-${id_from_ui_js}`);
      if (input) { input.focus(); input.select(); }
    }, 0);

   },
  
    
  handleCancelEdit: function() 
  {
    state.editingTaskId = null; ui.render();
  },

  
  handleSaveEdit: function(taskId) 
  {
    const input = document.getElementById(`edit-input-${taskId}`);
    const newTitle = input.value.trim();
    
    if (newTitle === '') { alert('Task title cannot be empty'); return; }
    
    taskService.updateTask(taskId, { title: newTitle });
    
    state.editingTaskId = null;
    ui.render();
  },


};

  

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  app.init();
});