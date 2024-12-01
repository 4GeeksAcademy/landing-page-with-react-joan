import { Container, Button } from "react-bootstrap"

export const HomePageJumbotron = () => {
    return (
            <Container classNAme="bg-light rounded-3 mx-5 mt-4">
                <h1 > A Warm Welcome! </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis numquam ipsum odit, beatae eaque voluptatem unde quo repellat nostrum illo sint, eveniet architecto fuga ratione cupiditate dolore recusandae neque.</p>
                <Button variant="primary">Call to action!</Button>
            </Container>
    )
}