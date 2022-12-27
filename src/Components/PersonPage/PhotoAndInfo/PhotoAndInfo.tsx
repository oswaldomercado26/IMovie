import React, {FC} from 'react';
// @ts-ignore
import styles from './PhotoAndInfo.module.css';



type PhotoAndInfoProps = {
    knownFor?:string
    birthday?: string | null
    gender?:string
    place_of_birth?:string|null
    projectsCount:number
    url?:string
}

const PhotoAndInfo:FC<PhotoAndInfoProps> = ({knownFor,birthday,place_of_birth,gender,projectsCount,url}) => {
    return (
        <div className={styles.image_and_info}>
            <div className={styles.image_wrapper}>
                    <img className={styles.image}  src={url} alt=""/>
            </div>
            <div className={styles.info}>
                <h4>Informacion personal</h4>
                <div>
                    <span>Fama por</span>
                    {knownFor}
                </div>
                <div>
                    <span>Число проектов </span>
                    {projectsCount}
                </div>
                <div>
                    <span>Genero</span>
                    {gender}
                </div>
                <div>
                    <span>Fecha de Nacimiento</span>
                    {birthday}
                </div>
                <div>
                    <span>Lugar de nacimiento</span>
                    {place_of_birth}
                </div>
            </div>
        </div>
    );
};

export default PhotoAndInfo;