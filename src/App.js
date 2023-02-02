// import React, { useState } from 'react';
// import './App.css';

// export default function ColorPicker() {
//   const [color, setColor] = useState();

//   const divStyle = {backgroundColor: 'purple'};

//   const handleChange = (props) => {
//     color = props.target.value;
//     console.log(color)
//     setColor = color;
//     console.log(props.setColor);
//   }

// return (
//   <div style={divStyle}>
//     <p>The color is {color}</p>
    
//     <button onClick={(e) => {handleChange}}>
//       Aquamarine
//     </button>
    
//     <button onClick={(e) => setColor({handleChange})}>
//       BlueViolet
//     </button>
    
//     <button>
//       Chartreuse
//     </button>
    
//     <button>
//       CornflowerBlue
//     </button>
//   </div>
//   );
// }

// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState();

  const divStyle = {backgroundColor: color};

  const handleClick = (e) => {
    let chosenColour = e.target.innerText;
    console.log(`The value is ${chosenColour}`);
    setColor(chosenColour);
  }

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={handleClick}>
        Aquamarine
      </button>
      <button onClick={handleClick}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}
