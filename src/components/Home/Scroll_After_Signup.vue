<template>
    <div class="center">
        <img src="@/assets/missing_clip.jpg" class="missing_clip_class">
        <img src="@/assets/delux.jpg" class="delux_class">
        <img src="@/assets/comfy.jpg" class = "comfy_class">
        <img src="@/assets/index.jpg" class = "index_class">
        <img src="@/assets/index1.jpg" class = "index1_class">

    </div>
</template>
<script>
export default {
    name: "ImageView",
    data(){
        return{

        }
    }
}
</script>
<style scoped>

.missing_clip_class{
    align-content: center;
    margin-top: 2%;
    width: 400px;
    height: 400px;
}

.delux_class{
    margin-top: 5%;
    width: 450px;
    height: 455px;
}

.imgclass{
    /*width: 1200px;
    height: 500px;*/
    align-items: center;
    width: 500px;
    height: 500px;
}
.imgclass1{
    /*width: 1250px;
    height: 500px;*/
    align-items: center;
    width: 500px;
    height: 500px;
}

</style>