import Ember from 'ember';
import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  
  tasks: DS.hasMany('task', { async: true }),

  numberOfTasks: Ember.computed('tasks', function() {
    return this.get('tasks').get('length');
  })
});

export default User;