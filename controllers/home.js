exports.homePage = (req, res) => {
    res.render('home', {
        'title': 'Welcome To Story Books',
        'body': 'Get Ready To Write!'
    });
}