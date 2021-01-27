<template>
  <div class="image-item" draggable="true" @dragenter="dragenter" @dragstart="dragStart($event,item.imgUrl)" v-bind:class="{current:currentIndex == item.index}">
    <el-image v-if="!reloadImg" :src="item.imgUrl" fit="cover" :data-info="JSON.stringify(item)" @error="errFn" @load="loadedImg">
      <div slot="placeholder" class="el-image__error">
        加载中<span class="dot">...</span>
      </div>
      <div slot="error" class="el-image__error">
        <span>
          <i class="el-icon-picture"></i><br>
          加载失败
        </span>
      </div>
    </el-image>
    
    <span class="label" v-if="item.score">{{item.score}}<slot></slot></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop,Emit, Watch } from 'vue-property-decorator';

@Component({
})
export default class ImageItem extends Vue {
  @Prop({default:()=>{return []}}) item!:object
  @Prop({default:''}) currentIndex!:string
  @Prop({default:()=>{return []}}) items!:object

  times = 0
  imgSrc = ''
  reloadImg:boolean = false;

  created() {

  }
  mounted(){

  }
  loadedImg(){
    //console.log(ev)
  }
  errFn(){
    let self = this
    this.times ++;
    if(this.times < 3){
      this.reloadImg = true;
      setTimeout(()=>{
        self.reloadImg = false;
      },1000)
    }
  }

  @Emit('dragenter')
  dragenter(event:any){
    event.preventDefault();
    return {event ,item: this.item}
  }

  dragStart (event: any, url: string){
    event.dataTransfer.setData("Text", url);
  }
}

</script>

<style lang="scss" scoped>
::v-deep {
  .el-image{
    background: #F3F6FD;
    img{
      height: 100%;
      width: 100%;
      border-radius: 2px;
    }
  } 
  .el-image__error{
    border-radius: 2px;
    line-height: 1.8;
    text-align: center;
    i{
      font-size: 28px;
      color: var(--gray);
    }
  }
}
.image-item{
  position: relative;
  line-height: 0;
  overflow: hidden;
  background: #F3F6FD;
  .el-image{
    height: 100%;
    width: 100%;
    line-height: 0;
  }
  .label{
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 0;
    bottom: 0;
    line-height: 1.8;
    background: rgba(64, 66, 71, .7);
    padding-left: 8px;
    z-index: 1;
    color: #e2e2e2;
    text-align: center;
    border-radius: 0 0 2px 2px ;
  }
}
.current{
  border: 2px solid var(--primary);
  border-radius: 3px;
  //box-shadow: 0px 4px 8px 0px rgba(78, 136, 243, 0.25);
  //box-shadow: 0px 0px 0px 1px var(--primary);
  background: var(--primary);
}

</style>
