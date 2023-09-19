
// Select all elements that are the descendant of the node with the class '.video-list video-item', i.e., select videos and their titles.
let listVideo = document.querySelectorAll('.video-list .video-item');

// Select the first video element that descends from the node with the class '.main-video'
let mainVideo = document.querySelector('.main-video video');

//Select first element with class .mainvideo and .video__title.
let title = document.querySelector('.main-video .video__title');

listVideo.forEach(video =>{
    video.onclick = () =>{

        //Remove the 'active' class from videos when one from the list is clicked
        listVideo.forEach(videoitem => videoitem.classList.remove('active'));

        video.classList.add('active');
        if(video.classList.contains('active')){

            //Src refers to the src attribute of the first indexed element that is a child of the video element. 
            let src = video.children[0].getAttribute('src');
            
            //Then make that refer to the mainVideo's src specifically
            mainVideo.src = src;

            // Text refers to the html + text content within the first element that is a child of the video element, i.e., the content of the h3 element.
            let text = video.children[1].innerHTML;

            //Set the contents of the main video's title to the selected video's title
            title.innerHTML = text;

        };

    };
});