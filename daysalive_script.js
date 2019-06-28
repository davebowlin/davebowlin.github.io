<script> /* this script calculates the milliseconds to days that I've been alive, and displays it */
         let now = new Date(); /* this is the current date and time, based on the local device */
         let bday = new Date("Jul 3, 1970 22:30:00");  /* my birthday, including the time (according to my mother!) */
         var result = Math.abs(now - bday); /* JS time difference is in milliseconds, so divide the result by milliseconds in 24 hours */
         var howmanydays = Math.floor(result / 86400000); /* milliseconds to 24 hours (days) */
         let str = "<p>So far, I have been alive for <strong>" + howmanydays + "</strong> days as of today, if I'm still alive. <br/>If I'm not, well, it was fun while it lasted!</p>"
         document.write(str);
        </script>