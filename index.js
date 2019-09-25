var URLs = [
"ws://www.multiplayerpiano.com:443",

]
var Lorem = [ 'GrooveOMc', 'BoogieXD', 'John on PC keyboard','pianissimo','Anonie','anon', 'Chill Rhyme', 'bitter than cinnamon','MIDI players','Honshuusake','wait for it','?','ears of the beholder','coinmetalz','XD'];
var i = 0;
var clients = URLs.map((url, i) => {
  var Client = require('mpp-client-xt');
  var client = new Client(url);
  client.setChannel('The Jazz Le');

 client.start();
 client.on("connect", ()=> console.log(url, "connected"));
 client.on("disconnect", ()=> console.log(url, "disconnected"));
  client.on('hi', () => {client.setName('Anonymous');
 });
 return client;
});



//이건 무시하시면 됩니다
{
}


x=0

undefined;

