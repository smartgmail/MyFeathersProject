<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col v-for="board in boards.data" :key="board._id" cols="6">
        <myCard :board="board">   <!--注意这里等号两边不能有空格-->
          <!--这是个父向子组件传值的例子-->
        </myCard>
      </v-col>
      <!--<v-btn :to="{name:'signup'}">signup</v-btn>-->
    </v-row>
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