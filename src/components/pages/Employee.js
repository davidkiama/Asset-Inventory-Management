// import React from 'react';
// import '../../App.css';

// export default function employee() {
//     return <h1 className=''>Employee Request Dashboard....Jacob</h1>;

// }



import React from 'react';
import { Button } from '../Button';

function Employee() {
  return (
    <>
    <div className='hero-container'>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      
          <h1> EMPLOYEE DASHBOARD! </h1>
          <p> Enter the details below </p>
          <div className='hero-btns'>
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                EXPLORE!
            </Button> */}
            

            <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Asset Type'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='email'
              type='number'
              placeholder='Quantity'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Request Type'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='email'
              type='number'
              placeholder='Urgency'
            />
          </form>
          
          <form>
    
          </form>
          <Button buttonStyle='btn--outline'>Submit</Button>

        </div>


          </div>
    </div>
  </>
  );
}

export default Employee;


// import { _renderMatches } from "react-router/lib/hooks";


// import React from 'react';

// const Employee = () => {
//   return (
//     <div className="formInput">
//       <label>Username</label>
//       <input/>
//     </div>
//   );
// }

// export default Employee