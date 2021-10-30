<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login-Form</title>
    <script src="jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/65cf78e06a.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<form action="process-login.php" method="POST">
  <div class="form-group">
    <label for="username">username: </label>
    <input type="text" class="form-control" name="username">
  </div>
  <div class="form-group">
    <label for="pwd">Password: </label>
    <input type="password" class="form-control" name="password">
  </div>
  <button type="submit" class="btn btn-primary" name="login">Submit</button>
</form> 
</body>
</html>