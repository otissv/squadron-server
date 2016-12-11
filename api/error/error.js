'use strict';

export default {
  ACCESS_DENIED: {
    message: {
      type: 'ACCESS_DENIED',
      error: 'Access denied/Forbidden'
    }
  },

  ACTION_DOES_NOT_HAVE_ROLE: {
    message: {
      type: 'ACTION_DOES_NOT_HAVE_ROLE',
      error: 'Role does not exist on action.'
    }
  },

  ACTION_NOT_DELETED: {
    message: {
      type: 'ACTION_NOT_DELETED',
      error: 'Action was not deleted.'
    }
  },

  INCORRECT_CREDENTIALS: {
    message: {
      type: 'INCORRECT_CREDENTIALS',
      error: 'Username or password is incorrect.'
    }
  },

  INTERNAL_SERVER: {
    message: {
      type: 'INTERNAL_SERVER',
      error: 'Internal server error.'
    }
  },

  INVALID_DATA: {
    message: {
      type: 'INVALID_DATA',
      error: 'Invalid data'
    }
  },

  NO_ACTION_FOUND: {
    message: {
      type: 'NO_ACTION_FOUND',
      error: 'Action was not found.'
    }
  },

  NO_USER_FOUND: {
    message: {
      type: 'NO_USER_FOUND',
      error: 'No user found.'
    }
  },

  USER_ALREADY_EXISTS: {
    message: {
      type: 'USER_ALREADY_EXISTS',
      error: 'User already exists.'
    }
  }
};
