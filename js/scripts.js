function mainSliderInit(){
	if ( window.innerWidth < 768 && !document.querySelector(".first_section .swiper").classList.contains("swiper-initialized") ) {
		mainSlider = new Swiper(".first_section .swiper", {
			spaceBetween: 150,
			slidesPerView: 1,
			autoHeight: true,
			loop: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					let nexIndex = index + 1;
					if (nexIndex < 10) {
						nexIndex = '0' + nexIndex;
					}
					return '<span class="' + className + '">' + nexIndex + "</span>";
				},
			},
			on: {
				init: function (swiper) {
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'});

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') );
					}, 200)
				},
				resize: function (swiper) {
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'});

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') );
					}, 200);
				}
			}
		});

		if (document.querySelector(".first_section .swiper .swiper-wrapper").classList.contains("flex")) {
			document.querySelector(".first_section .swiper .swiper-wrapper").classList.remove("flex");
		}

		mainSlider.init();
	} else if ( window.innerWidth > 767 && document.querySelector(".first_section .swiper").classList.contains("swiper-initialized") ) {
		mainSlider.destroy(true, true)
		if (!document.querySelector(".first_section .swiper .swiper-wrapper").classList.contains("flex")) {
			document.querySelector(".first_section .swiper .swiper-wrapper").classList.add("flex");
		}
	}


	if ( window.innerWidth < 768 ) {
		if (document.querySelector(".product_info .slider").classList.contains("swiper-initialized")) {
			$productSwiper.forEach((el, index) => {
				el.destroy(true, true);
			})
		}
		if (document.querySelectorAll(".product_info .big .slider").length) {
			$productSwiper = new Swiper('.product_info .big .slider', {
				spaceBetween: 0,
				loop: false,
				loopedSlides: 1,
				slidesPerView: 1,
				speed: 500,
				effect: 'slide',
				creativeEffect: {
					prev: {
						// translate: [0, 0, 0],
						translate: [-80, 0, 0],
						scale: .91,
					},
					next: {
						translate: [80, 0, 0],
						scale: .91,
					},
				},
				preloadImages: false,
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				pagination: {
					bulletActiveClass: 'slider-dot_active',
					bulletClass: 'slider-dot',
					clickableClass: 'slider-pagination-clickable',
					el: '.slider-pagination',
					clickable: true
				},
				breakpoints: {
					'320': {
						spaceBetween: 15,
						freeMode: true,
					},
					'480': {
						spaceBetween: 15,
						freeMode: true,
						creativeEffect: {
							prev: {
								translate: ["-100%", 0, 0],
								scale: 1,
							},
							next: {
								translate: ["100%", 0, 0],
								scale: 1,
							},
						},
					},
					'768': {
						spaceBetween: 30,
						freeMode: true,
						creativeEffect: {
							prev: {
								// translate: [0, 0, 0],
								translate: [-40, 0, 0],
								scale: .91,
							},
							next: {
								translate: [40, 0, 0],
								scale: .91,
							},
						},
					},
					'1025': {
						spaceBetween: 40,
						freeMode: false,
						creativeEffect: {
							prev: {
								// translate: [0, 0, 0],
								translate: [-45, 0, 0],
								scale: .91,
							},
							next: {
								translate: [45, 0, 0],
								scale: .91,
							},
						},
					},
					'1200': {
						spaceBetween: 40,
						freeMode: false,
						creativeEffect: {
							prev: {
								translate: [-80, 0, 0],
								scale: .91,
							},
							next: {
								translate: [80, 0, 0],
								scale: .91,
							},
						},
					},
				},
				on: {
					slideChange: function (swiper) {
						swiper.$el.closest('.tab_content').find('.thumbs .img').forEach(element => element.classList.remove('active'))

						swiper.$el.closest('.tab_content').find('.thumbs .item')[swiper.realIndex].querySelector('.img').classList.add('active')
					}
				}
			})
		}
	} else if ( window.innerWidth > 767) {
		if (document.querySelector(".product_info .slider").classList.contains("swiper-initialized")) {
			$productSwiper.forEach((el, index) => {
				el.destroy(true, true)
			})
		}
		if (document.querySelectorAll(".product_info .big .slider").length) {
			$productSwiper = new Swiper('.product_info .big .slider', {
				spaceBetween: 0,
				loop: false,
				loopedSlides: 1,
				slidesPerView: 1,
				speed: 500,
				effect: 'creative',
				creativeEffect: {
					prev: {
						translate: [-80, 0, 0],
						scale: .91,
					},
					next: {
						translate: [80, 0, 0],
						scale: .91,
					},
				},
				preloadImages: false,
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				pagination: {
					bulletActiveClass: 'slider-dot_active',
					bulletClass: 'slider-dot',
					clickableClass: 'slider-pagination-clickable',
					el: '.slider-pagination',
					clickable: true
				},
				breakpoints: {
					'320': {
						spaceBetween: 15,
						freeMode: true,
					},
					'480': {
						spaceBetween: 15,
						freeMode: true,
					},
					'768': {
						spaceBetween: 30,
						freeMode: true,
						creativeEffect: {
							prev: {
								translate: [-40, 0, 0],
								scale: .91,
							},
							next: {
								translate: [40, 0, 0],
								scale: .91,
							},
						},
					},
					'1025': {
						spaceBetween: 40,
						freeMode: false,
						creativeEffect: {
							prev: {
								translate: [-45, 0, 0],
								scale: .91,
							},
							next: {
								translate: [45, 0, 0],
								scale: .91,
							},
						},
					},
					'1200': {
						spaceBetween: 40,
						freeMode: false,
						creativeEffect: {
							prev: {
								translate: [-80, 0, 0],
								scale: .91,
							},
							next: {
								translate: [80, 0, 0],
								scale: .91,
							},
						},
					},
				},
				on: {
					slideChange: function (swiper) {
						swiper.$el.closest('.tab_content').find('.thumbs .img').forEach(element => element.classList.remove('active'))

						swiper.$el.closest('.tab_content').find('.thumbs .item')[swiper.realIndex].querySelector('.img').classList.add('active')
					}
				}
			})
		}
	}

	document.querySelectorAll('.product_info .tab_content').forEach(function(elem, indexBig){
		elem.querySelectorAll('.thumbs .img').forEach(function(el, index){
			el.addEventListener("click", function(e){
				e.preventDefault()

				if( !this.classList.contains('active') ) {
					elem.querySelectorAll('.img').forEach(element => element.classList.remove('active'))

					el.classList.add('active')

					$productSwiper[indexBig].slideToLoop(index)
				}
			})
		})
	})
}

function getElementIndex(node) {
    var index = 0;
    while ( (node = node.previousElementSibling) ) {
        index++;
    }
    return index;
}

function initSlider() {
	// Reviews
	if (document.querySelectorAll(".reviews .slider").length) {
		new Swiper('.reviews .slider', {
			spaceBetween: 40,
			slidesPerView: 'auto',
			loop: false,
			speed: 750,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					freeMode: true,
				},
				'480': {
					spaceBetween: 20,
					freeMode: true,
				},
				'768': {
					spaceBetween: 30,
					freeMode: true,
				},
				'1025': {
					spaceBetween: 40,
					freeMode: false,
				},
			},
			on: {
				init: function (swiper) {
					if (!swiper.$el.find('.swiper-wrap').length) {
						// Обертка тела слайдера
						let tables = swiper.$el.find('.swiper-wrapper'),
						length = tables.length,
						i, wrapper;

						for (i = 0; i < length; i++) {
							wrapper = document.createElement('div');
							wrapper.setAttribute('class', 'swiper-wrap');
							tables[i].parentNode.insertBefore(wrapper, tables[i]);
							wrapper.appendChild(tables[i]);
						}
					}

					// Выравнивание высоты
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'})
					swiper.$el.find('.slide .text').each( function() {this.style.height = 'auto'})

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') )
						setHeight( swiper.$el.find('.slide .text') )
					}, 200)
				},
				resize: function (swiper) {
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'})
					swiper.$el.find('.slide .text').each( function() {this.style.height = 'auto'})

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') )
						setHeight( swiper.$el.find('.slide .text') )
					}, 200)
				}
			}
		})
	}


	// Additional Reviews
	if (document.querySelectorAll(".additional_reviews .slider").length) {
		new Swiper('.additional_reviews .slider', {
			spaceBetween: 40,
			slidesPerView: 'auto',
			preloadImages: true,
			loop: true,
			speed: 750,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					freeMode: true,
				},
				'480': {
					spaceBetween: 15,
					freeMode: true,
				},
				'768': {
					spaceBetween: 30,
					freeMode: true,
				},
				'1025': {
					spaceBetween: 40,
					freeMode: false,
				},
			},
			on: {
				init: function (swiper) {
					if (!swiper.$el.find('.swiper-wrap').length) {
						// Обертка тела слайдера
						let tables = swiper.$el.find('.swiper-wrapper'),
						length = tables.length,
						i, wrapper;

						for (i = 0; i < length; i++) {
							wrapper = document.createElement('div');
							wrapper.setAttribute('class', 'swiper-wrap');
							tables[i].parentNode.insertBefore(wrapper, tables[i]);
							wrapper.appendChild(tables[i]);
						}
					}

					// Выравнивание высоты
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'})
					swiper.$el.find('.slide .box').each( function() {this.style.height = 'auto'})

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') )
						setHeight( swiper.$el.find('.slide .box') )
					}, 200)
				},
				resize: function (swiper) {
					swiper.$el.find('.slide').each( function() {this.style.height = 'auto'})
					swiper.$el.find('.slide .box').each( function() {this.style.height = 'auto'})

					setTimeout(function(){
						setHeight( swiper.$el.find('.slide') )
						setHeight( swiper.$el.find('.slide .box') )
					}, 200)
				}
			}
		})
	}
}

initSlider()

mainSliderInit()


window.addEventListener( 'resize', function () {
	mainSliderInit()
})

// Set links
var price = 48.00;
var discountPrice = 68.00;
var price2 = 56.00;
var discountPrice2 = 68.00;
const link = 'order.stronewallet.com';
const discounts = {
	1: 1,
	2: 0.9,
	3: 0.85,
	4: 0.8,
}

document.querySelectorAll("[data-price]").forEach((element) => {
    element.innerHTML = "$" + price.toFixed(2)
})

document.querySelectorAll("[data-price2]").forEach((element) => {
    element.innerHTML = "$" + price2.toFixed(2)
})

document.querySelectorAll("[data-discount-price]").forEach((element) => {
    element.innerHTML = "$" + discountPrice.toFixed(2)
})

document.querySelectorAll("[data-discount-price2]").forEach((element) => {
    element.innerHTML = "$" + discountPrice2.toFixed(2)
})

const setLink = () => {
	let dataId = document.querySelector('input[name="color"]').getAttribute('data-id');
	let dataAmount = 1;
	let dataAmount2 = 1;

	document.querySelectorAll('input[name="color"]:checked').forEach((item, itemIndex) => {
		dataId = item.getAttribute('data-id')
	});

	document.querySelectorAll('input[name="color2"]:checked').forEach((item, itemIndex) => {
		dataId2 = item.getAttribute('data-id')
	});

	document.querySelectorAll('input[name="amount"]').forEach((item, itemIndex) => {
		dataAmount = item.value
	});

	document.querySelectorAll('input[name="amount2"]').forEach((item, itemIndex) => {
		dataAmount2 = item.value
	});

	var discountCoff = 1;

	if (dataAmount in discounts) {
		discountCoff = discounts[dataAmount]
	} else if (dataAmount > Object.keys(discounts).length) {
		discountCoff = discounts[Object.keys(discounts).length]
	}

	var newPrice = dataAmount * discountPrice;
	var newPrice2 = dataAmount2 * discountPrice2;
	var newDiscountPrice = dataAmount * price * discountCoff;
	var newDiscountPrice2 = dataAmount2 * price2 * discountCoff;

	document.querySelectorAll(".product_info [data-price]").forEach((element) => {
	    element.innerHTML = "$" + newPrice.toFixed(2)
	})

	document.querySelectorAll(".product_info [data-price2]").forEach((element) => {
	    element.innerHTML = "$" + newPrice2.toFixed(2)
	})

	document.querySelectorAll(".product_info [data-discount-price]").forEach((element) => {
	    element.innerHTML = "$" + newDiscountPrice.toFixed(2)
	})

	document.querySelectorAll(".product_info [data-discount-price2]").forEach((element) => {
	    element.innerHTML = "$" + newDiscountPrice2.toFixed(2)
	})


	const productBtn = document.querySelector('.checkout-btn');
	const productBtn2 = document.querySelector('.checkout-btn2');
	productBtn.setAttribute('href', `https://${link}/cart/${dataId}:${dataAmount}/`);
	productBtn2.setAttribute('href', `https://${link}/cart/${dataId2}:${dataAmount2}/`);
}

document.querySelectorAll('input[name="color"], input[name="color2"], input[name="amount"], input[name="amount2"]').forEach((input) => {
	input.onchange = (item) => {
		setLink()
    };
});

setTimeout(function () {
	setLink();
}, 1000);