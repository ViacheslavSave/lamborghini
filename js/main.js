const menuBtn = document.querySelector(".menu-btn");
const menumobile = document.querySelector(".menu-mobile");
menuBtn.addEventListener("click", () => {
	menumobile.classList.toggle("menu-mobile--open");
});
const swiper = new Swiper(".swiper", {
	// Optional parameters
	// direction: 'vertical',

	loop: true,

	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		768: { slidesPerView: 2, spaceBetween: 20 },
	},

	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});
let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 37.23187567541787, lng: -8.628350681588447 },
		zoom: 8,
		styles: [
			{
				featureType: "administrative",
				elementType: "all",
				stylers: [
					{
						saturation: "-100",
					},
				],
			},
			{
				featureType: "administrative.province",
				elementType: "all",
				stylers: [
					{
						visibility: "off",
					},
				],
			},
			{
				featureType: "landscape",
				elementType: "all",
				stylers: [
					{
						saturation: -100,
					},
					{
						lightness: 65,
					},
					{
						visibility: "on",
					},
				],
			},
			{
				featureType: "poi",
				elementType: "all",
				stylers: [
					{
						saturation: -100,
					},
					{
						lightness: "50",
					},
					{
						visibility: "simplified",
					},
				],
			},
			{
				featureType: "road",
				elementType: "all",
				stylers: [
					{
						saturation: "-100",
					},
				],
			},
			{
				featureType: "road.highway",
				elementType: "all",
				stylers: [
					{
						visibility: "simplified",
					},
				],
			},
			{
				featureType: "road.arterial",
				elementType: "all",
				stylers: [
					{
						lightness: "30",
					},
				],
			},
			{
				featureType: "road.local",
				elementType: "all",
				stylers: [
					{
						lightness: "40",
					},
				],
			},
			{
				featureType: "transit",
				elementType: "all",
				stylers: [
					{
						saturation: -100,
					},
					{
						visibility: "simplified",
					},
				],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						hue: "#ffff00",
					},
					{
						lightness: -25,
					},
					{
						saturation: -97,
					},
				],
			},
			{
				featureType: "water",
				elementType: "labels",
				stylers: [
					{
						lightness: -25,
					},
					{
						saturation: -100,
					},
				],
			},
		],
	});
}

window.initMap = initMap;
