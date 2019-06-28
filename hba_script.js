<script> /* this script combines the month and calendar day to a string, compares it to July 3 (63), and wishes me a happy birthday if it matches */
        /* ckdate variable below is the result of how JS detects the month and calendar day. Months are 0-11, so July is 6, and my birthday is 3rd, so its "63" as a string */
        var today = new Date();
        let mnth = today.getMonth().toString();
        let numday = today.getDate().toString();
        var ckdate = mnth + numday;
        if(ckdate == "63") {
            alert("Happy birthday to me! Yes, it's my birthday :)")
            document.write("<p align='center'><font size=4 color='blue'>HAPPY BIRTHDAY TO ME!</font></p>");
        }
        </script>