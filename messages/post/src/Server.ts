import express = require( 'express');
import {App} from "./App";

const app : App = new App(express());
app.setup();