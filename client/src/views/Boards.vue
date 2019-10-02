<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col v-for="board in boards.data" :key="board.id" cols="6">
        <myCard
          :title="board.name"
          :imageUrl="board.url"
          :comment="board.comment"
          :boardID="board.id"
        >
          <!--这是个父向子组件传值的例子-->
        </myCard>
      </v-col>
    </v-row>
    <v-btn @click="inPutBaord">input boards</v-btn>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import myCard from "../components/singleBoard";

export default {
  name: "Boards",
  components: {
    myCard
  },

  mounted() {
    const a = this.findBoardFromServer({ qurey: {} });
    console.log("at here!!!!!!");
    console.log(a);
  },

  computed: {
    ...mapGetters("boards", { findBoardFromStore: "find" }),
    boards() {
      const b = this.findBoardFromStore({ query: {} }); //暂时没限制条件，以后再加
      console.log(b);
      return b;
    }
  },

  methods: {
    ...mapActions("boards", { findBoardFromServer: "find" }),

    inPutBaord() {
      console.log("============== here");
      const { Board } = this.$FeathersVuex.api; //这个也许能换成mapStates的方法？
      const newBoard = new Board({
        name: "project1",
        url: "https://i.redd.it/5lgb5rry2lp31.jpg",
        done: "true",
        comment: "this is comment"
      });
      newBoard.save();
    }
  }
};
</script>