// import resume display
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //  input data
    var name = document.getElementById('name').value;
    var phone_number = document.getElementById('phone number').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // generate input
    var resumeHTML = "\n<h2> <br> Editable Resume </b> <h2>\n<h3> Personal Information </h3>\n<p><b>Name:</b> <span contenteditable = \"true\"> ".concat(name, " </span> </p>\n<p><b>Phone:</b> <span contenteditable = \"true\"> ").concat(phone_number, " </span> </p>\n<p><b>Email:</b> <span contenteditable = \"true\"> ").concat(email, " </span> </p>\n\n<h3> Eduction </h3>\n<p> <span contenteditable = \"true\"> ").concat(education, " </span> </p>\n\n<h3> Skills </h3>\n<p> <span contenteditable = \"true\"> ").concat(skills, " </span> </p>\n\n<h3> Experience </h3>\n<p> <span contenteditable = \"true\"> ").concat(experience, " </span> </p>\n");
    // Display input
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something is missing');
    }
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () { });
var downloadPdf = document.getElementById("downloadpdf");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
