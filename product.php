
<?php include 'header.php'; ?>
<body class="us">
	<div class="wrapper">
		<ul class="breadcrumb">
			<li class="breadcrumb__list"><a class="breadcrumb__link" href="">Главная</a></li>
			<li class="breadcrumb__list"><a class="breadcrumb__link" href="">Каталог</a></li>
			<li class="breadcrumb__list"><a class="breadcrumb__link" href="">Витрина</a></li>
		</ul>
	</div>
	<div id="modal-close-default" class="modal" uk-modal>
		<style>
		.modal{
				cursor: url(src/img/icon-pointer.png), pointer;
			}
		</style>
		<div class="modal__background"></div>
		<div class="modals">
			<div class="modals__body uk-modal-dialog">
				<form id="form"  class="modals-form form" name="form">
					   <button class="uk-modal-close-default" type="button" uk-close></button>
					   <div class="modals-form__text">
					   <h5>Пожалуйста, оставьте свои контактные данные, наш менеджер свяжется с Вами в ближайшее время</h5>
					   </div>
					<div class="modals-form__input-wrap">
						<input type="text" class="modals-form__input form-control" name="name" value="" placeholder="Имя">
					</div>
					<div class="modals-form__input-wrap">
						<input type="text" class="modals-form__input form-control" value="" name="phone" placeholder="Телефон">
					</div>
					<div class="our-team__button modals-form__btn">
					<a href="#" class="btn our-team__link btn btn-primary js-close-thank-you">
						<input type="submit" name="button" class="our-team__link-text">
					</a>
				</div>
				</form>
			</div>
		</div>
	</div>
	<!--попап благодарности-->
	<div class="thanks-overlay">
		<div class="thanks-popup js-thank-you">
			<div class="thank-you">
				<div class="thank-you__tittle">
					<h2>Спасибо за заявку.</h2>
					<h2>наш менеджер свяжется с вами</h2>
				</div>
				<div class="our-team__button thank-you__btn">
					<a href="#" class="btn our-team__link btn btn-primary out">
						<span class="our-team__link-text">Назад</span>
					</a>
				</div>
				<div class="close-popup out"></div>
			</div>
		</div>
	</div>
	<div class="wrapper">
		<section class="showcase">
			<div class="slider-product">
				<div class="product-first">
					<div class="product-first__img">
						<div class="product-first__img_content">
							<img  src="src/img/product-pages/1a_diagonal.jpg" alt="">
						</div>
						<a href="#modal-showcase" class="product-first__img_plus" uk-toggle>
							<img src="src/img/product-pages/zoom-in.png" alt="">
						</a>
						<div id="modal-showcase" class="modal" uk-modal>
							<div class="uk-modal-dialog uk-margin-auto-vertical uk-width-auto">
								<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
								<img src="src/img/product-pages/1a_diagonal.jpg" alt="">
							</div>
						</div>
					</div>
					<div class="product-first__img">
						<div class="product-first__img_content">
							<img src="src/img/product-pages/1_diagonal.jpg" alt="">
						</div>
						<a href="#modal-showcase1" class="product-first__img_plus" uk-toggle>
							<img src="src/img/product-pages/zoom-in.png" alt="">
						</a>
						<div id="modal-showcase1" class="modal" uk-modal>
							<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
								<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
								<img src="src/img/product-pages/1_diagonal.jpg" alt="">
							</div>
						</div>
					</div>
					<div class="product-first__img">
						<div class="product-first__img_content">
							<img src="src/img/product-pages/5_diagonal.jpg" alt="">
						</div>
						<a href="#modal-showcase2" class="product-first__img_plus" uk-toggle>
							<img src="src/img/product-pages/zoom-in.png" alt="">
						</a>
						<div id="modal-showcase2" class="modal" uk-modal>
							<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
								<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
								<img src="src/img/product-pages/5_diagonal.jpg" alt="">
							</div>
						</div>
					</div>
					<div class="product-first__img">
						<div class="product-first__img_content">
							<img src="src/img/product-pages/6_diagonal.jpg" alt="">
						</div>
						<a href="#modal-showcase3" class="product-first__img_plus" uk-toggle>
							<img src="src/img/product-pages/zoom-in.png" alt="">
						</a>
						<div id="modal-showcase3" class="modal" uk-modal>
							<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
								<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
								<img src="src/img/product-pages/6_diagonal.jpg" alt="">
							</div>
						</div>
					</div>
					<div class="product-first__img">
						<div class="product-first__img_content">
							<img src="src/img/product-pages/1_diagonal.jpg" alt="">
						</div>
						<a href="#modal-showcase4" class="product-first__img_plus" uk-toggle>
							<img src="src/img/product-pages/zoom-in.png" alt="">
						</a>
						<div id="modal-showcase4" class="modal" uk-modal>
							<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
								<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
								<img src="src/img/product-pages/1_diagonal.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
				<div id="product-two" class="product-two">
					<div class="product-two__img">
						<img src="src/img/product-pages/1a_diagonal.jpg" alt="">
					</div>
					<div class="product-two__img">
						<img src="src/img/product-pages/1_diagonal.jpg" alt="">
					</div>
					<div class="product-two__img">
						<img src="src/img/product-pages/5_diagonal.jpg" alt="">
					</div>
					<div class="product-two__img">
						<img src="src/img/product-pages/6_diagonal.jpg" alt="">
					</div>
					<div class="product-two__img">
						<img src="src/img/product-pages/1_diagonal.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="model">
				<h4>наименование модели</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi vehicula, molestie risus eu, rutrum turpis. Donec a feugiat orci. Cras volutpat bibendum justo, vel aliquam nunc. Proin sed urna erat. </p>
				<div class="model__name">
					<div class="model__name_item">
						<img src="src/img/product-pages/portable-fridge.png" alt="">
						<p>Название в несколько слов</p>
					</div>
					<div class="model__name_item">
						<img src="src/img/product-pages/windscreen.png" alt="">
						<p>Название</p>
					</div>
					<div class="model__name_item">
						<img src="src/img/product-pages/fan.png" alt="">
						<p>Название</p>
					</div>
					<div class="model__name_item">
						<img src="src/img/product-pages/snowflake-1-.png" alt="">
						<p>Название</p>
					</div>
					<div class="model__name_item">
						<img src="src/img/product-pages/snowflake 2.png" alt="">
						<p>Название</p>
					</div>
				</div>
				<div class="our-team__button model__btn">
					<a href="#modal-close-default" uk-toggle class="btn our-team__link btn btn-primary">
						<span class="our-team__link-text">заказать</span>
					</a>
				</div>
			</div>
			<div class="pagingInfo"><span class="pagedots"></span></div>
		</section>
	</div>
	<section class="sec-construction">
		<div class="wrapper">
			<div class="border-top"></div>
			<h4 class="our-clients__title titel">конструкция</h4>
			<div class="construction">
				<div class="construction__item">
					<img src="src/img/product-pages/02closed45------.png" alt="">
					<h4>название</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi vehicula, molestie risus eu</p>
				</div>
				<div class="construction__item">
					<img src="src/img/product-pages/02closed45------.png" alt="">
					<h4>название</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi vehicula, molestie risus eu</p>
				</div>
				<div class="construction__item">
					<img src="src/img/product-pages/02closed45------.png" alt="">
					<h4>название</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi vehicula, molestie risus eu</p>
				</div>
			</div>
		</div>
	</section>
	<!--model section-->
	<section class="lineup">
		<div class="wrapper">
			<div class="border-top"></div>
			<h4 class="our-clients__title titel">модельный ряд</h4>
			<div id="slider-model" class="slider-model">
				<div class="slider-model__item">
					<a href="#" target="_blank">
						<img src="src/img/product-pages/001-cube.jpg" alt="">
					</a>
					<h4>название модели</h4>
				</div>
				<div class="slider-model__item">
					<a href="#" target="_blank">
						<img src="src/img/product-pages/008b-cube.jpg" alt="">
					</a>
					<h4>название модели</h4>
				</div>
				<div class="slider-model__item">
					<a href="#" target="_blank">
						<img src="src/img/product-pages/012im-cube.jpg" alt="">
					</a>
					<h4>название модели</h4>
				</div>
				<div class="slider-model__item">
					<a href="#" target="_blank">
						<img src="src/img/product-pages/010a-cube.jpg" alt="">
					</a>
					<h4>название модели</h4>
				</div>
				<div class="slider-model__item">
					<a href="#" target="_blank">
						<img src="src/img/product-pages/012im-cube.jpg" alt="">
					</a>
					<h4>название модели</h4>
				</div>
			</div>
			<div class="pagingInfo"><span class="pagedots"></span></div>
		</div>
	</section>
	<section class="catalog-video-pdf">
		<div class="wrapper">
			<div class="border-top"></div>
			<h4 class="our-clients__title titel">видео - презентация</h4>
			<div class="video">
				<iframe width="764" height="419" src="https://www.youtube.com/embed/SRM7PYjKuGo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div id="catalog-pdf" class="catalog-pdf">
				<div class="catalog-pdf__item">
					<div class="catalog-pdf__pdf">
						<a href="src/doc/Aisberg_Contacts.docx" download></a>
						<div class="catalog-pdf__pdf_part">
							<img src="src/img/product-pages/pdf17-800px.png" alt="">
						</div>
					</div>
					<div class="catalog-pdf__text">
						<h4>
						<a href="src/doc/Aisberg_Contacts.docx" download>
							Название каталога
						</a>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="catalog-pdf__item">
					<div class="catalog-pdf__pdf">
						<a href="src/doc/Aisberg_Contacts.docx" download></a>
						<div class="catalog-pdf__pdf_part">
							<img src="src/img/product-pages/pdf17-800px.png" alt="">
						</div>
					</div>
					<div class="catalog-pdf__text">
						<h4>
						<a href="src/doc/Aisberg_Contacts.docx" download>
							Название каталога
						</a>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="catalog-pdf__item">
					<div class="catalog-pdf__pdf">
						<a href="src/doc/Aisberg_Contacts.docx" download></a>
						<div class="catalog-pdf__pdf_part">
							<img src="src/img/product-pages/pdf17-800px.png" alt="">
						</div>
					</div>
					<div class="catalog-pdf__text">
						<h4>
						<a href="src/doc/Aisberg_Contacts.docx" download>
							Название каталога
						</a>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="catalog-pdf__item">
					<div class="catalog-pdf__pdf">
						<a href="src/doc/Aisberg_Contacts.docx" download></a>
						<div class="catalog-pdf__pdf_part">
							<img src="src/img/product-pages/pdf17-800px.png" alt="">
						</div>
					</div>
					<div class="catalog-pdf__text">
						<h4>
						<a href="src/doc/Aisberg_Contacts.docx" download>
							Название каталога
						</a>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="catalog-pdf__item">
					<div class="catalog-pdf__pdf">
						<a href="src/doc/Aisberg_Contacts.docx" download></a>
						<div class="catalog-pdf__pdf_part">
							<img src="src/img/product-pages/pdf17-800px.png" alt="">
						</div>
					</div>
					<div class="catalog-pdf__text">
						<h4>
						<a href="src/doc/Aisberg_Contacts.docx" download>
							Название каталога
						</a>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
			<div class="pagingInfo"><span class="pagedots"></span></div>
		</div>
	</section>
	<section class="callback-section">
		<div class="wrapper">
			<div class="form-block">
				<div class="form-block__text">
					<h4>вы можете заказать модель, которая понравилась в режиме <a href="#"target="_blank">онлайн</a>
					и в ближайшее время мы свяжемся с вами!</h4>
				</div>
				<div class="form-block__form">
					<form id="form2" class="form-order form2" name="form2">
						<div class="form-order__input">
							<input type="text" name="name" value="" placeholder="ваше имя" style="background: url(src/img/product-pages/social.png) no-repeat 25px 15px ;">
						</div>
						<div class="form-order__input">
							<input type="text" name="phone" value="" placeholder="ваш телефон" style="background: url(src/img/product-pages/phone-call.png) no-repeat 25px 17px;">
						</div>
						<div class="our-team__button form-order__btn">
							<button href="#" class="btn our-team__link btn btn-primary js-close-thank-you">
								<input type="submit" name="button" class="our-team__link-text" value="заказать">
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</body>
<?php include 'footer.php'; ?>