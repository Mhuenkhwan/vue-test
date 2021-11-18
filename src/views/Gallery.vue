<template>
  <div class="home">
    <b-row>
    <b-col sx="12" sm="6" lg="3" v-for="i in imageItems"><img @click="selectImg(i)" style="padding: 20px" width="350px" height="200px" :alt="i" :src="require(`../assets/img/${i}`)"></b-col>
  </b-row>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Modal :imgData="imageItems" :startIndex="index" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Gallery',
  components: {
    HelloWorld,
    Modal
  },
  data: () => ({
    imageItems: ["fruit-01.jpg","fruit-02.jpg","fruit-03.jpg","fruit-04.jpg","fruit-05.jpg",
    "fruit-06.jpg","fruit-07.jpg","fruit-08.jpg","fruit-09.jpg","fruit-10.jpg","fruit-11.jpg",
    "fruit-12.jpg",
    ],
    index: null,
  }),
  methods: {
    selectImg(img){
      this.index = this.imageItems.indexOf(img);
      this.$store.commit('OPENMODAL');
      this.show = true;
    },
  },
  mounted:()=>{
  }
}
</script>
<style scoped>

</style>
