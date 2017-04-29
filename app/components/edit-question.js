import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    showForm() {
      this.set('editQuestion', true);
    },
    cancel() {
      this.set('editQuestion', false);
    },
    updateQuestion(question) {
      var dt = new Date();
      var params = {
        question: this.get("quest.question"),
        notes: this.get("quest.notes"),
        timestamp: (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear()
      };
      this.set('editQuestion', false);
      this.sendAction('updateQuestion', question, params);
      console.log(params);
    }
  }
});
