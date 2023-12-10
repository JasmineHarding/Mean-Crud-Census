const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Census
censusRoute.route('/').get((req, res) => {
  Census.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Census
censusRoute.route('/read-census/:id').get((req, res) => {
  Census.findById(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update census
censusRoute.route('/update-census/:id').put((req, res, next) => {
  Census.findByIdAndUpdate(req.params.id,{
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      console.log('Census updated successfully!')
      res.json(data);
    }
  })
});

// Add Census
censusRoute.route('/add-census').post((req, res, next) => {
  Census.create(req.body, (error, data) => {
    if (error) {
      return next (error)
    } else {
      res.json(data)
    }
  })
});

// Delete census
censusRoute.route('/delete-census/:id').delete((req, res, next) => {
  Census.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log('Census deleted successfully!')
      res.status(200).json({
        msg: data
      })
    }
  })
})


module.exports = censusRoute;