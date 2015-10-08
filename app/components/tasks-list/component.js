import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['card'],

  tasksSorting: ['taskCreatedAt:desc'],
  sortedTasks: Ember.computed.sort('tasks', 'tasksSorting')
});