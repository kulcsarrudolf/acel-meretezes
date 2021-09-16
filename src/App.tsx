import { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { v4 as uuidv4 } from 'uuid';

// import { values } from './service/values';
import { getValuesForGivenLambda } from './service/service';

function App() {
  // TODO: table component
  // const [allValues, setAllValues] = useState(values);
  const [currentValues, setCurrentValues] = useState<any>(getValuesForGivenLambda(1.8));
  const [lambda, setLambda] = useState('1.8');

  const handleChangeLambda = (e: any) => {
    setLambda(e.target.value);
  };

  useEffect(() => {
    try {
      setCurrentValues(getValuesForGivenLambda(parseFloat(lambda)));
    } catch (error) {
      // do nothing
    }
  }, [lambda]);

  return (
    <>
      <h1>Acél méretezés</h1>

      <TextField
        style={{ maxWidth: '10rem', margin: '1rem' }}
        required
        id="filled-required"
        label="λ"
        value={lambda}
        variant="outlined"
        onChange={handleChangeLambda}
      />

      {['a0', 'a', 'b', 'c', 'd'].map((valueType) => (
        <TextField
          key={uuidv4()}
          style={{ maxWidth: '10rem', margin: '1rem' }}
          variant="outlined"
          label={valueType}
          value={currentValues[valueType]}
          InputProps={{
            readOnly: true,
          }}
        />
      ))}
    </>
  );
}

export default App;
