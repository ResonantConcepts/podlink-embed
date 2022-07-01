# podlink-embed
Enrich podlinks on your site with a customizable modal.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="demo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="demo-light.png">
  <img alt="demo image" src="demo-light.png">
</picture>

## Features
* Replaces all links to [pod.link](https://pod.link) with modals
* Allows visitors to save their preferred app and skip the modal
* Passes URL parameters, allowing sites to participate in the [Apple Partner Program](https://performance-partners.apple.com/)

## Installation
Include the following script on all pages of your site with links to [pod.link](https://pod.link)
```
<script src="https://podlink-embed.netlify.app/embed.bundle.js"></script>
```

## Methods
### exclude
If you would like to remove some badges from appearing in the modal for a link, list them within a `data-exclude` attribute seperated by commas.
```
<a href="https://pod.link/vergecast" data-exclude="apple,spotify,google,overcast,podcastaddict,pocketcasts,castbox,stitcher,iheartradio,playerfm,castro,radiopublic,rss">Listen Now</a>
```

### override
If you would like to include a badge but podlink is redirecting to the wrong URL for a platform, you can use the `data-override` attribute to provide some JSON and override the default redirect.
```
<a href="https://pod.link/vergecast" data-override='{
  "overcast":"overcast://x-callback-url/add?url=https://feeds.megaphone.fm/vergecast",
  "radiopublic":"https://radiopublic.com/Vergecast"
}'>Listen Now</a>
```
