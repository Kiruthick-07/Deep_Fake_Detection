const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const previewImage = document.getElementById('preview-image');
const uploadStatus = document.getElementById('upload-status');

let uploadedPhoto = null;

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file.type.includes('image/')) {
        alert('Only images are allowed!');
        return;
    }
    previewImage.src = URL.createObjectURL(file);
    uploadedPhoto = file;
});

submitBtn.addEventListener('click', () => {
    if (uploadedPhoto) {
        const formData = new FormData();
        formData.append('photo', uploadedPhoto);
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            uploadStatus.textContent = data.message;
        })
        .catch((err) => {
            console.error(err);
            uploadStatus.textContent = 'Error uploading photo';
        });
    } else {
        alert('Please select a file!');
    }
});