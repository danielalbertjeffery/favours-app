import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Using the parent route's model
    return this.modelFor('user').user.get('tasks');
  }
});