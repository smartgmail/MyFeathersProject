const mongoose = require('mongoose');


async function remvoeList(context, boardId){
    console.log("==121212==here remove list auto")
    const lists = mongoose.model('lists')
    await lists.remove({boardId:boardId})
    return context
}

module.exports = {
  remvoeList
};