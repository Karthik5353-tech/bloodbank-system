const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const donorRoutes = require('./routes/donorRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Direct MongoDB URI (⚠️ Use cautiously — not safe for production)
const MONGO_URI = 'mongodb+srv://bloodadmin:Blood%401234@cluster0.iajebh4.mongodb.net/bloodbank?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected ✅'))
  .catch(err => console.error('MongoDB connection error ❌:', err));

app.use('/api/donors', donorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
