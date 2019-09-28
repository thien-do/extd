import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@extd/core';

console.log('Hello from tsx!');

ReactDOM.render(
  <div>Hello <Button /></div>,
  document.getElementById('root'),
);
