function loadContent() {
    $.ajax({
        url: "files.php",
        type: 'POST',
        data: 'JSON',
        success: function (Resolution) {
            resList = Resolution;
            console.log(resList);

            $.ajax({
                url: "load.php",
                dataType: 'html',
                success: function(Result){
                    $('.container').html(Result);
                    
                    $("section").each(function() {
                            url = "text/" + $(this).children("button").val().toString();
                            fetch(url)
                                .then((res) => res.text())
                                .then((text) => {
                                    $(this).children("button").text(text.split('\n')[0]);
                                        
                                    rest = text.split('\n');
                                    rest.shift();
                                    var newRest = rest.join('\n')
                                    $(this).children("blockquote").children("pre").text(newRest);
                                })
                                .catch((e) => console.error(e)); let fr = new FileReader();
                    });

                    $("button").on('click', function () {
                        thisVal = $(this).val();
                        if ($.inArray(thisVal, resList)){
                            url = "text/" + thisVal.toString();
                            fetch(url)
                                .then((res) => res.text())
                                .then((text) => {
                                    resulttext = text.split('\n');
                                    resulttext.shift();
                                    var newresult = resulttext.join('\n');
                                    navigator.clipboard.writeText(newresult); // to clipboard
                                })
                            .catch((e) => console.error(e)); let fr = new FileReader();
                        }
                    });
                }
            });
        },
        error: function (xhr, status, error) {
            console.log("AJAX request error:", error);
        }
    });
}
$(document).ready(loadContent);


        // function loadContent(){
//     $.ajax({
//         url: "files.php",
//             type: 'POST',
//             data: 'JSON',
//             success: function(Resolution) {
//                 resList = Resolution;
//                 console.log(resList);
//                 }
//             });
// }
    // $.each(txt, function(index, value){

    //     $('.container').append(`<button id="b${index}">${names[index]}</button>`); //create button
    //     url = "text/" + value.toString() + ".txt";
    //     $('.container').append(`<p id="p${index}"><embed src="${url}"></p>`)
    // });

// function copyToClipboard(value){
//     url = "text/" + value.toString() + ".txt";
//     fetch(url)
//         .then((res) => res.text())
//         .then((text) => {
//             result = text;
//             navigator.clipboard.writeText(result); // to clipboard
//         })
//     .catch((e) => console.error(e)); let fr = new FileReader();
// }

// function handleClipboardClick() {
//     $(document).on('click', 'button', function () {
//         x = parseInt($(this).attr('id').replace(/^\D+/g, ''));
        
//         $.each(txt, function(index, value){
//             if (x == index){
//                 copyToClipboard(value); // copy to clipboard
//             }
//         });
//     });
// }


// // backup

// function fetchDataAndPopulate() {
//     $.ajax({
//         url: URL_GET_HTML,
//         dataType: "html",
        
//         success: function (Result) {
//             $('.container').html(Result);
//             fetchJSONData();
//         }
//     });
// }

// function fetchJSONData() {
//     $.ajax({
//         url: URL_GET_JSON,
//         type: 'POST',
//         data: 'JSON',
        
//         success: function (Resolution) {
//             let resList = JSON.parse(Resolution);
            
//             resList.forEach((element, index) => {
//                 if (element == 1) {
//                 let nid = "#p" + (index + 1);
//                 $(nid).prop("checked", true);
//                 }
//             });
//             handleInputClick();
//         }
//     });
// }

// function handleInputClick() {
//     $(document).on('click', 'input', function () {
//         let id = parseInt($(this).attr('id').replace(/^\D+/g, ''));
//         if ($(this).prop("checked")) {
//             postVote(URL_UPVOTE, id);
//         } else {
//             postVote(URL_DOWNVOTE, id);
//         }
//     });
// }

// function postVote(url, id) {
//     $.ajax({
//         url: url,
//         type: 'POST',
//         data: { upId: id }
//     });
// }