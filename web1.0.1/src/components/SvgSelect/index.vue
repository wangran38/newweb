<!-- index.vue -->
<template>
  <div class="icon-body" style="overflow-y: auto;">
      <div class="icon-list">
          <div v-for="(item,index) in iconList" :key="index" @click="selectedIcon(item)">
              <svg-icon :icon-class="item" style="height:20px;width:16px;" />
              <i :class="'el-icon-' + item" />
              <span>{{item}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import icons from './element-icons'

export default {
    name: 'IconSelect',
    data() {
        return {
            iconList: icons
        }
    },
    methods: {
        selectedIcon(name) {
            this.$emit('selected', "el-icon-"+name)
            document.body.click()
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-body{
    width: 620px;
    height: 300px;
    padding: 10px;
    .icon-list {
        overflow: scroll;
        
        div {
            display: inline-block;
            width: 25%;
            height: 30px;
            line-height: 30px;
            margin-bottom: -5px;
            cursor: pointer;
        }
        span{
            display: inline-block;
            margin-left: 10px;
            line-height: 30px;
            fill: currentColor;
            overflow: hidden;
        }
    }
}
</style>