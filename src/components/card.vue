<template>
  <v-container class="grey lighten-5">
    <v-row class="mx-auto custom-heigth">
      <img
        src="https://cdn.styledtosparkle.com/wp-content/uploads/2015/07/14181219/beach-read-main.png"
        style="width:100%;height:100%"
      >
      <div style="position:absolute;width:100%" class="mt-10">
        <v-icon class="float-right mr-7 headline" color="grey darken-3">mdi-bookmark-outline</v-icon>
        <v-icon class="float-left ml-5 display-1 mt-n1" color="grey darken-3">mdi-chevron-left</v-icon>

      </div>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="custom-border px-6"> 
        <v-row class="mb-3 mt-7 red--text font-weight-bold">FREELACE</v-row>
        <v-row class="mb-3"><p class="mb-0 headline text-left font-weight-bold">Why The Freelance Life May Get Easier</p></v-row>
        <v-row class="mb-3 text--disabled caption font-weight-bold">
          <span class="mr-3">
              <v-icon class="body-2" color="grey">mdi-clock-outline</v-icon>
              <span>25 sec ago</span>
              </span>
          <span class="mr-3">
               <v-icon class="body-2" color="grey">mdi-thumb-up-outline</v-icon>
              <span>725</span>

              </span>
        </v-row>
        <v-row class="mb-3">
          <img
            class="mr-3"
            width="38px"
            style="border-radius: 10px;"
            src="https://media4.s-nbcnews.com/i/newscms/2019_28/2929131/190618-allan-smith-byline1860_e20f6bbeb1d9b2496dd6943f6a3da256.jpg"
          >
          <span class="pt-1 font-weight-bold">Ted Melano</span>

        </v-row>
        <v-row class="mb-3">
          <span class="text-left">
            <more-string :moreStr="'Read More'" :lessStr="'Read Less'" :text="Txt" :maxChars="myChars"></more-string>
            
              <!-- <read-more more-str="Read More" :text="Text" link="#" less-str="read less" :max-chars="50"></read-more> -->
          </span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MoreString from './read-more'

export default {
   components:{
       MoreString
   },
    data(){
        return{
            myChars:150,
            Txt :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
        }
    },
    mounted(){
        if(window.innerWidth < 720){
            this.myChars = 150;
        }else{
            this.myChars = 250;

        }
    }
};
</script>
<style scoped>
.custom-heigth {
    position: relative;
  width: 100%;
  overflow: hidden;
  height: 300px;
  max-height: 300px;
  min-height: 200px;
  object-fit: cover;
  border-radius: 40px;

}

.custom-border {
  margin: -50px 0 0 0;
  background: white;
  border-radius: 23px;
  z-index: 1;
}
</style>
