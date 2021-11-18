<template>
     <b-modal v-model="showModal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal! {{ startIndex }}</h3>
      </div>
    </b-modal>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Modal',
  props: {
    items: Array,
    startIndex: Number
  },
  data: () => ({
  }),
  methods: {
  },
  computed: {
      showModal(){
          return this.$store.state.showModal;
      }
    },
    mounted:()=>{
    }
}
</script>
<style scoped>

</style>
