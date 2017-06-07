module.exports = {

    anonymousObject: function(parent, selector, length) {
        parent.waitForElementVisible(selector, 500)
            .setValue(selector, this.randomTextInput(length));
    },

	randomTextInput: function(length, isLowercase) {

		var randomString = '';
    	var possible = "abcdefghijklmnopqrstuvwxyz";

    	if (length == null ) {
    		length = 6;
    	};

    	if (isLowercase == null) {
    		isLowercase = false;
    	};

    	if (!isLowercase) {
    		possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    	};

    	for( var i = 0; i < length; i++ ) {
        	randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    	}

		// console.log("randomTextInput");
		return randomString;
	},

	randomNumberInput: function(length) {

		var randomString = '';
    	var possible = "0123456789";

    	if (length == null ) {
    		length = 6;
    	};

    	for( var i=0; i < length; i++ ) {
        	randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    	}

		// console.log("randomNumberInput");
		return randomString;
	},

    randomTextWithNumberInput: function(length) {
        var randomString = '';
        var possible = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (length == null ) {
            length = 6;
        };

        for( var i=0; i < length; i++ ) {
            randomString += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return randomString;
    },

    randomNegativeNumberInput: function(lenght) {
        var randomString = '';
        var possible = "0123456789";

        if (length == null ) {
            length = 6;
        };
        randomString += "-";

        for( var i=0; i < length-1; i++ ) {
            randomString += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        // console.log("randomNumberInput");
        return randomString;
        
    },

	randomSpecialCharacterInput: function(length) {
		var randomString = '';
    	var possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

    	if (length == null ) {
    		length = 6;
    	};

    	for( var i=0; i < length; i++ ) {
        	randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    	}

		// console.log("randomSpecialCharacterInput");
		return randomString;
	},

	randomExtraCharacterInput: function(length) {
		var randomString = '';
    	var possible = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™";

    	if (length == null ) {
    		length = 6;
    	};

    	for( var i=0; i < length; i++ ) {
        	randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    	}

		// console.log("randomExtraCharacterInput");
		return randomString;
	},

    randomEmailInput: function(length1, length2) {
        var randomString = '';
        if (length1 == null ) {
            length1 = 6;
        };

        if (length2 == null ) {
            length2 = 6;
        };

        var possible = "0123456789abcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < length1; i++ ) {
            randomString += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        randomString += "@";

        for( var j=0; j < length2; j++ ) {
            randomString += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        randomString += ".com"

        return randomString;
    },

    calculateAge: function (dateString) {
        var age = 0;
        if (dateString != null) {
            var array_date = dateString.split("/");
            var birth_month = array_date[0];
            var birth_day = array_date[1];
            var birth_year = array_date[2];

            today_date = new Date();
            today_year = today_date.getFullYear();
            today_month = today_date.getMonth();
            today_day = today_date.getDate();
            age = today_year - birth_year;

            if ( today_month < (birth_month - 1))
            {
                age--;
            }
            if (((birth_month - 1) == today_month) && (today_day < birth_day))
            {
                age--;
            }
        };
        return age;
    }

}