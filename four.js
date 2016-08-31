var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
/*var array=[];
for(var i=0;i<myObj.length;i++){
  array[i]=myObj[i].age;
}
console.log(array.sort().reverse());

for(var i=0;i<myObj.length;i++){
  for(var j=0;j<array.length;j++){
    if(myObj[j].age==array[i]){
      console.log(myObj[j]);
    }
  }
}*/
var newar=[];
var newobj=[];var newobj1=[];
for(var a=0;a<myObj.length;a++)
{
newar[a]=myObj[a];
}

var y=0;
var temp={"Team Leader":newobj,
       "Programmer":newobj1};
var temp1=Object.create(null);

for(var t=0;t<myObj.length;t++)
{
if(newar[t].occupation=="Team Leader")
{
temp1=newar[t];
delete temp1.occupation;
newar[t]=temp1;
newobj[y]=newar[t];
y++;
}
}

var y=0;
for(var t=0;t<myObj.length;t++)
{
if(newar[t].occupation=="Programmer")
{
temp1=newar[t];
delete temp1.occupation;
newar[t]=temp1;
newobj1[y]=newar[t];
y++;
}
}


console.log(temp);
