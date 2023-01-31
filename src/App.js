import React, { useCallback, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const App = () => {
  const [combined,setCombined] = useState();
  const [countryc,setCountryc] = useState();
  const [rawphone,setRawphone] = useState();
  const handleOnChange = useCallback((value, data) => {
    setCombined(value)
    setCountryc("+"+data.dialCode)
    setRawphone(value.slice(data.dialCode.length))
    }, []);
  return (
    <div>
      <PhoneInput
        country={"us"}
        value=""
        onChange={handleOnChange}
      />

      <b>Raw Phone : </b><span>{rawphone}</span>
      <br></br>
      <b>Country Code : </b><span>{countryc}</span>
      <br></br>
      <b>combined value : </b><span>{combined}</span>
    </div>
  );
};
export default App;