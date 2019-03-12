// 对象的结构赋值
let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p, p: [x, { y }] } = obj;
  console.log(p)
  console.log(x)
  console.log(y)

  const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
  let { loc, loc: { start }, loc: { start: { line }} } = node;
  console.log({loc: { start }, loc: { start: { line }} })
  console.log( loc)
  console.log( start)
  console.log(line)