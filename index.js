const photoInput = document.getElementById('photo-input');
const submitBtn = document.getElementById('submit-btn');
const photoContainer = document.querySelector('.photo-container');
photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                photoContainer.innerHTML = '';
                photoContainer.appendChild(img);
                console.log('Photo uploaded successfully');
            };
        };
        reader.readAsDataURL(file);
    }
});
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            console.log('Photo uploaded successfully');
        };
        reader.readAsDataURL(file);
    }
});
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}