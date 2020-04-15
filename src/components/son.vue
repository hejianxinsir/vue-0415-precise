<template>
  <div class="son">
    <h1>我是son组件</h1>
    <h2>通过vuebus接受的数据是: {{ttt}}</h2>
    路由传来的参数：{{$route.params.sonmsg}}
  </div>
</template>

<script>
export default {
  name: 'son',
  data(){
    return {
      ttt: '',
      opo: '1001011'
    }
  },
  methods: {
    give(data){
      this.ttt = data
    }
  },
  created(){
    this.$bus.on('act', this.give)
    this.$bus.emit('lulu', this.opo)
  }
}
</script>


<style scoped>
.son{
  border: 3px solid blue;
}
</style>