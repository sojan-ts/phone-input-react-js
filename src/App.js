import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState()

  console.log(value)
  return (
 <>
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
 </>
  );
}

export default App;
