import fs from 'fs'

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(err)
      return
    }

    const lines = data.trim().split('\n')
    const result = {}

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',')
      if (!result[field]) result[field] = []
      result[field].push(firstname)
    })

    resolve(result)
  })
})

export default readDatabase
