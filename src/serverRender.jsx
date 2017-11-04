import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export default function render(req) {
  return renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );
}
