<template>
<div v-html="content"></div>
</template>
<script>
export default {
  created () {
    this.getreq()
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    getreq () {
      var url = '/documentLibrary/getrequirement.json'
      // var data = {}
      this.$get(url, { 'id': 4 }, response => {
        this.content = response.data.content
        console.log(response.data.content, '*********', typeof (response.data.content))
      })
    }
  }
}
</script>
