import React from 'react';
import { Express } from "express";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import VistaAdministrador from "../../frontend/admin/html";

function routerAdmin() {
    return (
      <Router>
        <div className="routerAdmin">
            <Route exact path="/admin" component={VistaAdministrador} />
        </div>
      </Router>
    );
  }

export default routerAdmin;
