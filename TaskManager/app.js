// ============================================
// FILE: app.js
// Purpose: Main application logic and event handlers
// ============================================

const app = {
  // Initialize the application
  init: function() {
    // Initialize state from storage
    state.init();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Initial render
    ui.renderTasks();
  },

  // Setup event listeners
  setupEventListeners: function() {
    // Add task button
    document.getElementById('addTaskBtn').addEventListener('click', () => {
      this.handleAddTask();
    });
    
    // Enter key on new task input
    document.getElementById('newTaskTitle').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleAddTask();
      }
    });
  },

  // Handle add task
  handleAddTask: function() {
    const titleInput = document.getElementById('newTaskTitle');
    const prioritySelect = document.getElementById('newTaskPriority');
    
    const title = titleInput.value;
    const priority = prioritySelect.value;
    
    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }
    
    taskService.addTask(title, priority);
    
    // Clear input
    titleInput.value = '';
    prioritySelect.value = 'medium';
    
    // Refresh display
    ui.renderTasks();
  }
};

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  app.init();
});