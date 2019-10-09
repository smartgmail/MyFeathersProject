// Application hooks that run for every service
const TransactionManager = require('feathers-mongoose').TransactionManager
const isTransactionEnable = true
const skipPath = ['authentication']
//这是跳过哪些模块不做事务处理,
//比如 删除board的时候模块是boards,写在这里board就被直接删除了

module.exports = {
  before: {
    all: [
      // async context => {
      //   console.log("context path")
      //   console.log(context.path)
      //   // //console.log(context)
      //   // const session = context.params.mongoose.session
      //   // console.log(session)
      //   // const lists = mongoose.model('lists')
      //   // await lists.remove({ boardId: context.id }).session(session)
      //   // //await lists.remove({ boardId: context.id },{session:session})
      //   return context
      // }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      async context => {
        if (isTransactionEnable) {
          TransactionManager.beginTransaction(context, skipPath)
        }
        //console.log("hook path")
        //console.log(context.path)
      }
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
      ()=>{
        throw "hello"
      },
      TransactionManager.commitTransaction,
      
      //TransactionManager.rollbackTransaction
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
      TransactionManager.rollbackTransaction
    ]
  }
};
