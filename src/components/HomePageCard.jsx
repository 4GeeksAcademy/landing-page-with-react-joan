import { Button, Card, Container } from "react-bootstrap";


export const HomePageCard = () => {
  return (
    <Card className="text-center mb-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://placehold.it/500x325" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit optio perferendis inventore fugit facere ipsum a repellendus consequuntur aut! Ratione architecto, perspiciatis neque aliquid enim ex labore. Nemo, placeat pariatur?
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Find Out More!</Button>
      </Card.Footer>
    </Card>
  );
}
