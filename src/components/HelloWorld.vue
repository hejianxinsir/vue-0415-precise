<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    来自janson组件: {{fromSon}}
    <Janson :toyou="xxx" @handle="receive"></Janson>

    <router-link :to="{name: 'son', params: {sonmsg: 'giveToSonmsg-1000$'}}">
      Son 组件链接
    </router-link>
  </div>
</template>

<script>
import Janson from './janson'

export default {
  name: 'HelloWorld',
  data(){
    return {
      xxx: 'helloworl to janson',
      fromSon: '',
      toson: '999$',
      ooo: 'vuebus的应用',
      iii: '赛粉蓝色',
      msg: '我是 HelloWorld'
    }
  },
  components: {
    Janson
  },
  methods: {
    receive(value){
      this.fromSon = value
      this.$bus.emit('xxx',this.ooo)
      this.$bus.emit('act', this.iii)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
