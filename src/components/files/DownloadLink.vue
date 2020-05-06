<template>
    <div>
        <div>
            <h1>Steps to Annotate Tool1 Images</h1>
            <h5>1.	Install python3.6 with default pip install. After installation restart system</h5>
            <img class="image_class" src="@/assets/Python_installation.jpg" alt="image"/>
            <h5>2.	Open cmd and type the following command: pip install labelImg.</h5>
            <h5>3.	Launch labelImg from cmd.</h5>
            <h5>4.	Click 'Open Dir' select the folder which contains the images.</h5>
            <img class="image_class" src="@/assets/Annotate_Screenshot_Paint_1_1.jpg" alt="image"/>
            <h5>5.	Click 'Create RectBox'</h5>
            <img class="image_class" src="@/assets/Annotate_Screenshot_Paint_1_2.jpg" alt="image"/>
            <h5>6.	Click and release left mouse to select a region to annotate the rect box with class name (label).</h5>
            <img class="image_class" src="@/assets/Annotate_Screenshot_Paint_1_4.jpg" alt="image"/>
            <h5>7.	You can use right mouse to drag the rect box to copy or move it</h5>
            <h5>8.	When annotation process is over click on "save" to save the .xml file of the image.  The ‘.xml’ file will be stored in same selected folder.</h5>
            <img class="image_class" src="@/assets/Annotate_Screenshot_Paint_1_5.jpg" alt="image"/>
            
            <h5>9.	Then click on ‘Next Image’ to repeat the above process.</h5>
            <img class="image_class" src="@/assets/Annotate_Screenshot_Paint_1_3.jpg" alt="image"/>
            <h5>10.	Do this for all the images in the folder to get the annotated images with ‘.xml’ files.</h5>
            <h5>11.	Now Zip the entire folder which contain images and ‘.xml’ files and upload into our portal</h5>
            <h5>You can refer to the below hotkeys to speed up your workflow.</h5>
            <h3>Note:</h3>
            <h5>Label name should all be in lower case.</h5>
            <h5>If there are two or more defects belongs to same class, they should be label same throughout the images.</h5>
        </div>
        <div>
            <h1>Steps to Annotate Tootl2 Images</h1>
            <h5>1. <a href="http://www.robots.ox.ac.uk/~vgg/software/via/via_demo.html" target="_blank">Click here to open annotation tool</a></h5>
            <h3>Note:</h3>
            <h5>while using this tool make sure that until you complete annotation of all images you should not refresh the browser. because it will again directed to its orginal page and your progress will be lost</h5>
            <h5>2. Click on "Remove" to delete images that are already present in the window</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_1.jpg" alt="image"/>
            <br>
            <br>
            <h5>3. To add Images click on the "Add files" and add all the images that are to be annotated</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_2.jpg" alt="image"/>
            <br>
            <br>
            <h5>4. Select the Shape you want to annotate(i.e If the shape is regular select rectangular Shape if the annotated shape is irregular select polyline)</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_3.jpg" alt="image">
            <br>
            <br>
            <h5>5. To name the annotated region click on the yellow line of the annotated area and name it</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_4.jpg" alt="image">
            <br>
            <br>
            <h5>6. Repeat this process for all images that are to be annotated</h5>
            <h5>7. After annotating all the images click on "Annotation" tab on the navbar</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_5.jpg" alt="image">
            <br>
            <br>
            <h5>8. Export Annotation(as csv), Export Annotation(as json), Export Annotation(as COCO format). Save Exported files in the images floder that are annotated</h5>
            <img class="image_class" src="@/assets/Annotation_ScreenShot_Paint_2_6.jpg" alt="image">
            <br>
            <br>
            <h5>9. Now Zip the folder and share with us.</h5>
        </div>
    </div>

</template>

<style scoped>
.image_class{
    margin-left: 20%;
    width: 750px;
    height: 450px;
}
</style>