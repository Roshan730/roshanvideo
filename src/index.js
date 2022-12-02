import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ifrv33pwv60siot1.us.auth0.com"
      clientId="LR6WdDfYjzkiaMpmJpnbQnY8PH2itm0K"
      redirectUri={window.location.origin}
    >
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </StrictMode>
);
