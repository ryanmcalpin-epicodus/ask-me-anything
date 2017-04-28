import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    showForm: function() {
      this.set('askQuestion', true);
    }
  }
});
