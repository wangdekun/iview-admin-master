<style lang="less">
  @import './register.less';
</style>

<template>
<div>
  <Row>
    <Input v-model="user_name" placeholder="请输入用户名" style="width: 300px" />
  </Row>
  <Row>
    <Select v-model="user_sex" style="width:200px" placeholder="请输入性别">
        <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <!-- <Input v-model="user_sex" placeholder="请输入性别" style="width: 300px" /> -->
  </Row>
  <Row>
    <!-- <Input v-model="user_head_portrait" placeholder="请输入用户头像" style="width: 300px" />
    <Upload action="">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <avatar username="Darth Vader"
    src=""
    :size="100">
    </avatar> -->
  </Row>
  <Row>
    <Col span="12">
        <DatePicker v-model="user_birthday" type="date" placeholder="请选择出生日期" style="width:200px"></DatePicker>
    </Col>
  </Row>
  <Row>
    <Input v-model="user_password" type="password" placeholder="请输入个人密码" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_real_name" placeholder="请输入真实姓名" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_id_card" placeholder="请输入身份证" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_mobile" placeholder="请输入手机号码" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_email" placeholder="请输入邮箱" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_qq" placeholder="请输入用户qq" style="width: 300px" />
  </Row>
  <Row>
    <Input v-model="user_wechat" placeholder="请输入用户wechat" style="width: 300px" />
  </Row>
  <Button type="primary" @click="handleSubmit">Submit</Button>

</div>
</template>

<script>
import LoginForm from '_c/login-form'
export default {
  components: {
    LoginForm
  },

  data () {
    return {
      user_name: '',
      user_sex: '',
      user_birthday: '',
      user_password: '',
      user_real_name: '',
      user_id_card: '',
      user_mobile: '',
      user_email: '',
      user_qq: '',
      user_wechat: '',
      sexList: [
        {
          value: 'man',
          label: '男'
        },
        {
          value: 'woman',
          label: '女'
        }
      ],
      model1: ''
    }
  },
  methods: {
    handleSubmit () {
      // let data = { user_password, user_real_name }
      console.log(this.user_real_name)
      console.log('000000000')
      this.$post(
        '/webshop/register',
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
