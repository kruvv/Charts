/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxTypeEquipment() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={equipments}
      getOptionLabel={option => option.title}
      style={{ width: 300, margin: 10  }}
      renderInput={params => <TextField {...params} label="Тип оборудования" variant="outlined" />}
    />
  );
}

// Type equipments
const equipments = [
  { title: 'Type #1', year: 1994 },
  { title: 'Type  #2', year: 1994 },
  { title: 'Type  #3', year: 1994 },
  { title: 'Type  #4', year: 1994 },
  { title: 'Type  #5', year: 1994 },

];
