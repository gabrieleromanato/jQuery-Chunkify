/** @name jQuery Chunkify
 * 
 * @version 1.0
 * @author Gabriele Romanato <http://gabrieleromanato.com>
 * @requires jQuery 1.5+
 * 
 * @description Splits the text of an element into chunks and
 * return them as HTML elements
 * 
 * Usage: $(element).chunkify(options);
 * 
 */


(function($) {

$.fn.chunkify = function(options) {

		var that = this;
        
                
        $.fn.chunkify.settings = {
        	separator: /\s/,
        	wrapper: 'span',
        	klass: 'chunk'
        };
        
        options = $.extend($.fn.chunkify.settings, options);

		
		
		
		
		return that.each(function() {
		
		    var num = 0;
		    var text = that.text();
		    
		    var parts = text.split(options.separator);
		    var html = '';
		    
		    for(var i=0; i<parts.length; i++) {
		    
		        num++;
		        
		        var part = parts[i];
		        
		        html += '<' + options.wrapper + ' class="' + options.klass + num + '">' + part + '</' + options.wrapper + '> ';
		    
		    
		    }
		    
		    that.html(html);
		
		}); 
	
	
   };
	
	
	
})(jQuery);
