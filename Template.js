
import './Template.css'


import logo from '../image/logo.png'




function Template(props){

  let upperboldtext = props.upperboldtext;

  let upperlighttext = props.upperlighttext;

  let lowerboldtext = props.lowerboldtext;

  let lowerlighttext = props.lowerlighttext
     
  return(
    <div className='template' >
     {/* orange color box at top left */}
     
      {/* rest content of box */}
      <div className='rest-content'>
        {/* icon of computer */}
        <div className="computer-icon">
          <img src={logo}></img>
        </div>

        {/* text area */}

         <div className="text">
            <div className='upper-text'>
            <div className="bold-text">{upperboldtext}</div>

             <div className="light-text">{upperlighttext}</div>
            </div>

            <div className='lowet-text'>

            <div className="bold-text">{lowerboldtext}</div>

              <div className="light-text">{lowerlighttext}</div>

            </div>

            <div className="show-more">show more</div>
         </div>
  {/*   rating , remark , button */}
       <div className='right-content'>
       <div  className='rating-box'>
            <div >9.8</div>

            <div>exceptional</div>
            <div>stars</div>

         </div>

         <div className='view-button'>
          <button>View</button>
         </div>
       </div>
      </div>

    </div>
  )
}


export default Template;