<?php  ?>
<form method="POST" action="{{path('login_login')}}">
    <div style="background-color: rgba(129, 124, 126, 0.4)">
        <p>Login form</p>
        <div>
            <label> User name:  </label>
            <input type="text" name="username">
            <br>
            <label> User password:  </label>
            <input type="password" name="pass">
            <br>
            <button type="submit" value="login in" >Sing in</button>
            <a href="{{path('login_login_signup')}}">Sing Up</a>
        </div>
    </div>
</form>


User name: <?php echo $username ?>
<br>
User password: <?php echo $password ?>
