import { Project } from "./project.module";

export const PROJECTS: Project[] = [
  // app 1
  {
    title: "PEAN Stack",
    svgPath1: "../assets/svgs/postgresql.svg",
    svgPath2: "../assets/svgs/expressjs.svg",
    svgPath3: "../assets/svgs/angular.svg",
    svgPath4: "../assets/svgs/nodejs.svg",
    svgPath5: "../assets/svgs/pie_chart.svg",
    summary: `A dashboard of 8 components that display data from an SQL database & external APIs. The objective was to display data from a PostgreSQL backend database using Google Charts & to demonstrate Angular/reactive programming best practices in accessing REST API data, including separating http calls into separate services, using observables with API interface models to subscribe to the data via pipe(take(1)) operators and correct error handling.

All pages are fully responsive. A Bootstrap responsive nav bar is used that changes to a burger menu with collapsible top menu on medium and smaller-sized screens. The component page name is displayed in the nav bar when the component is active.

HTML pages have meta tags in the header to describe the page content using metadata. This is to optimise searches by search engines (SEO) and is part of the Google Lighthouse automated testing tool.`,
    images: [
      {
        src: "../assets/images/apiDashboard/apiDash-home.jpg",
        page: "Home Page",
        content:
          "A grid of 8 Bootstrap cards is displayed, with changes to box shadow and cursor when the user hovers over each card. Angular flex-layout is used to make the grid fully responsive. The template uses an *ngFor loop and data-binding to display the page data for each card from an array in the typescript file. Clicking on a card will route the user to that page.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-nasa.jpg",
        page: "NASA Page",
        content:
          "The NASA API Astronomy Picture of the Day (APOD) is displayed. No date is added into the HTTP request so the API defaults to today's date. The response can be a HD image or a video. The video function required the 'Safe Pipe' npm module in order to work. The footer includes the date the image/video was taken and a credit to the author",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-crypto.jpg",
        page: "Cryptocurrency Page",
        content:
          "Price data for 19 cryptocurrencies from the CryptoCompare API is displayed in a responsive table. The crytocurrency symbols are stored in a SVG library in the assets folder. Prices are shown in euro and this is specified in the API http request url. The currency data-binding uses the Angular currency pipe",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-map.jpg",
        page: "Map Page",
        content:
          "The user location is obtained from a location service based on the ipapi.co API. Latitude and longitude coordinates are used in the Leaflet open-source JavaScript maps library that is based on the OpenstreetMap map of the world. A preset zoom level of 13 is used but this can be adjusted by the user.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-news.jpg",
        page: "News Page",
        content:
          "News data is obtained from the New York Times (NYT) News API. Each Bootstrap News card shows an image with title and content. There is a footer that shows the date of the article as '..ago' via a custom 'date-convert' pipe based on the Day.js minimalist JavaScript library. There is also a hyper-link to the original NYT article.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-charts.jpg",
        page: "Google Charts Page",
        content:
          "Bootstrap accordian-style collapsible cards are used to display data from a PostgreSQL database using Google line, pie, gauge (3 gauges shown), table and bar-charts. All charts have their own components. Only one card is displayed at a time - clicking on one will collapse the previous one.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-books.jpg",
        page: "Google Books Page",
        content:
          "Books matching the user input are obtained from the Google Books API and shown as a responsive grid of book images. Clicking on a book image routes the user to a detail page that displays more information from the API data. Windows SessionStorage is used to store the API book data so that when navigating back to the searched list the original API response data is displayed rather than repeating the http request.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-bestsellers.jpg",
        page: "NYT Bestsellers Page",
        content:
          "Current data on bestsellers in 18 categories is obtained from the New York Times (NYT) Books API. Each Bootstrap card shows the category and an image of the bestseller. Clicking on a card routes the user to a detail page that displays more information from the API data.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-bestsellers-detail.jpg",
        page: "NYT Bestsellers Detail Page",
        content:
          "Details of the bestseller are displayed in a row of 2 columns, split 4:8. Only the ISBN13 number is displayed, not the older ISBN 10-digit number. Bootstrap badges are used to highlight ranking and weeks on list values. There are buttons to return to the bestseller list via the Angular Location back function and to see the bestseller Amazon page via hyperlink",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-github.jpg",
        page: "Github Page",
        content:
          "A profile matching the username inputted by the user is displayed from the Github API. This includes user profile image, location, bio, number of repositories, joined date (using the custom dateConvert pipe) & following/ follower numbers. My own Github data is shown on page initialisation. A Clear button clears current Github user data. Buttons reroute to a user repository page and the Github profile page.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-github-repos.jpg",
        page: "Github Repos Page",
        content:
          "A list of the user repositories is displayed using bootstrap cards. Data includes repo name, description, updated date (using the custom dateConvert pipe), languages, forks, number of repo viewers and a link to the Github repo. My own repo data is shown if the user has not previously entered a username. Buttons reroute the user back to the user page and to a Github signup page.",
      },
      {
        src: "../assets/images/apiDashboard/apiDash-appinfo.jpg",
        page: "App Info Page",
        content:
          "Bootstrap accordian-style collapsible cards are used to display information on each of the 8 components. Only one card is displayed at a time - clicking on one will collapse the other one. Cards include hyperlinks to the APIs used.",
      },
    ],
    github: "https://github.com/AndrewJBateman/pean-stack-api-display",
    url: "https://angular-rest-apis.firebaseapp.com/",
  },
  // app 2
  {
    title: "This Website",
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/material.svg",
    svgPath3: "../assets/svgs/firebase.svg",
    summary: `Angular Material components are used to display my technical information. A Google Cloud Firestore NoSQL database stores the blog posts and data from submitted Contact forms. Anyone can Read the blog posts. Angularfire-lite was used as a Firebase API wrapper as it is easy to use and lightweight, so reducing Vendor bundle size and improving the Chrome Lighthouse score.

I wanted to minimise time spent on styling and layout so I could focus on technical content. However presenting the content clearly and fully-responsively is also very important so I have made great use of Angular Material mat-cards. The Angular Flex Layout API was used to create a responsive row of columns. This means content such as mat-cards regroup neatly as the screen width is reduced to mobile (xs) size; max-width: 599px.

Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github menu links and I have avoided adding bloat by importing the Bootstrap library. I have followed Don\'t Repeat Yourself (DRY) rules, so data for the Home, Skills and Projects pages was created in separate typescript files (based on a model class) with 1-way data-binding to a *ngFor mat-card loop in the template so html template files are kept short.`,
    images: [
      {
        src: "../assets/images/thisWebsite/home-pc.jpg",
        page: "Home Page",
        content:
          "Github repo data fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable. Wikipedia links open in separate pages. Mat-cards used to show a brief history of my travels in engineering, programming and IT",
      },
      {
        src: "../assets/images/thisWebsite/projects-page.jpg",
        page: "Projects Page",
        content:
          "Mat-cards display project data using data-binding from an array of projects based on a Project model. Cards sized so up to 2 will show on a row before wrapping to the next line. Footer includes buttons to: navigate to Project-detail page with more info, navigate to github page & open app in browser.",
      },
      {
        src: "../assets/images/thisWebsite/skills-page.jpg",
        page: "Skills Page",
        content:
          "Mat-cards display programming and engineering skills data using data-binding from an array of skills based on a Skill model. Cards sized so up to 4 will show on a row before wrapping to the next line.",
      },
      {
        src: "../assets/images/thisWebsite/contact-page.jpg",
        page: "Contacts Page",
        content:
          "Uses a mat-card inside a form with inputs with 2-way data-binding for name, email and message. The send button is disabled until all 3 user inputs are validated. When the user clicks the send button the data is sent to the app Firestore database collection and the image changes to say Thanks.",
      },
      {
        src: "../assets/images/thisWebsite/blog-page.jpg",
        page: "Blog Page",
        content:
          "Mat-cards display posts using data-binding from an array of posts based on a Post model. A custom pipe, using the day.js javascript library, converts the Firestore database UTC Epoch time Timestamp string to say 2 days ago etc. Another custom pipe calculates reading time based on content length.",
      },
      {
        src: "../assets/images/thisWebsite/notfound-page.jpg",
        page: "Not Found Page",
        content:
          "In the event of the user trying to route to any page address that is not listed in the router-module a single Mat-card will display a message to the user. There is a simple button to reroute the user to the Home page.",
      },
    ],
    github: "https://github.com/AndrewJBateman/angular-material-portfolio",
    url: "https://angular-blog-14cef.web.app/home",
  },
  // app 3
  {
    title: "News App",
    svgPath1: "../assets/svgs/ionic.svg",
    svgPath2: "../assets/svgs/angular.svg",
    svgPath3: "../assets/svgs/news.svg",
    summary: `Articles are fetched from a news API. The News API dev version only works in localhost and on Android Studio. As of May 2020 the API returns a CORS 406 error to non-dev front-ends unless a monthly API subscription is payed. Hence I decided not to deploy this app. Features include:
* Typescript interface used to define the expected structure of the json object returned from the news API.
* Separate providers (services) page with API http fetch functions.
* Custom pipes used to modify API news article titles, contents and derive '..time ago' from a Univsal Time Constant (UTC) date string.
* Dark mode switch on menu changes from light to dark mode.
* Offline Storage of favourite articles, dark-mode & language settings using Ionic Storage.
* Common Refresh Component: dragging down on a page will perform refresh function.
* Common Progess Bar Component ion-card shown while news loading on News, Categories and Favourites pages.
* Localisation using i18n so user can select between English (default), Spanish and French.`,
    images: [
      {
        src: "../assets/images/newsApp/newsapp-news.jpg",
        page: "News Page",
        content:
          "News articles listed using a list of ion-cards. Clicking on a card will redirect the user to a news-detail page. Ion-select is used to show a list of news sources as a drop-down action-sheet with cancel button.",
      },
      {
        src: "../assets/images/newsApp/newsapp-newsdetail.jpg",
        page: "News Detail Page",
        content:
          "News article detail is shown using an ion-card with an author credit below (if there is one). Footer has links to the original article and an option to save as a Favourite.",
      },
      {
        src: "../assets/images/newsApp/newsapp-categories.jpg",
        page: "Categories Page",
        content:
          "Ion-segment used to show categories in a scrollable horizontal menu: Sport, Busines, Health, Technology, Science, General, Entertainment. Shows time as '... ago'. Title has news source and text removed using a custom Angular pipe as I show this information in the top toolbar.",
      },
      {
        src: "../assets/images/newsApp/newsapp-favourites.jpg",
        page: "Favourites Page",
        content:
          "Saved articles are listed in reverse date-time order using a list of ion-cards. Sliding from the right deletes the favourite card from the stored array. An Unsplash image is shown, with credit to the author if there are no favourites stored using the Angular *ngIf structural directive.",
      },
      {
        src: "../assets/images/newsApp/newsapp-about.jpg",
        page: "About Page/Side-Menu",
        content:
          "Includes popover with links to Author Website, Github Repo and a Contact Page. Unsplash image with author credit also shown. Images above include Side navigation menu, where the user can navigate to another page (menu closes automatically) or change language/dark-mode settings.",
      },
      {
        src: "../assets/images/newsApp/newsapp-dark.jpg",
        page: "Dark Mode Pages/Menu",
        content:
          "Dark mode can be activated via a toggle switch on the side menu. This setting is set in device storage until the user toggles it, however the ngInit lifecycle clears storage content so it will default to light mode.",
      },
      {
        src: "../assets/images/newsApp/newsapp-android1.jpg",
        page: "Android Studio Device Connected 1",
        content:
          "An Android build file was created and opened in Android Studio on a Windows 10 Home PC connected via USB to a Realme 5 Pro mobile running Android v10.",
      },
      {
        src: "../assets/images/newsApp/newsapp-android2.jpg",
        page: "Android Studio Device Connected 2",
        content:
          "Light and dark mode toggling and saving favourite articles in storage worked. Articles displayed and clicking on one routed to a news detail page.",
      },
      {
        src: "../assets/images/newsApp/newsapp-android3.jpg",
        page: "Android Studio Device Connected 3",
        content:
          "The top right icon opens a modal to delete all favourites. The bottom tab and side menus provide navigation between pages and the icons change colour when page active.",
      },
    ],
    github: "https://github.com/AndrewJBateman/ionic-angular-news-app",
    url: "https://github.com/AndrewJBateman/ionic-angular-news-app",
  },
  // app 4
  {
    title: "World Data App",
    svgPath1: "../assets/svgs/ionic.svg",
    svgPath2: "../assets/svgs/angular.svg",
    svgPath3: "../assets/svgs/capacitor.svg",
    summary: `Ionic-Angular app that displays information about world countries and oceans using JSON data fetched from an external API. Includes a user search field that will find all search results as the user types their search text. Page popovers are used to provide the user with links to external websites or activate functions such as delete item from favourites.

    Features include:
    * Typescript interface used to define the expected structure of the json object returned from the news API.
    * Separate providers (services) page with API http fetch functions.
    * Side menu switch to activate dark mode switch.
    * Localisation using i18n so user can select between English (default), Spanish or French language from side menu.
    * Integrated Google Maps API to show interactive country map.
    * Ion-grid with fixed column size used so content is responsive.
    `,
    images: [
      {
        src: "../assets/images/worldApp/worldapp-countries.jpg",
        page: "Countries Page",
        content:
          "Displays a list of countries, displaying country flag, title, capital and region, for 'all' and 5 region sub-categories. Clicking on a country list item will show the country detail as well as a fab icon link to Google Maps. Country searchbar to search by country name.",
      },
      {
        src: "../assets/images/worldApp/worldapp-mapmenu.jpg",
        page: "Map & Menu Pages",
        content:
          "Google maps API used to show zoomable map that is centered on the country selected. Side Menu with links to pages for countries, oceans, favorites and about pages. Language can be changed from default English to Spanish or French. Dark theme toggle + image.",
      },
      {
        src: "../assets/images/worldApp/worldapp-oceans.jpg",
        page: "Oceans Page",
        content:
          "Displays an ion-card for each ocean using data from a local json file and an *ngFor loop. Header toolbar includes popover with links to Wikipedia articles on each ocean that opens in a separate browser. It was decided not to add 'favourites functionality' as there are only 5 oceans and they are easy to find.",
      },
      {
        src: "../assets/images/worldApp/worldapp-about.jpg",
        page: "About Page",
        content:
          "Displays an Unsplash image with an author credit and short information about the app with links to the country information and Google Maps APIs used. Header includes a popover with working links that open externally to author Website, Github Repo & a Contact Form on the author's website.",
      },
    ],
    github: "https://github.com/AndrewJBateman/ionic-angular-world-data",
    url: "https://ionic-world-info.firebaseapp.com",
  },
  // app 5
  {
    title: "MEVN Stack",
    svgPath1: "../assets/svgs/mongodb.svg",
    svgPath2: "../assets/svgs/expressjs.svg",
    svgPath3: "../assets/svgs/vue.svg",
    svgPath4: "../assets/svgs/nodejs.svg",
    svgPath5: "../assets/svgs/heroku.svg",
    summary: `This app is hosted on Heroku and displays simple text notes in a grid of Bootstrap cards. It uses the MongoDB, Express, Vue & Node.js (MEVN) stack to perform Create, Read, Update and Delete (CRUD) operations. Vue is much smaller sized, simpler and easier to get start using than Angular. For such a small app I did not use Vuex state management - that will be for another Vue app.

Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model.

Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use SVG icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Note model so notes are shown in separate categories, e.g. 'work', 'hobby' or 'holiday ideas' etc.`,
    images: [
      {
        src: "../assets/images/mevn-notes/mevn-notes.jpg",
        page: "Notes Display Page",
        content:
          "The notes are displayed in a responsive grid so they wrap around nicely as the screen size changes. A simple 'Notes Hub' displays how many notes there are and includes buttons to navigate to the add note or app info. pages. Note max title length set to 23 so it shows on 1 line on a mobile screen. Note maximum content length is set to 280 characters, same as a twitter post.",
      },
      {
        src: "../assets/images/mevn-notes/mevn-create.jpg",
        page: "Create Note Page",
        content:
          "This page includes a character countdown display to show the user how many characters are left from the 280 character maximum. There are buttons to Create (save to the database), Clear both input fields and Cancel to return to the Notes List page.",
      },
      {
        src: "../assets/images/mevn-notes/mevn-edit.jpg",
        page: "Edit Note Page",
        content:
          "This page is very similar and also calculates the note body characters left. Updating a note will automatically update the date so it goes to the front of the (date-sorted) notes list.",
      },
      {
        src: "../assets/images/mevn-notes/mevn-info.jpg",
        page: "App Info. Page",
        content:
          "This page gives the user information about the app and how it works. The back button navigates the user back to the grid of notes (home) page.",
      }
    ],
    github: "https://github.com/AndrewJBateman/mevn-stack-notes",
    url: "https://mevn-stack-notes.herokuapp.com/",
  },
  // app 6
  {
    title: "Covid API Data",
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/material.svg",
    svgPath3: "../assets/svgs/covid.svg",
    svgPath4: "../assets/svgs/pie_chart.svg",
    summary: `Displays data from a Covid-19 API. Angular/reactive programming best practices were used to access REST API data. All pages are fully responsive. There is a top menu for desktop/tablet screens and a burger icon-activated side menu for phone screens. The RxJS reactive programming library is used to handle datastreams and propagation of change using observables.

Browser localStorage is used to store API data to prevent multiple GET requests for the same data. This app does not have significant performance needs so the synchronous nature of localStorage is ignored. Accessing of offline data via a Service worker/Progressive Web App (PWA) compliance was not added. HTML pages have meta tags in the header to describe the page content using metadata. This is to optimise searches by search engines (SEO) and is part of the Google Lighthouse automated testing tool.`,
    images: [
      {
        src: "../assets/images/covidApp/home.jpg",
        page: "Home Page",
        content:
          "Global data for Covid-19 cases is fetched from a coronatracker API, set in local storage then displayed on a Mat-card. The Apapi API is used to determine the user country and Covid-19 cases are also shown from that country. Global Covid-19 cases are shown on a chart using the angular-google-charts module.",
      },
      {
        src: "../assets/images/covidApp/country-list.jpg",
        page: "Country List Page",
        content:
          "Covid data is fetched from local storage and displayed using a Mat-Table of countries. Flags are obtained from the Countryflags API and data is formatted using the Angular number pipe. The HTML includes *ngIf loops to allow for inaccuracies/anomolies in the data, e.g. 'MS Zaandam' is listed the API as a country but is actually a cruise ship from the Netherlands.",
      },
      {
        src: "../assets/images/covidApp/news.jpg",
        page: "News Page",
        content:
          "Covid news data is fetched from the coronatracker API, set in localStorage then shown on Mat-cards. The Day.js npm module is used to convert the UTC format date into '... ago'. Clicking on a news card will route the user to a news detail page with the JSON data passed using angular router navigation extras.",
      },
      {
        src: "../assets/images/covidApp/charts.jpg",
        page: "Charts Page",
        content:
          "Global Covid case data is displayed by country using line and pie charts from the Angular-Google-Charts npm module. Thresholds are set to limit the data to make the charts more readable. A radio button group allows the user to choose which class of data is displayed; Confirmed, Recovered or Dead",
      },
      {
        src: "../assets/images/covidApp/about.jpg",
        page: "About Page",
        content:
          "Descriptions of the app/pages are shown in Mat-cards with useful links below. Clicking on a link will open it in a new page. To keep code DRY an *ngFor loop is used to display page information on the cards using data-binding from a separate 'pages' file.",
      },
      {
        src: "../assets/images/covidApp/contact.jpg",
        page: "Contact Page",
        content:
          "A centrally-positioned Mat-card displays author details from the Github API - no API access key is required for this. The card footer has buttons that open contact/home pages from the author's own website in separate windows.",
      },
    ],
    github: "https://github.com/AndrewJBateman/angular-data-charts",
    url: "https://angular-data-charts.web.app",
  },
  // app 7
  //   {
  //     title: "MEEN Stack Articles",
  // svgPath1: "../assets/svgs/angular.svg",
  //     summary:
  //       `This app displays articles in a grid of Bootstrap cards. It uses the MongoDB, Express, Embedded Javascript Templating (EJS) & Node.js (MEEN) stack to perform Create, Read, Update and Delete (CRUD) operations. EJS is a templating language that uses javascript to produce the HTML template markup. I wanted to see if using EJS resulted in quicker rendering.

  // Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model.

  // Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use svg icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Article model so articles are shown in separate categories, e.g. 'Engineering', 'IT' etc.`,
  //     images: [
  //       {
  //         src: "../assets/images/elecInfo.jpg",
  //         page: "Home Page",
  //         content: "",
  //       },
  //     ],
  //     github: "https://github.com/AndrewJBateman/meen-stack-articles",
  //     url: "",
  //   },
  // app 8
  /* {
    title: 'Angular Unsplash API',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Angular app to get random images from the Unsplash API',
    images: [
      {
        src: '../assets/images/unsplash.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: 'https://github.com/AndrewJBateman/angular-unsplash-api',
		url: ''
  }, */
  // app 9
  {
    title: 'Angular Tailwind Ratp',
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/tailwind.svg",
    svgPath3: "../assets/svgs/ratp.svg",
    summary: 'Displays data on commerce local to a RATP (French transport system) station, based on a user-entered postcode. Data fetched from the RATP API using Reactive Extensions Library (rxjs) methods',
    images: [
      {
        src: '../assets/images/ratpApp/home.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/ratpApp/about-contact.jpg',
        page: 'About & Contact Pages',
        content: ''
      },
      // {
      //   src: '../assets/images/ratpApp/contact.jpg',
      //   page: 'Contact Page',
      //   content: ''
      // }
    ],
		github: 'https://github.com/AndrewJBateman/angular-tailwind-ratp',
		url: ''
  },
  // app 10
  /* {
    title: 'Angular Esri ArcGIS',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Displays map data from the ArcGIS API, using the esri-loader and an Angular map creation service',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: 'https://github.com/AndrewJBateman/angular-esri-arcgis',
		url: ''
  }, */
  // app 11
  /* {
    title: 'Ionic Angular Nouvelles',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Ionic-Angular PWA to fetch French news from an API',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-nouvelles',
		url: ''
  }, */
  // app 12
  /* {
    title: 'Angular API Gouvfr',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Angular app to search for address data from the French Government official API',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-gouvfr',
		url: ''
  }, */
  // app 13
  /* {
    title: 'Python Django IcelandAPI',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Displays volcano data from an Iceland API',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: '',
		url: ''
  }, */
  // app 14
  /* {
    title: 'Python Django SomethingData',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: '',
		url: ''
  }, */
  // app 15
  /* {
    title: 'GCP App Engine something',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: '',
		url: ''
  }, */
  // app 16
  /* {
    title: 'GCP Covid database something',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
    images: [
      {
        src: '../assets/images/home.jpg',
        page: 'Home Page',
        content: ''
      },
    ],
		github: '',
		url: ''
  }, */
];
