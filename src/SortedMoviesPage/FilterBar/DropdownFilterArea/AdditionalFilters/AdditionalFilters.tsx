import React, {FC} from 'react';
import styles from './AdditionalFilters.module.css'
import {labels, mediaType} from '../../../../Types/Types';
import {sortingType} from '../../../../redux/reducers/SortedMoviesPageReducer';
import {filterToLabel, LabelToFilter} from '../../../../Utils/Utils';

type AdditionalFiltersProps = {
    mediaType: mediaType
    activeFilter: sortingType
    setAdditionalSorting: (sorting: sortingType) => any
    setPage: () => any

}

const AdditionalFilters: FC<AdditionalFiltersProps> =
    ({
         mediaType, setAdditionalSorting,
         activeFilter, setPage
     }) => {

        const labels: labels[] =
            ['Popularidad (ascendente)', 'Popularidad (descendente)', 'Fecha de lanzamiento (ascendente)',
                'Fecha de lanzamiento (desc)','Calificación (ascendente)','Clasificado (desc)']
        const filterOptions = labels.map(label => {
            const className = filterToLabel(activeFilter) === label ? styles.active : ''
            return <li key={label} className={className} onClick={() => {
                setAdditionalSorting(LabelToFilter(label, mediaType))
                setPage()
            }}>{label}</li>
        })
        return (
            <div className={styles.wrapper}>
                <ul>
                    {filterOptions}
                </ul>
            </div>
        );
    };

export default AdditionalFilters;