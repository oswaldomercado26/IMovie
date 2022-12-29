import React, {FC, useState} from 'react';
import styles from './ReadMore.module.css';

type ReadMoreProps = {
    text: string
    visibleLength: number
}
//ReadMoreProps:Esta función es un componente React válido porque acepta un solo argumento de objeto "props" (que significa propiedades) con datos y devuelve un elemento React. 
const ReadMore: FC<ReadMoreProps> = ({text, visibleLength}) => {

    const initialText = text.slice(0, visibleLength + 1);
    const showButtonText = 'Lee mas...';
    const hideButtonText = 'Ocultar';
    // se crean estados con las opciones para asi crear acciones de los clicks
    const [visible, setVisible] = useState(false);
    const [visibleText, setVisibleText] = useState(initialText);
    const [buttonText, setButtonText] = useState(showButtonText);

    const clickHandler = () => {
        if (visible) {
            setVisible(false);
            setVisibleText(initialText)
            setButtonText(showButtonText);
        } else {
            setVisible(true);
            setVisibleText(text);
            setButtonText(hideButtonText);
        }
    }

    return (
        <div className={styles.wrapper}>
            {visibleLength < text.length ?
                <div>
                    <span className={styles.text}>
                       {visibleText}
                    </span>
                    <a href={'#'} className={styles.text_toggle} onClick={clickHandler}>{buttonText}</a>
                </div>
                :
                <div> {text} </div>
            }
        </div>
    );
};

export default ReadMore;