
const { authenticate } = require('@feathersjs/authentication').hooks;
const {setField} = require('feathers-authentication-hooks');

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.ownerId'
})

const queryUserId = setField({
  from: 'params.user._id',
  as: 'params.query.ownerId'
})


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      queryUserId
    ],
    get: [],
    create: [
      setUserId
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
