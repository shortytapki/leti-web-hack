import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from '@app/providers';
import App from '@app/App';
import '@app/style/index.css';

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);
