const mongoose = require('mongoose');
const { authenticate } = require('@feathersjs/authentication').hooks


// async function remvoeList(context, boardId){
//     console.log("==121212==here remove list auto")
//     const lists = mongoose.model('lists')
//     await lists.remove({boardId:boardId})
//     return context
// }

const removeList = async context => {
  console.log("inboard context path")
  console.log(context.path)
  //console.log(context)
  const session = context.params.mongoose.session
  console.log(session)
  const lists = mongoose.model('lists')
  await lists.remove({ boardId: context.id }).session(session)
  return context
}

module.exports = {
  removeList
};