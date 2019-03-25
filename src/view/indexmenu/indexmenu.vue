<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <!-- <Menu mode="horizontal" theme="light" active-name="首页导航">
                  <Submenu v-for="(setting_item, i) in website_settings_config_data" :name="setting_item.name">
                    <template slot="title">
                      <Icon :type="setting_item.icon"></Icon>
                      {{ setting_item.name }}
                    </template>
                    <MenuGroup v-for="(group, j) in setting_item.groups" :title="group.name">
                      <MenuItem v-for="(child, k) in group.children" name="child.name">{{child.name}}</MenuItem>
                    </MenuGroup>
                  </Submenu>
                </Menu> -->
            </i-col>
            <i-col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
// import LoginForm from '_c/login-form'
// import { setToken } from '@/libs/util'
// axios
import axios from 'axios'
// axios方法绑定到全局
// Vue.prototype.$http = axios;
axios.post('/tree/findtree.json', {
})
  .then(function (response) {
    console.log(response)
    var data = response.data
    for (var i = 0; i < data.length; i++) {
      state.menuRspList.push(list[i])
    }
  })
  .catch(function (error) {
    console.log(error)
  })
export default{
  data () {
    return {
      website_settings_config_data: [
        {
          'name': '网站首页设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '网站首页',
              'icon': 'settings',
              'children': [
                {
                  'name': '首页导航',
                  'route': '' // 跳转路径
                },
                {
                  'name': '一级轮播',
                  'route': '' // 轮播图
                },
                {
                  'name': '二级轮播',
                  'route': '' // 跳转路径
                },
                {
                  'name': '产品设置',
                  'route': '' // 跳转路径
                },
                {
                  'name': '公司展示',
                  'route': '' // 跳转路径
                },
                {
                  'name': '合作公司',
                  'route': '' // 跳转路径
                },
                {
                  'name': '首页新闻',
                  'route': '' // 跳转路径
                },
                {
                  'name': '地图导航',
                  'route': '' // 跳转路径
                },
                {
                  'name': '页脚导航',
                  'route': '' // 跳转路径
                }
              ]
            }
          ]
        },
        {
          'name': '网站新闻页设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '网站新闻页设置',
              'icon': 'settings',
              'children': [
                {
                  'name': '网站新闻页设置',
                  'route': '' // 跳转路径
                }

              ]
            }
          ]
        },
        {
          'name': '文档设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '文档设置',
              'icon': 'settings',
              'children': [
                {
                  'name': '文档设置',
                  'route': '' // 跳转路径
                }

              ]
            }
          ]
        },
        {
          'name': '关于我们设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '关于我们设置',
              'icon': 'settings',
              'children': [
                {
                  'name': '关于我们设置',
                  'route': '' // 跳转路径
                }
              ]
            }
          ]
        },
        {
          'name': '实体服务器页面设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '实体服务器页面设置',
              'icon': 'settings',
              'children': [
                {
                  'name': '实体服务器页面设置',
                  'route': '' // 跳转路径
                }

              ]
            }
          ]
        },
        {
          'name': '通知公告设置',
          'icon': 'settings',
          'groups': [
            {
              'name': '公告设置',
              'icon': 'settings',
              'children': [
                {
                  'name': '公告设置',
                  'route': '' // 跳转路径
                }

              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
