import PropTypes from 'prop-types'; 
import css from "./Statistics.module.css"
// import StatisticsList from './StatisticsList';

const getColor = (label) => {
    switch (label) {
        case '.docx':
            return 'lightblue';
        case ".pdf":
            return "lightgreen";
        case".mp3":
            return "lightpink";
        case ".psd":
            return "lightyellow";
        default:
            return "purple";
}
    
}


function Statistics({ title, stats }) {
    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
                {stats.map(stat => (
                    <li key={stat.id} style={{ backgroundColor: getColor(stat.label)}}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}

export default Statistics;