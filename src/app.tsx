import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './routes/root';
import { store } from './services/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
