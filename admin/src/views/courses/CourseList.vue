<template>
    <div>
        <h3>课程列表</h3>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue{
    //定义属性以及方法
    //这是data属性ts的语法
    data = {};
    //到这里我们就需要数据请求了,我们先使用fetch来获取数据
    //现在这种方式显得更加自由一些,因为它就是js的语法
    fetch() {
        //我们需要一个包来获取数据,这里会使用axios,因为fetch还是不太方便
    }
    //创建之后自动执行的代码
    created() {
        this.fetch()
    }
}
</script>
<style>

</style>