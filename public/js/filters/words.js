(function(){
<<<<<<< HEAD
    angular.module('truncate')
        .filter('words', function () {
            return function (input, words) {
                if (isNaN(words)) return input;
                if (words <= 0) return '';
                if (input) {
                    var inputWords = input.split(/\s+/);
                    if (inputWords.length > words) {
                        input = inputWords.slice(0, words).join(' ') + '…';
                    }
                }
                return input;
            };
        });
=======
	angular.module('truncate')
		 .filter('words', function () {
	        return function (input, words) {
	            if (isNaN(words)) return input;
	            if (words <= 0) return '';
	            if (input) {
	                var inputWords = input.split(/\s+/);
	                if (inputWords.length > words) {
	                    input = inputWords.slice(0, words).join(' ') + '…';
	                }
	            }
	            return input;
	        };
	    });

>>>>>>> b9fef357cb2dac113685eaf24d9c9264e03a0ba4
}());