import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MainHeader from '../../components/Header'
import ListMovies from '../../components/searchBar/ListMovies'
import pathOr from 'ramda/src/pathOr'

require('./style.scss')
export default function SearchResults() {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const background = {}
    const themes = useSelector(state => pathOr('', ['themes'])(state))
    return (
        <div className="search-background" style={background}>
            <MainHeader Navshow={Navshow} handleNavModal={handleNavModal} themes={themes} />
            <ListMovies title="Search results" />
        </div>
    )
}
