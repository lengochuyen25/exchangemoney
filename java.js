function exchangemoney() {
    let a=parseInt(document.getElementById("amt").value);
    let b=parseInt(document.getElementById("fromcurrency").value);
    let c=parseInt(document.getElementById("tocurrency").value);
    let z=a*c/b;
    document.getElementById("result").innerHTML="Kết quả là: " +z;
}