import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Quill from 'quill'
import QuillCursors from 'quill-cursors'
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout( () =>
{
  Quill.register('modules/cursors', QuillCursors);

  const quill = new Quill(document.querySelector('#editor'), {
    modules: {
      cursors: true,
      toolbar: [
        // adding some basic Quill content features
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ],
      history: {
        // Local undo shouldn't undo changes
        // from remote users
        userOnly: true
      }
    },
    placeholder: 'Start collaborating...',
    theme: 'snow' // 'bubble' is also great
  })

  // A Yjs document holds the shared data
  const ydoc = new Y.Doc()
  // Define a shared text type on the document
  const ytext = ydoc.getText('quill')

  // Create an editor-binding which
  // "binds" the quill editor to a Y.Text type.
  const binding = new QuillBinding(ytext, quill)

  const provider = new WebrtcProvider('blubibu', ydoc, {signaling: ['ws://localhost:4444']})

}, 3000 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
