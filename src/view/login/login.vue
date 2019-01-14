<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">请输入用户名和密码xxxxx</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit ({ userName, password }) {
      // let data = { userName, password }
      this.$post(
        '/test/setRedis',
        {
          // account: data.userName,
          // password: data.password
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
