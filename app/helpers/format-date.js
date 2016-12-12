import Ember from 'ember';
import moment from 'moment';

export function formatDate(date) {
  let newDate = moment(date, 'YYYY-MM-DD').format('MMM D, YYYY');
  return newDate;
}

export default Ember.Helper.helper(formatDate);
