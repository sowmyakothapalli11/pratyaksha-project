
<template>
    <div>
        <b-card  class = "signup_card">
            <b-form @submit.prevent = "signup">
                <b-container fluid>
                    <h1 class = "text-center">Sign Up</h1>
                    <b-row class = "my-5">
                        <b-col sm = "1">
                            <label class = "black-text signup_star signup_label_single">First Name:</label>
                        </b-col>
                        <b-col sm = "4">
                            <b-form-input type = "text" class = "text-center" id = "signup_line_double_1" v-model = "firstname" placeholder="Enter first name"></b-form-input>
                        </b-col>

                        <b-col sm = "1">
                            <label class = "black-text signup_star signup_label_double_2">Last Name:</label>
                        </b-col>
                        <b-col sm = "4">
                            <b-form-input type = "text" class = "text-center" id = "signup_line_double_2" v-model = "lastname" placeholder = "Enter last name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class = "my-2">
                        <b-col sm = "1">
                            <label class = "black-text signup_star signup_label_single">Company Name:</label>
                        </b-col>
                        <b-col sm = "9">
                            <b-form-input type = "text" class = "signup_placeholder text-center" id = "signup_line_single" v-model = "companyname" placeholder="Enter company name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-2">
                        <b-col sm="1">
                            <label class = "black-text signup_star signup_label_single">Company Email:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type = "email" id = "signup_line_double_1" class = "text-center" v-model = "email" placeholder = "Enter company email"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text signup_star signup_label_double_2">Mobile Number:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="number" class="text-center" id = "signup_line_double_2" v-model = "phone" placeholder = "Enter mobile number"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-2">
                        <b-col sm="1">
                            <label class="black-text signup_star signup_label_pass">Password:</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type ="password" class="signup_placeholder text-center" id="signup_line_single" v-model="password" placeholder="Enter password"></b-form-input>
                        </b-col>
                    </b-row>
                    <p class="red-text center" v-if="feedback">{{ feedback }}</p>
                    <b-button type= "submit" class= "signup_submit" variant= "primary" >Sign Up</b-button>
                </b-container>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Signup',
    data(){
        return{
            companyname     : null,
            firstname       : null,
            lastname        : null,
            phone           : null,
            email           : null,
            password        : null,
            feedback        : null,
            slug            : null,
            feedback_phone  : null
        }
    },
    methods:{
        signup(){
            if(this.email && this.password && this.companyname && this.firstname && this.lastname && this.phone){
                this.slug = slugify(this.email,{
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true,
                    space: false
                })
                //console.log(this.email)
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists){
                        this.feedback = 'This email already exists'
                    }else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(cred => {
                            /*var usermail = this.email;
                            console.log("this is usermail value" + usermail);
                            usermail.sendEmailVerification();*/
                            ref.set({
                                companyname : this.companyname,
                                firstname   : this.firstname,
                                lastname    : this.lastname,
                                phone       : this.phone,
                                user_id     : cred.user.uid
                            })
                        }).then(() => {
                            //this.$router.push({ name: 'EmailCheck' })
                            this.$router.push({name: 'CompanyProfile'})
                        })
                        .catch(err =>{
                            console.log(err)
                            this.feedback = err.message
                            })
                        this.feedback = 'This username is free to use'
                        

                        /*var user = firebase.auth().email;
                        console.log("below is email")
                        console.log(user)
                        user.sendEmailVerification().then(() => {
                        // Email sent.
                        console.log("email sent to the user");
                        }).catch((error) => {
                        // An error happened.
                        console.log(error);
                        });*/
                        const actionCodeSettings = {
                            // URL you want to redirect back to. The domain (www.example.com) for this
                            // URL must be whitelisted in the Firebase Console.
                            //url: 'http://localhost:8080/#/Login?mode=<action>&oobCode=<code>',
                            url: 'http://localhost:8080/#/Login',
                            //url: 'https://platform-dev-40d41.firebaseapp.com/__/auth/action?mode=<action>&oobCode=<code>',

                            handleCodeInApp: true,
                            /*iOS: {
                                bundleId: 'com.example.ios'
                            },
                            android: {
                                packageName: 'com.example.android',
                                installApp: true,
                                minimumVersion: '12'
                            },
                            dynamicLinkDomain: 'https://ai-defect-001.appspot.com/#/login'*/
                        };

                        const tosendmail = this.email;
                        console.log("this is email value :" + tosendmail);
                        firebase.auth().sendSignInLinkToEmail(tosendmail, actionCodeSettings)
                        .then(function() {
                            // The link was successfully sent. Inform the user.
                            // Save the email locally so you don't need to ask the user for it again
                            // if they open the link on the same device.
                            window.localStorage.setItem('emailForSignIn', tosendmail);
                            console.log("mail send successfuly")
                        })
                        .catch(function(error) {
                            // Some error occurred, you can inspect the code: error.code
                            console.log("Error in mail send function" + error)
                        });

                    }
                })
            } else {
                this.feedback = "You must enter all fields"
            }
        },
        


        updateValue1(event) {
            const value = event.target.value
            console.log(value, this.phone)
            if (String(value).length <= 10) {
                this.phone = value
                this.feedback_phone = null
            }
            else{
                this.feedback_phone = 'Enter only 10 digits'
            }
        },
        

    }
}
</script>




<style scoped>

.signup_card{

    margin-top  : 5%;
    margin-left : 25%;
    max-width   : 55%;
    /*align-items: center;
    align-self: center;*/

}

.signup_star:after {

  content   :"*";
  color     :red;

}


.signup_label_single{

    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;
    margin-top  : 40%;
    margin-left : 230%;
    
}

.signup_label_pass{

    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;
    margin-top  : 100%;
    margin-left : 230%;
    
}


.signup_label_double_1{

    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;
    margin-top  : 40%;
    margin-left : 230%;
    
}

.signup_label_double_2{

    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;
    margin-top  : 35%;
    margin-left : 350%;
    
}



.signup_placeholder{

    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.1em;

}

#signup_line_single{

    margin-left : 18%;

}

#signup_line_double_1{

    margin-left : 45%;

}

#signup_line_double_2{

    margin-left : 50%;

}

.signup_submit{

    margin-top  : 10%;
    margin-left : 45%;

}

</style>


