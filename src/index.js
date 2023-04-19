import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);

// A Yjs document holds the shared data
const ydoc = new Y.Doc()
// Define a shared text type on the document
const yarray = ydoc.getArray('my array')

const provider = new WebrtcProvider('blubibu', ydoc, {signaling: ['ws://localhost:4444']})

// We can register change-observers like this
yarray.observe(event => {
  // Log a delta every time the type changes
  // Learn more about the delta format here: https://quilljs.com/docs/delta/
  console.log('delta:', event.changes.delta)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
