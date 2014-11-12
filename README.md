OpenCalifornia
========================

OpenCalifornia is a coalition of Code for America brigades in California.

## About this Project
We're crowdsourcing the status of state agency open data practices. The State of California currently lacks a coordinated and strategic open data strategy. However, there are pockets of activity whereby some departments are publishing their datasets in machine-readable formats. This project exists to track that progress.

## How You Can Help
Pull requests welcome! The primary task at hand is to assess each agency listed in the [data.json](https://github.com/opencalifornia/opencalifornia.github.io/blob/master/js/data.json) file.

```
{
  "name"        :  "Department of Education",
  "agency"      :  "Constitutional Office",
  "url"         :  "http://www.cde.ca.gov/index.asp",
  "publish"     :  "null",
  "structure"   :  "null",
  "portal"      :  "null",
  "api"         :  "null"
},
```
*should be:*

```
{
  "name"        :  "Department of Education",
  "agency"      :  "Constitutional Office",
  "url"         :  "http://www.cde.ca.gov/index.asp",
  "publish"     :  "yes",
  "structure"   :  "yes",
  "portal"      :  "sorta",
  "api"         :  "no"
},
```

If there's no URL included, you'll need to use a search engine to find the department's website.

#### Metadata

##### Ratings

key | value
--- | ---
**publish** | Does the department publish data?
**structure** | Is the data structured? Structured formats include those that can be opened in spreadsheets or databases. Hint: PDF is **not** a structured format.
**portal** | Does the department have an open portal that intuitively organizes its different datasets? Does the portal include rich metadata that make the dataset meaningful to developers?
**api** | Does the portal allow developers to consume data via an application programming interface (API)? Is the API [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer)?

##### Definitions

key | value
--- | ---
**yes** | Yes. Absolutely. Totally.
**sorta** | Hmmmmm... it's hard to say. It looks like someone made a decent attempt at this, but there's definitely room for improvement.
**no** | No means no.

That's it. Too confusing? [Open an issue](https://github.com/opencalifornia/opencalifornia.github.io/issues) instead.

## Developing Locally
If you decide to pull down this repo, you'll need to use Firefox or Safari to preview changes. Chrome's [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) will prevent you from consuming the data.json file. Otherwise, this is just static html with some AngularJS.

This is in very early development. If you plan on adding major features or changing the data schema, please give us a heads-up by opening an [issue](https://github.com/opencalifornia/opencalifornia.github.io/issues).
