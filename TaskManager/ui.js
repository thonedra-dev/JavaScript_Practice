// ============================================
// FILE: ui.js
// Purpose: Handle all DOM manipulation and rendering
// ============================================


const ui = 
{    

    renderStats: function()
    {
        const stats_information = taskService.getStats();
        const stats_container   = document.getElementById('stats');

        stats_container.innerHTML = `
           <div class="stat-card">
              <div class="number">${stats.total}</div>
              <div class="label">Total Tasks</div>
           </div>

           <div class="stat-card">
              <div class="number">${stats.pending}</div>
              <div class="label">Pending</div>
           </div>

          <div class="stat-card">
              <div class="number">${stats.completed}</div>
              <div class="label">Completed</div>
          </div>

          <div class="stat-card">
              <div class="number">${stats.high}</div>
              <div class="label">High Priority</div>
          </div>

          <div class="stat-card">
              <div class="number">${stats.medium}</div>
              <div class="label">Medium</div>
          </div>          `;
          
    },

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