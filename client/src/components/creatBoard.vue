<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <!--<v-btn fab dark small color="indigo" v-on="on">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>-->
        <v-btn text v-on="on">
          <span class="mr-2">Create Board</span>
          <v-icon>fas fa-edit</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Board informations</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="projectName" label="Project Name*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Image URL*" v-model="imageURL" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Remarks" v-model="remark"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="increase">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
    remark: "",
    imageURL: "",
    projectName: ""
  }),
  methods: {
    increase() {
      console.log("pn====================" + this.projectName);
      console.log("IU====================" + this.imageURL);
      const { Board } = this.$FeathersVuex.api; //这个也许能换成mapStates的方法？
      const newBoard = new Board({
        name: this.projectName,
        url: this.imageURL,
        done: "true",
        comment: this.remark
      });
      newBoard.save();
      this.dialog = false;
    }
  }
};


// { id: 1, name: "project1", done: false, url: "https://i.redd.it/5lgb5rry2lp31.jpg", comment: "this is comment" },
// { id: 2, name: "porject2", done: true, url: "https://i.redd.it/xbq55h33bnp31.jpg", comment: "this is comment" },
// { id: 3, name: "project3", done: true, url: "https://i.redd.it/gtc8zyxscpp31.jpg", comment: "this is comment" },
// { id: 4, name: "project4", done: true, url: "https://i.redd.it/jfe8ork747p31.jpg",comment:"this is comment" },
// { id: 5, name: "project5", done: false, url: "https://i.redd.it/xjppdqkswpp31.jpg" ,comment:"this is comment"},


</script>