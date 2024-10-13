module.exports = {
  apps : [
  {
	name: "expressserver",
	cwd: "./express",
	script: "./app.js"
  },
  {
	name: "dotnetapi",
	cwd: "./api",
	script: "simpleapi.exe",
	intepreter: null,
  },
  {
	name: "nextapp",
	cwd: "./mynextapp",
	script: "./server.js"
  }
  ],
};
