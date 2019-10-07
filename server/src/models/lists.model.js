// lists-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const lists = new Schema({
    name: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      //required: true,
      default: 0,
    },
    archived: {
      type: Boolean,
      //required: true,
      default: false,
    },
    boardId: {
      type: Schema.Types.ObjectId, //用board 的id 作为外键
      ref: 'boards'
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('lists');
  } catch (e) {
    return mongooseClient.model('lists', lists);
  }
};
