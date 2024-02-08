const http = require('http');

// Sample student data
const students = [
    { id: 11111, name: 'Bruce Lee', score: 84 },
    { id: 22222, name: 'Jackie Chen', score: 93 },
    { id: 33333, name: 'Jet Li', score: 88 }
];

const server = http.createServer((req, res) => {
    // Parsing the URL
    const urlParams = new URL(req.url, `http://${req.headers.host}`);

    // Checking the path
    if (urlParams.pathname === '/api/score') {
        const studentId = parseInt(urlParams.searchParams.get('student_id'));

        // Finding the student by ID
        const student = students.find(s => s.id === studentId);

        if (student) {
            // Sending JSON response if the student is found
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(student));
        } else {
            // Sending 404 if student is not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Student not found');
        }
    } else {
        // Sending 404 for other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid endpoint');
    }
});

const PORT = 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
