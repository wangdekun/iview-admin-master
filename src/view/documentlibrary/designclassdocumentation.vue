<template>

    <Button @click="handleSubmit"  >注册</Button>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleSubmit () {
      // let data = { user_password, user_real_name }
      console.log(this.user_name)
      console.log(this.user_sex)
      console.log('000000000' + this.user_birthday)
      var map = {}
      var requirementEditEmptyList = []
      var userList = []
      for (var i = 0; i < 3; i++) {
        var RequirementEditEmpty = {}
        var User = {}
        RequirementEditEmpty.id = 1
        RequirementEditEmpty.content = '测试'
        requirementEditEmptyList.push(RequirementEditEmpty)
        User.userId = 1
        User.userName = '测试'
        userList.push(User)
      }
      map['userList'] = userList
      map['requirementEditEmptyList'] = requirementEditEmptyList
      // map={"userList":userList,"requirementEditEmptyList":requirementEditEmptyList}
      console.log(map, '******************', userList)
      // map.push("requirementEditEmptyList",requirementEditEmptyList)
      // map.push("userList",userList)
      this.$post(
        '/documentLibrary/setrequirement.json',
        map,
        { headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        } },
        response => {
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
