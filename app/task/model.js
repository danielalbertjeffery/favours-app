import DS from 'ember-data';

var Task = DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  recurrence: DS.attr('string'),
  points: DS.attr('number'),
  createdAt: DS.attr('date'),
  
  user: DS.belongsTo('user', { async: true} )
  
});

export default Task;