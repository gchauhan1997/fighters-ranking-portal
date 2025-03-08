$(document).ready(function () {
    $('.fighter-slider , .slick-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
        {
                breakpoint: 1024, // Example breakpoint (desktops/laptops)
                settings: {
                    slidesToShow: 3  // Show 3 slides (your original setting)
                }
            },
            {
                breakpoint: 768, // Example breakpoint (tablets)
                settings: {
                    slidesToShow: 2 // Show 2 slides on tablets
                }
            },
            {
                breakpoint: 576, // Example breakpoint (smaller tablets/large phones)
                settings: {
                    slidesToShow: 1 // Show 1 slide on smaller screens
                }
            }
           
           
        ]
    });
});

$(document).ready(function(){
    $('.slick-slider-vs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
    });
});

// data table
$(document).ready(function() {
    var table = $('#datatable').DataTable();

    $('#search').on('keyup', function() {
        table.search(this.value).draw();
    });

    $('#filter').on('change', function() {
        var filterVal = $(this).val();
        if (filterVal === "recent") {
            table.search("hours ago").draw();
        } else {
            table.search("", true, false).draw();
        }
    });
});

// board write
 // Initialize CKEditor
 ClassicEditor
 .create(document.querySelector('#editor'))
 .catch(error => {
     console.error(error);
 });

// Handle form submission
document.getElementById('submit-btn').addEventListener('click', function () {
 const title = document.getElementById('title').value.trim();
 const editorData = document.querySelector('.ck-content').innerHTML; // Get CKEditor content
 const password = document.getElementById('password').value;

 if (title === '') {
     alert('Title is required.');
     return;
 }

 // alert('Post submitted successfully!\n\nTitle: ' + title + '\nContent: ' + editorData + '\nPassword: ' + (password ? 'Yes' : 'No Password'));
});
