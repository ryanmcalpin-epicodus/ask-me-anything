import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    showForm() {
      this.set('answerQuestion', true);
    },
    saveAnswer() {
      if (this.get('author')==="" || this.get('author')===undefined || this.get('answer')==="" || this.get('answer')===undefined) {
        alert("Please fill out all of the fields.");
      } else {
        var dt = new Date();
        var params = {
          author: this.get('author'),
          answer: this.get('answer'),
          timestamp: (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear(),
          question: this.get('question')
        };
        this.set('answerQuestion', false);
        this.set('author', '');
        this.set('answer', '');
        this.sendAction('saveAnswer', params);
      }
    },
    cancel() {
      this.set('answerQuestion', false);
      this.set('author', '');
      this.set('answer', '');
    }
  }
});
