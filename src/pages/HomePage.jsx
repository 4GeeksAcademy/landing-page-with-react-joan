import HomePageContent from "../components/HomePageContent"
import HomePageHeader from "../components/HomePageHeader"
import { HomePageNavbar } from "../components/HomePageNavbar"

const HomePage = () => {
    return (
        <>
        <HomePageNavbar />
        <HomePageHeader />
        <HomePageContent/>
        </>
    )

}

export default HomePage