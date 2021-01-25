<template>
  <div class="image-plus" :style="'height:'+height">
    <el-image ref="imagePlus" v-if="!reloadImg" fit="cover" :data-info="JSON.stringify(imgInfo)" @error="errFn" @load="loadedImg"
     :src="imgInfo.imgUrl"
     :preview-src-list="previewList">
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
    <div class="handle-btns" v-if="isLoad">
      <el-button size="mini" icon="iconfont icon_Full_screen_playback" @click="showPreview">全屏查看</el-button>
      <el-button size="mini" icon="iconfont icon_download" @click="downloadBigPic">下载大图</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop,Emit, Watch } from 'vue-property-decorator';
import { downLoadImg } from "@/utils/tools";

export interface imgInfoType{
  name:string
  imgUrl:string
  bigImgList:Array<string>
}

@Component({
})
export default class ImagePlus extends Vue {
  @Prop({default:()=>{return []}}) imgInfo!:imgInfoType
  @Prop({default:()=>{return '100px'}}) height!:string

  times = 0
  imgSrc = ''
  reloadImg:boolean = false;
  isLoad:boolean = false;
  previewList:Array<string> = []
  created() {}
  mounted() {}
  loadedImg(){
    //console.log(ev)
    this.isLoad = true;
  }
  showPreview(el){
    //console.log(el)
    this.previewList = this.imgInfo.bigImgList;
    setTimeout(()=>{
      (this.$refs.imagePlus as any).clickHandler();
    },4)
  }
  downloadBigPic(){
    let download = this.imgInfo.bigImgList[0].split('/').slice(-1)[0];
    let url = this.imgInfo.bigImgList[0];
    downLoadImg(url, download);
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
}

</script>

<style lang="scss" scoped>
::v-deep {
  .el-image{
    background: #F3F6FD;
    height:100%;
    img{
      height: 100%;
      width: 100%;
      border-radius: 4px;
    }
  } 
  .el-image__error{
    border-radius: 4px;
    line-height: 100%;
    text-align: center;
    height:100%;
    i{
      font-size: 28px;
      color: var(--gray);
    }
  }
  .el-image__preview{
    cursor:default
  }
}
.image-plus{
  position: relative;
  line-height: 0;
  height:100%;
  overflow: hidden;
  background: #F3F6FD;
  
  .el-image{
    height: 100%;
    width: 100%;
    line-height: 0;
  }
  .handle-btns{
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 100%;
    text-align: right;
    z-index: 2;
    .el-button{
      background: rgba(0,0,0,.3);
      color:rgba(255,255,255,.8);
      border:none;
    }
  }
}

</style>
