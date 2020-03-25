import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
  },
  marginTop: 10,

}));

export default function RadioButton() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Выберети режим');

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value === 'По пластинам') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'До пластин [очистка]') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Отображение процесса</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="По пластинам" />
          <FormControlLabel value="worst" control={<Radio />} label="До пластин [очистка]" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

      </FormControl>
    </form>
  );
}
