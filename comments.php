<!DOCTYPE html>
<html>
    <head>
        <!-- put metadata here-->
        <title>David Bowlin: A brief introduction</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <!-- put content here -->
        <table style="margin: 0px auto;">
        <tr><td><img src="logo_trans.png" alt="David Bowlin"><br /></td></tr>
        <tr><td><h1>Tell me a bit about yourself</h1></td></tr>     
        <tr><td><p>Over 7 billion people on the planet, and I want to know about you!<br/>Leave a messsage below.</td></tr>
        </p>
        <tr><td width=100% bgcolor="blue"><ul>
            <!-- don't close the list until the last one to prevent spaces between the blocks -->
            <li><a href="index.html">Home</a>
            <li><a href="basics.html">Basics</a>
            <li><a href="details.html">Details</a>
            <li><a href="other.html">Other</a>
            <li><a href="comments.php">Let's Talk</a></li>
          </ul></td></tr>
        <tr><td>
        <?php
        $file = file_get_contents('comments.txt');
        echo $file;
        ?>
    </td></tr>
    </table>
    
    </body>
</html>