# Analyzer

## Prerequisite
- Node.js v8.5.0

## Installation
To install the application, please navigate to project directory and run:

```bash
npm install
```

## Running

To start the API server, please run:
```
npm start
```

Here is the example URL analyzing `https://www.wpi.edu`:

```
http://localhost:3000/https%3A%2F%2Fwww.wpi.edu/technologies
```

Here is the example json output:
```json
[
   {
      "name":"Drupal",
      "version":"7",
      "icon":"Drupal.png",
      "website":"http://drupal.org"
   },
   {
      "name":"Google Tag Manager",
      "version":"",
      "icon":"Google Tag Manager.png",
      "website":"http://www.google.com/tagmanager"
   },
   {
      "name":"IBM WebSphere Commerce",
      "version":"",
      "icon":"IBM.svg",
      "website":"http://ibm.com/software/genservers/commerceproductline"
   },
   {
      "name":"Nginx",
      "version":"",
      "icon":"Nginx.svg",
      "website":"http://nginx.org/en"
   },
   {
      "name":"Varnish",
      "version":"",
      "icon":"Varnish.svg",
      "website":"http://www.varnish-cache.org"
   },
   {
      "name":"ZURB Foundation",
      "version":"",
      "icon":"ZURB Foundation.png",
      "website":"http://foundation.zurb.com"
   },
   {
      "name":"jQuery",
      "version":"1.10.2",
      "icon":"jQuery.svg",
      "website":"https://jquery.com"
   },
   {
      "name":"PHP",
      "version":"",
      "icon":"PHP.svg",
      "website":"http://php.net"
   },
   {
      "name":"Java",
      "version":"",
      "icon":"Java.png",
      "website":"http://java.com"
   }
]
```

## Available Options

Here are the available options for the analyzer:

- delay: Wait for ms milliseconds between requests.
- maxDepth: Don't analyse pages more than num levels deep.
- maxUrls: Exit when num URLs have been analysed.
- maxWait: Wait no more than ms milliseconds for page resources to load.
- recursive:  Follow links on pages (crawler).
- userAgent: Set the user agent string.

Here is a example specifying options in the URL:

```
http://localhost:3000/https%3A%2F%2Fwww.wpi.edu/technologies?maxDepth=2
```

## Authors

- [Yang Liu](https://github.com/byliuyang) - **Initial works**

## License

This project is maintained under MIT license.