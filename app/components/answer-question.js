import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    showForm() {
      this.set('answerQuestion', true);
    },
    saveAnswer() {
      debugger;
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
    },
    cancel() {
      this.set('answerQuestion', false);
      this.set('author', '');
      this.set('answer', '');
    }
  }
});
