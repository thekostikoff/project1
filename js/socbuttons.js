const vkontakte = document.querySelector('.vk');
const meta = document.querySelector('.facebook');

const vkAPI = `https://vk.com/share.php?url=https://thekostikoff.github.io/project1/ `;
const metaAPI = `https://www.facebook.com/sharer/sharer.php?u=https://thekostikoff.github.io/project1/`;

vkontakte.addEventListener('click', () => {
	window.open(url = vkAPI)
});

meta.addEventListener('click', () => {
	window.open(url = metaAPI)
});