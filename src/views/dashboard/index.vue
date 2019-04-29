<template>
  <div>

  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  // import { formatterBytes } from '@/utils'
  // import { getClusterInfo } from '@/api/dashboard'

  export default {
    name: 'dashboard',
    // computed: {
    //   ...mapGetters([
    //     'selectedCluster'
    //   ])
    // },
    data() {
      return {}
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {

    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .inner_row {
    padding: 5px 10px 5px 10px;
  }
  .ACO {
    height: 300px;
    width: 100%;
  }
  .cluster {
    margin: 5px;
    color: #35e99f;
    font-size: larger;
  }
  .comments {
    color: #00a2d4;
    font-size: small;
  }
</style>
