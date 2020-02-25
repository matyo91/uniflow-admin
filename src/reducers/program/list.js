import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'PROGRAM_LIST_ERROR':
      return action.error;

    case 'PROGRAM_LIST_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'PROGRAM_LIST_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'PROGRAM_LIST_LOADING':
      return action.loading;

    case 'PROGRAM_LIST_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'PROGRAM_LIST_SUCCESS':
      return action.retrieved;

    case 'PROGRAM_LIST_RESET':
      return null;

    case 'PROGRAM_LIST_MERCURE_MESSAGE':
      return {
        ...state,
        'hydra:member': state['hydra:member'].map(item =>
          item['@id'] === action.retrieved['@id'] ? action.retrieved : item
        )
      };

    case 'PROGRAM_LIST_MERCURE_DELETED':
      return {
        ...state,
        'hydra:member': state['hydra:member'].filter(
          item => item['@id'] !== action.retrieved['@id']
        )
      };

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'PROGRAM_LIST_MERCURE_OPEN':
      return action.eventSource;

    case 'PROGRAM_LIST_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
