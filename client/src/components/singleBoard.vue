<template>
  <v-card :loading="loading" xs6>
    <v-img v-if="media" class="white--text" height="150px" :src="board.url">
      <v-card-title class="align-end fill-height">{{board.name}}</v-card-title>
    </v-img>
    <v-card-title v-else>{{board.name}}</v-card-title>

    <v-card-text>{{board.comment}}</v-card-text>
    <v-card-actions v-if="actions">
      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>-->

      <v-btn class="text-right" @click="showBoardDetial">Go</v-btn>
      <v-btn class="text-right" @click="deleteBoard">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
import { mapMutations } from "vuex"

export default {
  name: "myCard",
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: false,
    width: 250,
    height: 100
  }),
  props: {
    board: Object
    // title: String,
    // imageUrl: String,
    // comment: String,
    // boardID: Number
  },
  methods: {
    deleteBoard() {
      console.log(this.board); //这是怎么在methods 中使用 props 中的值的例子

      //this.removeBoard({ id: this.board._id });
      //this.board.remove(this.board._id,{})

      const { Board } = this.$FeathersVuex.api;
      const delBoard = new Board({ id: this.board._id });
      delBoard.save().then(delBoard => {
        delBoard.remove(); // --> Deletes the record from the server
      });
    },
    showBoardDetial() {
      console.log("-==========-" + this.board);
      this.$router.push({
        name: "board",
        params: this.board
      });
    }
    //...mapMutations(["removeBoard"])
  }
};
</script>