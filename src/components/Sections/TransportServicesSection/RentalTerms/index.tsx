import { rentalTerms } from '../../../../data/rentalTermData'
import styles from './RentalTerms.module.css'

const RenatlTerms: React.FC = () => {
    return (
        <div className={styles.rentalTerms}>
            <h3>Vermietung ohne Fahrer:</h3>
            <ul>
                {rentalTerms.map((term) => (
                    <li key={term.id}>{term.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default RenatlTerms