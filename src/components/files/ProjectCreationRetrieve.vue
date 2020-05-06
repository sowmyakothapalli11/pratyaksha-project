<template>
    <div class="RetriveData conatiner">
        <!--<h1>Retrive Data</h1>-->
        <div class="card card_style" v-for="Data in Registration_Data" :key="Data.id">
            <h2 class="indigo-text text-center">{{ Data.project_title }} Details</h2>
            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size label_line_align_one">Project Title:</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.project_title" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size label_line_align_one">Project POC:</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.project_POC" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">Problem/ Use Case Description :</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.problem_description" disabled></b-form-input>
                    </b-col>
            </b-row>
            
            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">Current Inspection Process</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.current_as_is" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">Impact due to defects<b-icon icon="info" v-b-popover.hover.top="'impact of not detecting defects - describe cost, loss or risk to business or to your customers'"></b-icon>:</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.impact_cost" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">Production volume per day<b-icon icon="info" v-b-popover.hover.top="'no. of units to be inspected per day'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.annual_volume" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="head_label"><b>Defect Metrics</b></label></h6>
                        </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">i. Current Defect Detection %:</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.defect_detection" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">ii. Current delivered defect ratio<b-icon icon="info" v-b-popover.hover.top="'undetected defects delivered to customer even after human inspection'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.deliverd_defect_ratio" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">iii.Current Defect Rate<b-icon icon="info" v-b-popover.hover.top="'no. of defects detected per inspection hour'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.defect_rate" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">iv.Current Defect Density<b-icon icon="info" v-b-popover.hover.top="'no. of defects detected per days production hour'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.defect_density" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="head_label"><b>Cost of quality (COQ)</b></label></h6>
                        </b-col>
                    </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size label_line_align_one">i.Value <b-icon icon="info" v-b-popover.hover.top="'INR'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_quality_value" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">ii.COQ as % of Sales <b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_quality_percentage" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">iii.COQ as % of Cost of Production<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_production" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">iv.Cost of rework before delivery<b-icon icon="info" v-b-popover.hover.top="'Cost of rework (repairs) before delivery of product to end customer (INR)'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_rework_before" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">v.Cost of rework after delivery<b-icon icon="info" v-b-popover.hover.top="'Cost of rework (repairs) after delivery of product to end customer (INR)'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_rework_after" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">vi.Cost of Replacement<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_replacement" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">vii.Cost of Returns or Recall<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.c_return" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="head_label"><b>Cost of current human visual inspection</b></label></h6>
                        </b-col>
            </b-row>
            
            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size">i.No of human inspectors:</label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.no_human_inspectore" disabled></b-form-input>
                    </b-col>
            </b-row>

            <b-row class = "my-5">
                    <b-col sm = "3">
                        <label class="black-text label_size label_line_align_one">ii.CTC per FTE<b-icon icon="info" v-b-popover.hover.top="'Cost To Company per Full Time Employee'"></b-icon></label>
                    </b-col>
                    <b-col sm = "5">
                        <b-form-input v-model="Data.ctc_fte" disabled></b-form-input>
                    </b-col>
            </b-row>

            <thead>
            <tr>
                <th scope = "col"></th>
                <th scope = "col">Defect_type</th>
                <th scope = "col">Defect_para</th>
            </tr>
        </thead>

        <tr v-for="(defect_description_each, k) in Data.defect_description" :key="k">
            
            <td scope="row" class="trashIconContainer">
                <!--<i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>-->
                <!--<b-icon icon="Trash" @click="deleteRow(k, n_visual_inspection_idea)"></b-icon>-->
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="defect_description_each.Defect_type" disabled />
            </td>
            
            <td>
                <input class="form-control" type="text" v-model="defect_description_each.Defect_para" disabled />
            </td>
            
            <!--<td>
                <input class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.product_price" @change="calculateLineTotal(invoice_product)"/>
            </td>-->

        </tr>


        </div>
    </div>
</template>

<script>

import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'

export default {
    name: 'RetriveData',
    data () {
        return {
            
            //smoothies:[
                //{a_company_name: 'Company name entered', b_url: 'websiteentered.com', c_industry:"Industry entered", d_SPOCFirstName: "First name entered", e_SPOCLastName: "Last name entered", f_Designation: "Designation entered", g_Phone_Number: "09344989999", h_Department: "Department entered", i_Email_id: "sowmyak@pratibhaanalytics.com", j_H_Address: "address entered", k_H_Country: "country entered", l_H_State: "state entered", m_H_Pincode: "78233", q_Urgency_of_soluntion: "With in 1-2 months", r_Product_Relevance: "Extremely relevent", s_AI_team_info: "Yes"},
                //{title: 'title2', slug: 'slug2', ingredients: ['ing2.1', 'ing2.2', 'ing2.3'], id: '2'}
            //]
            
            //Registration_Data:[
            //    {a_company_name: 'Company name entered', b_url: 'websiteentered.com', c_industry:"Industry entered", d_SPOCFirstName: "First name entered", e_SPOCLastName: "Last name entered", f_Designation: "Designation entered", g_Phone_Number: "09344989999", h_Department: "Department entered", i_Email_id: "sowmyak@pratibhaanalytics.com", j_H_Address: "address entered", k_H_Country: "country entered", l_H_State: "state entered", m_H_Pincode: "78233", q_Urgency_of_soluntion: "With in 1-2 months", r_Product_Relevance: "Extremely relevent", s_AI_team_info: "Yes",n_visual_inspection_ideas:['Usecase_desc : usecase1' , 'Object_to_be_inspected : object1', 'Current_inspection : inspection1'], id:'1'},
            //]
            Registration_Data: [],
            slug_retrive: null,

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
        


        db.collection('Project_Creation').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log("doc name in created function: " + doc)
                let Data = doc.data()
                console.log("doc id in created function: " + doc.id)
                var id_into_var = doc.id;
                var new_split_id = id_into_var.split("_")
                var idval = this.slug_retrive
                if(new_split_id[0] == idval){
                    Data.id = doc.id
                    this.Registration_Data.push(Data)
                    console.log("data push done")
                }
                else{
                    console.log("Data push not done")
                }
            })
        })
    }
}
</script>

<style scoped>
.card_style{
    margin: 10%;
}

.label_size{
     font-family : Arial, Helvetica, sans-serif;
     font-size   : 1em;
     margin-left : 40%;
}

.label_line_align_one{
    margin-top: 9%;
}

.head_label{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1.2em;
    margin-left: 5%;
    -webkit-text-fill-color: rgb(21, 4, 165);
}

</style>