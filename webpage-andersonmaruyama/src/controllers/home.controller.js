const homeController = {
    loadHome: async(req, res) => {
        try {
            res.status(200).render("home")
        } catch (error) {
            res.status(500).render("error-page" )
        }
    }
}

module.exports = homeController