import * as inquirer from "inquirer";
import { add, validate } from "./number-util";

const questions: inquirer.Questions = [
  {
    type: "input",
    name: "a",
    message: "What's the first number",
    default: generateRandomNumber(),
    validate: s => validate(s) || "Please enter a valid number"
  },
  {
    type: "input",
    name: "b",
    message: "What's the second number",
    default: generateRandomNumber(),
    validate: s => validate(s) || "Please enter a valid number"
  }
]

function generateRandomNumber(): number {
  return Math.floor(1000 * Math.random());
}

async function run() {
  const { name: packageName, version: packageVersion } = require("../package.json");

  console.log(`${packageName} v${packageVersion}`);
  console.log();
  console.log("This example command-line app adds two numbers together.");

  const { a: aStr, b: bStr } = await inquirer.prompt(questions);
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);

  console.log(`${a} + ${b} = ${add(a, b)}`);
}

run()
  .then(() => {
    // Having a debugger attached will keep node running forever, so
    // explicitly stop the program when it's a clean exist.
    process.exit(0);
  })
  .catch(e => {
    console.log(e.stack || e);
    process.exit(1);
  });
