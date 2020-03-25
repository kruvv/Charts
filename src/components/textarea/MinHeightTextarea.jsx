import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function MinHeightTextarea() {
  return <TextareaAutosize
            aria-label="minimum height"
            rowsMin={4}
            placeholder="Minimum 4 rows"
            style={{ width: 300, margin: 10 }}
            />;
}
