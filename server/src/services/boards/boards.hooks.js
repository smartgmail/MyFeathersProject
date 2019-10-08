const TransactionManager = require('feathers-mongoose').TransactionManager
const isTransactionEnable = true
const { authenticate } = require('@feathersjs/authentication').hooks
const { setField } = require('feathers-authentication-hooks')
const skipPath = ['users']
const remvoeList = require('../../hooks/lists')

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
    remove: [
      // should add start transaction
      // () => {
      //   if (isTransactionEnable) {
      //     async hook =>
      //       TransactionManager.beginTransaction(hook, skipPath)
      //       console.log("tran start")
      //   }
      // }
      async hook => TransactionManager.beginTransaction(hook, skipPath)
      //remvoeList,
      //()=>{console.log("remove rely list ")}
      
      // should delete all list rely to the board


    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      // // should add commit transaction
      // ()=>{
      //   if(isTransactionEnable)
      //     TransactionManager.commitTransaction
      //     console.log("commit")
      // }
      
        
          TransactionManager.rollbackTransaction
    
          
      
    ]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      //should add rollback transcation
      ()=>{
        if(isTransactionEnable)
          TransactionManager.rollbackTransaction
      }
      
    ]
  }
};
