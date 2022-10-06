const fs = require("fs");

const createLogs = () => {
  const path = "./logs";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  process.chdir(path);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `Log no. ${i}`, (err) =>
      err ? console.error(`Error : Cannot create file log' ${i}.txt'`) : console.log(`'Creating log${i}.txt'`)
    );
  }
};
const removeLogs = () => {
  const path = "./logs";
  if (fs.existsSync(path)) {
    process.chdir(path);

    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(`Error : Cannot delete file '${file}'`) : console.log(`Deleting file '${file}'`)
        );
      });
    });
  }
};

createLogs();
//removeLogs();