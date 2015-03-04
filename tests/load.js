var databases = [];
var drugs = new drugsjs({host: 'localhost'});
var data = {};

var str = "abcdefghijklmnopqrstuvwxyz";
for(var i=0; i<str.length; i++)
{
    var nextChar = str.charAt(i);
    databases.push(nextChar + 'drug');
}

for (var ind in databases){
    db = databases[ind];
    drugs.load('data/'+db+'.js',function(){
        console.log(db);
    });
}
