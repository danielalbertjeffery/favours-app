import Ember from 'ember';

export default Ember.Controller.extend({
  showingComposeModal: false,

  actions: {
    toggleComposeModal: function() {
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});