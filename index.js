const {Pool} = require("pg");
const express = require("express");
const app = express();
const PORT = 8080

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "bouquet-database",
    user: "elaineluzung",
    password: "",
});