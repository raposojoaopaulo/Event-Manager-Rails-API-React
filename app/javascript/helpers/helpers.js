export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateEvent = (event) => {
  const errors = {};

  if (event.event_type === '') errors.event_type = 'Event type is required';
  if (event.event_date === '') errors.event_date = 'Event date is required';
  if (event.title === '') errors.title = 'Title is required';
  if (event.speaker === '') errors.speaker = 'Speaker is required';
  if (event.host === '') errors.host = 'Host is required';

  return errors;
}

export const formatDate = (d) => {
  const YYYY = d.getFullYear();
  const MM = `0${d.getMonth() + 1}`.slice(-2);
  const DD = `0${d.getDate()}`.slice(-2);

  return `${DD}-${MM}-${YYYY}`;
}