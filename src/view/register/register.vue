<style lang="less">
@import "./register.less";
</style>

<template>
  <div class="register">
    <div class="register-con">
      <Card icon="log-in" title="注册账号" :bordered="true">
        <div class="form-con">
          <Form ref="registerForm" :model="registerForm" :rules="registerFormValidate" :label-width="60" label-position="left">
            <FormItem prop="user_name" label="用户名">
              <Input v-model="registerForm.user_name" placeholder="请输入用户名">
              </Input>
            </FormItem>
            <FormItem prop="user_sex" label="性别">
              <Select v-model="registerForm.user_sex" placeholder="请输入性别">
                <Option
                  v-for="item in sexList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="user_birthday" label="出生日期">
              <Col span="300">
                <DatePicker
                  v-model="registerForm.user_birthday"
                  type="date"
                  placeholder="请选择出生日期"
                ></DatePicker>
              </Col>
            </FormItem>
            <FormItem prop="user_password" label="密码">
              <Input type="password" v-model="registerForm.user_password" placeholder="请输入密码">
              </Input>
            </FormItem>
            <FormItem prop="user_real_name" label="真实姓名">
              <Input v-model="registerForm.user_real_name" placeholder="请输入真实姓名">
              </Input>
            </FormItem>
            <FormItem prop="user_id_card" label="身份证号">
              <Input v-model="registerForm.user_id_card" placeholder="请输入身份证号">
              </Input>
            </FormItem>
            <FormItem prop="user_mobile" label="手机号码">
              <Input v-model="registerForm.user_mobile" placeholder="请输入手机号码">
              </Input>
            </FormItem>
            <FormItem prop="user_email" label="邮箱">
              <Input v-model="registerForm.user_email" placeholder="请输入邮箱">
              </Input>
            </FormItem>
            <FormItem prop="user_qq" label="QQ账号">
              <Input v-model="registerForm.user_qq" placeholder="请输入QQ账号">
              </Input>
            </FormItem>
            <FormItem prop="user_wechat" label="WeChat">
              <Input v-model="registerForm.user_wechat" placeholder="请输入用户WeChat">
              </Input>
            </FormItem>
            <FormItem :label-width="0">
              <Button @click="handleSubmit" type="primary" long>注册</Button>
            </FormItem>
            <Button @click="login" type="success" long>返回登录</Button>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      registerForm: {
        user_name: '',
        user_sex: '',
        user_birthday: '',
        user_password: '',
        user_real_name: '',
        user_id_card: '',
        user_mobile: '',
        user_email: '',
        user_qq: '',
        user_wechat: ''
      },
      registerFormValidate: {
        user_name: [
          {
            required: true,
            message: '请输入用户名'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$router.push({
        name: 'login'
      })
    },
    handleSubmit () {
      // let data = { user_password, user_real_name }
      console.log(this.user_name)
      console.log(this.user_sex)
      console.log('000000000' + this.user_birthday)
      this.$post(
        '/webshop/register.json',
        {
          userName: this.user_name,
          usersex: this.user_sex,
          userBirthday: this.user_birthday,
          userPassword: this.user_password,
          userRealName: this.user_real_name,
          userIdcard: this.user_id_card,
          user_mobile: this.user_mobile,
          userEmail: this.user_email,
          userQq: this.user_qq,
          userWechat: this.user_wechat
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
