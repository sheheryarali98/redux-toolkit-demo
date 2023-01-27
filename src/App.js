import { Provider } from 'react-redux';

import TodoList from './components/TodosList';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div className="min-h-screen w-full flex items-start justify-center pt-20 pb-20">
      <TodoList />
    </div>
  </Provider>
);

export default App;
