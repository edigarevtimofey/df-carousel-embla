/*
slide type:
img-slide
img-bg-slide
vid-bg-slide
text-slide

slide format:
1 - 2 : 3
2 - 3 : 4
3 - 5 : 6
4 - 2.5 : 2
*/

let slides =  [
    {
        type: 'img-slide',
        link: '#',
        path: '/img/animal.jpg',
        format: '1',
        img_height: '550', // height of the image inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'img-bg-slide',
        link: '#',
        background_color: '#4A4A71',
        path: 'https://cdn.prod.website-files.com/664cb2f1b78f210eec853da1/66622243207076bdac7b1cff_1520-d.webp',
        format: '2',
        img_height: '250', // height of the image inside the slide in px
        img_width: '250',  // width of the image inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'vid-bg-slide',
        link: '#',
        background_color: '#382534',
        path: 'https://player.vimeo.com/progressive_redirect/playback/1020196648/rendition/720p/file.mp4?loc=external&signature=8d16fc1919aebcf54f1174e98a8db650efda41108694b09d1a73d47a3169c3a0',
        format: '3',
        vid_height: '300', // height of the video inside the slide in px
        vid_width: '280', //width of the video inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'img-bg-slide',
        link: '#',
        background_color: '#4A4A71',
        path: 'https://cdn.prod.website-files.com/664cb2f1b78f210eec853da1/66622243207076bdac7b1cff_1520-d.webp',
        format: '2',
        img_height: '250', // height of the image inside the slide in px
        img_width: '250',  // width of the image inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'img-slide',
        link: '#',
        path: 'https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/66aab630855cd60b2eee0bfa_Studio-02.avif',
        format: '4',
        img_height: '250', // height of the image inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'text-slide',
        link: '#',
        background_color: 'grey',
        text: 'It’s funny what can happen when you drop 100 beers in the middle of a room and stand back.',
        format: '4',
        headline: 'Hello world',
        caption: 'Hello world!',
    },
    {
        type: 'vid-bg-slide',
        link: '#',
        background_color: '#382534',
        path: 'https://player.vimeo.com/progressive_redirect/playback/1020196648/rendition/720p/file.mp4?loc=external&signature=8d16fc1919aebcf54f1174e98a8db650efda41108694b09d1a73d47a3169c3a0',
        format: '3',
        vid_height: '300', // height of the image inside the slide in px
        vid_width: '280', //width of the video inside the slide in px
        headline: 'Hello world',
        caption: 'Hello world!',
    },
];

container = document.getElementById('container');

let slider = Array(slides.length).fill(0);
let anchor = Array(slides.length).fill(0);
let panelMain = Array(slides.length).fill(0);
let panelBottom = Array(slides.length).fill(0);
let panelDiv = Array(slides.length).fill(0);
let panelDivHeadline = Array(slides.length).fill(0);
let panelDivCaption = Array(slides.length).fill(0);
let media = Array(slides.length).fill(0);
let panelMediaWrapper = Array(slides.length).fill(0);

for (let i = 0; i < slides.length; i += 1) {
    slider[i] = container.appendChild(document.createElement('div'));
    slider[i].className = 'embla__slide format' + slides[i].format;
    anchor[i] = slider[i].appendChild(document.createElement('a'));
    anchor[i].className = 'card-wrapper';
    anchor[i].href = slides[i].link;
    anchor[i].style.backgroundColor = slides[i].color;
    switch (slides[i].type) {
        case "img-slide":
            anchor[i].style.height = slides[i].img_height + "px";
            panelBottom[i] = anchor[i].appendChild(document.createElement('div'));
            panelBottom[i].className = 'panel-bottom';
            panelDiv[i] = panelBottom[i].appendChild(document.createElement('div'));
            panelDivHeadline[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivHeadline[i].className = 'slide-headline';
            panelDivHeadline[i].textContent = slides[i].headline;
            panelDivCaption[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivCaption[i].className = 'slide-caption';
            panelDivCaption[i].textContent = slides[i].caption;

            panelMain[i] = anchor[i].appendChild(document.createElement('div'));
            panelMain[i].className = 'panel-background';
            media[i] = panelMain[i].appendChild(document.createElement('img'));
            media[i].src = slides[i].path;
            media[i].className = 'slide-image';
            break;
        case "img-bg-slide":
            anchor[i].style.backgroundColor = slides[i].background_color;
            panelMain[i] = anchor[i].appendChild(document.createElement('div'));
            panelMain[i].className = 'panel-content';
            panelMediaWrapper[i] = panelMain[i].appendChild(document.createElement('div'));
            panelMediaWrapper[i].style.height = slides[i].img_height + 'px';
            panelMediaWrapper[i].style.width = slides[i].img_width + 'px';
            media[i] = panelMediaWrapper[i].appendChild(document.createElement('img'));
            media[i].src = slides[i].path;
            media[i].className = 'slide-image';

            panelBottom[i] = anchor[i].appendChild(document.createElement('div'));
            panelBottom[i].className = 'panel-bottom';
            panelDiv[i] = panelBottom[i].appendChild(document.createElement('div'));
            panelDivHeadline[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivHeadline[i].className = 'slide-headline';
            panelDivHeadline[i].textContent = slides[i].headline;
            panelDivCaption[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivCaption[i].className = 'slide-caption';
            panelDivCaption[i].textContent = slides[i].caption;
            break;
        case "vid-bg-slide":
            anchor[i].style.backgroundColor = slides[i].background_color;

            panelMain[i] = anchor[i].appendChild(document.createElement('div'));
            panelMain[i].className = 'panel-content';
            panelMediaWrapper[i] = panelMain[i].appendChild(document.createElement('div'));
            panelMediaWrapper[i].style.height = slides[i].vid_height + 'px';
            panelMediaWrapper[i].style.width = slides[i].vid_width + 'px';
            panelMediaWrapper[i].className = 'slide-video';
            media[i] = panelMediaWrapper[i].appendChild(document.createElement('video'));
            media[i].src = slides[i].path;
            media[i].className = 'slide-video-embed background-video';
            media[i].autoplay = true;
            media[i].playsInline = true;
            media[i].loop = true;
            media[i].style.objectFit = 'cover';


            panelBottom[i] = anchor[i].appendChild(document.createElement('div'));
            panelBottom[i].className = 'panel-bottom';
            panelDiv[i] = panelBottom[i].appendChild(document.createElement('div'));
            panelDivHeadline[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivHeadline[i].className = 'slide-headline';
            panelDivHeadline[i].textContent = slides[i].headline;
            panelDivCaption[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivCaption[i].className = 'slide-caption';
            panelDivCaption[i].textContent = slides[i].caption;
            break;
        case "text-slide":
            anchor[i].className = 'card-wrapper text';
            anchor[i].style.backgroundColor = slides[i].background_color;

            panelMain[i] = anchor[i].appendChild(document.createElement('div'));
            panelMain[i].className = 'panel-top';
            panelMediaWrapper[i] = panelMain[i].appendChild(document.createElement('div'));
            panelMediaWrapper[i].className = 'text-wrapper';
            media[i] = panelMediaWrapper[i].appendChild(document.createElement('div'));
            media[i].textContent = slides[i].text;
            media[i].className = 'slide-text'

            panelBottom[i] = anchor[i].appendChild(document.createElement('div'));
            panelBottom[i].className = 'panel-bottom';
            panelDiv[i] = panelBottom[i].appendChild(document.createElement('div'));
            panelDivHeadline[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivHeadline[i].className = 'slide-headline';
            panelDivHeadline[i].textContent = slides[i].headline;
            panelDivCaption[i] = panelDiv[i].appendChild(document.createElement('div'));
            panelDivCaption[i].className = 'slide-caption';
            panelDivCaption[i].textContent = slides[i].caption;
            break;
    }
}