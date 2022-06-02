var nilai = 59;

switch(true){
    case nilai >= 90:
        grade = "A";
        break;
    case nilai <= 89,nilai >= 80 :
        grade = "B";
        break;
    case nilai <= 79, nilai >= 70:
        grade = "C";
        break;
    case nilai <= 69, nilai >= 60:
        grade = "D";
        break;
    default:
        grade = "E";
}
console.log(grade)