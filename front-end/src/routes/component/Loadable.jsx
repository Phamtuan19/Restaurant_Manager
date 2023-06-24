import { Suspense } from 'react';
import LazyLoadingScreen from '~/component/customs/LazyLoadingScreen';

const Loadable = (Component) => (props) =>
   (
      <Suspense fallback={<LazyLoadingScreen />}>
         <Component {...props} />
      </Suspense>
   );
export default Loadable;
