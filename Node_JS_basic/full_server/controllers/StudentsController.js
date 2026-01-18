import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];

    try {
      const data = await readDatabase(dbFile);
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });

      return res.status(200).send(responseText.trim());
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(dbFile);
      const students = data[major] || [];
      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
