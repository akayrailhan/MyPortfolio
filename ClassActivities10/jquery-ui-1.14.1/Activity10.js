$(function() {

    // Datepicker (Part 3)
    $("#birthday").datepicker();
  
    // Autocomplete for programming languages (Part 4)
  var programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "PHP",
    "Swift",
    "TypeScript",
    "Go",
    "Lisp",
    "Asp",
    "Perl"
  ];

  $("#language").autocomplete({
    source: programmingLanguages
  });
  
  });
  