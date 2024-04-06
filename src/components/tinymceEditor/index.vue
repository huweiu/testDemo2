<template>
    <div class="tinymce-editor">
        <Editor :api-key="apiKey" v-model="content" :init="tinymceInit"></Editor>
    </div>
</template>

<script setup>
// import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import { ref, reactive, onMounted } from 'vue'

// 插件依赖
// import "tinymce/themes/silver/theme"; // 引用主题文件
// import "tinymce/icons/default"; // 引用图标文件
// import "tinymce/plugins/link";
// import "tinymce/plugins/code";
// // import "tinymce/plugins/advcode";
// import "tinymce/plugins/table";
// import "tinymce/plugins/lists";
// import "tinymce/plugins/advlist";
// import "tinymce/plugins/anchor";
// import "tinymce/plugins/autolink"; //锚点
// import "tinymce/plugins/autoresize";
// import "tinymce/plugins/autosave";
// import "tinymce/plugins/charmap"; //特殊字符
// import "tinymce/plugins/code"; //查看源码
// import "tinymce/plugins/codesample"; //插入代码
// import "tinymce/plugins/directionality"; //
// // import "tinymce/plugins/fullpage"; //页面属性编辑
// import "tinymce/plugins/fullscreen"; //全屏
// import "tinymce/plugins/help"; //帮助
// // import "tinymce/plugins/hr"; //横线
// import "tinymce/plugins/image"; //图片
// // import "tinymce/plugins/imagetools"; //图片工具
// import "tinymce/plugins/importcss"; //图片工具
// import "tinymce/plugins/insertdatetime"; //时间插入
// import "tinymce/plugins/media"; //媒体插入
// import "tinymce/plugins/nonbreaking"; //
// // import "tinymce/plugins/noneditable"; //不间断空格
// import "tinymce/plugins/pagebreak"; //分页
// // import "tinymce/plugins/paste"; //粘贴
// import "tinymce/plugins/preview"; //预览
// // import "tinymce/plugins/print"; //打印
// import "tinymce/plugins/quickbars"; //快捷菜单
// import "tinymce/plugins/save"; //保存
// import "tinymce/plugins/searchreplace"; //查询替换
// // import "tinymce/plugins/spellchecker"; //拼写检查
// // import "tinymce/plugins/tabfocus"; //
// import "tinymce/plugins/template"; //插入模板
// // import "tinymce/plugins/textpattern"; //
// // import "tinymce/plugins/toc"; //
// import "tinymce/plugins/visualblocks"; //
// import "tinymce/plugins/visualchars"; //
// import "tinymce/plugins/wordcount"; //数字统计




const apiKey = ref('wl62w0shpov65emz48wd6kwbtmaqv3gad73frj69o5616ku5')
const content = ref('')

const tinymceInit = reactive({
    selector: 'textarea', 
    height: 600,
    width: '80%',
    min_height: 600,
    max_height: 770,
    language_url: "/tinymce/langs/zh_CN.js",
    language: "zh_CN",
    toolbar_mode: "wrap",
    font_size_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
    font_family_formats: 'PingFang SC;微软雅黑=\'微软雅黑\';宋体=\'宋体\';黑体=\'黑体\';仿宋=\'仿宋\';楷体=\'楷体\';隶书=\'隶书\';幼圆=\'幼圆\';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,;sans-serif',

    branding: true,
    statusbar: false, // 底部的状态栏
    insertdatetime_formats: [ '%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p', '%D' ],

    plugins: 'advcode table accordion anchor link autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image insertdatetime lists advlist media nonbreaking pagebreak preview save searchreplace visualblocks visualchars wordcount',
    details_initial_state: 'collapsed',
    allow_html_in_named_anchor: true,
    link_default_target: '_blank',

    toolbar1: 'code undo redo restoredraft | accordion anchor link autoresize charmap codesample ltr rtl emoticons fullscreen help image insertdatetime numlist bullist media nonbreaking pagebreak preview save searchreplace visualblocks visualchars wordcount',
    toolbar2: 'table cut copy paste | styleselect | bold italic | alignleft aligncenter alignright alignjustify blockquote backcolor | outdent indent fontselect fontsizeselect forecolor formatselect lineheight newdocument remove removeformat selectall strikethrough subscript superscript underline visualaid'
})


</script>

<style lang="scss" scoped>
@import './index.scss'
</style>