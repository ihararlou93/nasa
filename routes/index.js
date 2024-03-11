process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const axios = require('axios');
const express = require('express');
const router = express.Router();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const START_DATE = process.env.START_DATE;
const END_DATE = process.env.END_DATE;

router.get("/meteors", async (req, res) => {
    const queryParams = req.query;
    try {
        const params = new URLSearchParams({});

        queryParams.hasOwnProperty(START_DATE) && params.append(START_DATE, queryParams[START_DATE]);
        queryParams.hasOwnProperty(END_DATE) && params.append(END_DATE, queryParams[END_DATE]);
        queryParams.hasOwnProperty(API_KEY) && params.append(API_KEY, queryParams[API_KEY]);

        const data = await axios.get(`${BASE_URL}?${params}`)
        console.log(data);

        res.status(200).send({});
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;