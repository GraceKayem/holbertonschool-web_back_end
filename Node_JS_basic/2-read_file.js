const fs = require("fs");

function countStudents(path) {
  let database;

  try {
    database = fs.readFileSync(path, "utf8");
  } catch (err) {
    throw new Error("Cannot load the database");
  }

  const lines = database.split("\n").filter(line => line.trim() !== "");
  const students = lines.slice(1); // remove header

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach(student => {
    const columns = student.split(",");
    const firstname = columns[0].trim();
    const field = columns[3].trim();

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  Object.keys(fields).forEach(field => {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(", ")}`
    );
  });
}

module.exports = countStudents;
