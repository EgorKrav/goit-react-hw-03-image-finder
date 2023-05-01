import PropTypes from 'prop-types';
import f from './Button.module.css'

const Button = ({ onloadMore }) => {
  return (
    <div className={f.ButtonContainer} onClick={onloadMore}>
      <button type="button" className={f.Button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
