// ============================================
// FILE: ui.js
// Purpose: Handle all DOM manipulation and rendering
// ============================================


const ui = 
{
    renderTasks: function() 
    {
        const current_tasks  = state.tasks;
        const task_count     = document.getElementById('taskCount');
        const task_container = document.getElementById('taskList');

        task_count.textContent = current_tasks.length;

        if (current_tasks.length === 0) {
           task_container.innerHTML = `
                  <div class="empty-state">
                  <p>No tasks found</p>
                  <p>Add a new task or adjust your filters</p>
                  </div>
                           `;
        return; }

        task_container.innerHTML = current_tasks.map(task => `
           <div class="task-item">
               <div class="task-title">${task.title}</div>
               <div class="task-priority">Priority: ${task.priority}</div>
               <div class="task-status">Status: ${task.status}</div>
           </div>  `).join('');
                      
    }

}