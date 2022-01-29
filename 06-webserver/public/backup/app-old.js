const http = require('http');

http.createServer((request,response) => {
  
  response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

  response.writeHead(200,{'Content-Type': 'application/csv'});
  
  response.write('id, nombre\n');
  response.write('1, Romario\n')
  response.write('1, Romario\n')
  response.write('1, Romario\n')
  response.write('1, Romario\n')
  response.write('1, Romario\n')
  response.end() //* damos por terminada la respuesta y recien se renderiza la info en dicho puerto
}).listen(8080)

console.log('escuchando el puerto', 8080)