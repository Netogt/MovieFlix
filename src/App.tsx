import SectionMovies from './components/SectionMovies'
import SlideMovies from './components/SlideMovies'
import './css/App.css'

export default function App() {
   
    return (
        <>
            <SlideMovies />
            <SectionMovies category="Todos"/>
            <SectionMovies category="Filmes"/>
            <SectionMovies category="Programas"/>
        </>
    )
}