<template>
    <div slot="header" class="clearfix" >
        <span style="float: left; "><img  id='iconImage' :src="iconImageSrc"></span>
        <span  id='title' style="float: left; padding: 1px 0 0 10px ">{{title}}</span>
        <el-button style="float: right; padding: 3px 0" icon="el-icon-close" type="text" onclick="window.closed"></el-button>
    </div>
</template>

<script>
    import iconImage from '../../img/icon.png'
    export default {
        name: "header",
        data() {
            return {
                dialogVisible: false,
                title: "广联达资讯",
                iconImageSrc:iconImage
            };
        }
    }
</script>

<style scoped>
    #iconImage{
        max-width: 20px;

    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

</style>
