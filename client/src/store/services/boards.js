// Bring in the imports from the feathers-client.js file.
import feathersClient, {
    makeServicePlugin,
    BaseModel
  } from '../../feathers-client'
  
  // Extend the base class
  class Board extends BaseModel {
    constructor(data, options) {
      super(data, options)
    }
    
    static instanceDefaults() {
      return {
        name: '',
        done: '',
        url: '',
        comment: '',
      }
    }
    
    // get fullName() {
    //   return `${this.firstName} ${this.lastName}`
    // }

    // get user () {
    //   if (this.userId) {
    //     const user = Models.User.getFromStore(this.userId)

    //     // Fetch the User record if we don't already have it
    //     if (!user) {
    //       Models.User.get(this.userId)
    //     }

    //     return user
    //   } else {
    //     return null
    //   }
    // }
    
    // get allBoard(){
    //     return all
    // }
    
  }
  Board.modelName = "Board"
  const servicePath = 'boards'
  const servicePlugin = makeServicePlugin({
    Model: Board,
    service: feathersClient.service(servicePath),
    servicePath
  })
  
  // Optionally add service-level hooks, here:
  feathersClient.service(servicePath).hooks({
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
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
  })
  
  export default servicePlugin