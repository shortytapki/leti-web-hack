import { Navbar } from '@widgets';
import { useTheme } from './providers';
import { classNames } from '@shared/lib';
import AppRouter from './providers/Router/AppRouter';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
