<template>
  <el-select v-model="selected"
             @change="handleSelectedChange"
             @visible-change="handleVisibleChange">
    <el-option v-for="item in mList"
               :key="item.key"
               :label="item.name"
               :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: "selectbar",
    data() {
      return{
        selected: '',
        mList: [],
      }
    },
    computed: {},
    methods: {
      handleSelectedChange(value){
        location.reload()
      },
      handleVisibleChange(status){

      },
    },
    created(){

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
