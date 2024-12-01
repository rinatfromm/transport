// src/components/TextBlock.tsx
import React from 'react';
import { textBlocks } from '../../../../data/textBlockData'; // Массив с данными

const TextBlock: React.FC = () => {
    return (
        <>
            {textBlocks.map((block, index) => (
                <div key={index}>
                    <h3>{block.title}</h3>
                    <p>{block.firstParagraph}</p>
                    {block.secondParagraph && <p>{block.secondParagraph}</p>}
                </div>
            ))}
        </>
    );
};

export default TextBlock;

