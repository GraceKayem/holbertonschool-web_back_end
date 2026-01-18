import readDatabase from '../utils.js';

class StudentsController {

  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];

    try {
      const data = await readDatabase(dbFile);
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
        const list = data[field].join(', ');
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${list}\n`;
      });

      return res.status(200).send(responseText.trim());
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

}

export default StudentsController;
