import { Container } from 'react-bootstrap';
import image from '../photos/image.png';
function Photo() {
  return (
    <Container className="text-center">
      <img src={image} className="rounded" alt="A picture of me" title="I promise you, there will be a better picture placed here 12 years from now.." />
    </Container>
  );
}
export default Photo;