<template>
  <div class="hello">
    <loginC v-if="login"></loginC>
    <div v-else class="square"></div>
    <button @click="Islogin">查看</button>
  </div>
</template>

<script>
import loginC from './login/login'
export default {
  name: 'HelloWorld',
  components: {
      loginC: ()=> import('./login/login')
  },
  data () {
    return {
      login: true
    }
  },
  methods: {
    Islogin() {
        this.login = !this.login
        console.log(this.login)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  width: 200px;
  height: 200px;
  background-color: #ddd;
  margin: 0 auto;
}
button{
  width: 100px;
  height: 40px;
  background-color:#ddd;
}
</style>
