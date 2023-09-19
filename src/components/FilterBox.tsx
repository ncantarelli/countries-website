import { useEffect, useState } from 'react'

type Props = {
    onFilterChange: (filters: string[]) => void;
}

function FilterBox({onFilterChange}: Props) {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const toggleFilter = (filter: string) => {
        let updatedFilters: string[];

        if (selectedFilters.includes(filter)) {
            updatedFilters = selectedFilters.filter((f) => f !== filter);
        } else {
            updatedFilters = [...selectedFilters, filter];
        };

        setSelectedFilters(updatedFilters);

        const filterOptions = document.querySelectorAll('.FilterBox div p');
        filterOptions.forEach((option) => { //! Adds the class 'selected' or 'unselected' to make the button change appearance
            if (updatedFilters.includes(option.textContent || '')) {
                option.classList.add('Selected');
            } else {
                option.classList.remove('Selected');
            }
        });
    };

    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);



    return (
        <div className='FilterBox'>
            <h4>Filters</h4>
            <div className='FilterOptions'>
                <div>
                    <p className={selectedFilters.includes('Africa') ? 'Selected' : 'Unselected'} onClick={() => toggleFilter('Africa')}>Africa</p>
                    <p className={selectedFilters.includes('Americas') ? 'Selected' : 'Unselected'} onClick={() => toggleFilter('Americas')}>Americas</p>
                    <p className={selectedFilters.includes('Asia') ? 'Selected' : 'Unselected'} onClick={() => toggleFilter('Asia')}>Asia</p>
                    <p className={selectedFilters.includes('Europe') ? 'Selected' : 'Unselected'} onClick={() => toggleFilter('Europe')}>Europe</p>
                    <p className={selectedFilters.includes('Oceania') ? 'Selected' : 'Unselected'} onClick={() => toggleFilter('Oceania')}>Oceania</p>
                </div>
                <div>
                    <p className='Unselected'>Most Reviews ↑</p>
                    <p className='Unselected'>Least Reviews ↓</p>
                </div>
            </div>
        </div>
    );
}

export default FilterBox