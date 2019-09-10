const changeLineNumber=(line,offset)=>{
  let matches=line.match(/([jJ].* )([0-9]+)/)
  return matches?matches[1]+(+matches[2]+offset):line;
}

const moveSourceTo=(lines,oldLineNumber,newLineNumber) => {
  return lines.map((l)=>changeLineNumber(l,newLineNumber-oldLineNumber))
}

const foobar=()=>{
  const prog = document.getElementById('sourcecode').value;
  console.log(prog);
  let lines = prog.split("\n");
  let oldLine = document.getElementById("oldline").value;
  let newLine = document.getElementById("newline").value;
  const newProg = moveSourceTo(lines,+oldLine,+newLine)
  document.getElementById('output').value = newProg.join("\n");
}
