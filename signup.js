document.addEventListener('DOMContentLoaded',()=>{
    console.log("Signing up with:", { name, email, password, prn, branch, year });
})
function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const prn = document.getElementById("prn").value;
    const branch =document.getElementById("branch").value;
    const year = document.getElementById("year").value;
}