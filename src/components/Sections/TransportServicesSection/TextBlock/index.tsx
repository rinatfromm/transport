import { textBlocks } from '../../../../data/textBlockData';
import styles from './TextBlock.module.css'; 

const TextBlock: React.FC = () => {
    return (
        <div className={styles.textBlockContainer}>
            {textBlocks.map((block, index) => (
                <div key={index} className={styles.textBlock}>
                    <h3 className={styles.blockTitle}>{block.title}</h3>
                    <p className={styles.firstParagraph}>{block.firstParagraph}</p>
                    {block.secondParagraph && (
                        <p className={styles.secondParagraph}>{block.secondParagraph}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TextBlock;


