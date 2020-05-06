<template>

    <div>

        <chartjs-doughnut v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-doughnut>

    </div>

</template>

<script>

export default {
    
    data(){
        return{
            labels: ["Scratches - 7", "Spurious Copper - 3", "Track cut - 8", "MouseBites - 2", "Holes - 10"],
            datasets:[
                {
                    data: [7,3,8,2,10],
                    // backgroundColor: ["Red", "Yellow", "Purple","Blue","Green"]
                    backgroundColor: ["#173F5F", "#20639B", "#3CAEA3","#F6D55C","#ED553B"]

                }
            ],
            option: {
                title: {
                    display: true,
                    position: "bottom",
                    text: "PCB Defects"
                }
            }
        };
    }
}

</script>

<style scoped>


</style>