import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    showForm: function() {
      this.set('askQuestion', true);
    },
    saveQuestion: function() {
      var dt = new Date();
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
        timestamp: (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear()
      };
      this.set('askQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
