<template>
  <div class="demo">
    <el-button type="primary">主要按钮</el-button>
    <el-button @click="handler" type="success">成功按钮</el-button>
  </div>
</template>

<script setup>
const handler = () => {
  console.log('hello world')
}
</script>

<style lang="scss"></style>
