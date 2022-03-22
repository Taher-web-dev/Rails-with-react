export const START = 'GREETING/START';
export const FAILURE = 'GREETING/FAILURE';
export const GETGREETINGMESSAGE = 'GREETING/MESSAGE';

export const loadingData = () => ({
    type: START,
});

export const manageFailure = (payload) =>({
  type: FAILURE,
  payload,
})

export const getMessage = (payload) => ({
  type: GETGREETINGMESSAGE,
  payload
})