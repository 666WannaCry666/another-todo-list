import { StrictMode } from 'react';
import { attachReduxDevTools } from '@effector/redux-devtools-adapter';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from '@/App';

function renderApp() {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

(function runApp() {
    attachReduxDevTools();

    renderApp();
})();
