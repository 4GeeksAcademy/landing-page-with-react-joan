import { Col, Container, Row } from "react-bootstrap";
import { HomePageCard } from "./HomePageCard"





export const HomePageContent = () => {
    const cards = [0, 1, 2, 3];
    return (
        <Container>
            <Row>
            {
                cards.map(
                    () => <Col><HomePageCard /></Col>
                )
            }
            </Row>

        </Container>
    )
}