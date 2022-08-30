import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import ListContent from '../components/ListContent';
import ListForm from '../components/ListForm'
import { ListGroup } from '../components/List/styles';
export default function RouterReact() {
    return(
        <Router basename={process.env.PUBLIC_URL}>
          <ListGroup>
    <Routes>
      <Route path='/' element={<ListContent />}></Route>
      <Route path='/form' element={<ListForm />}></Route>
    </Routes>
    </ListGroup>
    </Router>
    )
}