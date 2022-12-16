
import { Col, Form } from "react-bootstrap";
import {Button }from "react-bootstrap";
import './MoviesForm.css'

const MoviesForm = () => {

    const Addmovies = (e) => {
        e.preventDefault();
        const title=document.getElementById('title').value
        const text=document.getElementById('opening_text').value
        const Date=document.getElementById('date').value

  
  const newMovieObj = {
    title,
    text,
    Date
  };
  console.log(newMovieObj);
  // Do something with newMovieObj
    
}

  return (
   < Col xs={4} className='col'  >
    <Form onSubmit={Addmovies}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  />
        <Form.Text className="text-muted">
         Add Movie name here.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="opening_text">
        <Form.Label>Opening Text</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Release Date</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movies
      </Button>
    </Form>
    </Col>
  );
};
export default MoviesForm;
