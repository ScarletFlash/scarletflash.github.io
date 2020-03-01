function defaultTask(done: VoidFunction): void {
  console.log('defaultTask');
  done();
}

function buildTask(done: VoidFunction): void {
  console.log('buildTask');
  done();
}

exports.build = buildTask;
exports.default = defaultTask;
