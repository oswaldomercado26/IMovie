import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>      
<div id="preloader">
    <img className="logo" src="images/logo1.png" alt="" width="119" height="58"/>
    <div id="status">
        <span></span>
        <span></span>
    </div>
</div>

<div className="login-wrapper" id="login-content">
    <div className="login-content">
        <a href="#" className="close">x</a>
        <h3>Iniciar Sesion</h3>
        <form method="post" action="#">
        	<div className="row">
        		 <label for="username">
                    Usuario:
                    <input type="text" name="username" id="username" placeholder="Nombre" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                </label>
        	</div>
           
            <div className="row">
            	<label for="password">
                    Contraseña:
                    <input type="password" name="password" id="password" placeholder="Contraseña" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
            <div className="row">
            	<div className="remember">
					<div>
						<input type="checkbox" name="remember" value="Remember me"/><span>Remember me</span>
					</div>
            		<a href="#">Olvidaste tu contraseña?</a>
            	</div>
            </div>
           <div className="row">
           	 <button type="submit">Iniciar sesion</button>
           </div>
        </form>
        <div className="row">
        	<p> o por medio de tus redes sociales</p>
            <div className="social-btn-2">
            	<a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
            	<a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
            </div>
        </div>
    </div>
</div>

<div className="login-wrapper"  id="signup-content">
    <div className="login-content">
        <a href="#" className="close">x</a>
        <h3>Crear cuenta</h3>
        <form method="post" action="#">
            <div className="row">
                 <label for="username-2">
                    Usuario:
                    <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                </label>
            </div>
           
            <div className="row">
                <label for="email-2">
                    Correo electronico:
                    <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
             <div className="row">
                <label for="password-2">
                    Contraseña:
                    <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
             <div className="row">
                <label for="repassword-2">
                    Verificar Contraseña:
                    <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
           <div className="row">
             <button type="submit">Crear Cuenta</button>
           </div>
        </form>
    </div>
</div>

<header className="ht-header">
	<div className="container">
		<nav className="navbar navbar-default navbar-custom">
				
				<div className="navbar-header logo">
				    <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    <span className="sr-only">Toggle navigation</span>
					    <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						</div>
				    </div>
				    <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58"/></a>
			    </div>
				
				<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav flex-child-menu menu-left">
						<li className="hidden">
							<a href="#page-top"></a>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
							Inicio <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="index-2.html">Peliculas</a></li>
								<li><a href="homev2.html">Series</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Categorias<i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="moviesingle.html">Drama</a></li>
								<li><a href="moviesingle.html">Comedia</a></li>
								<li><a href="moviesingle.html">Fantasia</a></li>
								<li><a href="moviesingle.html">Accion</a></li>
								<li><a href="moviesingle.html">Anime</a></li>
								<li><a href="moviesingle.html">Documental</a></li>
								<li><a href="moviesingle.html">Ciencia Ficcion</a></li>
								<li><a href="moviesingle.html">Suspenso</a></li>
								<li><a href="moviesingle.html">Terror</a></li>
								<li className="it-last"><a href="seriessingle.html">Familiar</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Ultimas añadidas <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="celebritygrid01.html">Peliculas</a></li>
								<li><a href="celebritygrid02.html">Serie </a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Popular <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="bloglist.html">Peliculas</a></li>
								<li className="it-last"><a href="blogdetail.html">Series</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Añadir <i className="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="userfavoritegrid.html">Pelicula</a></li>
								<li className="it-last"><a href="userrate.html">Serie</a></li>
							</ul>
						</li>
					</ul>
					<ul className="nav navbar-nav flex-child-menu menu-right">               
						<li><a href="#">Ayuda</a></li>
						<li className="loginLink"><a href="#">Crear Cuenta</a></li>
						<li className="btn signupLink"><a href="#">Iniciar Sesion</a></li>
					</ul>
				</div>
			
	    </nav>
	    
	   
	    <div className="top-search">
			<input type="text" placeholder="Buscar Pelicula o Serie"/>
	    </div>
	</div>
</header>


<div className="hero common-hero">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="hero-ct">
					<h1> Inicio</h1>
					<ul className="breadcumb">
						<li className="active"><a href="#">Inicio</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="page-single movie_list">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="topbar-filter">
					<p>Found <span>1,608 movies</span> in total</p>
					<label>Ordenar por:</label>
					<select>
						<option value="popularity">Popularidad Descendente</option>
						<option value="popularity">Popularidad Ascendente</option>
						<option value="rating">Calificacion Descendente</option>
						<option value="rating">Calificacion Ascendente</option>
					</select>
					<a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv1.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
						<p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Joss Whedon</a></p>
						<p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
					</div>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv2.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">into the wild <span>(2014)</span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
						<p className="describe">As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe Russo</a></p>
						<p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel L. Jackson,</a> <a href="#">  Scarlett Johansson</a></p>
					</div>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv3.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">blade runner  <span>(2015)</span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
						<p className="describe">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Peyton Reed</a></p>
						<p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a></p>
					</div>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv4.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">Mulholland pride<span> (2013)  </span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
						<p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Shane Black</a></p>
						<p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#">  Guy Pearce,</a><a href="#">Don Cheadle</a></p>
					</div>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv5.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">skyfall: evil of boss<span> (2013)  </span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
						<p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Alan Taylor</a></p>
						<p>Stars: <a href="#">Chris Hemsworth,  </a> <a href="#">  Natalie Portman,</a><a href="#">Tom Hiddleston</a></p>
					</div>
				</div>
				<div className="topbar-filter">
					<label>Peliculas por pagina:</label>
					<select>
						<option value="range">5 Peliculas</option>
						<option value="saab">10 Peliculas</option>
					</select>
					<div className="pagination2">
						<span>Pagina 1 of 2:</span>
						<a className="active" href="#">1</a>
						<a href="#">2</a>
						<a href="#"><i className="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-12 col-xs-12">
				<div className="sidebar">
					<div className="searh-form">
						<h4 className="sb-title">Busqueda por pelicula</h4>
						<form className="form-style-1" action="#">
							<div className="row">
								<div className="col-md-12 form-it">
									<label>Titulo</label>
									<input type="text" placeholder="Enter keywords"/>
								</div>
								<div className="col-md-12 form-it">
									<label>Categoria</label>
									<div className="group-ip">
										<select
											name="skills" multiple="" className="ui fluid dropdown">
											<option value="">Elije una categoria</option>
											<option value="Action1">Drama</option>
					                        <option value="Action2">Comedia</option>
					                        <option value="Action3">Fantasia</option>
					                        <option value="Action4">Accion</option>
					                        <option value="Action5">Anime</option>
											<option value="Action1">Documental</option>
					                        <option value="Action2">Ciencia Ficcion</option>
					                        <option value="Action3">Suspenso</option>
					                        <option value="Action4">Terror</option>
					                        <option value="Action5">Familiar</option>
										</select>
									</div>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Rating Range</label>
									
									 <select>
										<option value="range">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
									</select>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Release Year</label>
									<div className="row">
										<div className="col-md-6">
											<select>
												<option value="range">From</option>
												<option value="number">10</option>
												<option value="number">20</option>
												<option value="number">30</option>
											</select>
										</div>
										<div className="col-md-6">
											<select>
												<option value="range">To</option>
												<option value="number">20</option>
												<option value="number">30</option>
												<option value="number">40</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-md-12 ">
									<input className="submit" type="submit" value="submit"/>
								</div>
							</div>
						</form>
					</div>
					<div className="ads">
						<img src="images/uploads/ads1.png" alt=""/>
					</div>
					<div className="sb-facebook sb-it">
						<h4 className="sb-title">Find us on Facebook</h4>
						<iframe src="#" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315" ></iframe>
					</div>
					<div className="sb-twitter sb-it">
						<h4 className="sb-title">Tweet to us</h4>
						<div className="slick-tw">
							<div className="tweet item" id=""> 
							</div>
							<div className="tweet item" id="">
							</div>
						</div>							
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer className="ht-footer">
	<div className="container">
		<div className="flex-parent-ft">
			<div className="flex-child-ft item1">
				 <a href="index-2.html"><img className="logo" src="images/logo1.png" alt=""/></a>
				 <p>Blvd. Gral. Marcelino García Barragán 1421, Olímpica<br/>
				 44430 Guadalajara, Jal.</p>
			</div>
			<div className="flex-child-ft item2">
				<h4>Resources</h4>
				<ul>
					<li><a href="#">About</a></li> 
					<li><a href="#">Blockbuster</a></li>
					<li><a href="#">Contact Us</a></li>
					<li><a href="#">Forums</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Help Center</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item3">
				<h4>Legal</h4>
				<ul>
					<li><a href="#">Terms of Use</a></li> 
					<li><a href="#">Privacy Policy</a></li>	
					<li><a href="#">Security</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item4">
				<h4>Account</h4>
				<ul>
					<li><a href="#">My Account</a></li> 
					<li><a href="#">Watchlist</a></li>	
					<li><a href="#">Collections</a></li>
					<li><a href="#">User Guide</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item5">
				<h4>Newsletter</h4>
				<p>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
				<form action="#">
					<input type="text" placeholder="Enter your email..."/>
				</form>
				<a href="#" className="btn">Suscribete ahora <i className="ion-ios-arrow-forward"></i></a>
			</div>
		</div>
	</div>
	<div className="ft-copyright">
		<div className="ft-left">
			<p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
		</div>
		<div className="backtotop">
			<p><a href="#" id="back-to-top">Regresar al Inicio <i className="ion-ios-arrow-thin-up"></i></a></p>
		</div>
	</div>
</footer>

    </div>
  );
}

export default App;
