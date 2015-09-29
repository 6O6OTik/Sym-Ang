
<form action="" method="POST" action="{{path('login_login_signup')}}" style="background-color: #adadad">
    <label for="">Name user</label>
    <input type="text" name="username"><br>
    <label for="">Password</label>
    <input type="text" name="pass"><br>
    <label for="">E-email</label>
    <input type="email" name="email"><br>
    <div>
        <button class="btn btn-primary btn-sm" type="submit">Create Acccount</button>
        <a href="{{path('login_login')}}" type="button" class="btn btn-sm">Loginp</a>
    </div>
</form>