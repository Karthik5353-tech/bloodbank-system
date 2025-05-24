const express = require('express');
const Donor = require('../models/Donor');
const router = express.Router();

router.get('/', async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

router.post('/', async (req, res) => {
  const donor = new Donor(req.body);
  await donor.save();
  res.json(donor);
});

module.exports = router;
