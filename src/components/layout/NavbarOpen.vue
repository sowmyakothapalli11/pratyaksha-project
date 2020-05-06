<template>
    <div>

        <b-navbar toggleable="lg" role="navigation" type="dark" class ="navbarcolorclass">
            <b-navbar-brand href = "http://www.pratibhaanalytics.com/pratyaksa-ai-visual-inspection.html">
                <img src="@/assets/PratibhaAnalytics_resize.jpg" class = "left logo_resize_1 " alt="Kitten">
            </b-navbar-brand>

            <b-navbar-brand>
                <img src="@/assets/PratyakSa_logo_resize.jpg" class = "left logo_resize_2 " alt="Kitten">
            </b-navbar-brand>

            <!--<b-navbar-brand><router-link :to="{ name:'Scroll' }" class=" left textdevis"> <img src="@/assets/PratibhaAnalytics_resize.jpg" class="left logo_resize"></router-link> </b-navbar-brand>-->
            <!--<b-navbar-brand><b class=" left textdevis2 black-text">pratyakSa | प्रत्यक्ष</b></b-navbar-brand>-->
            <b-navbar-brand v-if="!user"><router-link :to="{ name:'Scroll_Before_Signup' }" class=" left textdevis"><b>AI Visual Inspection</b></router-link> </b-navbar-brand>
            <!--<b-navbar-brand v-if="user"><router-link :to="{ name:'Scroll_After_Signup' }" class=" left textdevis"><b>AI Visual Inspection</b></router-link> </b-navbar-brand>-->

            <!--<b-navbar-brand class=" left textdevis" v-if="user" href = "http://www.pratibhaanalytics.com/pratyaksa-ai-visual-inspection.html" ><b>AI Visual Inspection</b></b-navbar-brand>-->

                        
            <b-navbar-toggle target="nav-collapse" variants="dark" class="minclass"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                
                <b-navbar-nav>
                    <!--<b-nav-item v-if="user"> <router-link :to="{ name: 'ClientDetails' }" class="textde black-text "> Client Details </router-link> </b-nav-item>-->
                    <b-nav-item v-if="user"> <router-link :to= "{ name: 'CompanyProfile' }" class="textde textde_only">Company Profile</router-link> </b-nav-item>

<!--                    <b-nav-item v-if="user"> <router-link :to="{ name: 'EditFile' }" class="textde textde_only">EditFile</router-link> </b-nav-item>-->
<!--                    <b-nav-item v-if="user"> <router-link :to="{ name: 'Feed_edit' }" class="textde textde_only">images folder</router-link> </b-nav-item>-->

                    <!--<b-nav-item v-if="user"> <router-link :to="{ name: 'Benefits' }" class="textde textde_only">Benefits</router-link> </b-nav-item>-->
                    <b-nav-item v-if="user"> <router-link :to= "{ name: 'ProjectCreation' }" class="textde textde_only">Project Creation</router-link> </b-nav-item>
                    <b-nav-item v-if="user"><router-link :to= "{ name: 'ProjectCreationRetrieve' }" class="textde textde_only">MyProjectslist</router-link></b-nav-item>
                    <b-nav-item v-if="user"><router-link :to= "{ name: 'Dashboard' }" class="textde textde_only">Dashboard</router-link></b-nav-item>
                    
                    <!--<b-nav-item v-if="user"><router-link :to= "{ name: 'MyProjects_list' }" class="textde textde_only">MyProjectslist</router-link></b-nav-item>-->
                    <!--<b-nav-item v-if="user"> <router-link :to="{ name: 'Inspection' }" class="textde white-text">Inspection</router-link> </b-nav-item>-->
                    <!--<b-nav-item v-if="user"><router-link :to="{ name: 'UsageMetrics' }" class="textde white-text">Usage Metrics</router-link></b-nav-item>-->
                    <!--<b-nav-item v-if="user"> <router-link :to="{ name: 'ImageView' }" class="textde white-text">Image View</router-link> </b-nav-item>-->
                </b-navbar-nav>



                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-nav-item v-if="!user"><router-link :to="{ name: 'Signup' }" class="textde black-text"><b-icon icon="person-fill"></b-icon>Sign Up</router-link></b-nav-item>
                      <b-nav-item v-if="!user"><router-link :to="{ name: 'Login' }" class="textde black-text"><b-icon icon="unlock-fill"></b-icon>Log In</router-link></b-nav-item>
                    </b-nav-form>
<!--                    <b-nav-item-dropdown right text=user.email class="black">
                        <b-dropdown-item href="#">Account</b-dropdown-item>
                        <b-dropdown-item href="#">Settings</b-dropdown-item>
                    </b-nav-item-dropdown>-->

                    <b-dropdown-item v-if="user"><a @click="logout"><b-icon icon="lock-fill"></b-icon> Sign Out</a></b-dropdown-item>
                    
<!--                <b-nav-item-dropdown class="dropdown_color" right v-if="user">-->
                    <!-- Using 'button-content' slot -->
<!--                        <template v-slot:button-content>
                            <em class="black-text">User</em>
                        </template>
                        <b-dropdown-item><router-link :to="{ name: 'Profile' }" class="textde black-text">Profile</router-link></b-dropdown-item>
                        <b-dropdown-item><a @click="logout"><b-icon icon="lock-fill"></b-icon> Sign Out</a></b-dropdown-item>-->
<!--                    </b-nav-item-dropdown>-->


                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

import firebase from 'firebase'
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'NavbarOpen',
    data(){
        return{
            user: null,
            visible: true,
            pre_data: null,
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'Scroll_Before_Signup' })
            })
        }
    },
    created(){
        //let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            }else{
                this.user = null
            }
            //console.log("data in navbar: " + user.email)
        })
    },
}

</script>

<style scoped>

.textde:hover{
    text-decoration: none;
    font-size: 90%;
    -webkit-text-fill-color: white;
}

.textde_only{
    background-color: darkcyan;
    font-size: 96%;
    width: 4cm;
}

.textdevis{
    font-size: 150%;
    -webkit-text-fill-color: rgb(10, 90, 46);
    /*-webkit-text-fill-color: rgb(247, 83, 18);*/
}
/*.textdevis2{
    font-size: 150%;
    /*-webkit-text-fill-color: rgb(14, 109, 14);*/
/*    -webkit-text-fill-color: rgb(255, 94, 30);
}*/

.textdevis:hover{
    text-decoration: none;
    font-size: 130%;
}

/*.texthover{
    font-size: 125%;
}*/

/*.minclass ul{
   background-color: darkcyan;
   background-color: white;

}*/

.navbar-nav{
    /*background-color: darkcyan;*/
    
    background-attachment: fixed;
    /*height: 50px;*/
}

.navbarcolorclass{
    /*background-color: darkcyan;*/
    background-color: white;
    height : 80px;
    /*height : 150px;*/

}

 .logo_resize_1{
    /*width: 1200px;
    height: 500px;*/
    width: 240px;
    height: 50px;
}

.logo_resize_2{
    /*width: 1200px;
    height: 500px;*/
    width: 246px;
    height: 44px;
}

button{
    background-color: black;
}

/*.dropdown-toggle ::after{
    color: black;
}*/

.hei{
    background-color: darkcyan;
    height: 95%;
}

.dropdown-menu{
    background-color: darkcyan;
}

.drop{
    background-color: darkcyan;
}

</style>