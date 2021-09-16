import { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { values } from './service/values';
import { getValuesForGivenLambda } from './service/service';

function App() {
  const [allValues, setAllValues] = useState(values);
  const [currentValues, setCurrentValues] = useState(getValuesForGivenLambda(0.2));
  const [lambda, setLambda] = useState(0.2);

  const handleChangeLambda = (e: any) => {
    setLambda(e.target.value);

    if (isNaN(parseInt(lambda.toString(), 10)) && (lambda >= 0.2 || lambda <= 3)) {
      console.log('test');
      setCurrentValues(getValuesForGivenLambda(lambda));
    }
  };

  // useEffect(() => {
  //   if (isNaN(parseInt(lambda.toString(), 10)) && (lambda >= 0.2 || lambda <= 3)) {
  //     setCurrentValues(getValuesForGivenLambda(lambda));
  //   }
  // }, [lambda]);

  return (
    <>
      <h1>Acél méretezés</h1>

      <TextField
        required
        id="filled-required"
        label="Required"
        value={lambda}
        variant="outlined"
        onChange={handleChangeLambda}
      />

      <TextField
        id="standard-read-only-input"
        label="a0"
        value={currentValues?.a0}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
    </>
  );
}

export default App;
