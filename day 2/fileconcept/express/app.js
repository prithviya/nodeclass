const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (e.g., images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// 1. Home Route (GET Request)
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// 2. About Route (GET Request)
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// 3. Contact Route (GET Request)
app.get('/contact', (req, res) => {
  res.send('This is the Contact Page!');
});

// 4. Serve .html files
// This route serves any request ending with .html from the "views" directory
app.get('/*.html', (req, res) => {
  const filePath = path.join(__dirname, 'views', req.path);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error serving HTML file:', err);
      res.status(404).send('File not found!');
    }
  });
});

// 5. Wildcard route to capture all undefined routes
// The /* will match any route that is not already defined
app.get('/*', (req, res) => {
  res.send('This is a fallback route for undefined paths!');
});

// 6. Dynamic Routing Example (User Profile)
app.get('/user/:username', (req, res) => {
  const { username } = req.params;
  res.send(`Welcome to the profile page of ${username}`);
});

// 7. Dynamic Routing with Query Parameters
app.get('/search', (req, res) => {
  const { query } = req.query;
  res.send(`You searched for: ${query}`);
});

// 8. Handling Post Requests (Form submission)
app.use(express.urlencoded({ extended: true }));  // Middleware for parsing form data

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted by: ${name}, Email: ${email}`);
});

// 9. 404 Error Route for undefined routes (Middleware)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
