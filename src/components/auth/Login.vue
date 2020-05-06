<template>
    <div >
        <b-card  class="login_card">
            <b-form @submit.prevent="login" class="mainclass" >
                <b-container fluid>
                    
                    <h1 class="text-center">Log In</h1>
        
                    <b-row class="my-4">
                        <b-col sm="2">
                            <label class="black-text login_star login_label"> Email:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-input class="login_placeholder text-center" id="login_line" type="email" v-model="email" placeholder="Enter Email"></b-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-2">
                        <b-col sm="2">
                            <label class="black-text login_star login_label" for="text-password"> Password:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input class="login_placeholder text-center" id="login_line" type = "password" v-model = "password" placeholder = "Enter Password"></b-form-input>
                        </b-col>
                    </b-row>
                    
                    <!--<input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">-->
                    <p class="red-text center login_feed" v-if="feedback">{{ feedback }}</p>
                    
                    <p class="red-text center login_feed" v-if="pass_rest_feedback">{{ pass_rest_feedback }}</p>

                    <p class="login_forgot blue-text" @click="resetPassword">Forgot password?</p>

                    <b-button type="submit" class ="login_submit" variant="primary">LogIn</b-button>

                </b-container>
            </b-form>
        </b-card>
    </div>
</template>

<script>

import firebase from 'firebase'
import db from '@/firebase/init'
import slugify from 'slugify'

export default {

    name: 'Login',
    data(){
        return{
            email                           : null,
            password                        : null,
            feedback                        : null,
            pass_rest_feedback              : null,
        }
    },


    methods:{

        login(){
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred =>{
                    console.log(cred.user)
                    this.$router.push({ name: 'CompanyProfile' })
                }).catch(err => {
                    this.feedback = err.message
                })
                this.feedback = null

            }else{
                this.feedback = 'Please fill in * fields'
            }
        },

        resetPassword(){
            console.log(this.email);
            const auth = firebase.auth();
            var emailAddress = this.email;
            this.pass_rest_feedback = null;
            if(emailAddress == null){
                this.pass_rest_feedback = "Email field is empty please enter registeried email address"
            }
            auth.sendPasswordResetEmail(emailAddress).then(() => {
             //Email sent.
                
                this.pass_rest_feedback=null;
                console.log(emailAddress);
                console.log('Email Sent');
                this.pass_rest_feedback = "Password reset link sent to the given mail"
            }).catch((error) => {
             //An error happened.
                this.pass_rest_feedback = "Please enter valid email address"
                console.log('error log message');
            });
        }
    }

}

</script>

<style scoped>

.login_card{

    margin: 5% 25% auto;

    /*margin-top  : 5%;
    margin-left : 30%;
    max-width   : 45%;*/
    /*align-items: center;
    align-self: center;*/
}

.login_star:after {
  content   :"*";
  color     :red;
}

.login_label{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;
    margin-top  : 35%;
    margin-left : 150%;
    
}

.login_placeholder{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.1em;
}



.login_submit{
    margin-left : 45%;
}

.login_forgot{
    margin-top: 8%;
    margin-left: 40%;
    /*text-emphasis-color: lightskyblue;*/
}

.login_feed{
    margin-top: 5%;
}

#login_line{
    margin-left : 80%;
}

</style>


