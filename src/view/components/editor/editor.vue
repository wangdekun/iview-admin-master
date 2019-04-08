<template>
  <div>
    <editor ref="editor" :value="content" @on-change="handleChange"/>
    <Button @click="changeContent">修改编辑器内容</Button>
    <Button @click="pushContent">提交编辑器内容</Button>
  </div>
</template>

<script>
import Editor from '_c/editor'

var thistext = ''
export default {
  name: 'editor_page',
  components: {
    Editor
  },
  data () {
    return {
      content: '12312323'
    }
  },
  methods: {
    handleChange (html, text) {
      console.log(html, '000000', text)
      thistext = html
    },
    changeContent () {
      this.$refs.editor.setHtml('<p>powered by wangeditor</p>')
    },
    pushContent (html, text) {
      console.log(thistext)
      this.$post(
        '/documentLibrary/requirementclassdocumentation.json',
        {
          content: thistext
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
