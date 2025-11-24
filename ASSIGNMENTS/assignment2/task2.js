function studentsgrade(mark,age){
    let grade;

    if(mark>=90){
        grade = "A";
    }
    else if(mark>=70){
        grade ="B";
    }
    else if(mark>=50){
        grade="C";
    }
    else{
        grade="F"
    }
    console.log(`${mark} is a ${grade} grade`);

    let studentsage=(age>=18)? "Adult" : "Minor" ;
    console.log(`the student is ${studentsage}`);
    
    
}
studentsgrade(80,20)