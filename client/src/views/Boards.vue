<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col v-for="board in boards.data" :key="board._id" cols="6">
        <myCard :board="board">
          <!--注意这里等号两边不能有空格-->
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
    console.log(a);
  },

  computed: {
    ...mapState("auth", { user: "payload" }),
    //这是去的当前登录用户的方法，下面用user.user._id取得当前登录用户的id 
    //可以用于查询那些board属于这个用户
    ...mapState("auth", { uid :"entityIdField"}),
    ...mapGetters("boards", { findBoardFromStore: "find" }),
    boards() {
      //这东西竟然在logout的时候又被调用一次？？？？？？？？
      
      console.log(this.user)
      if (this.user) {
        console.log(this.user.user._id);
        const b = this.findBoardFromStore({
          query: {
            ownerId:this.user.user._id
          }
        }); //查询哪些 board ownerId 是当前登录用户的
        console.log(b)
        return b
      } else {
        console.log("at here herefefeeeeee")
        return [];
      }
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