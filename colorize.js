const chalk = require("chalk");

function colorize(text) {
  const lines = text.split("\n");
  return lines
    .map((line, index) => {
      if (index === 0) return chalk.blue.bold(line); // "UNISON" in bold blue
      return chalk.green(line); // Other text in green
    })
    .join("\n");
}

module.exports = { colorize };
