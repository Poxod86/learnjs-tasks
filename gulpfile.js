const newDir = dir => {
  console.log("Создание новой папки");

  dir();
}

exports.newDir = newDir;