<template>
  <div>
    <div class="myfooter">
      <span style="align-content: center">
      Copyright &copy; {{year}}. Chmyee Industrial Co., Ltd. All rights reserved. {{footerData}}
      </span>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        footerData: '粤 ICP 备17069844号',
        year: ''
      }
    },
    created () {
      this.getYear()
    },
    methods: {
      getYear () {
        var date = new Date()
        this.year = date.getFullYear()
      }
    }
  }
</script>

<style scoped>
  span:hover {
    color: #E74C3C;
  }
  .myfooter {
    border-top:1px soild #e4e4e4;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:1px;
    width:100%;
    height:50px;
    line-height:50px;
    display:flex;
    background: #000;
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
</style>

