<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider :collapsed-width="78">
        <Menu theme="dark" width="auto" :open-names="menuData.openNames" :active-name="menuData.activeName">
          <Submenu v-for="(item,index) in menuData.submenus" :name="item.name" :key="index">
            <template slot="title">
              <Icon :type="item.iconType"></Icon>{{item.title}}
            </template>
            <div v-for="(item2,index2) in item.items" :key="index2">
              <MenuItem v-if="item2.items == null" :name="item2.name" >{{item2.title}}</MenuItem>
              <Submenu v-else >
                <template slot="title">
                  {{item2.title}}
                </template>
                <MenuItem v-for="(item3,index3) in item2.items" :name="item3.name" :key="index3">{{item3.title}}</MenuItem>
              </Submenu>
            </div>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: auto;min-height:830px ">Content</div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: {
        // 当前活跃菜单，只能有一个
        activeName: '1-2',
        // 已展开的菜单数组
        openNames: ['1'],
        // 一级菜单数组
        submenus: [
          {
            // 相当于id
            name: '1',
            // 显示出来的标题
            title: '一级菜单_1',
            // 图标样式
            iconType: 'ios-navigate',
            // 二级菜单数组
            items: [
              { name: '1-1', title: '二级菜单_1' },
              { name: '1-2', title: '二级菜单_2' },
              { name: '1-3', title: '二级菜单_3' },
              {
                name: '1-4',
                title: '二级菜单_4',
                items: [
                  { name: '1-4-1', title: '三级菜单_1' },
                  { name: '1-4-2', title: '三级菜单_2' },
                  { name: '1-4-3', title: '三级菜单_3' }
                ]
              }
            ]
          },
          {
            name: '2',
            title: '一级菜单_2',
            iconType: 'ios-keypad',
            items: [
              { name: '2-1', title: '二级菜单_1' },
              { name: '2-2', title: '二级菜单_2' },
              { name: '2-3', title: '二级菜单_3' }
            ]
          }

        ]

      }
    }
  }
}
</script>
