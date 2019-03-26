    $(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $('#instructions li:first-child').click(function(){
        $('#content').css('font-size', '1.2em')
    })
    })
    
    /* On click: Decrease the font size (80%) */
    $('#instructions li:nth-child(2)').click(function(){
        $('#content').css('font-size', '0.8em')
    })
    
    /* On click: Bold or normalize the green words */
    $('#instructions li:nth-child(3)').click(function(){
        $('.green').toggleClass('bold')
    })
    
    /* On click: Underline or normalize the red words */
    $('#instructions li:nth-child(4)').click(function(){
        $('.red').css('text-decoration','underline')
        $(this).click(function(){
            $('.red').css('text-decoration','none')
        })
    })

    /* On click: Replace the logo with another image */
    $('#instructions li:nth-child(5)').mouseover(function(){
        $('img').attr('src','images/koala.jpg');
    })
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */

    /* $('a').hover(function() {
        $(this).css('cursor','pointer').attr('title', 'This is a hover text.');
    }, function() {
        $(this).css('cursor','auto');
    }) */
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $('#instructions li:last-child').click(function(){
        $('h2:first').prepend('Chapter 1:')
        $('h2:nth-child(5)').prepend('Chapter 2:')
    })
