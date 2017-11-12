<template>
<div>
	外卖
	<button @click="getData()">提交</button>
  <button @click="queryData()">查找</button>
  <button @click="deleteData()">删除</button>
  <button @click="updateData()">更新</button>
  <div>{{reqdata}}</div>
</div>
</template>
<script>
import { Message } from 'element-ui';
import {global} from './../global/global';
export default {
  name: 'hello',
  data () {
    return {
        selected:"外卖" ,
        reqdata:{
        	name:"hello",
        	age:12,
        	grade:3
        }
    }
  },
  // mounted() {
  //           var vm = this;
  //           vm.getData();
  //       },
  methods:{
    getData:function(){
    	// alert('hello')
    	var vm = this;
     global.post('http://127.0.0.1:3000/api/addStudents',vm.reqdata,null,function(res){
                      console.log('-------根据id获取表单信息：',JSON.stringify(res) )
                      if(res.body.resultCode == 0){
                           var res = res.body.data;
                                console.log('=====',res);

                                vm.reqdata= res
                                
                      }else{
                            //alert(res.body.resultMsg)
                            Message({
                                showClose: true,
                                message: res.body.resultMsg,
                                type: 'error'
                            });
                      }

                      
                },function(res){
                    //失败回调
                },false)
  },
  queryData:function(){
      // alert('hello')
      var vm = this;
     global.post('http://127.0.0.1:3000/api/queryStudents',{age:23,grade:5},null,function(res){
                      console.log('-------根据age获取表单信息：',JSON.stringify(res) )
                       vm.reqdata= res.body;
                      if(res.body.resultCode == 0){
                           var res = res.body.data;
                                console.log('=====',res);
                                vm.reqdata= res
                                
                      }else{
                            //alert(res.body.resultMsg)
                            Message({
                                showClose: true,
                                message: res.body.resultMsg,
                                type: 'error'
                            });
                      }

                      
                },function(res){
                    //失败回调
                },false)
  },
deleteData:function(){
      // alert('hello')
      var vm = this;
     global.post('http://127.0.0.1:3000/api/delStudents',{grade:5},null,function(res){
                      console.log('-------根据id获取表单信息：',JSON.stringify(res) )
                      vm.reqdata= res.body;
                      if(res.body.resultCode == 0){
                           var res = res.body.data;
                                console.log('=====',res);
                                vm.reqdata= res
                                
                      }else{
                            //alert(res.body.resultMsg)
                            Message({
                                showClose: true,
                                message: res.body.resultMsg,
                                type: 'error'
                            });
                      }

                      
                },function(res){
                    //失败回调
                },false)
  },
  updateData:function(){
      // alert('hello')
      var vm = this;
     global.post('http://127.0.0.1:3000/api/modifyStudents',{name:"hello",age:23},null,function(res){
                      console.log('-------根据id获取表单信息：',JSON.stringify(res) )
                      if(res.body.resultCode == 0){
                           var res = res.body.data;
                                console.log('=====',res);

                                vm.reqdata= res
                                
                      }else{
                            //alert(res.body.resultMsg)
                            Message({
                                showClose: true,
                                message: res.body.resultMsg,
                                type: 'error'
                            });
                      }

                      
                },function(res){
                    //失败回调
                },false)
  },
}
}
</script>

<style>
</style>