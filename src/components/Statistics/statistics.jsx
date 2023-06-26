import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {createRandomColor} from '../createRandomColor.js';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {typeof title !== 'undefined' && <h2 className={css.title}>{title}</h2>}

    <ul className={css['stat-list']}>
      {stats.map(stat => (
        <li style={{backgroundColor: createRandomColor()}} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
