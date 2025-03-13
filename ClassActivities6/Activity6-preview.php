<!DOCTYPE html>
<html>
<head>
    <title>Form Preview</title>
</head>
<body>
    <?php
   
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
     
        $name = !empty($_POST['name']) ? test_input($_POST['name']) : 'Name is not provided';
        $username = !empty($_POST['username']) ? test_input($_POST['username']) : 'Username is not provided';
        $password = !empty($_POST['password']) ? test_input($_POST['password']) : 'Password is not provided';
        $address = !empty($_POST['address']) ? test_input($_POST['address']) : 'Address is not provided';
        $country = !empty($_POST['country']) ? test_input($_POST['country']) : 'Country is not provided';
        $zip = !empty($_POST['zip']) ? test_input($_POST['zip']) : 'ZIP Code is not provided';
        $email = !empty($_POST['email']) ? test_input($_POST['email']) : 'Email is not provided';
        $sex = !empty($_POST['sex']) ? test_input($_POST['sex']) : 'Sex is not provided';

        $languages = !empty($_POST['language']) ? $_POST['language'] : array('Language is not provided');
        $language_list = implode(', ', array_map('test_input', $languages));

        $about = !empty($_POST['about']) ? test_input($_POST['about']) : 'About is not provided';

  
        echo "<h2>Preview</h2>";
        echo $name . "<br>";
        echo $username . "<br>";
        echo $password . "<br>"; 
        echo $address . "<br>";
        echo $country . "<br>";
        echo $zip . "<br>";
        echo $email . "<br>";
        echo $sex . "<br>";
        echo $language_list . "<br>";
        echo $about . "<br>";
    } else {
        echo "<p>No form data to preview.</p>";
    }
    ?>
</body>
</html>