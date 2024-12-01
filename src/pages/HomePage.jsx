import { HomePageNavbar } from "../components/HomePageNavbar"
import { HomePageJumbotron } from "../components/HomePageJumbotron"
import { HomePageContent } from "../components/HomePageContent"
import { HomePageFooter } from "../components/HomePageFooter"

export const HomePage = () => {
    return (
        <>
        <HomePageNavbar/>
        <HomePageJumbotron/>
        <HomePageContent/>
        <HomePageFooter/>
        </>
    )

}