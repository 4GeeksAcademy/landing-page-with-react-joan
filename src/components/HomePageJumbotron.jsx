import { Container, Button } from "react-bootstrap"

export const HomePageJumbotron = () => {
    return (
            <Container className="pt-5 pb-5 my-4 rounded-3" style={{ backgroundColor: '#e9ecef'}}>
                <h1 class="display-3"> A Warm Welcome! </h1>
                <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis numquam ipsum odit, beatae eaque voluptatem unde quo repellat nostrum illo sint, eveniet architecto fuga ratione cupiditate dolore recusandae neque.</p>
                <Button variant="primary">Call to action!</Button>
            </Container>
    )
}