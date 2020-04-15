<template>
  <div class="he">
   <h1>我是 he.vue</h1>
   传递的参数为：{{msg}}
  </div>
</template>

<script>
export default {
  name: 'he',
  data(){
    return {
      msg: ''
    }
  },
  methods: {
    xxx(data){
      this.msg = data
      console.log(this.msg)
    }
  },
  created(){
    this.$bus.on('lulu', this.xxx)
  }
}
</script>