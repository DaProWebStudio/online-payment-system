import {Feedback, Hero, HowItWorks, IntegrationApi, SetOfPayments, Video} from "../../components/Home";

const Home = () => {
    return (
        <div className='main-content'>
            <Hero/>
            <SetOfPayments/>
            <IntegrationApi/>
            <HowItWorks/>
            <Video/>
            <Feedback/>
        </div>
    );
};

export default Home;