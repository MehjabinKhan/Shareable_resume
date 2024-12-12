// import resume display

let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// form submission 
form.addEventListener('submit' , (event: Event) => {
    event.preventDefault();

//  input data
let name = (document.getElementById('name') as HTMLInputElement).value
let phone_number = (document.getElementById('phone number') as HTMLInputElement).value
let email = (document.getElementById('email') as HTMLInputElement).value
let education = (document.getElementById('education') as HTMLInputElement).value
let skills = (document.getElementById('skills') as HTMLInputElement).value
let experience = (document.getElementById('experience') as HTMLInputElement).value

// generate input
const resumeHTML = `
<h2> <br> Editable Resume </b> <h2>
<h3> Personal Information </h3>
<p><b>Name:</b> <span contenteditable = "true"> ${name} </span> </p>
<p><b>Phone:</b> <span contenteditable = "true"> ${phone_number} </span> </p>
<p><b>Email:</b> <span contenteditable = "true"> ${email} </span> </p>

<h3> Eduction </h3>
<p> <span contenteditable = "true"> ${education} </span> </p>

<h3> Skills </h3>
<p> <span contenteditable = "true"> ${skills} </span> </p>

<h3> Experience </h3>
<p> <span contenteditable = "true"> ${experience} </span> </p>
`;

// Display input
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('Something is missing');
    
}

});

const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click",()=>{ })

const downloadPdf = document.getElementById("downloadpdf") as HTMLButtonElement
downloadPdf?.addEventListener("click",()=>{
    window.print()
})