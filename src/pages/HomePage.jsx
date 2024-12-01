import { HomePageNavbar } from "../components/HomePageNavbar"
import { HomePageHeader } from "../components/HomePageHeader"
import { HomePageContent } from "../components/HomePageContent"
import { HomePageFooter } from "../components/HomePageFooter"

export const HomePage = () => {
    return (
        <>
        <HomePageNavbar />
        <HomePageHeader />
        <HomePageContent/>
        <HomePageFooter/>
        </>
    )

}