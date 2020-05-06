<template>
  <div>
    <h4 class="Scroll_text">AI Visual Inspection <b> Digitally Transforms </b> Surface Defect Prevention & Detection in Quality Control for Manufacturing Companies and MRO service centers - <router-link :to="{ name: 'Signup' }">Sign Up</router-link></h4>

    <transition-group name="fade" tag="div" class="Scroll_img">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" alt="inference image" />
      </div>
    </transition-group>
    <!--<a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>-->
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: "Slider",
  data() {
    return {
      images: [
          
        //require('@/assets/index.jpg'),
        //require('@/assets/index1.jpg'),
        //require('@/assets/missing_clip.jpg'),
        require('@/assets/micromax1.jpg'),
        require('@/assets/micromax2.jpg')
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
/* Styles for other images */
/*img {
  top:25%;
  left: 20%;
  right: 10%;
  height: 370px;
  width: 57%;
  position: fixed;

}*/

/* style for micromax */
img {
  /*top:25%;*/
  top:40%;
  left: 10%;
  right: 10%;
  height: 400px;
  width: 85%;
  position: fixed;

}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  /* for remaining images*/
  /*right: 23%;*/

  /* for micromax images*/
  right: 12%;
}

.prev {
  /*left: 20%;*/
  left: 24%;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.Scroll_text{
  margin: 5% 10% 10%;
  font-family : Arial, Helvetica, sans-serif;
}

.scroll_link { 
                margin:4px, 4px; 
                padding:4px;  
                width: 500px; 
                height: 110px; 
                overflow-x: hidden; 
                overflow-x: auto; 
                text-align:justify; 
            }


</style>