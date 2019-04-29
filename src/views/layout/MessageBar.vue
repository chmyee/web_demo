<template>
  <div>
    <badge :value="message.num" class="item">
      <el-button type="info" icon="el-icon-message" size="mini" @click="mess_click('message')"></el-button>
    </badge>
    <badge :value="collection.num" class="item">
      <el-button type="warning" icon="el-icon-star-off" size="mini" @click="mess_click('collection')"></el-button>
    </badge>

    <el-dialog :title="titleMap[listType]" :visible.sync="dialogTableVisible" width="85%">
      <el-table :data="dataList" style="width: 100%;margin-top: -50px" max-height="450" :default-sort = "{prop: 'add_time', order: 'descending'}">
        <el-table-column prop="msgFrom" label="消息来源" width="150"></el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <!--<el-button type="danger" icon="el-icon-search" @click="clearAlarm(scope.row)"></el-button>-->
            <i class="el-icon-delete" style="color: red; cursor: pointer;" @click="clearAlarm(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  import Badge from '@/components/Badge'
  // import { updateAlarm } from '@/api/alarm'
  import { mapGetters } from 'vuex'
  export default {
    name: "msg-bar",
    components:{
      Badge
    },
    data() {
      return{
        titleMap:{
          message: "消息列表",
          collection: "收藏列表",
          info: "信息列表",
        },
        listType: "",
        dialogTableVisible: false,
        dataList: [{}],
        isDeletedGuid: '',
      }
    },
    computed: {
      ...mapGetters([
        'msg_detail'
      ]),
      message(){
        let num = 0, message_list = []
        if(this.msg_detail.message){
          num = this.msg_detail.message.message_total
          message_list = this.msg_detail.message.msg
        }
        return {
          num: num,
          message_list: message_list
        }
      },
      collection(){
        let num = 0, collection_list = []
        if(this.msg_detail.collection){
          num = this.msg_detail.collection.collection_total
          collection_list = this.msg_detail.collection.msg
        }
        return {
          num: num,
          collection_list: collection_list
        }
      },
    },
    methods:{
      mess_click(type){
        this.dataList = []
        if(type==="message"){
          this.dataList = this.message.message_list
        }else if(type==="collection"){
          this.dataList = this.collection.collection_list
        }
        let index = this.dataList.findIndex(item=>{
          return item.msg_guid === this.isDeletedGuid
        })
        if(index > -1){
          this.dataList.splice(index, 1)
        }
        this.listType = type
        this.dialogTableVisible = true
      },
      // updateAlarmStatus(guid){
      //   updateAlarm(guid).then(res=>{
      //     if(res.data.status === 201){
      //       this.showMsg("处理成功, 列表将稍后刷新", "success")
      //       this.isDeletedGuid = guid
      //       this.dialogTableVisible = false
      //     }else{
      //       this.showMsg("处理失败", "error")
      //     }
      //   }).catch(err=>{
      //     this.showMsg("处理失败", "error")
      //     console.log(err)
      //   })
      // },
      clearMsg(row){
        this.$confirm('确定该条信息可以被清除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //this.updateAlarmStatus(row.alarm_guid)
        }).catch((err) => {
          this.$message({
            type: 'info',
            message: `已取消操作${err}`
          });
        });
      },
      showMsg(msg, type) {
        this.$message({
          message: msg,
          type: type
        });
      }
    },
    sockets:{
      connect: function(){
        // console.log('socket connected')
      },
    },
    mounted() {
      // this.$socket.emit('mounted', 'mounted');
    },
  }
</script>

<style>
  .item {
    margin-right: 13px;
  }
</style>
