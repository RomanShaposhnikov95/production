import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss'
import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('root') as HTMLElement;

if (!container) {
  throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);