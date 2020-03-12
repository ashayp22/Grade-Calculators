function calculate() {
  var grade = document.getElementById("grade").value.toUpperCase();
  var weight = parseInt(document.getElementById("final").value);
  var wanted = document.getElementById("wanted").value.toUpperCase();

  var yourGrade = getNumber(grade);
  var wantedGrade = getNumber(wanted);

  var number3 =  (wantedGrade - (100 - weight) * (yourGrade/100))/weight;

  //rounds
  number3 *= 10000;
  number3 = parseInt(number3);
  number3 /= 100;

  var regular = 100 - ((100 - number3) / 2);

  document.getElementById("output").innerHTML = "Minimum Letter Grade: " + getGrade(number3) + " or " + regular + "%";

}


function getNumber(grade) {
  switch(grade) {
    case "A+": return 94.5;
    case "A": return 84.5;
    case "A-": return 79.5;

    case "B+": return 74.5;
    case "B": return 64.5;
    case "B-": return 59.5;

    case "C+": return 54.5;
    case "C": return 44.5;
    case "C-": return 39.5;

    case "D+": return 34.5;
    case "D": return 24.5;
    case "D-": return 19.5;

    case "F+": return 14.5;
    case "F": return  4.5;
    case "F-": return 0;
    case "NC": return 0;
    default: return grade;
  }
}

function getGrade(grade) {
  if(grade >= 94.5) {
    return "A+";
  } else if(grade <= 94.5 && grade >= 84.5) {
    return "A";
  } else if(grade <= 84.5 && grade >= 79.5) {
    return "A-";
  }  else if(grade <= 79.5 && grade >= 74.5) {
    return "B+";
  }  else if(grade <= 74.5 && grade >= 64.5) {
    return "B";
  }  else if(grade <= 64.5 && grade >= 59.5) {
    return "B-";
  }  else if(grade <= 59.5 && grade >= 54.5) {
    return "C+";
  }  else if(grade <= 54.5 && grade >= 44.5) {
    return "C";
  }  else if(grade <= 44.5 && grade >= 39.5) {
    return "C-";
  }  else if(grade <= 39.5 && grade >= 34.5) {
    return "D+";
  }  else if(grade <= 34.5 && grade >= 24.5) {
    return "D";
  }  else if(grade <= 24.5 && grade >= 19.5) {
    return "D-";
  }  else if(grade <= 19.5 && grade >= 14.5) {
    return "F+";
  }  else if(grade <= 14.5 && grade >= 4.5) {
    return "F";
  }  else if(grade <= 4.5 && grade >= 0.0000001) {
    return "F-";
  } else {
    return "NC";
  }
}
