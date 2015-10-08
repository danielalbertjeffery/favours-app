import Ember from 'ember';

export default Ember.Component.extend({
  
  focusOnInput: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().find('input:first').focus();
    });
  }),

  store: Ember.inject.service(),

  actions: {
    
    postFavour: function() {

      var title = this.get('title');
      var description = this.get('description');
      var location = this.get('location');
      var recurrence = this.get('recurrence');
      var points = this.get('points');
      
      var taskData = {
        title: title,
        description: description,
        location: location,
        recurrence: recurrence,
        points: points,
        createdAt: new Date()
      };

      var newTask = this.get('store').createRecord('task', taskData);

      return newTask.save().then(() => {
        this.attrs.dismiss(); 
      });
    }
  }
  
});