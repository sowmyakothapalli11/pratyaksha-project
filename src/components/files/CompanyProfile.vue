<template>
    <div>
        <div v-if="pre_data == false">
        <b-card class = "Feedback_card">
          <b-form @submit.prevent="addRegistration">
            <b-container fluid>
              <h3 class="text-center">Company Profile</h3>
              <b-row class = "my-5">
                        <b-col sm = "1">
                            <label class = "black-text CD_star Feedback_label">Company Name:</label>
                        </b-col>
                        <b-col sm = "9">
                            <b-form-input type = "text" id = "Feedback_line_single" class="feedback_placeholder" v-model = "a_company_name" placeholder = "Enter Company Name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="1">
                            <label class="black-text Feedback_label CD_star Feedback_label_line_1">Website:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model = "b_url" class="feedback_placeholder" placeholder="Enter Website"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text CD_star Feedback_label_double_2 Feedback_label_line_1">Industry:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model = "c_industry" class="feedback_placeholder" placeholder="Enter Industry"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="3">
                            <label class="black-text head">Office Address</label>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="1">
                            <label class="black-text Feedback_label Feedback_label_line_1">Address:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "j_H_Address" class="feedback_placeholder" placeholder="Enter Address"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text Feedback_label_double_2 CD_star Feedback_label_line_1">Country:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model="k_H_Country" class="feedback_placeholder" placeholder="Enter Country"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="1">
                            <label class="black-text Feedback_label Feedback_label_line_1">State:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model="l_H_State" class="feedback_placeholder" placeholder="Enter State"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text Feedback_label_double_2 Feedback_label_line_1">Pincode:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model="m_H_Pincode" class="feedback_placeholder" placeholder="Enter Pincode"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="5">
                            <label class="head">Single Point of Contact</label>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="1">
                            <label class="black-text Feedback_label CD_star">First Name:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "d_SPOCFirstName" class="feedback_placeholder" placeholder="Enter First Name"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text Feedback_label_double_2 CD_star">Last Name:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "e_SPOCLastName" class="feedback_placeholder" placeholder="Enter Last Name"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="1">
                            <label class="black-text Feedback_label CD_star Feedback_label_line_1">Designation:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "f_Designation" class="feedback_placeholder" placeholder="Enter Designation"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text Feedback_label_Mobile CD_star Feedback_label_line_1">Mobile:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "g_Phone_Number" class="feedback_placeholder" placeholder="Enter Mobile Number"></b-form-input>
                        </b-col>

                        
                    </b-row>

                    <b-row class="my-4">

                        <b-col sm="1">
                            <label class="black-text Feedback_label CD_star Feedback_label_line_1">Department:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" id = "Feedback_line" v-model= "h_Department" class="feedback_placeholder" placeholder="Enter Department"></b-form-input>
                        </b-col>

                        <b-col sm="1">
                            <label class="black-text CD_star Feedback_label_double_2 Feedback_label_line_1">Email:</label>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="email" id = "Feedback_line" v-model= "i_Email_id" class="feedback_placeholder" placeholder="Enter Email"></b-form-input>
                        </b-col>
                    </b-row>


              <b-row class="my-4">
                <b-col sm="10">
                  <h6><label class="head">Please share your priority visual inspection <b>USE CASES</b> for transforming Quality Control using AI</label></h6>
                  <p class="CD_star">(Please provide Use case description, Object to be inspected, Current inspection process and add more rows as required)</p>
                  <!--<b-form-group class="CD_star" label="(Please provide Use case description, Object to be inspected, Current inspection process and add more rows as required)"></b-form-group>
                    <b-form-tags v-model="n_UseCaseValue" tag-pills size='lg' class="mb-1 new_cla " placeholder="share your usecase's" @input="enterkey"></b-form-tags>-->

                    <thead>
            <tr>
                <th scope = "col"></th>
                <th scope = "col">Usecase description</th>
                <th scope = "col">Object to be inspected</th>
                <th scope = "col">Current inspection</th>
            </tr>
        </thead>

        <tr v-for="(n_visual_inspection_idea, k) in n_visual_inspection_ideas" :key="k">
            
            <td scope="row" class="trashIconContainer">
                <!--<i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>-->
                <b-icon icon="Trash" @click="deleteRow(k, n_visual_inspection_idea)"></b-icon>
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Usecase_desc" />
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Object_to_be_inspected" />
            </td>

            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Current_inspection" />
            </td>
            
            <!--<td>
                <input class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.product_price" @change="calculateLineTotal(invoice_product)"/>
            </td>-->

        </tr>
        <button type='button' class="btn btn-info" @click="addNewRow">
            <b-icon icon="plus"></b-icon>Add
        </button>

                  
                </b-col>
              </b-row>
              <!--<b-form-group class="CD_star">Please share your priority visual inspection use cases for transforming using AI</b-form-group>-->

<!--                <b-col>  
                  <b-form-group class="new_text_cla" label="Object to be inspected:">
                    <b-form-tags v-model="o_ObjectValue" tag-pills size='lg' class="mb-1 new_cla " placeholder="Object to be inspected" @input="enterkey"></b-form-tags>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="disabled-wrapper" class="new_text_cla" label="Current inspection process:">
                    <b-form-tags v-model="p_CurrentValue" tag-pills size='lg' class="mb-1 new_cla " placeholder="Current inspection process" @input="enterkey"></b-form-tags>
                    <b-tooltip target="disabled-wrapper">If inspection process is same as first one no need to mention</b-tooltip>
                  </b-form-group>
                </b-col>
              </b-row>-->

<!--          <b-form-group label="Urgency of Soultion"></b-form-group>-->
                <b-row class="my-4">
                  <b-col sm="9">
                    <h6 class="CD_star"><label class="head">Urgency of Solution</label></h6>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-form-radio v-model="q_Urgency_of_Soultion" class="feedback_radio"  name="Urgency-of-Soultion" value="Immediate">Immediate</b-form-radio>
                  </b-col>
                  
                  <b-col>
                    <b-form-radio v-model="q_Urgency_of_Soultion" class="feedback_radio" name="Urgency-of-Soultion" value="Within 1-2 months">within 1-2 months</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="q_Urgency_of_Soultion" class="feedback_radio" name="Urgency-of-Soultion" value="in next quarter">in next quarter</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="q_Urgency_of_Soultion" class="feedback_radio" name="Urgency-of-Soultion" value="after 6 months">after 6 months</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="q_Urgency_of_Soultion" class="feedback_radio" name="Urgency-of-Soultion" value="Undecided">Undecided</b-form-radio>
                  </b-col>
                </b-row>

<!--            <b-form-group label="Product Relevance"></b-form-group>-->

                <b-row class="my-4">
                  <b-col sm="9">
                    <h6 class="CD_star"><label class="head">Product Relevance</label></h6>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-form-radio v-model="r_Product_Relevance" class="feedback_radio"  name="product-relevance" value="Extremely relevent">Extremely relevent</b-form-radio>
                  </b-col>
                  
                  <b-col>
                    <b-form-radio v-model="r_Product_Relevance" class="feedback_radio" name="product-relevance" value="Very relevent">Very relevent</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="r_Product_Relevance" class="feedback_radio" name="product-relevance" value="Relevent">Relevent</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="r_Product_Relevance" class="feedback_radio" name="product-relevance" value="May be Relevent">May be Relevent</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="r_Product_Relevance" class="feedback_radio" name="product-relevance" value="Not relevent">Not relevent</b-form-radio>
                  </b-col>
                </b-row>

<!--            <b-form-group label="Do you have any in house AI-Team"></b-form-group>-->
                
                <b-row class="my-4">
                  <b-col sm="9">
                    <h6 class="CD_star"><label class="head">Do you have any in house AI-Team</label></h6>
                  </b-col>
                </b-row>
                
                <b-row>
                  <b-col>
                    <b-form-radio v-model="s_AI_team_info" class="feedback_radio" name="AI-team-info" value="Yes">Yes</b-form-radio>
                  </b-col>
                  
                  <b-col>
                    <b-form-radio v-model="s_AI_team_info" class="feedback_radio" name="AI-team-info" value="No">No</b-form-radio>
                  </b-col>

                  <b-col>
                    <b-form-radio v-model="s_AI_team_info" class="feedback_radio" name="AI-team-info" value="No-idea">No-idea</b-form-radio>
                  </b-col>
                </b-row>

<!--                <b-row class = "my-5">
                        <b-col sm = "1">
                            <label class = "black-text CD_star Feedback_label">Current date time:</label>
                        </b-col>
                        <b-col sm = "9">
                            <b-form-input type = "string" disabled id = "Feedback_line_single" class="feedback_placeholder" v-model = "z_current_date_time"></b-form-input>
                        </b-col>
              </b-row>-->

<!--                <b-form-select v-model="t_selected_drop_down" :options="options_drop_down"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ t_selected_drop_down }}</strong></div>-->

              <p class=" text-center red-text">{{feedback}}</p>

              <b-button type="submit" class="feedback_submit" variant="primary">Submit</b-button>

            </b-container>
          </b-form>  
        </b-card>
        </div>
        <div v-if="pre_data == true" class="retrieve_card">

            <div class="card" v-for="Data in Registration_Data" :key="Data.id">
            <div class="card-content">
                <h3 class="indigo-text text-center">{{Data.a_company_name}} Profile</h3>
                
                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_two">Company Name:</label>
                    </b-col>
                    <b-col sm = "9">
                        <b-form-input id="input_line1_single" v-model="Data.a_company_name" disabled></b-form-input>
                    </b-col>
                </b-row>      
                
                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Website:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.b_url" disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Industry:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.c_industry" disabled></b-form-input>
                    </b-col>
                </b-row> 

                <b-row class="my-4">
                        <b-col sm="3">
                            <label class="black-text head">Office Address</label>
                        </b-col>
                </b-row>

                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Address:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.j_H_Address" disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Country:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.k_H_Country" disabled></b-form-input>
                    </b-col>
                </b-row>   

                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">State:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.l_H_State" disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Pincode:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.m_H_Pincode" disabled></b-form-input>
                    </b-col>
                </b-row>  

                <b-row class="my-4">
                        <b-col sm="5">
                            <label class="head">Single Point of Contact</label>
                        </b-col>
                    </b-row>  

                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_two">First Name:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.d_SPOCFirstName"  disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_two">Last Name:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.e_SPOCLastName" disabled></b-form-input>
                    </b-col>
                </b-row>  

                <b-row class = "my-5">
                    
                </b-row>  

                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Designation:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.f_Designation" disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Mobile:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.g_Phone_Number" disabled></b-form-input>
                    </b-col>
                </b-row>  

                <b-row class = "my-5">
                    
                </b-row>  

                <b-row class = "my-5">
                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Department:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.h_Department" disabled></b-form-input>
                    </b-col>

                    <b-col sm = "1">
                        <label class="black-text retrieve_label_text retrieve_text_one">Email:</label>
                    </b-col>
                    <b-col sm = "4">
                        <b-form-input id="input_line1_double" v-model="Data.i_Email_id" disabled></b-form-input>
                    </b-col>
                </b-row>  

                <b-row class = "my-5">
                    
                </b-row>  


                <thead>
            <tr>
                <th scope = "col"></th>
                <th scope = "col">Usecase description</th>
                <th scope = "col">Object to be inspected</th>
                <th scope = "col">Current inspection</th>
            </tr>
        </thead>

        <tr v-for="(n_visual_inspection_idea, k) in Data.n_visual_inspection_ideas" :key="k">
            
            <td scope="row" class="trashIconContainer">
                <!--<i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>-->
                <!--<b-icon icon="Trash" @click="deleteRow(k, n_visual_inspection_idea)"></b-icon>-->
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Usecase_desc" disabled />
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Object_to_be_inspected" disabled />
            </td>

            <td>
                <input class="form-control" type="text" v-model="n_visual_inspection_idea.Current_inspection" disabled />
            </td>
            
            <!--<td>
                <input class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.product_price" @change="calculateLineTotal(invoice_product)"/>
            </td>-->

        </tr>

                <b-row class = "my-5">
                    <b-col sm ="2">
                        <label class="black-text retrieve_label_text_last retrieve_text_one_last">Urgency of Solution:</label>
                    </b-col>
                    <b-col sm = "9">
                        <b-form-input v-model="Data.q_Urgency_of_Soultion" disabled></b-form-input>
                    </b-col>
                </b-row> 


                <b-row class = "my-5">
                    <b-col sm = "2">
                        <label class="black-text retrieve_label_text_last retrieve_text_one_last">Product Relevance:</label>
                    </b-col>
                    <b-col sm = "9">
                        <b-form-input v-model="Data.r_Product_Relevance" disabled></b-form-input>
                    </b-col>
                </b-row>  

                <b-row class = "my-5">
                    <b-col sm = "2">
                        <label class="black-text retrieve_label_text_last retrieve_text_two_last">Do you have any in house AI-Team:</label>
                    </b-col>
                    <b-col sm = "9">
                        <b-form-input v-model="Data.s_AI_team_info" disabled></b-form-input>
                    </b-col>
                </b-row>
               
                 
            </div>
        </div>

        </div>

    </div>
    
</template>

<script>

import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'CompanyProfile',
    data(){
        return{

            z_current_date_time         : new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            a_company_name              : null,
            b_url                       : null,
            c_industry                  : null,
            d_SPOCFirstName             : null,
            e_SPOCLastName              : null,
            f_Designation               : null,
            g_Phone_Number              : null,
            h_Department                : null,
            i_Email_id                  : null,
            j_H_Address                 : null,
            k_H_Country                 : null,
            l_H_State                   : null,
            m_H_Pincode                 : null,
            n_visual_inspection_ideas   : [{
                Usecase_desc            : null,
                Object_to_be_inspected  : null,
                Current_inspection      : null,
             }],
            q_Urgency_of_Soultion       : null,
            r_Product_Relevance         : null,
            s_AI_team_info              : null,
            t_selected_drop_down        : null,
            feedback                    : null,
            feedback_slug               : null,
            pre_data                    : false,
            slug_feed                   : null,
            Registration_Data           : [],

        }
    },
    created(){
                let new_email_user = firebase.auth().currentUser
        console.log("Retrive data before: " + new_email_user.email)
        this.slug_retrive = slugify(new_email_user.email,{
                    replacement: '-',
                    remove: /[$*+~.()'"!\-:@]/g,
                    lower: true,
                    space: false
                })
        


        db.collection('Company_Profile').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log("doc name in created function: " + doc)
                let Data = doc.data()
                console.log("doc id in created function: " + doc.id)
                var id_into_var = doc.id;
                var new_split_id = id_into_var.split("_")
                var idval = this.slug_retrive
                if(new_split_id == idval){
                    Data.id = doc.id
                    this.Registration_Data.push(Data)
                    this.pre_data = true
                    console.log("pre_data in if : " + this.pre_data)
                }   
            })
        })
        },

    methods:{
        

        deleteRow(index, n_visual_inspection_idea) {
            var idx = this.n_visual_inspection_ideas.indexOf(n_visual_inspection_idea);
            console.log(idx, index);
            if (idx > -1) {
                this.n_visual_inspection_ideas.splice(idx, 1);
            }
        },

        addNewRow() {
            this.n_visual_inspection_ideas.push({
                Usecase_desc            : '',
                Object_to_be_inspected  : '',
                Current_inspection      : '',
            });
        },

        addRegistration(){
          if(this.a_company_name && this.b_url && this.c_industry && this.d_SPOCFirstName && this.e_SPOCLastName && this.f_Designation && this.g_Phone_Number && this.h_Department && this.i_Email_id && this.q_Urgency_of_Soultion && this.r_Product_Relevance && this.s_AI_team_info){
              this.feedback = null

              //var new_doc_id = this.i_Email_id.concat(this.t_selected_drop_down)
              //console.log("new_doc_id: " + new_doc_id)

              this.slug_feed = slugify(this.i_Email_id,{
                    replacement: '-',
                    remove: /[$*+~.()'"!\-:@]/g,
                    lower: true,
                    space: false
                })
          
          //console.log("This prints slugify: " + slug_feed)

          let ref1 = db.collection('Company_Profile').doc(this.slug_feed)

          //console.log("this prints ref1: " + ref1)
          

              ref1.set({
                a_company_name              : this.a_company_name,
                b_url                       : this.b_url,
                c_industry                  : this.c_industry,
                d_SPOCFirstName             : this.d_SPOCFirstName,
                e_SPOCLastName              : this.e_SPOCLastName,
                f_Designation               : this.f_Designation,
                g_Phone_Number              : this.g_Phone_Number,
                h_Department                : this.h_Department,
                i_Email_id                  : this.i_Email_id,
                j_H_Address                 : this.j_H_Address,
                k_H_Country                 : this.k_H_Country,
                l_H_State                   : this.l_H_State,
                m_H_Pincode                 : this.m_H_Pincode,
                n_visual_inspection_ideas   : this.n_visual_inspection_ideas,
                q_Urgency_of_Soultion       : this.q_Urgency_of_Soultion,
                r_Product_Relevance         : this.r_Product_Relevance,
                s_AI_team_info              : this.s_AI_team_info,
                //t_selected_drop_down        : this.t_selected_drop_down,
                z_current_date_time         : this.z_current_date_time

            }).then(() => {
                this.$router.push({name: 'ProjectCreationReflection'})
            }).catch(err=>{
                console.log(err)
            })      
          }  
          else{
              this.feedback = 'Please enter * fields'
          }
        }, 
        
    }
}

</script>
<style scoped>

.Feedback_label {
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.95em;
    margin-left : 100%;
    
}
.Feedback_label_Mobile{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.95em;
    margin-left : 180%;

}

.Feedback_label_line_1{
    margin-top: 45%;
}

.Feedback_label_double_2 {
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.95em;
    margin-left : 180%;
    
}

.feedback_placeholder {
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.01em;
}

#Feedback_line {
    margin-left : 25%;
}

#Feedback_line_single {
    margin-left : 11%;
}


.feedback_submit {
    margin-top  : 5%;
    margin-left : 46%;
}

.head{
    font-family : Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    -webkit-text-fill-color: rgb(21, 4, 165);

}

.CD_star:after {
  content   :"*";
  color     :red;
}

.feedback_radio{
  font-family : Arial, Helvetica, sans-serif;
  -webkit-text-fill-color: black;
  font-size: 1.2em;
}



.Feedback_card{
    margin: 10%;
}

.new_cla{
    width: 100%;
}

.new_text_cla{
    margin: 5%;
}

.retrieve_card{
    margin: 10%;
}

.retrieve_label_text{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.95em;
    margin-left : 125%;
}


#input_line1_single{
    margin-left: 10%
}

#input_line1_double{
    margin-left: 24%
}

.retrieve_text_two{
    margin-top  : 15%;

}

.retrieve_text_one{
    margin-top: 40%;
}

.retrieve_label_text_len{
    margin-left: 80%;
}

.retrieve_label_text_last{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.95em;
    /*margin-left : 125%;*/
}

.retrieve_text_one_last{
    margin-top: 15%;
}

.retrieve_text_two_last{
    margin-top: 5%;
}

</style>




