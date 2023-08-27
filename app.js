let a = +prompt("3 eded ferqli iki reqemli ededler daxil edin");
let number = +a.split (" ") ;
if ((name[0] == name[1]) || (name[1] == name[2]) ||  (name[0] == name[2])) {
    console.log ( "2 ve ya 3 daxil edilmis ededler eynidir") ;
}
if (((name[0]> 99) || (name[0] < 10)) ||  ((name[1] > 99) || (name[1] < 10)) || (( name[2] > 99) || (name[2] < 10 ))) {
    console.log ("yanlish deyer");
}
else if (( name[1] < name [0] && name [0] < name[2]) || (name[2]< name[0] ) && name[0] < name[1]) {
    console.log ( name[0])
}
else if (( name[0] < name [1] && name [1] < name[2]) || (name[2]< name[1] ) && name[1] < name[0]) {
    console.log ( name[1])
}
else if (( name[0] < name [2] && name [2] < name[1]) || (name[1]< name[2] ) && name[2] < name[0]) {
    console.log ( name[2])
}