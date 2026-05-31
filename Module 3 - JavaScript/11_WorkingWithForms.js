function submitForm(event){

    event.preventDefault();

    const form =
    document.forms[0];

    const name =
    form.elements["name"].value;

    const email =
    form.elements["email"].value;

    if(
        name === "" ||
        email === ""
    ){

        console.log(
        "Validation Failed"
        );

        return;
    }

    console.log(
    "Form Submitted"
    );
}