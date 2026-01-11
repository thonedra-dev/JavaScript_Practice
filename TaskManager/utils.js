
// FILE: utils.js
// Purpose: Reusable helper functions


const utils = {
  // Generate unique ID for each task
  generateId: function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  // Get current timestamp in ISO format
  getCurrentTimestamp: function() {
    return new Date().toISOString();
  },

  // Format ISO date string to readable format
  formatDate: function(isoString) {
    const date = new Date(isoString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }
};