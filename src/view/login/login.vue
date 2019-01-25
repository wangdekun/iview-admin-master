<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <Button @click="register" type="info" long>注册</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { setToken } from '@/libs/util'
export default {
  components: {
    LoginForm
  },
  methods: {
    register () {
      this.$router.push({
        name: 'register'
      })
    },
    handleSubmit ({ userName, password }) {
      setToken('super_admin')
      this.$post(
        '/test/setRedis',
        {
          userName: userName,
          password: password
        },
        response => {
          console.log(response)
          debugger
          // if (response.data.code === '200') {
          //   this.$router.push({ name: this.$config.homeName })
          // } else {
          //   this.$Message.error('账号或密码')
          // }
        }
      )
    }
  }
}
</script>

<style>

</style>
