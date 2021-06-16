const rx = require('../dist/wx-rxjs');

rx.of(1, 2, 3).pipe(
  rx.Operators.map(x => x + 1)
).subscribe(x => console.log(x));
