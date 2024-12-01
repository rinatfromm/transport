import { rentalTerms } from '../../../../data/rentalTermData';
import styles from './RentalTerms.module.css';

const RenatlTerms: React.FC = () => {
    return (
        <div className={styles.rentalTerms}>
            <h3 className={styles.rentalTitle}>Vermietung ohne Fahrer:</h3>
            <ul className={styles.termList}>
                {rentalTerms.map((term) => (
                    <li key={term.id} className={styles.termItem}>{term.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default RenatlTerms;
