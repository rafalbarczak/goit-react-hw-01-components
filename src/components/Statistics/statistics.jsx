import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {typeof title !== 'undefined' && <h2 className="title">{title}</h2>}

    <ul className={css['stat-list']}>
      {stats.map(stat => (
        <li key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
