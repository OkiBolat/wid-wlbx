import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './app.css';

function App({ domElement }) {
  // useEffect(() => {
  //   addResponseMessage('Donate to the cause!');
  // }, []);

  return (
    <div className="App">
      nflnsnm lorem afalsflkanfksnkjnfkjdsn
      <Widget
        title="Donations Widget"
        subtitle="Welcome"
      />
    </div>
  );
}

export default App;