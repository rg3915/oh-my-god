(function(){
<<<<<<< HEAD
    angular.module('truncate')
        .filter('splitcharacters', function() {
            return function (input, chars) {
                if (isNaN(chars)) return input;
                if (chars <= 0) return '';
                if (input && input.length > chars) {
                    var prefix = input.substring(0, chars/2);
                    var postfix = input.substring(input.length-chars/2, input.length);
                    return prefix + '...' + postfix;
                }
                return input;
            };
        })
=======
	angular.module('truncate')
		.filter('splitcharacters', function() {
	        return function (input, chars) {
	            if (isNaN(chars)) return input;
	            if (chars <= 0) return '';
	            if (input && input.length > chars) {
	                var prefix = input.substring(0, chars/2);
	                var postfix = input.substring(input.length-chars/2, input.length);
	                return prefix + '...' + postfix;
	            }
	            return input;
	        };
	    })
>>>>>>> b9fef357cb2dac113685eaf24d9c9264e03a0ba4
}());