const rx = require('../dist/wx-rxjs');
const {of, Operators} = rx;

of(1, 2, 3).pipe(
  Operators.map(x => x + 1)
).subscribe(x => console.log(x));
