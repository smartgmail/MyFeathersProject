
<template>
  <!--<div style="background: url('https://i.redd.it/xjppdqkswpp31.jpg'); background-size:cover; background: rgba(0,0,0,0);">-->
  <v-img :src="imageURL" aspect-ratio="1" fluid>
    <v-card class="ma-4" max-width="344" outlined>
      <v-container>
        <v-card-title>I'm a task list</v-card-title>
        <v-card>
          <v-card-title>I'm a sub task</v-card-title>
        </v-card>
        <v-row class="mb-0">
          <v-col cols="6" class="pa-0">
            <v-text-field class="pt-4 pl-4 mb-0" v-model="taskName" label="Task name"></v-text-field>
          </v-col>
          <v-col cols="6" class="pa-0">
            <v-btn  class="mr-4 ml-4 mt-4">Create task</v-btn>
          </v-col>
          <!--p 表示padding a表示所有 r表示右边 l表示左边，t表示上边 b表示下边 所以组合起来就是 pa-数字 数字表示大小-->
        </v-row>
      </v-container>
    </v-card>
    <v-card class="ma-4" max-width="344" outlined>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="listName" label="List name*" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-btn>Create List</v-btn>
      </v-card-actions>
    </v-card>
  </v-img>

  <!--</div>-->
</template>




<script>
export default {
  name: "Board",
  data: () => ({
    imageURL: "",
    taskName: "",
    listName: ""
    //
  }),
  mounted:function(){
    console.log("------------------"+this.$route.params.name)
    //console.log(this.$route.params.url)
    this.imageURL = this.$route.params.url
    //console.log("this.imageURL"+this.$route.params.url)

  }
  
};
</script>