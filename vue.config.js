// const registerRouter = require('./backend/router')

module.exports = {
    css: {
		loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/mixin.scss";
                    @import "@/assets/scss/variable.scss";
                `
            }
		}
	},

}
