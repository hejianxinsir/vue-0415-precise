<template>
  <div class="janson">
    <p>{{msg}}</p>
    <p>来自helloworld组件：{{toyou}}</p>
    <button @click="toFath">toFath</button>
  </div>
</template>


<script>
export default {
  name: 'janson',
  props: ['toyou'],
  data(){
    return {
      msg: '我是 janson 组件',
      tofath: '20000$'
    }
  },
  methods: {
    toFath(){
      this.$emit('handle', this.tofath)
    },
    yyy(data){
      console.log(data)
    }
  },
  created(){
    this.$bus.on('xxx', this.yyy)
  }
}
</script>


<style scoped>
.janson{
  border: 1px solid red;
}
</style>