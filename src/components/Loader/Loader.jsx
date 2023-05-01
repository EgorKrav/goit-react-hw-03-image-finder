import { ColorRing } from 'react-loader-spinner';
import m from './Loader.module.css'

const Loader = () => {
  return (
    <div className={m.Loader}>
      <ColorRing
        strokeColor="#3f51b590"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
