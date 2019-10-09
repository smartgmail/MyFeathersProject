const { authenticate } = require('@feathersjs/authentication').hooks
const { setField } = require('feathers-authentication-hooks')
//const mongoose = require('mongoose');

const {removeList} = require('../../hooks/lists')

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.ownerId'
})

const queryUserId = setField({
  from: 'params.user._id',
  as: 'params.query.ownerId'
})

// const removeList = async (context) => {
//   console.log("inboard context path")
//   console.log(context.path)
//   //console.log(context)
//   const session = context.params.mongoose.session
//   console.log(session)
//   const lists = mongoose.model('lists')
//   await lists.remove({ boardId: context.id }).session(session)
//   return context
// }

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
    remove: [
      removeList
    ]
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
