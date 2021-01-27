<template>
  <el-popover :placement="placement" :width="width" popper-class="filter-pop" @hide="onHide" v-model="popVisible">
    <h3 class="title">
      <slot name="title">筛选</slot>
    </h3>
    <div class="form-body">
      <form-create v-model="fApi" :rule="formRulesCache" :option="option" @goods-name-change="change" />
    </div>
    <el-button size="big" slot="reference" v-bind:class="{ active: isActive }">
      <slot>筛选<i :class="'iconfont '+icon"></i></slot>
    </el-button>
  </el-popover>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "FilterPopover",
  components: {},
})
export default class FilterPopover extends Vue {
  @Prop({default: () => []})
  dataList!: Array<any>;

  @Prop({default: () => []})
  formRules!: Array<any>;

  @Prop({default: () => "bottom"})
  placement!: string;

  @Prop({default: () => ""})
  icon!: string;

  @Prop({default: () => "451"})
  width!: string;

  @Prop({type: Function,})
  onReset!: () => {};

  popVisible = false;
  isClear = true;
  @Watch("popVisible")
  visibleChanged(nv, ov) {
    if (nv) {
      this.isClear = true;
      this.formPrevCache = JSON.parse(JSON.stringify(this.fApi.form));
      this.formRulesCache = [...this.formRules];
      this.isActive = this.hasSelect(this.fApi.form)
    }
  }
  @Watch("formRules")
  rulesChanged(nv, ov){
    this.formPrevCache = JSON.parse(JSON.stringify(this.fApi.form));
    this.formRulesCache = [...this.formRules];
    if(nv && ov){
      this.fApi.reload(nv)
      this.isActive = this.hasSelect(this.fApi.form)
    }
  }
  formData = {};
  formPrevCache: any = {};
  formBaseCache: any = {};
  formRulesCache: any = [];
  fApi: any = {};
  option = {
    row: false,
    form: {
      labelWidth: "100px",
    },
    resetBtn: {
      size: "big",
      show: true,
      icon: "",
      col: {
        span: 5,
        offset: 6,
      },
      click: (ev) => {
        ev.resetFields();
        if (this.onReset) {
          this.onReset();
        }
        //this.filterEnd(ev.form)
      },
    },
    submitBtn: {
      size: "big",
      icon: "",
      innerText: "确定",
      col: {
        span: 5,
        offset: 12,
      },
    },
    //表单提交事件
    onSubmit: (formData) => {
      this.filterEnd(formData);
      // $f.btn.loading(); // 按钮进入提交状态
      // $f.resetBtn.disabled(); // 重置按钮禁用
      // $f.btn.finish(); // 按钮进入可点击状态
      // $f = that.$formCreate(mock, root);// 创建第二个表单
    },
  };
  isActive = true;

  mounted() {
    console.log(this.fApi)
    this.formBaseCache = JSON.parse(JSON.stringify(this.formRules));
    this.formRulesCache = [...this.formRules];
    this.$nextTick(()=>{
      this.isActive = this.hasSelect(this.fApi.form)
    })
  }
  hasSelect(formResult):boolean{
    const values = this.flatArray(Object.values(formResult));
    return values.some(val => val || val===0)
  }
  flatArray(arr){
    while(arr.some(t=>Array.isArray(t))){
      arr= ([]).concat.apply([],arr);
    }
    return arr;
  }
  change(...arg) {
    console.log(arg);
  }
  onHide() {
    if (this.isClear) {
      this.formRulesCache.map((item) => {
        if(item.value){
          item.value = this.formPrevCache[item.field];
        }
      });
    }
  }

  @Emit("filterParams")
  filterEnd(result) {
    this.popVisible = false;
    this.isClear = false;
    Object.entries(result).forEach(([k, v]) => {
      if (v === null) {
        //result[k] = this.formBaseCache.find((item) => item.field === k).value;
        result[k] = ['',''];
      }
    });
    this.isActive = this.hasSelect(result)
    return result;
  }
}
</script>

<style lang="scss" scoped>
.filter-pop {
  margin: 10px 0 0 20px;
  .el-select,
  .daterange {
    width: 282px;
  }
  .form-foot {
    text-align: center;
  }
}

::v-deep {
  .el-form-item__content {
    & > div {
      width: 90%;
    }

  }


}
.filter-pop .form-body{
  ::v-deep {
    .el-form-item__content .el-form-item__content{
      .el-col:last-child{
        position: relative;
        bottom: 0;
      }
    }

  }
}
</style>
