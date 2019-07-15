<template>
    <div id="container">
        <div id="header">
            <img id='iconImage' :src=iconImageSrc>
            <span  id="title">{{title}}</span>
            <span id="button">
                <el-button  icon="el-icon-close" type="primary" circle onclick=window.close()></el-button>
            </span>
        </div>

        <img id="contentImage" :src="contentImageUrl" alt="图片缺失" />

        <span id="content" v-html="contentText"></span>

        <div id="footer">
            <a id="contentUrl" :href=contentUrl> 详细信息 </a>
        </div>
    </div>

</template>

<script>
    //两种获取路径方式
    import iconImageUrl from '../img/icon.png'
    var iconImageBase64='data:image/png;base64,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'
    import contentImageUrl from '../img/titleImg.jpg';
    export default {
        name:'dig2',
        data() {
            return {
                dialogVisible: false,
                title:"广联达资讯",
                iconImageSrc:iconImageBase64?iconImageBase64
                    :iconImageUrl,
                contentImageUrl:contentImageUrl,
                contentText:"<h1>TITLE</h1>content content content <b>important</b> content content content content content <br>",
                contentUrl:"https://www.baidu.com",
            };
        },

        component:{
            iconImageUrl,
            contentImageUrl,
        },
        methods: {
        }
    };
</script>

<style scoped>

    #container{
        display:flex;
        flex-wrap:wrap;
        justify-content: center;

        margin:10px;
        border:2px #409eff solid;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    #header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        padding:0 1%;
        background-color: #409eff;
        color:white;
    }
    #footer{
        display:flex;
        flex:1 1 100%;
        justify-content: flex-end;
        margin:2% 3%;
    }
    #iconImage{
        width:25px;
        height:25px;
    }
    #contentImage{
        width:100%;

        flex:1 100%;

    }
    #content{
        width:100%;
    }
    a{
        text-decoration:none;
        color: #409eff;
    }

</style>
