var fs = require('fs');

var onlyScripts = require('./util/scriptFilter'),
    tasks       = fs.readdirSync('./gulp/tasks/')
                    .filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
