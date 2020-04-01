exports.notFound = (req, res) => {
    res.render('notFound', {
        'title': 'Page Not Found',
        'body': '404 Error'
    });
}