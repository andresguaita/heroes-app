import React from 'react'
import { Routes, Route} from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import { HeroScreen } from '../components/hero/HeroScreen';


export const DasboardRoutes = () => {
    return (
        <div>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
            </Routes>
        </div>
        </div>
    )
}
