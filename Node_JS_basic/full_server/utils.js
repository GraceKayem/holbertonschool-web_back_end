import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    const result = {};

    for (let i = 1; i < lines.length; i += 1) {
      const cols = lines[i].split(',');
      const field = cols[fieldIndex];
      const firstname = cols[firstNameIndex];

      if (!result[field]) result[field] = [];
      result[field].push(firstname);
    }

    resolve(result);
  });
});

export default readDatabase;
