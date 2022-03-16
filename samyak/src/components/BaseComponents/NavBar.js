const NavBar = () => {
  return (
    <div className="App__navbar">
      <nav>
        <div class="logo">
          <a href="index.html">
            High<em>way</em>
          </a>
        </div>
        <div class="menu-icon">
          <span></span>
        </div>
      </nav>
      <section class="overlay-menu">
        <div class="container">
          <div class="row">
            <div class="main-menu">
              <ul>
                <li>
                  <a href="index.html">Home - Full-width</a>
                </li>
                <li>
                  <a href="masonry.html">Home - Masonry</a>
                </li>
                <li>
                  <a href="grid.html">Home - Small-width</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="blog.html">Blog Entries</a>
                </li>
                <li>
                  <a href="single-post.html">Single Post</a>
                </li>
              </ul>
              <p>We create awesome templates for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
