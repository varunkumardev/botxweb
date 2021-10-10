//---------------------Configuration Files-------------------------------------//

        const firebaseConfig = {
            apiKey: "AIzaSyCX04xcuXUHXUmr6zGY9ln7ipD1-O1K5Ag",
            authDomain: "botx-certificate-verify.firebaseapp.com",
            databaseURL: "https://botx-certificate-verify-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "botx-certificate-verify",
            storageBucket: "botx-certificate-verify.appspot.com",
            messagingSenderId: "446161770136",
            appId: "1:446161770136:web:2b2626e9b70d92bb39a2ed"
        };
        firebase.initializeApp(firebaseConfig);

//---------------------Verification Script--------------------------------------------//

        var verificationbutton = document.getElementById("verifybutton");
        var downloadbtn = document.getElementById("downloadbtn");
        var download = "";
        var nameofemp = "";

        verificationbutton.addEventListener("click", function() {

          downloadbtn.addEventListener("click", function() {
              window.open(download);
          });

            downloadbtn.style.display = "none";
            document.getElementById("innerborder").style.display = "block";
            var textinput = document.getElementById("inputcertnum");
            var textinputvalue = document.getElementById("inputcertnum").value;

            // Sample Certificate number = BOTXINT21HR01
            if (textinputvalue.length == 12 || 13 && textinputvalue.substring(0, 4) == "BOTX") {
                var db = firebase.database().ref();
                db.once("value", (snapshot) => {
                    download = snapshot.child(textinputvalue).child("Link").val();
                    nameofemp = snapshot.child(textinputvalue).child("Name").val();
                    if (download != null) {
                        var verification_text = document.getElementById("output_message");
                        verification_text.innerHTML = "<p>Name of Employee : </p>"+ nameofemp;
                        downloadbtn.style.display = "inline";
                    }
                    else {
                        var verification_text = document.getElementById("output_message");
                        verification_text.innerHTML = "<p>Certificate Not Found!<br> Verify your Certificate ID again.</p>";
                    }
                })
            }
            else {
                var verification_text = document.getElementById("output_message");
                verification_text.innerHTML = "<p>Wrong Certification ID, please recheck if the ID is valid or not.</p>";
            }
        });
