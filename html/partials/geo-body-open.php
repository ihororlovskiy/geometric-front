<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Geometric Theme by Le Coq Studio</title>
	<meta name="description" content="Geometric Theme for Wordpress by Le Coq Studio">
	<meta name="keywords" content="Geometric Theme, Le Coq Studio, Wordpress">
	<meta name="author" content="Le Coq Studio">

	<!-- favicomatic -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://geometric.sentimony.com/img/favicomatic/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://geometric.sentimony.com/img/favicomatic/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="http://geometric.sentimony.com/img/favicomatic/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="http://geometric.sentimony.com/img/favicomatic/favicon-16x16.png" sizes="16x16" />
	<meta name="application-name" content="Geometric Theme by Le Coq Studio" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="http://geometric.sentimony.com/img/favicomatic/mstile-144x144.png" />

	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<link href="http://fat.github.io/zoom.js/css/zoom.css">
	<link rel="stylesheet" href="/css/style.css">
	<!-- <link rel="stylesheet" href="/sass-bourbon/app.css"> -->

</head>
<body class="geo-body">

 <header class="geo-header geo-header-large">
	<div class="container">

		<nav class="geo-main-logo">
			<a href="/" class="">
				<img src="/img/header1-logo-x2.png" alt="header-logo" />
			</a>
		</nav>

		<nav class="geo-languages-menu">
			<ul>
				<li>
					<a href="#">En</a>
					<ul>
						<li><a href="#">Ua</a></li>
						<li><a href="#">Ru</a></li>
					</ul>
				</li>
			</ul>
		</nav>

		<nav class="geo-main-menu">
			<ul>
				<li class="geo-main-menu-cart">
					<a href="#">
						<span class="icon-uniE12F"></span>
						<span class="geo-purchased-items">0</span>
					</a>
				</li>
			</ul>
		</nav>

		<nav class="geo-searchbox-menu">
			<form class="geo-searchbox">
				<input class="geo-searchbox-input" type="search" placeholder="What are you looking for?" name="search" onkeyup="buttonUp();" required>
				<input class="geo-searchbox-submit" type="submit" value="Go">
				<span class="geo-searchbox-icon"><span class="icon-loupe"></span></span>
			</form>
		</nav>

		<nav class="geo-main-menu">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>

				<li class="geo-megamenu geo-megamenu-col-5">
					<a href="#">Blog</a>
					<ul class="geo-submenu">
						<li>
							<h6>Classic Blog</h6>
							<ul class="geo-subsubmenu">
								<li><a href="geo-blog-list-classical-large-media.php">Large Media</a></li>
								<li><a href="geo-blog-list-classical-large-media-sidebar.php">Large Media with Sidebar</a></li>
								<li><a href="geo-blog-list-classical-small-media.php">Small Media</a></li>
								<li><a href="geo-blog-list-classical-small-media-sidebar.php">Small Media with Sidebar</a></li>
							</ul>
						</li>
						<li>
							<h6>Mansory Blog</h6>
							<ul class="geo-subsubmenu">
								<li><a href="geo-blog-list-masonry-2-col.php">2 Columns</a></li>
								<li><a href="geo-blog-list-masonry-3-col.php">3 Columns</a></li>
								<li><a href="geo-blog-list-masonry-4-col.php">4 Columns</a></li>
								<li><a href="geo-blog-list-masonry-full.php">Fullwidth</a></li>
							</ul>
						</li>
						<li>
							<h6>Grid Blog</h6>
							<ul class="geo-subsubmenu">
								<li><a href="geo-blog-list-grid-2-col.php">2 Columns</a></li>
								<li><a href="geo-blog-list-grid-3-col.php">3 Columns</a></li>
								<li><a href="geo-blog-list-grid-4-col.php">4 Columns</a></li>
								<li><a href="geo-blog-list-grid-full.php">Fullwidth</a></li>
							</ul>
						</li>
						<li>
							<h6>Custom blog</h6>
							<ul class="geo-subsubmenu">
								<li><a href="geo-blog-list-custom.php">Horizontal</a></li>
								<li><a href="geo-blog-list-custom-sidebar.php">Horizontal with Sidebar</a></li>
							</ul>
						</li>
						<li>
							<h6>Single post</h6>
							<ul class="geo-subsubmenu">
								<li><a href="geo-blog-item.php">Single Image</a></li>
								<li><a href="geo-blog-item-sidebar.php">With Sidebar</a></li>
							</ul>
						</li>
					</ul>
				</li>

				<li class="geo-megamenu geo-megamenu-col-4">
					<a href="#">Portfolio</a>
					<ul class="geo-submenu">
						<li>
							<h6>Grid Style</h6>
							<ul class="geo-subsubmenu">
								<li><a href="#">2 Columns</a></li>
								<li><a href="#">3 Columns</a></li>
								<li><a href="#">4 Columns</a></li>
								<li><a href="#">Fullwidth</a></li>
							</ul>
						</li>
						<li>
							<h6>Mansory</h6>
							<ul class="geo-subsubmenu">
								<li><a href="#">2 Columns</a></li>
								<li><a href="#">3 Columns</a></li>
								<li><a href="#">4 Columns</a></li>
								<li><a href="#">Fullwidth</a></li>
							</ul>
						</li>
						<li>
							<h6>Multigrid</h6>
							<ul class="geo-subsubmenu">
								<li><a href="#">2 Columns</a></li>
								<li><a href="#">3 Columns</a></li>
								<li><a href="#">4 Columns</a></li>
								<li><a href="#">Fullwidth</a></li>
							</ul>
						</li>
						<li>
							<h6>Portfolio Single Item</h6>
							<ul class="geo-subsubmenu">
								<li><a href="#">Classic</a></li>
								<li><a href="#">With Sidebar</a></li>
							</ul>
						</li>
					</ul>
				</li>

				<li class="geo-classicmenu">
					<a href="#">Shop</a>
					<ul class="geo-submenu">
						<li>
							<a href="#">Shop Catalog <span class="icon-uniE5CD"></span></a>
							<ul class="geo-subsubmenu">
								<li><a href="#">2 Columns</a></li>
								<li><a href="#">3 Columns</a></li>
								<li><a href="#">4 Columns</a></li>
								<li><a href="#">Multigrid</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Single Product <span class="icon-uniE5CD"></span></a>
							<ul class="geo-subsubmenu">
								<li><a href="#">Left sidebar</a></li>
								<li><a href="#">Right sidebar</a></li>
								<li><a href="#">Fullwidth</a></li>
							</ul>
						</li>
					</ul>
				</li>

				<li>
					<a href="#">Elements</a>
				</li>

				<li>
					<a href="#">Pages</a>
					<ul class="sub-menu">
						<li><a href="#">Corporate</a></li>
						<li><a href="#">Corporate Project</a></li>
						<li><a href="#">Contacts Us</a></li>
						<li><a href="#">Text Page</a></li>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">404</a></li>
					</ul>
				</li>

				<!-- <li class="geo-main-menu-search">
					<a href="#">
						<span class="icon-uni46"></span>
					</a>
				</li> -->

			</ul>

		</nav>

	</div>
	</header>
	<main class="geo-wrapper header-waypoint" data-animate-down="geo-header-small" data-animate-up="geo-header-large">
