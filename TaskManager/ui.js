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
              <div class="number">${stats_information.total}</div>
              <div class="label">Total Tasks</div>
           </div>

           <div class="stat-card">
              <div class="number">${stats_information.pending}</div>
              <div class="label">Pending</div>
           </div>

          <div class="stat-card">
              <div class="number">${stats_information.completed}</div>
              <div class="label">Completed</div>
          </div>

          <div class="stat-card">
              <div class="number">${stats_information.high}</div>
              <div class="label">High Priority</div>
          </div>

          <div class="stat-card">
              <div class="number">${stats_information.medium}</div>
              <div class="label">Medium</div>
          </div>          `;
          
    },

    renderTasks: function() 
    {
        const current_tasks  = taskService.getFilteredTasks();
        const task_container = document.getElementById('taskList');
        const task_count     = document.getElementById('taskCount');       // The operation about taskCount
        task_count.textContent = current_tasks.length;                     // is finished in this two lines only.

        if (current_tasks.length === 0) {
           task_container.innerHTML = `
                  <div class="empty-state">
                  <p>No tasks found</p>
                  <p>Add a new task or adjust your filters</p>
                  </div>
                           `;
        return; }

        task_container.innerHTML = current_tasks.map(task => {
          const isEditing = state.editingTaskId === task.id;

          return `
          <div class="task-item ${task.status === 'completed' ? 'completed' : ''}">
              <div class="task-content">
          
                <input type="checkbox" class="task-checkbox" ${task.status === 'completed' ? 'checked' : ''}
                     onchange="app.handleToggleStatus('${task.id}')"  >     

      
                <div class="task-details">
                  ${
                    isEditing ? `
                   <input type="text" class="task-title-input" id="edit-input-${task.id}" value="${task.title}"/>
                     ` : `
                   <div class="task-title ${task.status === 'completed' ? 'completed' : ''}">
                          ${task.title}
                   </div>  `
                  }
        
                   <div class="task-meta">
                      <select class="priority-select priority-${task.priority}"
                            onchange="app.handlePriorityChange('${task.id}', this.value)">

                         <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
                         <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
                         <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>

                      </select>
          
                      <span class="status-badge status-${task.status}">
                          ${task.status}
                      </span>
          
                      <span class="task-date">
                           Created: ${utils.formatDate(task.createdAt)}
                      </span>
                   </div>
                </div>

                <div class="task-actions">
                ${isEditing ? `
                  <button class="btn-save" onclick="app.handleSaveEdit('${task.id}')">
                    Save
                  </button>
                  <button class="btn-cancel" onclick="app.handleCancelEdit()">
                    Cancel
                  </button>
                ` : `
                  <button class="btn-edit" onclick="app.handleStartEdit('${task.id}')">
                    Edit
                  </button>
                  <button class="btn-delete" onclick="app.handleDeleteTask('${task.id}')">
                    Delete
                  </button>
                `}
                </div>

              </div>
          </div>
`;
    }).join('');
                      
    },


     render: function()
     {
        this.renderStats();
        this.renderTasks();
     }

};