<?php include 'header.php'; ?>
<body class="page-catalog">
	<div class="wrapper">
		<ul class="breadcrumb">
			<li class="breadcrumb__list"><a class="breadcrumb__link" href="index.php">Главная</a></li>
			<li class="breadcrumb__list"><a class="breadcrumb__link" href="">Команда</a></li>
		</ul>
	</div>
	
	<section class="catalog">
		<div class="wrapper">
			<button class="uk-button uk-button-default uk-margin-bottom" type="button" uk-toggle="target: #offcanvas-slide">Фильтры</button>
		</div>
		<div class="catalog__layout wrapper">
			<!--filter-desktop-->
			<div class="filter-wrap filter-desktop">
				<ul uk-accordion="multiple: true" class="filter">
					<li class="uk-open">
						<a class="uk-accordion-title" href="#">Length</a>
						<style>
						.uk-open>.uk-accordion-title:after{
							background-image:url(src/img/catalog/keyboard-right-arrow-button--1--copy-3.png)!important;
							}
							.uk-accordion-title::after{
							background-image:url(src/img/catalog/keyboard-right-arrow-button--1--copy-5.png)!important;
							}

						</style>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBox" type="checkbox">
							<label for="checkBox">100 - 200</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox1" type="checkbox">
							<label for="checkBox1">300 - 400</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox2" type="checkbox">
							<label for="checkBox2">500 - 600</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox3" type="checkbox">
							<label for="checkBox3">700 - 800</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox4" type="checkbox">
							<label for="checkBox4">900 - 1000</label>
							</div>
						</div>
					</li>
					<li class="uk-open">
						<a class="uk-accordion-title" href="#">Temperature</a>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBox5" type="checkbox">
							<label for="checkBox5">- 200 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox6" type="checkbox">
							<label for="checkBox6">- 205 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox7" type="checkbox">
							<label for="checkBox7">- 210 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox8" type="checkbox">
							<label for="checkBox8">- 215 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox9" type="checkbox">
							<label for="checkBox9">- 220 °C</label>
							</div>
						</div>
					</li>
					<li>
						<a class="uk-accordion-title" href="#">models</a>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBox10" type="checkbox">
							<label for="checkBox10">Diagonal</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox11" type="checkbox">
							<label for="checkBox11">Ellipse</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox12" type="checkbox">
							<label for="checkBox12">Cube</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox13" type="checkbox">
							<label for="checkBox13">Caspiy</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox14" type="checkbox">
							<label for="checkBox14">Medusa</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox15" type="checkbox">
							<label for="checkBox15">Medusa Cube</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox16" type="checkbox">
							<label for="checkBox16">Orange</label>
							</div>
							<div class="accordion__item">
							<input id="checkBox17" type="checkbox">
							<label for="checkBox17">Duet</label>
							</div>
						</div>
					</li>
				</ul>
				</div>
			<!--filter-mobile-->
			<div id="offcanvas-slide" uk-offcanvas class="filter-wrap">
				<div class="uk-offcanvas-bar uk-box-shadow-large">
					<button class="uk-offcanvas-close" type="button" uk-close></button>
				<ul uk-accordion="multiple: true" class="filter">
					<li class="uk-open">
						<a class="uk-accordion-title" href="#">Length</a>
						<style>
						.uk-open>.uk-accordion-title:after{
							background-image:url(src/img/catalog/keyboard-right-arrow-button--1--copy-3.png)!important;
							}
							.uk-accordion-title::after{
							background-image:url(src/img/catalog/keyboard-right-arrow-button--1--copy-5.png)!important;
							}

						</style>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBoxM" type="checkbox">
							<label for="checkBoxM">100 - 200</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM1" type="checkbox">
							<label for="checkBoxM1">300 - 400</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM2" type="checkbox">
							<label for="checkBoxM2">500 - 600</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM3" type="checkbox">
							<label for="checkBoxM3">700 - 800</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM4" type="checkbox">
							<label for="checkBoxM4">900 - 1000</label>
							</div>
						</div>
					</li>
					<li class="uk-open">
						<a class="uk-accordion-title" href="#">Temperature</a>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBoxM5" type="checkbox">
							<label for="checkBoxM5">- 200 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM6" type="checkbox">
							<label for="checkBoxM6">- 205 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM7" type="checkbox">
							<label for="checkBoxM7">- 210 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM8" type="checkbox">
							<label for="checkBoxM8">- 215 °C</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM9" type="checkbox">
							<label for="checkBoxM9">- 220 °C</label>
							</div>
						</div>
					</li>
					<li>
						<a class="uk-accordion-title" href="#">models</a>
						<div class="uk-accordion-content accordion">
							<div class="accordion__item">
							<input id="checkBoxM10" type="checkbox">
							<label for="checkBoxM10">Diagonal</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM11" type="checkbox">
							<label for="checkBoxM11">Ellipse</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM12" type="checkbox">
							<label for="checkBoxM12">Cube</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM13" type="checkbox">
							<label for="checkBoxM13">Caspiy</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM14" type="checkbox">
							<label for="checkBoxM14">Medusa</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM15" type="checkbox">
							<label for="checkBoxM15">Medusa Cube</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM16" type="checkbox">
							<label for="checkBoxM16">Orange</label>
							</div>
							<div class="accordion__item">
							<input id="checkBoxM17" type="checkbox">
							<label for="checkBoxM17">Duet</label>
							</div>
						</div>
					</li>
				</ul>
				</div>
			</div>
			<!--filter-mobile-end-->
			<div class="catalog-content">
				<div class="catalog-content__banner" style="background-image: url(src/img/catalog/catalog-bg-image.png)">
					<div class="catalog-content__bg"></div>
					<h2 class="catalog-content__title">ORANGE</h2>
					<p class="catalog-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
				</div>
				<div class="catalog-card-lauout">
					<div class="catalog-card-wrap">
						<a class="catalog-card" href="product.php">
							<div class="catalog-card__image" style="background-image: url('src/img/catalog/card-img-2.png')"></div>
							<div class="catalog-card__content">
								<h4 class="catalog-card__title">Title</h4>
								<p class="catalog-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</a>
					</div>
					<div class="catalog-card-wrap">
						<a class="catalog-card" href="product.php">
							<div class="catalog-card__image" style="background-image: url('src/img/catalog/card-img-3.png')"></div>
							<div class="catalog-card__content">
								<h4 class="catalog-card__title">Title</h4>
								<p class="catalog-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</a>
					</div>
					<div class="catalog-card-wrap">
						<a class="catalog-card" href="product.php">
							<div class="catalog-card__image" style="background-image: url('src/img/catalog/card-img-1.png')"></div>
							<div class="catalog-card__content">
								<h4 class="catalog-card__title">Title</h4>
								<p class="catalog-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="catalog__download">
			<div class="wrapper">
				<h4>Download PDF Catalog</h4>
				<div class="catalog__download_text">
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
					</span>
				</div>
				<div class="catalog__download_button">
					<a href="#" class="btn catalog__download_link btn-primary">
						<span class="catalog__download_link-text">download</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</body>
<?php include 'footer.php'; ?>