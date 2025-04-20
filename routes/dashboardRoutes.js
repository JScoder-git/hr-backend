const express = require('express');
const {
  getDashboardStats,
  getRecentActivities
} = require('../controllers/dashboardController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/stats', getDashboardStats);
router.get('/activities', getRecentActivities);

module.exports = router;