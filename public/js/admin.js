const deleteProduct = (btn) => {
    const prodId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

    const productElement = btn.closest('article');

    fetch(`/admin/product/${prodId}`, {
        method: 'Delete',
        headers: {
            'csrf-token': csrf
        }
    }).then(result => {
        console.log(result);
    }).then(data => {
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err => {
        console.log(err);
    })
}