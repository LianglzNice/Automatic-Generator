<template>
    <header>
        <ul>
            <li>
                画布大小
                <el-input v-model="screenW" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> -
                <el-input v-model="screenH" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> 
            </li>
        </ul>
        <el-button class="export" type="primary" size="small" plain @click="toExport">导出</el-button>
    </header>
</template>
<script lang="ts">
import { getCurrentInstance } from "vue"
import { epComponentsList } from '@/datas/screen'
import { getFile } from '@/api/api'
import {
    screenW,
    screenH
} from '@/datas/header'

export default {
    setup() {
        //获取上下文 _this 代替 ctx
        const { ctx:_this }:any = getCurrentInstance();

        let toExport = () => {
            getFile({
                list: epComponentsList
            }).then((res:any):void => {
                if(res.data.msg) {
                    _this.$msg.message(res.data.msg);
                }else{
                    _this.$msg.success('文件生成成功！');
                    //let blob = new Blob([res.data]);
                    //let el = document.createElement('a');
                    //el.style.display = 'none';
                    //el.href = URL.createObjectURL(blob);   // 创建下载的链接
                    //el.download = "index.html"
                    //document.body.appendChild(el);
                    //el.click();
                    //el.remove();
                    //window.URL.revokeObjectURL(el.href);  // 释放掉blob对象
                }
            })
        }

        return {
            screenW,
            screenH,
            toExport
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/header.scss';
</style>