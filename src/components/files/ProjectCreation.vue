<template>
    <div>
        <b-card class="PC_card">
            <b-form @submit="addProject">
                <b-container fluid>
                    
                    <h1 class="text-center">Project Creation(Inspection UseCase)</h1>
                    
                    <b-row class="my-5">
                        <b-col sm="5">
                            <label class="black-text PC_star PC_label PC_label_one">Project Title</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="text" class="text-center PC_placeholder" v-model="project_title" placeholder="Project Title"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="5">
                            <label class="black-text PC_star PC_label PC_label_one">Project POC</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="text" class="text-center PC_placeholder" v-model="project_POC " placeholder="Project POC"></b-form-input>
                        </b-col>
                    </b-row>
                    

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_star PC_label PC_label_one">Problem/ Use Case Description</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="text" class="text-center PC_placeholder" v-model="problem_description" placeholder="Problem Description"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_star PC_label">Current Inspection Process</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="text" class="text-center PC_placeholder" v-model="current_as_is" placeholder="Current As-Is Process (description) of Human Visual Inspection"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col sm="10">
                            <h6><label class="black-text">Description of defects</label></h6>
                            <thead>
                                <tr>
                                    <th scope = "col"></th>
                                    <th scope = "col">Defect Type</th>
                                    <th scope = "col">Defect Description</th>
                                </tr>
                            </thead>

                             <tr v-for="(defect_description_each, k) in defect_description" :key="k">
            
                                <td scope="row" class="trashIconContainer">
                                    <!--<i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>-->
                                    <button type='button' class="btn btn-info" @click="deleteRow(k, defect_description_each)">
                                        <!--<b-icon icon="Trash" @click="deleteRow(k, defect_description_each)"></b-icon>-->
                                        <b-icon icon="Trash"></b-icon>
                                    </button>
                                </td>
                
                                <td>
                                    <input class="form-control" type="text" v-model="defect_description_each.Defect_type" />
                                </td>
            
                                 <td>
                                    <input class="form-control" type="text" v-model="defect_description_each.Defect_para" />
                                </td>
                            </tr>
                            <button type='button' class="btn btn-info" @click="addNewRow">
                                <b-icon icon="plus"></b-icon>Add
                            </button>
                        </b-col>
                    </b-row>


                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label">Impact due to defects<b-icon icon="info" v-b-popover.hover.top="'impact of not detecting defects - describe cost, loss or risk to business or to your customers'"></b-icon>:</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="text" id="PC_line_3" class="text-center PC_placeholder" v-model="impact_cost" placeholder="impact of not detecting defects - describe cost, loss or risk to business or to your customers"></b-form-input>
                        </b-col>
                    </b-row>    

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">Production volume per day<b-icon icon="info" v-b-popover.hover.top="'no. of units to be inspected per day'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="annual_volume" placeholder="Annual volume per day or per month"></b-form-input>
                        </b-col>
                    </b-row>

                    <!--<b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label">Current Average handling time of human visual inspection:</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="as_is_aht" placeholder="Current As-Is Process Average handling time of human visual inspection"></b-form-input>
                        </b-col>
                    </b-row>-->

                    <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="black-text">Defect Metrics</label></h6>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">i.Current Defect Detection %:</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="defect_detection" placeholder="Current Defect Detection Percentage"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label">ii.Current delivered defect ratio<b-icon icon="info" v-b-popover.hover.top="'undetected defects delivered to customer even after human inspection'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" id="PC_line_3" class="text-center PC_placeholder" v-model="deliverd_defect_ratio" placeholder="Current delivery defect ratio(undetected defects delivered to customer even after human inspection)"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">iii.Current Defect Rate<b-icon icon="info" v-b-popover.hover.top="'no. of defects detected per inspection hour'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="defect_rate" placeholder="Current Defect Rate"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">iv.Current Defect Density<b-icon icon="info" v-b-popover.hover.top="'no. of defects detected per days production hour'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="defect_density" placeholder="Current Defect Density"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="black-text">Cost of quality (COQ)</label></h6>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">i.Value <b-icon icon="info" v-b-popover.hover.top="'INR'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_quality_value" placeholder="Value"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">ii.COQ as % of Sales <b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_quality_percentage" placeholder="COQ as % of Sales"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">iii.COQ as % of Cost of Production<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_production" placeholder="COQ as % of Cost of Production"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">iv.Cost of rework before delivery<b-icon icon="info" v-b-popover.hover.top="'Cost of rework (repairs) before delivery of product to end customer (INR)'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_rework_before" placeholder="Cost of rework before delivery"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">v.Cost of rework after delivery<b-icon icon="info" v-b-popover.hover.top="'Cost of rework (repairs) after delivery of product to end customer (INR)'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_rework_after" placeholder="Cost of rework after delivery"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">vi.Cost of Replacement<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_replacement" placeholder="Cost of Replacement"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">vii.Cost of Returns or Recall<b-icon icon="info" v-b-popover.hover.top="'avg. per annum'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="c_return" placeholder="Cost of Returns or Recall"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <h6><label class="black-text">Cost of current human visual inspection</label></h6>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">i.No of human inspectors:</label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="no_human_inspectore" placeholder="No of human inspectors"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <label class="black-text PC_label PC_label_one">ii.CTC per FTE<b-icon icon="info" v-b-popover.hover.top="'Cost To Company per Full Time Employee'"></b-icon></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input type="number" class="text-center PC_placeholder" v-model="ctc_fte" placeholder="CTC per FTE"></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-3">
                        <b-col sm="5">
                            <!--<label class="black-text">Steps to Annotate Images <b-link src="@/assets/Steps to Annotate Images.docx">Chick  here</b-link> </label>
                            <a href="\Dashbord_Project\web_project\src\assets\steps_to_annotate_images_out.docx" download>File Template1</a>
                            <a href="\Dashbord_Project\web_project\src\assets\second-firebase-64437-Company_Profile-export.json" download>File Template1</a>-->
                            <router-link :to="{ name: 'DownloadLink' }" target="_blank">Steps for Annotating Images</router-link>
                        </b-col>
                    </b-row>

                    <div>
                        <p>Upload defect images rar file:</p>
                        <input type="file" @change="previewImage" multiple accept="all/*" >
                    </div>
    
                    <div>
                        <p>Progress: {{uploadValue.toFixed()+"%"}}
                        <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
                    </div>

                    <p v-if="uploadValue == 100">Data Upload Successfull</p>
                    <button @click.prevent="onUpload">Upload</button>
                    
                    <p class="text-center red-text">{{feedback}}</p>

                    <b-button type = "submit" class = "PC_submit" variant="primary">Submit</b-button>

                </b-container>
            </b-form>
        </b-card>
    </div>
</template>

<script>

import axios from 'axios'
import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'

export default {
    name: 'projectcreation',
    data(){
        return{
            
            project_title           : null,
            project_POC             : null,
            problem_description     : null,
            current_as_is           : null,
            defect_description      : [{
                Defect_type         : null,
                Defect_para         : null
            }],
            impact_cost             : null,
            annual_volume           : null,
            defect_detection        : null,
            deliverd_defect_ratio   : null,
            defect_rate             : null,
            defect_density          : null,
            c_quality_value         : null,
            c_quality_percentage    : null,
            c_production            : null,
            c_rework_before         : null,
            c_rework_after          : null,
            c_replacement           : null,
            c_return                : null,
            no_human_inspectore     : null,
            ctc_fte                 : null,
            imageData               : [],
            picture                 : null,
            uploadValue             : 0,
            feedback                : null,
            slug_retrive            : null
            
        }
    },

    created(){
        db.collection('users').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log("doc name in created function: " + doc)
                let Data = doc.data()
                console.log("doc id of project creation in created function: " + doc.id)
                var id_into_var = doc.id;
                var new_split_id = id_into_var.split("_")
                var idval = this.slug_retrive
                console.log("idval of project creation in created function: " + idval)
                if(new_split_id[0] == idval){
                    Data.id = doc.id
                    console.log("Useres Data in project creation : " + Data)
                }
                else{
                    console.log("Data push not done")
                }
            })
        })
    },

 
    methods:{

        deleteRow(index, defect_description_each) {
            var idx = this.defect_description.indexOf(defect_description_each);
            console.log(idx, index);
            if (idx > -1) {
                this.defect_description.splice(idx, 1);
            }
        },

        addNewRow() {
            this.defect_description.push({
                Defect_type            : '',
                Defect_para            : '',
            });
        },

        previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

        onUpload(){
      this.picture=null;
      //let storage = firebase.storage().ref(`images/${newDirectory}/${fileName}`)
      let folder_name_bad = firebase.auth().currentUser
      var folder_name = folder_name_bad.email + "/"

      
      //const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      
      //const storageRef=firebase.storage().ref('images/'+ this.imageData.name).put(this.imageData);


      const storageRef=firebase.storage().ref(folder_name + this.imageData.name).put(this.imageData);

      
      console.log("image data name: " + this.imageData.name)
      console.log("image folder name: " + folder_name)
      
      console.log("upload valu: " + this.uploadValue)
      //const storageRef=firebase.storage().ref('${newDirectory}').put('${fileName}')
      
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }
      );
    },

        addProject(){

          if(this.project_title && this.project_POC && this.problem_description && this.current_as_is){
              this.feedback = null

              let new_email_user = firebase.auth().currentUser
              console.log("Retrive data before: " + new_email_user.email)
              this.slug_retrive = slugify(new_email_user.email,{
                        replacement: '-',
                        remove: /[$*+~.()'"!\-:@]/g,
                        lower: true,
                        space: false
                    })


              var new_doc_id = this.slug_retrive.concat("_" + this.project_title)
              console.log("new_doc_id: " + this.new_doc_id)

              //db.collection('project_creation_data').add({
              let ref1 = db.collection('Project_Creation').doc(new_doc_id)
                ref1.set({
                    project_title           : this.project_title,
                    project_POC             : this.project_POC,
                    problem_description     : this.problem_description,
                    current_as_is           : this.current_as_is,
                    defect_description      : this.defect_description,
                    impact_cost             : this.impact_cost,
                    annual_volume           : this.annual_volume,
                    //as_is_aht               : this.as_is_aht,
                    defect_detection        : this.defect_detection,
                    deliverd_defect_ratio   : this.deliverd_defect_ratio,
                    defect_rate             : this.defect_rate,
                    defect_density          : this.defect_density,
                    c_quality_value         : this.c_quality_value,
                    c_quality_percentage    : this.c_quality_percentage,
                    c_production            : this.c_production,
                    c_rework_before         : this.c_rework_before,
                    c_rework_after          : this.c_rework_after,
                    c_replacement           : this.c_replacement,
                    c_return                : this.c_return,
                    no_human_inspectore     : this.no_human_inspectore,
                    ctc_fte                 : this.ctc_fte,
                }).then(() => {
                    this.$router.push({name: 'ProjectCreationRetrieve'})
                }).catch(err=>{
                    console.log(err)
                })
          }
          else{
              this.feedback = 'Please Fill all * fields'
          }
        },
    }
}
 
</script>

<style>

.PC_card{
    margin: 5% 15%;
    /*margin-top  : 5%;
    margin-left : 30%;
    max-width   : 45%;*/
    /*align-items: center;
    align-self: center;*/
}

.PC_star:after {
  content   :"*";
  color     :red;
}

.PC_label{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 1em;

    /*margin-top  : 35%;
    margin-left : 150%;*/

    margin-right: 15%;
}

.PC_label_one{
    margin-top: 7%;
}

.PC_placeholder{
    font-family : Arial, Helvetica, sans-serif;
    font-size   : 0.1em;
}

#PC_line_4{
    margin-top : 8%;
}

#PC_line_3{
    margin-top : 5%;
}

.PC_submit{
    margin-top  : 5%;
    margin-left : 39%;
}

</style>