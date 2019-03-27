
<template>
  <Submenu :name="model.title" style="width: 200px">
    <template slot="title"  style="width: 200px">
      {{model.title}}
    </template>
    <!-- // v-if判断是否为最终的子项，如果是则进行MenuItem渲染，否则进行递归调用 -->
    <MenuItem :name="item.title" v-for="item in model.children" :to="item.url" v-if="!item.children || item.children.length==0" :key="item.index" style="width: 200px">{{item.title}}</MenuItem>
        <!-- //递归调用 -->
    <SubItem :model="item"  v-if="item.children&&item.children.length!==0" v-for="(item,index) in model.children" :key="index"></SubItem>

  </Submenu>
</template>

<script>
export default {
  name: 'SubItem', // 至关重要的一步，一定要写name，递归的时候使用
  props: ['model']
}
</script>
