import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>
        Good: <span className={style.value}>{good}</span>
      </p>
      <p>
        Neutral: <span className={style.value}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={style.value}>{bad}</span>
      </p>
      <p>
        Total: <span className={style.value}>{total}</span>
      </p>
      <p>
        Positive Feedback: <span className={style.value}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
