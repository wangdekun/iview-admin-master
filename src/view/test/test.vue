<template>
<div></div>
</template>
<script>
export default {
  created () {
    this.getreq()
  },
  methods: {
    getreq () {
      var url = '/documentLibrary/getrequirement.json'
      // var data = {}
      this.$get(url, { 'id': 4 }, response => {
        console.log(response.data.content, '*********', typeof (response.data.content))
      })
    }
  }
}
</script>
