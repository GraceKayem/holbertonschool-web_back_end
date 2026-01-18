const http = require('http');
const fs = require('fs');

const port = 1245;
const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);

      const fields = {};

      students.forEach((student) => {
        const columns = student.split(',');
        const firstname = columns[0].trim();
        const field = columns[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => {
        res.write(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`,
        );
      });

      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port);

module.exports = app;
