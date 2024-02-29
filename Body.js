
import Heading from "./Heading";
import Tools from "./Tools";

import Template from "./Template";

import './Body.css'

import Secondlast from "./Secondlast";


import Footer from "./Footer";




import Templatetwo from "./Templatetwo";

function Body(){
    return(
      <div className="body">

        <Heading></Heading>
        {/* <Tools></Tools> */}

        <Template  
          
          upperboldtext ={"Wixpro 72-inch Responsive Website Builder"}
          upperlighttext = {" Digital Platform Creation Tool , Streamlined Design interface for Professional websites and online stores"}

          lowerboldtext = {
            " Main Highlights"
          }

          lowerlighttext ={
             "[What you get] : Receive the wixpro website Builder"
          }
        ></Template>

         <Template 
            upperboldtext = {"Sitecraft 68-inch ultimate website Design Stufio - "}
             upperlighttext ={"Comprehensive digital platform creation tool"}

             lowerboldtext ={"Main Highlights"}

             lowerlighttext ={" [what you get] gain access to sitecraft design studio"}
         ></Template>

         <Template  
            upperboldtext ={"Wixpro 72-inch Responsive Website Builder"}
            upperlighttext = {" Digital Platform Creation Tool , Streamlined Design interface for Professional websites and online stores"}
  
            lowerboldtext = {
              " Main Highlights"
            }
  
            lowerlighttext ={
               "[What you get] : Receive the wixpro website Builder"
            }   
           ></Template> 

         <Template
             upperboldtext = {"Sitecraft 68-inch ultimate website Design Stufio - "}
             upperlighttext ={"Comprehensive digital platform creation tool"}

             lowerboldtext ={"Main Highlights"}

             lowerlighttext ={" [what you get] gain access to sitecraft design studio"}    
           ></Template>


         <div className="lower-heading">
           Related deals you might like for
         </div>
            
          <Templatetwo></Templatetwo> 

          <Secondlast></Secondlast> 


          <Footer></Footer>

        

      </div>
    )
}


export default Body;