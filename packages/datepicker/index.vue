<template>
  <el-date-picker
    v-model="value"
    :type="type"
    format="yyyy-MM-dd HH:mm:ss"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :value-format="dateFormat"
    @change="handlechange"
  ></el-date-picker>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import dayjs from "dayjs";
@Component
export default class DateTimePick extends Vue {
  @Prop({ default: "开始时间" }) startPlaceholder!: string;
  @Prop({ default: "结束时间" }) endPlaceholder!: string;
  @Prop({ default: "-" }) rangeSeparator!: string;
  @Prop({ default: "datetimerange" }) type!: string;
  @Prop({ default: "" }) startTime!: any;
  @Prop({ default: "" }) endTime!: any;
  @Prop({ default: "yyyy-MM-dd HH:mm:ss" }) dateFormat!: any;
  value: any[] = [];
  created() {
    if (this.startTime && this.endTime) {
      this.value = [this.startTime, this.endTime];
    }
  }
  @Watch("startTime")
  onstartTimeChange() {
    this.value = [this.startTime, this.endTime];
  }
  handlechange(value) {
    let startTime = value ? value[0] : "";
    let endTime = value ? value[1] : "";
    this.$emit("update:startTime", startTime);
    this.$emit("update:endTime", endTime);
  }
}
</script>

<style lang="scss" scoped>
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  width: 100%;
}
</style>
