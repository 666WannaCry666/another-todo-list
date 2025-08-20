import { StrictMode } from 'react';
import { attachReduxDevTools } from '@effector/redux-devtools-adapter';
import './index.css';
import ReactDOM from 'react-dom/client';

function renderApp() {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <StrictMode>
            
        </StrictMode>
    );
}

(function runApp() {
    attachReduxDevTools();

    renderApp();
})();
