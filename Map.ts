let servers = new Map();
servers.set("localhost", {
    ip: "127.0.0.1",
    port: 4200,
    run_time: "20 ms",
    size: "2GB"
})
servers.set("example", {
    ip: "127.0.0.2",
    port: 5200,
    run_time: "40 ms",
    size: "4GB"
})

for (let key of servers.keys()) {  
    console.log("Map Keys= "+key);          
}  

for (let value of servers.values()) {  
    console.log(value);          
}

for (let entry of servers.entries()) {  
    console.log(entry[0], entry[1]);   
} 
console.log("----------------------------------")
servers.forEach((value, key) => {
    console.log(key, value);
});

console.log("-------- server details ---------");
console.log(servers);
console.log("-------- server size ---------");
console.log(servers.size);
console.log("-------- server name ---------");
console.log(servers.get("localhost"));
console.log("-------- server port ---------");
console.log(servers.has("port"));
console.log("-------- server key  ---------");
console.log(servers.has("localhost"));

servers.delete("example");

console.log("-------- server details ---------");
console.log(servers);
console.log("-------- server name particulat key values ---------");
console.log(servers.get("localhost").port);


/*
Map Keys= localhost
Map Keys= example
{ ip: '127.0.0.1', port: 4200, run_time: '20 ms', size: '2GB' }
{ ip: '127.0.0.2', port: 5200, run_time: '40 ms', size: '4GB' }
localhost { ip: '127.0.0.1', port: 4200, run_time: '20 ms', size: '2GB' }
example { ip: '127.0.0.2', port: 5200, run_time: '40 ms', size: '4GB' }
-------- server details ---------
Map {
  'localhost' => { ip: '127.0.0.1', port: 4200, run_time: '20 ms', size: '2GB' },
  'example' => { ip: '127.0.0.2', port: 5200, run_time: '40 ms', size: '4GB' }
}
-------- server size ---------
2
-------- server name ---------
{ ip: '127.0.0.1', port: 4200, run_time: '20 ms', size: '2GB' }
-------- server port ---------
false
-------- server key  ---------
true
-------- server details ---------
Map {
  'localhost' => { ip: '127.0.0.1', port: 4200, run_time: '20 ms', size: '2GB' }
}
-------- server name particulat key values---------
4200
*/