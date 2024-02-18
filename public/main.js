function getLoginForm(id) {
    const element = document.getElementById('pop-up-form');
    console.log((element));
    const viewDetails = document.getElementById('view-details');
    viewDetails.style.backgroundColor = 'black';
    viewDetails.style.backdropFilter = 'blur(5px)';
    viewDetails.style.display = 'none';
    element.style.display = 'block';
}