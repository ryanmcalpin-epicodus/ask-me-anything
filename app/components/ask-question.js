import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    showForm: function() {
      this.set('askQuestion', true);
    },
    saveQuestion: function() {
      if (this.get('question')==="" || this.get('author')==="" || this.get('notes')==="" || this.get('question')===undefined || this.get('author')===undefined || this.get('notes')===undefined) {
        alert("Please fill out all of the fields.");
      } else {
        var dt = new Date();
        var params = {
          question: this.get('question'),
          author: this.get('author'),
          notes: this.get('notes'),
          timestamp: (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear()
        };
        this.set('askQuestion', false);
        this.set('question', '');
        this.set('author', '');
        this.set('notes', '');
        this.sendAction('saveQuestion', params);
      }
    },
    cancel() {
      this.set('askQuestion', false);
      this.set('question', '');
      this.set('author', '');
      this.set('notes', '');
    }
  }
});
