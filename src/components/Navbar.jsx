import Logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src={Logo} width="60" height="60" alt="" />
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Feature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Service</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 navbar-buttons-custom">
        <button type="button" class="btn btn-link">Login</button>
        <button type="button" class="btn btn-success my-2 my-sm-0">Sign Up</button>
    </form>
  </div>
</nav>
  );
}

export default Navbar;
