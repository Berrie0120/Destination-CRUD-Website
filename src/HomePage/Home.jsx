import Skills from './Skills.jsx'
import BackgroundInfo from './BackgroundInfo.jsx'
import AdventureCard from './AdventureCard.jsx'
import Destination from './Destination.jsx'
import Certificates from './Certificates.jsx'

const Home = () => {
    return ( 
        <>
            <div className="home-container">
                <div className="skills-certificates">
                    <Skills/>
                    <Certificates/>
                </div>
                <hr></hr>
                <AdventureCard/>
                <hr></hr>
                <Destination/>
                <BackgroundInfo/>
            </div>
        </>
     );
}
 
export default Home;