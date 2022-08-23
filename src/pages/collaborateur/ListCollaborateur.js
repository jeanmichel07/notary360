import React, {useState} from 'react';
import './style.css';
import {Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddForm from "./AddForm";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'


const ListCollaborateur = ()=>{
    const [show, setShow] = useState(false);
    const [collaborateurList, setCollaborateurList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="container">
            <h4>Collaborateur</h4>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
            </Modal>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {collaborateurList.map((item, index)=>(
                    <tr key={index}>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListCollaborateur