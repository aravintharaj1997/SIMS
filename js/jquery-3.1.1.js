
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-c4ea0a21580a57091fc76df379ba40e19a614ee3bdca871a3a8a2b38d181c65d.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a20b0761ae9a52b4ed0d75922904eb8ffb5934a855914ec141ff3b2140a18b9a.css" media="all" rel="stylesheet" />


  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-b29e324b8fafaead965049ef224818ef0dccc7384b5cfcad56a56a89c33a9438.css" media="all" rel="stylesheet" />


  <meta name="viewport" content="width=device-width">

  <title>bootstrap-validator/jquery-3.1.1.js at master · 1000hz/bootstrap-validator · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


    <meta content="https://avatars2.githubusercontent.com/u/1395018?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="1000hz/bootstrap-validator" property="og:title" /><meta content="https://github.com/1000hz/bootstrap-validator" property="og:url" /><meta content="bootstrap-validator - A user-friendly HTML5 form validation jQuery plugin for Bootstrap 3" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">

  <meta name="pjax-timeout" content="1000">

  <meta name="request-id" content="6665:FFBD:2514D1C:3C01288:58CF83C9" data-pjax-transient>


  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="6665:FFBD:2514D1C:3C01288:58CF83C9" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">




      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWI4NWU3NmI1NGI2Mjk2ZjU4ZmRmM2EyYzdkNmJhMjhhOWIwNTQ0MjVjMGIyMDhjZjk5ZjMxNDI3NjQ3ZWFiYXx7InJlbW90ZV9hZGRyZXNzIjoiMTE3LjIwNi4xMTkuMzQiLCJyZXF1ZXN0X2lkIjoiNjY2NTpGRkJEOjI1MTREMUM6M0MwMTI4ODo1OENGODNDOSIsInRpbWVzdGFtcCI6MTQ4OTk5NDY5OSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="52f2bbb42365a03a7ecc7143f97b72622c78f25c">

  <meta http-equiv="x-pjax-version" content="74a3d86e6b4050c0e213539f879855ae">



  <meta name="description" content="bootstrap-validator - A user-friendly HTML5 form validation jQuery plugin for Bootstrap 3">
  <meta name="go-import" content="github.com/1000hz/bootstrap-validator git https://github.com/1000hz/bootstrap-validator.git">

  <meta content="1395018" name="octolytics-dimension-user_id" /><meta content="1000hz" name="octolytics-dimension-user_login" /><meta content="14457098" name="octolytics-dimension-repository_id" /><meta content="1000hz/bootstrap-validator" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14457098" name="octolytics-dimension-repository_network_root_id" /><meta content="1000hz/bootstrap-validator" name="octolytics-dimension-repository_network_root_nwo" />
      <link href="https://github.com/1000hz/bootstrap-validator/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-validator:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/1000hz/bootstrap-validator/blob/master/js/tests/vendor/jquery-3.1.1.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>







          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!--  --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/1000hz/bootstrap-validator/search" class="js-site-search-form" data-scoped-search-url="/1000hz/bootstrap-validator/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2F1000hz%2Fbootstrap-validator%2Fblob%2Fmaster%2Fjs%2Ftests%2Fvendor%2Fjquery-3.1.1.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">


    <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2F1000hz%2Fbootstrap-validator"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/1000hz/bootstrap-validator/watchers"
     aria-label="97 users are watching this repository">
    97
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2F1000hz%2Fbootstrap-validator"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/1000hz/bootstrap-validator/stargazers"
      aria-label="1733 users starred this repository">
      1,733
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2F1000hz%2Fbootstrap-validator"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/1000hz/bootstrap-validator/network" class="social-count"
       aria-label="824 users forked this repository">
      824
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/1000hz" class="url fn" rel="author">1000hz</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/1000hz/bootstrap-validator" data-pjax="#js-repo-pjax-container">bootstrap-validator</a></strong>

</h1>

  </div>
  <div class="container">

<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/1000hz/bootstrap-validator" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /1000hz/bootstrap-validator" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/1000hz/bootstrap-validator/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /1000hz/bootstrap-validator/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">53</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/1000hz/bootstrap-validator/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /1000hz/bootstrap-validator/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">20</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/1000hz/bootstrap-validator/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /1000hz/bootstrap-validator/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/1000hz/bootstrap-validator/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /1000hz/bootstrap-validator/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/1000hz/bootstrap-validator/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /1000hz/bootstrap-validator/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">



<a href="/1000hz/bootstrap-validator/blob/98654674893740666773ebfb62798a2611e1a7cc/js/tests/vendor/jquery-3.1.1.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c7b4643e86c0508023e30ec754af1d5b -->

<div class="file-navigation js-zeroclipboard-container">

<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"

    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/1000hz/bootstrap-validator/blob/gh-pages/js/tests/vendor/jquery-3.1.1.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/1000hz/bootstrap-validator/blob/master/js/tests/vendor/jquery-3.1.1.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.9/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.9">
                v0.11.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.8/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.8">
                v0.11.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.7/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.7">
                v0.11.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.6/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.6">
                v0.11.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.5/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.5">
                v0.11.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.4/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.4">
                v0.11.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.3/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.3">
                v0.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.2/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.2">
                v0.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.1/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.1">
                v0.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.11.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.0">
                v0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.10.2/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.2">
                v0.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.10.1/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.10.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.9.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.8.1/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.1">
                v0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.8.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.7.3/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.3">
                v0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.7.2/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.7.1/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.7.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.6.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.5.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.4.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.3.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.2.1/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/1000hz/bootstrap-validator/tree/v0.2.0/js/tests/vendor/jquery-3.1.1.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/1000hz/bootstrap-validator/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/1000hz/bootstrap-validator"><span>bootstrap-validator</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/1000hz/bootstrap-validator/tree/master/js"><span>js</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/1000hz/bootstrap-validator/tree/master/js/tests"><span>tests</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/1000hz/bootstrap-validator/tree/master/js/tests/vendor"><span>vendor</span></a></span><span class="separator">/</span><strong class="final-path">jquery-3.1.1.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/1000hz/bootstrap-validator/commit/3b721b0f47de9ec406a9ba7e692ffcd3adf326d8" data-pjax>
          3b721b0
        </a>
        <relative-time datetime="2016-11-09T21:34:29Z">Nov 10, 2016</relative-time>
      </span>
      <div>
        <img alt="@desfero" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/7031578?v=3&amp;s=40" width="20" />
        <a href="/desfero" class="user-mention" rel="contributor">desfero</a>
          <a href="https://github.com/1000hz/bootstrap-validator/issues/393" class="issue-link js-issue-link" data-url="https://github.com/1000hz/bootstrap-validator/issues/393" data-id="170316219" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#393</a> <a href="/1000hz/bootstrap-validator/commit/3b721b0f47de9ec406a9ba7e692ffcd3adf326d8" class="message" data-pjax="true" title="#393 Select with multiple attribute initially has error validation on page load">Select with multiple attribute initially has error validation on…</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@desfero" height="24" src="https://avatars1.githubusercontent.com/u/7031578?v=3&amp;s=48" width="24" />
            <a href="/desfero">desfero</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/1000hz/bootstrap-validator/raw/master/js/tests/vendor/jquery-3.1.1.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/1000hz/bootstrap-validator/blame/master/js/tests/vendor/jquery-3.1.1.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/1000hz/bootstrap-validator/commits/master/js/tests/vendor/jquery-3.1.1.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      4 lines (4 sloc)
      <span class="file-info-divider"></span>
    84.7 KB
  </div>
</div>



  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">!function(a,b){&quot;use strict&quot;;&quot;object&quot;==typeof module&amp;&amp;&quot;object&quot;==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(&quot;jQuery requires a window with a document&quot;);return b(a)}:b(a)}(&quot;undefined&quot;!=typeof window?window:this,function(a,b){&quot;use strict&quot;;var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement(&quot;script&quot;);c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q=&quot;3.1.1&quot;,r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a&lt;0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a&lt;0?b:0);return this.pushStack(c&gt;=0&amp;&amp;c&lt;b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(&quot;boolean&quot;==typeof g&amp;&amp;(j=g,g=arguments[h]||{},h++),&quot;object&quot;==typeof g||r.isFunction(g)||(g={}),h===i&amp;&amp;(g=this,h--);h&lt;i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&amp;&amp;(j&amp;&amp;d&amp;&amp;(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&amp;&amp;r.isArray(c)?c:[]):f=c&amp;&amp;r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&amp;&amp;(g[b]=d));return g},r.extend({expando:&quot;jQuery&quot;+(q+Math.random()).replace(/\D/g,&quot;&quot;),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return&quot;function&quot;===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&amp;&amp;a===a.window},isNumeric:function(a){var b=r.type(a);return(&quot;number&quot;===b||&quot;string&quot;===b)&amp;&amp;!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||&quot;[object Object]&quot;!==k.call(a))&amp;&amp;(!(b=e(a))||(c=l.call(b,&quot;constructor&quot;)&amp;&amp;b.constructor,&quot;function&quot;==typeof c&amp;&amp;m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+&quot;&quot;:&quot;object&quot;==typeof a||&quot;function&quot;==typeof a?j[k.call(a)]||&quot;object&quot;:typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,&quot;ms-&quot;).replace(u,v)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d&lt;c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?&quot;&quot;:(a+&quot;&quot;).replace(s,&quot;&quot;)},makeArray:function(a,b){var c=b||[];return null!=a&amp;&amp;(w(Object(a))?r.merge(c,&quot;string&quot;==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d&lt;c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f&lt;g;f++)d=!b(a[f],f),d!==h&amp;&amp;e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f&lt;d;f++)e=b(a[f],f,c),null!=e&amp;&amp;h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&amp;&amp;h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if(&quot;string&quot;==typeof b&amp;&amp;(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),&quot;function&quot;==typeof Symbol&amp;&amp;(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each(&quot;Boolean Number String Function Array Date RegExp Object Error Symbol&quot;.split(&quot; &quot;),function(a,b){j[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()});function w(a){var b=!!a&amp;&amp;&quot;length&quot;in a&amp;&amp;a.length,c=r.type(a);return&quot;function&quot;!==c&amp;&amp;!r.isWindow(a)&amp;&amp;(&quot;array&quot;===c||0===b||&quot;number&quot;==typeof b&amp;&amp;b&gt;0&amp;&amp;b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=&quot;sizzle&quot;+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&amp;&amp;(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c&lt;d;c++)if(a[c]===b)return c;return-1},J=&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;,K=&quot;[\\x20\\t\\r\\n\\f]&quot;,L=&quot;(?:\\\\.|[\\w-]|[^\0-\\xa0])+&quot;,M=&quot;\\[&quot;+K+&quot;*(&quot;+L+&quot;)(?:&quot;+K+&quot;*([*^$|!~]?=)&quot;+K+&quot;*(?:&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;|(&quot;+L+&quot;))|)&quot;+K+&quot;*\\]&quot;,N=&quot;:(&quot;+L+&quot;)(?:\\(((&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;)|((?:\\\\.|[^\\\\()[\\]]|&quot;+M+&quot;)*)|.*)\\)|)&quot;,O=new RegExp(K+&quot;+&quot;,&quot;g&quot;),P=new RegExp(&quot;^&quot;+K+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+K+&quot;+$&quot;,&quot;g&quot;),Q=new RegExp(&quot;^&quot;+K+&quot;*,&quot;+K+&quot;*&quot;),R=new RegExp(&quot;^&quot;+K+&quot;*([&gt;+~]|&quot;+K+&quot;)&quot;+K+&quot;*&quot;),S=new RegExp(&quot;=&quot;+K+&quot;*([^\\]&#39;\&quot;]*?)&quot;+K+&quot;*\\]&quot;,&quot;g&quot;),T=new RegExp(N),U=new RegExp(&quot;^&quot;+L+&quot;$&quot;),V={ID:new RegExp(&quot;^#(&quot;+L+&quot;)&quot;),CLASS:new RegExp(&quot;^\\.(&quot;+L+&quot;)&quot;),TAG:new RegExp(&quot;^(&quot;+L+&quot;|[*])&quot;),ATTR:new RegExp(&quot;^&quot;+M),PSEUDO:new RegExp(&quot;^&quot;+N),CHILD:new RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;+K+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+K+&quot;*(?:([+-]|)&quot;+K+&quot;*(\\d+)|))&quot;+K+&quot;*\\)|)&quot;,&quot;i&quot;),bool:new RegExp(&quot;^(?:&quot;+J+&quot;)$&quot;,&quot;i&quot;),needsContext:new RegExp(&quot;^&quot;+K+&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+K+&quot;*((?:-\\d)?\\d*)&quot;+K+&quot;*\\)|)(?=[^-]|$)&quot;,&quot;i&quot;)},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp(&quot;\\\\([\\da-f]{1,6}&quot;+K+&quot;?|(&quot;+K+&quot;)|.)&quot;,&quot;ig&quot;),aa=function(a,b,c){var d=&quot;0x&quot;+b-65536;return d!==d||c?b:d&lt;0?String.fromCharCode(d+65536):String.fromCharCode(d&gt;&gt;10|55296,1023&amp;d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?&quot;\0&quot;===a?&quot;\ufffd&quot;:a.slice(0,-1)+&quot;\\&quot;+a.charCodeAt(a.length-1).toString(16)+&quot; &quot;:&quot;\\&quot;+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&amp;&amp;(&quot;form&quot;in a||&quot;label&quot;in a)},{dir:&quot;parentNode&quot;,next:&quot;legend&quot;});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&amp;&amp;b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],&quot;string&quot;!=typeof a||!a||1!==w&amp;&amp;9!==w&amp;&amp;11!==w)return d;if(!e&amp;&amp;((b?b.ownerDocument||b:v)!==n&amp;&amp;m(b),b=b||n,p)){if(11!==w&amp;&amp;(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&amp;&amp;(j=s.getElementById(f))&amp;&amp;t(b,j)&amp;&amp;j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&amp;&amp;c.getElementsByClassName&amp;&amp;b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&amp;&amp;!A[a+&quot; &quot;]&amp;&amp;(!q||!q.test(a))){if(1!==w)s=b,r=a;else if(&quot;object&quot;!==b.nodeName.toLowerCase()){(k=b.getAttribute(&quot;id&quot;))?k=k.replace(ba,ca):b.setAttribute(&quot;id&quot;,k=u),o=g(a),h=o.length;while(h--)o[h]=&quot;#&quot;+k+&quot; &quot;+sa(o[h]);r=o.join(&quot;,&quot;),s=$.test(a)&amp;&amp;qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&amp;&amp;b.removeAttribute(&quot;id&quot;)}}}return i(a.replace(P,&quot;$1&quot;),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+&quot; &quot;)&gt;d.cacheLength&amp;&amp;delete b[a.shift()],b[c+&quot; &quot;]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement(&quot;fieldset&quot;);try{return!!a(b)}catch(c){return!1}finally{b.parentNode&amp;&amp;b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split(&quot;|&quot;),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&amp;&amp;a,d=c&amp;&amp;1===a.nodeType&amp;&amp;1===b.nodeType&amp;&amp;a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return&quot;input&quot;===c&amp;&amp;b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return(&quot;input&quot;===c||&quot;button&quot;===c)&amp;&amp;b.type===a}}function oa(a){return function(b){return&quot;form&quot;in b?b.parentNode&amp;&amp;b.disabled===!1?&quot;label&quot;in b?&quot;label&quot;in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&amp;&amp;ea(b)===a:b.disabled===a:&quot;label&quot;in b&amp;&amp;b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&amp;&amp;(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&amp;&amp;&quot;undefined&quot;!=typeof a.getElementsByTagName&amp;&amp;a}c=ga.support={},f=ga.isXML=function(a){var b=a&amp;&amp;(a.ownerDocument||a).documentElement;return!!b&amp;&amp;&quot;HTML&quot;!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&amp;&amp;9===g.nodeType&amp;&amp;g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&amp;&amp;(e=n.defaultView)&amp;&amp;e.top!==e&amp;&amp;(e.addEventListener?e.addEventListener(&quot;unload&quot;,da,!1):e.attachEvent&amp;&amp;e.attachEvent(&quot;onunload&quot;,da)),c.attributes=ja(function(a){return a.className=&quot;i&quot;,!a.getAttribute(&quot;className&quot;)}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment(&quot;&quot;)),!a.getElementsByTagName(&quot;*&quot;).length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute(&quot;id&quot;)===b}},d.find.ID=function(a,b){if(&quot;undefined&quot;!=typeof b.getElementById&amp;&amp;p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c=&quot;undefined&quot;!=typeof a.getAttributeNode&amp;&amp;a.getAttributeNode(&quot;id&quot;);return c&amp;&amp;c.value===b}},d.find.ID=function(a,b){if(&quot;undefined&quot;!=typeof b.getElementById&amp;&amp;p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode(&quot;id&quot;),c&amp;&amp;c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode(&quot;id&quot;),c&amp;&amp;c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return&quot;undefined&quot;!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(&quot;*&quot;===a){while(c=f[e++])1===c.nodeType&amp;&amp;d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&amp;&amp;function(a,b){if(&quot;undefined&quot;!=typeof b.getElementsByClassName&amp;&amp;p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&amp;&amp;(ja(function(a){o.appendChild(a).innerHTML=&quot;&lt;a id=&#39;&quot;+u+&quot;&#39;&gt;&lt;/a&gt;&lt;select id=&#39;&quot;+u+&quot;-\r\\&#39; msallowcapture=&#39;&#39;&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,a.querySelectorAll(&quot;[msallowcapture^=&#39;&#39;]&quot;).length&amp;&amp;q.push(&quot;[*^$]=&quot;+K+&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;),a.querySelectorAll(&quot;[selected]&quot;).length||q.push(&quot;\\[&quot;+K+&quot;*(?:value|&quot;+J+&quot;)&quot;),a.querySelectorAll(&quot;[id~=&quot;+u+&quot;-]&quot;).length||q.push(&quot;~=&quot;),a.querySelectorAll(&quot;:checked&quot;).length||q.push(&quot;:checked&quot;),a.querySelectorAll(&quot;a#&quot;+u+&quot;+*&quot;).length||q.push(&quot;.#.+[+~]&quot;)}),ja(function(a){a.innerHTML=&quot;&lt;a href=&#39;&#39; disabled=&#39;disabled&#39;&gt;&lt;/a&gt;&lt;select disabled=&#39;disabled&#39;&gt;&lt;option/&gt;&lt;/select&gt;&quot;;var b=n.createElement(&quot;input&quot;);b.setAttribute(&quot;type&quot;,&quot;hidden&quot;),a.appendChild(b).setAttribute(&quot;name&quot;,&quot;D&quot;),a.querySelectorAll(&quot;[name=d]&quot;).length&amp;&amp;q.push(&quot;name&quot;+K+&quot;*[*^$|!~]?=&quot;),2!==a.querySelectorAll(&quot;:enabled&quot;).length&amp;&amp;q.push(&quot;:enabled&quot;,&quot;:disabled&quot;),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(&quot;:disabled&quot;).length&amp;&amp;q.push(&quot;:enabled&quot;,&quot;:disabled&quot;),a.querySelectorAll(&quot;*,:x&quot;),q.push(&quot;,.*:&quot;)})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&amp;&amp;ja(function(a){c.disconnectedMatch=s.call(a,&quot;*&quot;),s.call(a,&quot;[s!=&#39;&#39;]:x&quot;),r.push(&quot;!=&quot;,N)}),q=q.length&amp;&amp;new RegExp(q.join(&quot;|&quot;)),r=r.length&amp;&amp;new RegExp(r.join(&quot;|&quot;)),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&amp;&amp;b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&amp;&amp;16&amp;a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&amp;d||!c.sortDetached&amp;&amp;b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&amp;&amp;t(v,a)?-1:b===n||b.ownerDocument===v&amp;&amp;t(v,b)?1:k?I(k,a)-I(k,b):0:4&amp;d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&amp;&amp;m(a),b=b.replace(S,&quot;=&#39;$1&#39;]&quot;),c.matchesSelector&amp;&amp;p&amp;&amp;!A[b+&quot; &quot;]&amp;&amp;(!r||!r.test(b))&amp;&amp;(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&amp;&amp;11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length&gt;0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&amp;&amp;m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&amp;&amp;m(a);var e=d.attrHandle[b.toLowerCase()],f=e&amp;&amp;C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&amp;&amp;f.specified?f.value:null},ga.escape=function(a){return(a+&quot;&quot;).replace(ba,ca)},ga.error=function(a){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&amp;&amp;a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&amp;&amp;(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c=&quot;&quot;,d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if(&quot;string&quot;==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||&quot;&quot;).replace(_,aa),&quot;~=&quot;===a[2]&amp;&amp;(a[3]=&quot; &quot;+a[3]+&quot; &quot;),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),&quot;nth&quot;===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(&quot;even&quot;===a[3]||&quot;odd&quot;===a[3])),a[5]=+(a[7]+a[8]||&quot;odd&quot;===a[3])):a[3]&amp;&amp;ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&amp;&amp;a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||&quot;&quot;:c&amp;&amp;T.test(c)&amp;&amp;(b=g(c,!0))&amp;&amp;(b=c.indexOf(&quot;)&quot;,c.length-b)-c.length)&amp;&amp;(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return&quot;*&quot;===a?function(){return!0}:function(a){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+&quot; &quot;];return b||(b=new RegExp(&quot;(^|&quot;+K+&quot;)&quot;+a+&quot;(&quot;+K+&quot;|$)&quot;))&amp;&amp;y(a,function(a){return b.test(&quot;string&quot;==typeof a.className&amp;&amp;a.className||&quot;undefined&quot;!=typeof a.getAttribute&amp;&amp;a.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?&quot;!=&quot;===b:!b||(e+=&quot;&quot;,&quot;=&quot;===b?e===c:&quot;!=&quot;===b?e!==c:&quot;^=&quot;===b?c&amp;&amp;0===e.indexOf(c):&quot;*=&quot;===b?c&amp;&amp;e.indexOf(c)&gt;-1:&quot;$=&quot;===b?c&amp;&amp;e.slice(-c.length)===c:&quot;~=&quot;===b?(&quot; &quot;+e.replace(O,&quot; &quot;)+&quot; &quot;).indexOf(c)&gt;-1:&quot;|=&quot;===b&amp;&amp;(e===c||e.slice(0,c.length+1)===c+&quot;-&quot;))}},CHILD:function(a,b,c,d,e){var f=&quot;nth&quot;!==a.slice(0,3),g=&quot;last&quot;!==a.slice(-4),h=&quot;of-type&quot;===b;return 1===d&amp;&amp;0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?&quot;nextSibling&quot;:&quot;previousSibling&quot;,q=b.parentNode,r=h&amp;&amp;b.nodeName.toLowerCase(),s=!i&amp;&amp;!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p=&quot;only&quot;===a&amp;&amp;!o&amp;&amp;&quot;nextSibling&quot;}return!0}if(o=[g?q.firstChild:q.lastChild],g&amp;&amp;s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&amp;&amp;j[1],t=n&amp;&amp;j[2],m=n&amp;&amp;q.childNodes[n];while(m=++n&amp;&amp;m&amp;&amp;m[p]||(t=n=0)||o.pop())if(1===m.nodeType&amp;&amp;++t&amp;&amp;m===b){k[a]=[w,n,t];break}}else if(s&amp;&amp;(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&amp;&amp;j[1],t=n),t===!1)while(m=++n&amp;&amp;m&amp;&amp;m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&amp;&amp;++t&amp;&amp;(s&amp;&amp;(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&amp;&amp;t/d&gt;=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error(&quot;unsupported pseudo: &quot;+a);return e[u]?e(b):e.length&gt;1?(c=[a,a,&quot;&quot;,b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,&quot;$1&quot;));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&amp;&amp;(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length&gt;0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)&gt;-1}}),lang:ia(function(a){return U.test(a||&quot;&quot;)||ga.error(&quot;unsupported lang: &quot;+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute(&quot;xml:lang&quot;)||b.getAttribute(&quot;lang&quot;))return c=c.toLowerCase(),c===a||0===c.indexOf(a+&quot;-&quot;);while((b=b.parentNode)&amp;&amp;1===b.nodeType);return!1}}),target:function(b){var c=a.location&amp;&amp;a.location.hash;return c&amp;&amp;c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&amp;&amp;(!n.hasFocus||n.hasFocus())&amp;&amp;!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;!!a.checked||&quot;option&quot;===b&amp;&amp;!!a.selected},selected:function(a){return a.parentNode&amp;&amp;a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType&lt;6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;&quot;button&quot;===a.type||&quot;button&quot;===b},text:function(a){var b;return&quot;input&quot;===a.nodeName.toLowerCase()&amp;&amp;&quot;text&quot;===a.type&amp;&amp;(null==(b=a.getAttribute(&quot;type&quot;))||&quot;text&quot;===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c&lt;0?c+b:c]}),even:pa(function(a,b){for(var c=0;c&lt;b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c&lt;b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c&lt;0?c+b:c;--d&gt;=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c&lt;0?c+b:c;++d&lt;b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+&quot; &quot;];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&amp;&amp;!(e=Q.exec(h))||(e&amp;&amp;(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&amp;&amp;(c=e.shift(),f.push({value:c,type:e[0].replace(P,&quot; &quot;)}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&amp;&amp;!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d=&quot;&quot;;b&lt;c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&amp;&amp;&quot;parentNode&quot;===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&amp;&amp;a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&amp;&amp;e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&amp;&amp;j[0]===w&amp;&amp;j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length&gt;1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d&lt;e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h&lt;i;h++)(f=a[h])&amp;&amp;(c&amp;&amp;!c(f,d,e)||(g.push(f),j&amp;&amp;b.push(h)));return g}function xa(a,b,c,d,e,f){return d&amp;&amp;!d[u]&amp;&amp;(d=xa(d)),e&amp;&amp;!e[u]&amp;&amp;(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||&quot;*&quot;,h.nodeType?[h]:h,[]),q=!a||!f&amp;&amp;b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&amp;&amp;c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&amp;&amp;(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&amp;&amp;j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&amp;&amp;(j=e?I(f,l):m[k])&gt;-1&amp;&amp;(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[&quot; &quot;],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)&gt;-1},h,!0),m=[function(a,c,d){var e=!g&amp;&amp;(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i&lt;f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e&lt;f;e++)if(d.relative[a[e].type])break;return xa(i&gt;1&amp;&amp;ua(m),i&gt;1&amp;&amp;sa(a.slice(0,i-1).concat({value:&quot; &quot;===a[i-2].type?&quot;*&quot;:&quot;&quot;})).replace(P,&quot;$1&quot;),c,i&lt;e&amp;&amp;ya(a.slice(i,e)),e&lt;f&amp;&amp;ya(a=a.slice(e)),e&lt;f&amp;&amp;sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length&gt;0,e=a.length&gt;0,f=function(f,g,h,i,k){var l,o,q,r=0,s=&quot;0&quot;,t=f&amp;&amp;[],u=[],v=j,x=f||e&amp;&amp;d.find.TAG(&quot;*&quot;,k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&amp;&amp;(j=g===n||g||k);s!==z&amp;&amp;null!=(l=x[s]);s++){if(e&amp;&amp;l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&amp;&amp;(w=y)}c&amp;&amp;((l=!q&amp;&amp;l)&amp;&amp;r--,f&amp;&amp;t.push(l))}if(r+=s,c&amp;&amp;s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r&gt;0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&amp;&amp;!f&amp;&amp;u.length&gt;0&amp;&amp;r+b.length&gt;1&amp;&amp;ga.uniqueSort(i)}return k&amp;&amp;(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+&quot; &quot;];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m=&quot;function&quot;==typeof a&amp;&amp;a,n=!e&amp;&amp;g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length&gt;2&amp;&amp;&quot;ID&quot;===(j=i[0]).type&amp;&amp;9===b.nodeType&amp;&amp;p&amp;&amp;d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&amp;&amp;(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&amp;&amp;(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&amp;&amp;qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&amp;&amp;sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&amp;&amp;qa(b.parentNode)||b),c},c.sortStable=u.split(&quot;&quot;).sort(B).join(&quot;&quot;)===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&amp;a.compareDocumentPosition(n.createElement(&quot;fieldset&quot;))}),ja(function(a){return a.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,&quot;#&quot;===a.firstChild.getAttribute(&quot;href&quot;)})||ka(&quot;type|href|height|width&quot;,function(a,b,c){if(!c)return a.getAttribute(b,&quot;type&quot;===b.toLowerCase()?1:2)}),c.attributes&amp;&amp;ja(function(a){return a.innerHTML=&quot;&lt;input/&gt;&quot;,a.firstChild.setAttribute(&quot;value&quot;,&quot;&quot;),&quot;&quot;===a.firstChild.getAttribute(&quot;value&quot;)})||ka(&quot;value&quot;,function(a,b,c){if(!c&amp;&amp;&quot;input&quot;===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute(&quot;disabled&quot;)})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&amp;&amp;d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[&quot;:&quot;]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&amp;&amp;9!==a.nodeType)if(1===a.nodeType){if(e&amp;&amp;r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&amp;&amp;a!==b&amp;&amp;c.push(a);return c},A=r.expr.match.needsContext,B=/^&lt;([a-z][^\/\0&gt;:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?&gt;(?:&lt;\/\1&gt;|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):&quot;string&quot;!=typeof b?r.grep(a,function(a){return i.call(b,a)&gt;-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)&gt;-1!==c&amp;&amp;1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;),1===b.length&amp;&amp;1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if(&quot;string&quot;!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b&lt;d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b&lt;d;b++)r.find(a,e[b],c);return d&gt;1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,&quot;string&quot;==typeof a&amp;&amp;A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,&quot;string&quot;==typeof a){if(e=&quot;&lt;&quot;===a[0]&amp;&amp;&quot;&gt;&quot;===a[a.length-1]&amp;&amp;a.length&gt;=3?[null,a,null]:F.exec(a),!e||!e[1]&amp;&amp;b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&amp;&amp;b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&amp;&amp;r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&amp;&amp;(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a&lt;c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g=&quot;string&quot;!=typeof a&amp;&amp;r(a);if(!A.test(a))for(;d&lt;e;d++)for(c=this[d];c&amp;&amp;c!==b;c=c.parentNode)if(c.nodeType&lt;11&amp;&amp;(g?g.index(c)&gt;-1:1===c.nodeType&amp;&amp;r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length&gt;1?r.uniqueSort(f):f)},index:function(a){return a?&quot;string&quot;==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&amp;&amp;this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&amp;&amp;1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;11!==b.nodeType?b:null},parents:function(a){return y(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return y(a,&quot;parentNode&quot;,c)},next:function(a){return J(a,&quot;nextSibling&quot;)},prev:function(a){return J(a,&quot;previousSibling&quot;)},nextAll:function(a){return y(a,&quot;nextSibling&quot;)},prevAll:function(a){return y(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return y(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return y(a,&quot;previousSibling&quot;,c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return&quot;Until&quot;!==a.slice(-5)&amp;&amp;(d=c),d&amp;&amp;&quot;string&quot;==typeof d&amp;&amp;(e=r.filter(d,e)),this.length&gt;1&amp;&amp;(I[a]||r.uniqueSort(e),H.test(a)&amp;&amp;e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a=&quot;string&quot;==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h&lt;f.length)f[h].apply(c[0],c[1])===!1&amp;&amp;a.stopOnFalse&amp;&amp;(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&amp;&amp;(f=c?[]:&quot;&quot;)},j={add:function(){return f&amp;&amp;(c&amp;&amp;!b&amp;&amp;(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&amp;&amp;j.has(c)||f.push(c):c&amp;&amp;c.length&amp;&amp;&quot;string&quot;!==r.type(c)&amp;&amp;d(c)})}(arguments),c&amp;&amp;!b&amp;&amp;i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))&gt;-1)f.splice(c,1),c&lt;=h&amp;&amp;h--}),this},has:function(a){return a?r.inArray(a,f)&gt;-1:f.length&gt;0},empty:function(){return f&amp;&amp;(f=[]),this},disable:function(){return e=g=[],f=c=&quot;&quot;,this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=&quot;&quot;),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&amp;&amp;r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&amp;&amp;r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[[&quot;notify&quot;,&quot;progress&quot;,r.Callbacks(&quot;memory&quot;),r.Callbacks(&quot;memory&quot;),2],[&quot;resolve&quot;,&quot;done&quot;,r.Callbacks(&quot;once memory&quot;),r.Callbacks(&quot;once memory&quot;),0,&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,r.Callbacks(&quot;once memory&quot;),r.Callbacks(&quot;once memory&quot;),1,&quot;rejected&quot;]],d=&quot;pending&quot;,e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},&quot;catch&quot;:function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&amp;&amp;a[d[4]];f[d[1]](function(){var a=e&amp;&amp;e.apply(this,arguments);a&amp;&amp;r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+&quot;With&quot;](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b&lt;f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError(&quot;Thenable self-resolution&quot;);j=a&amp;&amp;(&quot;object&quot;==typeof a||&quot;function&quot;==typeof a)&amp;&amp;a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&amp;&amp;(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&amp;&amp;r.Deferred.exceptionHook(a,k.stackTrace),b+1&gt;=f&amp;&amp;(d!==N&amp;&amp;(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&amp;&amp;(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&amp;&amp;g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+&quot;With&quot;](this===f?void 0:this,arguments),this},f[b[0]+&quot;With&quot;]=g.fireWith}),e.promise(f),b&amp;&amp;b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length&gt;1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b&lt;=1&amp;&amp;(O(a,g.done(h(c)).resolve,g.reject),&quot;pending&quot;===g.state()||r.isFunction(e[c]&amp;&amp;e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&amp;&amp;a.console.warn&amp;&amp;b&amp;&amp;P.test(b.name)&amp;&amp;a.console.warn(&quot;jQuery.Deferred exception: &quot;+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)[&quot;catch&quot;](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&amp;&amp;--r.readyWait&gt;0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener(&quot;DOMContentLoaded&quot;,R),</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    a.removeEventListener(&quot;load&quot;,R),r.ready()}&quot;complete&quot;===d.readyState||&quot;loading&quot;!==d.readyState&amp;&amp;!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener(&quot;DOMContentLoaded&quot;,R),a.addEventListener(&quot;load&quot;,R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(&quot;object&quot;===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&amp;&amp;(e=!0,r.isFunction(d)||(g=!0),j&amp;&amp;(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h&lt;i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&amp;&amp;(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if(&quot;string&quot;==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&amp;&amp;a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&amp;&amp;&quot;string&quot;==typeof b&amp;&amp;void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&amp;&amp;(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&amp;&amp;!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return&quot;true&quot;===a||&quot;false&quot;!==a&amp;&amp;(&quot;null&quot;===a?null:a===+a+&quot;&quot;?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&amp;&amp;1===a.nodeType)if(d=&quot;data-&quot;+b.replace(Y,&quot;-$&amp;&quot;).toLowerCase(),c=a.getAttribute(d),&quot;string&quot;==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&amp;&amp;f.attributes;if(void 0===a){if(this.length&amp;&amp;(e=W.get(f),1===f.nodeType&amp;&amp;!V.get(f,&quot;hasDataAttrs&quot;))){c=g.length;while(c--)g[c]&amp;&amp;(d=g[c].name,0===d.indexOf(&quot;data-&quot;)&amp;&amp;(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,&quot;hasDataAttrs&quot;,!0)}return e}return&quot;object&quot;==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&amp;&amp;void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length&gt;1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||&quot;fx&quot;)+&quot;queue&quot;,d=V.get(a,b),c&amp;&amp;(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};&quot;inprogress&quot;===e&amp;&amp;(e=c.shift(),d--),e&amp;&amp;(&quot;fx&quot;===b&amp;&amp;c.unshift(&quot;inprogress&quot;),delete f.stop,e.call(a,g,f)),!d&amp;&amp;f&amp;&amp;f.empty.fire()},_queueHooks:function(a,b){var c=b+&quot;queueHooks&quot;;return V.get(a,c)||V.access(a,c,{empty:r.Callbacks(&quot;once memory&quot;).add(function(){V.remove(a,[b+&quot;queue&quot;,c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=&quot;fx&quot;,c--),arguments.length&lt;c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),&quot;fx&quot;===a&amp;&amp;&quot;inprogress&quot;!==c[0]&amp;&amp;r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=void 0),a=a||&quot;fx&quot;;while(g--)c=V.get(f[g],a+&quot;queueHooks&quot;),c&amp;&amp;c.empty&amp;&amp;(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp(&quot;^(?:([+-])=|)(&quot;+_+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),ba=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],ca=function(a,b){return a=b||a,&quot;none&quot;===a.style.display||&quot;&quot;===a.style.display&amp;&amp;r.contains(a.ownerDocument,a)&amp;&amp;&quot;none&quot;===r.css(a,&quot;display&quot;)},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,&quot;&quot;)},i=h(),j=c&amp;&amp;c[3]||(r.cssNumber[b]?&quot;&quot;:&quot;px&quot;),k=(r.cssNumber[b]||&quot;px&quot;!==j&amp;&amp;+i)&amp;&amp;aa.exec(r.css(a,b));if(k&amp;&amp;k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||&quot;.5&quot;,k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&amp;&amp;1!==f&amp;&amp;--g)}return c&amp;&amp;(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&amp;&amp;(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,&quot;display&quot;),b.parentNode.removeChild(b),&quot;none&quot;===e&amp;&amp;(e=&quot;block&quot;),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f&lt;g;f++)d=a[f],d.style&amp;&amp;(c=d.style.display,b?(&quot;none&quot;===c&amp;&amp;(e[f]=V.get(d,&quot;display&quot;)||null,e[f]||(d.style.display=&quot;&quot;)),&quot;&quot;===d.style.display&amp;&amp;ca(d)&amp;&amp;(e[f]=ga(d))):&quot;none&quot;!==c&amp;&amp;(e[f]=&quot;none&quot;,V.set(d,&quot;display&quot;,c)));for(f=0;f&lt;g;f++)null!=e[f]&amp;&amp;(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return&quot;boolean&quot;==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/&lt;([a-z][^\/\0&gt;\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c=&quot;undefined&quot;!=typeof a.getElementsByTagName?a.getElementsByTagName(b||&quot;*&quot;):&quot;undefined&quot;!=typeof a.querySelectorAll?a.querySelectorAll(b||&quot;*&quot;):[],void 0===b||b&amp;&amp;r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c&lt;d;c++)V.set(a[c],&quot;globalEval&quot;,!b||V.get(b[c],&quot;globalEval&quot;))}var oa=/&lt;|&amp;#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n&lt;o;n++)if(f=a[n],f||0===f)if(&quot;object&quot;===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement(&quot;div&quot;)),h=(ja.exec(f)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=&quot;&quot;}else m.push(b.createTextNode(f));l.textContent=&quot;&quot;,n=0;while(f=m[n++])if(d&amp;&amp;r.inArray(f,d)&gt;-1)e&amp;&amp;e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),&quot;script&quot;),j&amp;&amp;na(g),c){k=0;while(f=g[k++])ka.test(f.type||&quot;&quot;)&amp;&amp;c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement(&quot;div&quot;)),c=d.createElement(&quot;input&quot;);c.setAttribute(&quot;type&quot;,&quot;radio&quot;),c.setAttribute(&quot;checked&quot;,&quot;checked&quot;),c.setAttribute(&quot;name&quot;,&quot;t&quot;),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=&quot;&lt;textarea&gt;x&lt;/textarea&gt;&quot;,o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if(&quot;object&quot;==typeof b){&quot;string&quot;!=typeof c&amp;&amp;(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&amp;&amp;null==e?(e=c,d=c=void 0):null==e&amp;&amp;(&quot;string&quot;==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&amp;&amp;(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&amp;&amp;(f=c,c=f.handler,e=f.selector),e&amp;&amp;r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return&quot;undefined&quot;!=typeof r&amp;&amp;r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||&quot;&quot;).match(K)||[&quot;&quot;],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n&amp;&amp;(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&amp;&amp;r.expr.match.needsContext.test(e),namespace:o.join(&quot;.&quot;)},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&amp;&amp;l.setup.call(a,d,o,g)!==!1||a.addEventListener&amp;&amp;a.addEventListener(n,g)),l.add&amp;&amp;(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&amp;&amp;V.get(a);if(q&amp;&amp;(i=q.events)){b=(b||&quot;&quot;).match(K)||[&quot;&quot;],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&amp;&amp;new RegExp(&quot;(^|\\.)&quot;+o.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;),g=f=m.length;while(f--)k=m[f],!e&amp;&amp;p!==k.origType||c&amp;&amp;c.guid!==k.guid||h&amp;&amp;!h.test(k.namespace)||d&amp;&amp;d!==k.selector&amp;&amp;(&quot;**&quot;!==d||!k.selector)||(m.splice(f,1),k.selector&amp;&amp;m.delegateCount--,l.remove&amp;&amp;l.remove.call(a,k));g&amp;&amp;!m.length&amp;&amp;(l.teardown&amp;&amp;l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&amp;&amp;V.remove(a,&quot;handle events&quot;)}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,&quot;events&quot;)||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c&lt;arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&amp;&amp;!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&amp;&amp;!b.isImmediatePropagationStopped())b.rnamespace&amp;&amp;!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&amp;&amp;(b.result=e)===!1&amp;&amp;(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&amp;&amp;k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&amp;&amp;j.nodeType&amp;&amp;!(&quot;click&quot;===a.type&amp;&amp;a.button&gt;=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&amp;&amp;(&quot;click&quot;!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c&lt;i;c++)d=b[c],e=d.selector+&quot; &quot;,void 0===g[e]&amp;&amp;(g[e]=d.needsContext?r(e,this).index(j)&gt;-1:r.find(e,this,null,[j]).length),g[e]&amp;&amp;f.push(d);f.length&amp;&amp;h.push({elem:j,handlers:f})}return j=this,i&lt;b.length&amp;&amp;h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&amp;&amp;this.focus)return this.focus(),!1},delegateType:&quot;focusin&quot;},blur:{trigger:function(){if(this===wa()&amp;&amp;this.blur)return this.blur(),!1},delegateType:&quot;focusout&quot;},click:{trigger:function(){if(&quot;checkbox&quot;===this.type&amp;&amp;this.click&amp;&amp;r.nodeName(this,&quot;input&quot;))return this.click(),!1},_default:function(a){return r.nodeName(a.target,&quot;a&quot;)}},beforeunload:{postDispatch:function(a){void 0!==a.result&amp;&amp;a.originalEvent&amp;&amp;(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&amp;&amp;a.returnValue===!1?ua:va,this.target=a.target&amp;&amp;3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&amp;&amp;r.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&amp;&amp;!this.isSimulated&amp;&amp;a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&amp;&amp;!this.isSimulated&amp;&amp;a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&amp;&amp;!this.isSimulated&amp;&amp;a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,&quot;char&quot;:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&amp;&amp;ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&amp;&amp;void 0!==b&amp;&amp;sa.test(a.type)?1&amp;b?1:2&amp;b?3:4&amp;b?2:0:a.which}},r.event.addProp),r.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;,pointerenter:&quot;pointerover&quot;,pointerleave:&quot;pointerout&quot;},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&amp;&amp;(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+&quot;.&quot;+d.namespace:d.origType,d.selector,d.handler),this;if(&quot;object&quot;==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&amp;&amp;&quot;function&quot;!=typeof b||(c=b,b=void 0),c===!1&amp;&amp;(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0&gt;\x20\t\r\n\f]*)[^&gt;]*)\/&gt;/gi,za=/&lt;script|&lt;style|&lt;link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g;function Da(a,b){return r.nodeName(a,&quot;table&quot;)&amp;&amp;r.nodeName(11!==b.nodeType?b:b.firstChild,&quot;tr&quot;)?a.getElementsByTagName(&quot;tbody&quot;)[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute(&quot;type&quot;))+&quot;/&quot;+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute(&quot;type&quot;),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&amp;&amp;(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c&lt;d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&amp;&amp;(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();&quot;input&quot;===c&amp;&amp;ia.test(a.type)?b.checked=a.checked:&quot;input&quot;!==c&amp;&amp;&quot;textarea&quot;!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m&gt;1&amp;&amp;&quot;string&quot;==typeof q&amp;&amp;!o.checkClone&amp;&amp;Aa.test(q))return a.each(function(e){var f=a.eq(e);s&amp;&amp;(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&amp;&amp;(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&amp;&amp;(e=f),f||d)){for(h=r.map(ma(e,&quot;script&quot;),Ea),i=h.length;l&lt;m;l++)j=e,l!==n&amp;&amp;(j=r.clone(j,!0,!0),i&amp;&amp;r.merge(h,ma(j,&quot;script&quot;))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l&lt;i;l++)j=h[l],ka.test(j.type||&quot;&quot;)&amp;&amp;!V.access(j,&quot;globalEval&quot;)&amp;&amp;r.contains(k,j)&amp;&amp;(j.src?r._evalUrl&amp;&amp;r._evalUrl(j.src):p(j.textContent.replace(Ca,&quot;&quot;),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&amp;&amp;(c&amp;&amp;r.contains(d.ownerDocument,d)&amp;&amp;na(ma(d,&quot;script&quot;)),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&amp;&amp;11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d&lt;e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d&lt;e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,&quot;script&quot;),g.length&gt;0&amp;&amp;na(g,!i&amp;&amp;ma(a,&quot;script&quot;)),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&amp;&amp;(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&amp;&amp;11!==this.nodeType&amp;&amp;9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&amp;&amp;(r.cleanData(ma(a,!1)),a.textContent=&quot;&quot;);return this},clone:function(a,b){return a=null!=a&amp;&amp;a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&amp;&amp;1===b.nodeType)return b.innerHTML;if(&quot;string&quot;==typeof a&amp;&amp;!za.test(a)&amp;&amp;!la[(ja.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c&lt;d;c++)b=this[c]||{},1===b.nodeType&amp;&amp;(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&amp;&amp;this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)&lt;0&amp;&amp;(r.cleanData(ma(this)),c&amp;&amp;c.replaceChild(b,this))},a)}}),r.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g&lt;=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp(&quot;^(&quot;+_+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),Ma=function(b){var c=b.ownerDocument.defaultView;return c&amp;&amp;c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText=&quot;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%&quot;,i.innerHTML=&quot;&quot;,qa.appendChild(h);var b=a.getComputedStyle(i);c=&quot;1%&quot;!==b.top,g=&quot;2px&quot;===b.marginLeft,e=&quot;4px&quot;===b.width,i.style.marginRight=&quot;50%&quot;,f=&quot;4px&quot;===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement(&quot;div&quot;),i=d.createElement(&quot;div&quot;);i.style&amp;&amp;(i.style.backgroundClip=&quot;content-box&quot;,i.cloneNode(!0).style.backgroundClip=&quot;&quot;,o.clearCloneStyle=&quot;content-box&quot;===i.style.backgroundClip,h.style.cssText=&quot;border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute&quot;,h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&amp;&amp;(g=c.getPropertyValue(b)||c[b],&quot;&quot;!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&amp;&amp;La.test(g)&amp;&amp;Ka.test(b)&amp;&amp;(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+&quot;&quot;:g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Ra={letterSpacing:&quot;0&quot;,fontWeight:&quot;400&quot;},Sa=[&quot;Webkit&quot;,&quot;Moz&quot;,&quot;ms&quot;],Ta=d.createElement(&quot;div&quot;).style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||&quot;px&quot;):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?&quot;border&quot;:&quot;content&quot;)?4:&quot;width&quot;===b?1:0;f&lt;4;f+=2)&quot;margin&quot;===c&amp;&amp;(g+=r.css(a,c+ba[f],!0,e)),d?(&quot;content&quot;===c&amp;&amp;(g-=r.css(a,&quot;padding&quot;+ba[f],!0,e)),&quot;margin&quot;!==c&amp;&amp;(g-=r.css(a,&quot;border&quot;+ba[f]+&quot;Width&quot;,!0,e))):(g+=r.css(a,&quot;padding&quot;+ba[f],!0,e),&quot;padding&quot;!==c&amp;&amp;(g+=r.css(a,&quot;border&quot;+ba[f]+&quot;Width&quot;,!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g=&quot;border-box&quot;===r.css(a,&quot;boxSizing&quot;,!1,f);if(a.getClientRects().length&amp;&amp;(d=a.getBoundingClientRect()[b]),d&lt;=0||null==d){if(d=Na(a,b,f),(d&lt;0||null==d)&amp;&amp;(d=a.style[b]),La.test(d))return d;e=g&amp;&amp;(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?&quot;border&quot;:&quot;content&quot;),e,f)+&quot;px&quot;}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,&quot;opacity&quot;);return&quot;&quot;===c?&quot;1&quot;:c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:&quot;cssFloat&quot;},style:function(a,b,c,d){if(a&amp;&amp;3!==a.nodeType&amp;&amp;8!==a.nodeType&amp;&amp;a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&amp;&amp;&quot;get&quot;in g&amp;&amp;void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,&quot;string&quot;===f&amp;&amp;(e=aa.exec(c))&amp;&amp;e[1]&amp;&amp;(c=ea(a,b,e),f=&quot;number&quot;),null!=c&amp;&amp;c===c&amp;&amp;(&quot;number&quot;===f&amp;&amp;(c+=e&amp;&amp;e[3]||(r.cssNumber[h]?&quot;&quot;:&quot;px&quot;)),o.clearCloneStyle||&quot;&quot;!==c||0!==b.indexOf(&quot;background&quot;)||(i[b]=&quot;inherit&quot;),g&amp;&amp;&quot;set&quot;in g&amp;&amp;void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&amp;&amp;&quot;get&quot;in g&amp;&amp;(e=g.get(a,!0,c)),void 0===e&amp;&amp;(e=Na(a,b,d)),&quot;normal&quot;===e&amp;&amp;b in Ra&amp;&amp;(e=Ra[b]),&quot;&quot;===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each([&quot;height&quot;,&quot;width&quot;],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,&quot;display&quot;))||a.getClientRects().length&amp;&amp;a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&amp;&amp;Ma(a),g=d&amp;&amp;Wa(a,b,d,&quot;border-box&quot;===r.css(a,&quot;boxSizing&quot;,!1,f),f);return g&amp;&amp;(e=aa.exec(c))&amp;&amp;&quot;px&quot;!==(e[3]||&quot;px&quot;)&amp;&amp;(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,&quot;marginLeft&quot;))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+&quot;px&quot;}),r.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=&quot;string&quot;==typeof c?c.split(&quot; &quot;):[c];d&lt;4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g&lt;e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length&gt;1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?&quot;&quot;:&quot;px&quot;)},cur:function(){var a=Ya.propHooks[this.prop];return a&amp;&amp;a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),c&amp;&amp;c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&amp;&amp;null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,&quot;&quot;),b&amp;&amp;&quot;auto&quot;!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&amp;&amp;!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&amp;&amp;a.elem.parentNode&amp;&amp;(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:&quot;swing&quot;},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&amp;&amp;(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d&lt;4;d+=2-b)c=ba[d],e[&quot;margin&quot;+c]=e[&quot;padding&quot;+c]=a;return b&amp;&amp;(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners[&quot;*&quot;]),f=0,g=e.length;f&lt;g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l=&quot;width&quot;in b||&quot;height&quot;in b,m=this,n={},o=a.style,p=a.nodeType&amp;&amp;ca(a),q=V.get(a,&quot;fxshow&quot;);c.queue||(g=r._queueHooks(a,&quot;fx&quot;),null==g.unqueued&amp;&amp;(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,&quot;fx&quot;).length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||&quot;toggle&quot;===e,e===(p?&quot;hide&quot;:&quot;show&quot;)){if(&quot;show&quot;!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&amp;&amp;q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&amp;&amp;1===a.nodeType&amp;&amp;(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&amp;&amp;q.display,null==j&amp;&amp;(j=V.get(a,&quot;display&quot;)),k=r.css(a,&quot;display&quot;),&quot;none&quot;===k&amp;&amp;(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,&quot;display&quot;),ha([a]))),(&quot;inline&quot;===k||&quot;inline-block&quot;===k&amp;&amp;null!=j)&amp;&amp;&quot;none&quot;===r.css(a,&quot;float&quot;)&amp;&amp;(i||(m.done(function(){o.display=j}),null==j&amp;&amp;(k=o.display,j=&quot;none&quot;===k?&quot;&quot;:k)),o.display=&quot;inline-block&quot;)),c.overflow&amp;&amp;(o.overflow=&quot;hidden&quot;,m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?&quot;hidden&quot;in q&amp;&amp;(p=q.hidden):q=V.access(a,&quot;fxshow&quot;,{display:j}),f&amp;&amp;(q.hidden=!p),p&amp;&amp;ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,&quot;fxshow&quot;);for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&amp;&amp;(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&amp;&amp;(e=f[1],f=a[c]=f[0]),c!==d&amp;&amp;(a[d]=f,delete a[c]),g=r.cssHooks[d],g&amp;&amp;&quot;expand&quot;in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g&lt;i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f&lt;1&amp;&amp;i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c&lt;d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f&lt;g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&amp;&amp;(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&amp;&amp;j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{&quot;*&quot;:[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=[&quot;*&quot;]):a=a.match(K);for(var c,d=0,e=a.length;d&lt;e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&amp;&amp;&quot;object&quot;==typeof a?r.extend({},a):{complete:c||!c&amp;&amp;b||r.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!r.isFunction(b)&amp;&amp;b};return r.fx.off||d.hidden?e.duration=0:&quot;number&quot;!=typeof e.duration&amp;&amp;(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&amp;&amp;e.queue!==!0||(e.queue=&quot;fx&quot;),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&amp;&amp;e.old.call(this),e.queue&amp;&amp;r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,&quot;finish&quot;))&amp;&amp;b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return&quot;string&quot;!=typeof a&amp;&amp;(c=b,b=a,a=void 0),b&amp;&amp;a!==!1&amp;&amp;this.queue(a||&quot;fx&quot;,[]),this.each(function(){var b=!0,e=null!=a&amp;&amp;a+&quot;queueHooks&quot;,f=r.timers,g=V.get(this);if(e)g[e]&amp;&amp;g[e].stop&amp;&amp;d(g[e]);else for(e in g)g[e]&amp;&amp;g[e].stop&amp;&amp;ab.test(e)&amp;&amp;d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&amp;&amp;f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&amp;&amp;c||r.dequeue(this,a)})},finish:function(a){return a!==!1&amp;&amp;(a=a||&quot;fx&quot;),this.each(function(){var b,c=V.get(this),d=c[a+&quot;queue&quot;],e=c[a+&quot;queueHooks&quot;],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&amp;&amp;e.stop&amp;&amp;e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&amp;&amp;f[b].queue===a&amp;&amp;(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b&lt;g;b++)d[b]&amp;&amp;d[b].finish&amp;&amp;d[b].finish.call(this);delete c.finish})}}),r.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||&quot;boolean&quot;==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db(&quot;show&quot;),slideUp:db(&quot;hide&quot;),slideToggle:db(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b&lt;c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||&quot;fx&quot;,this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement(&quot;input&quot;),b=d.createElement(&quot;select&quot;),c=b.appendChild(d.createElement(&quot;option&quot;));a.type=&quot;checkbox&quot;,o.checkOn=&quot;&quot;!==a.value,o.optSelected=c.selected,a=d.createElement(&quot;input&quot;),a.value=&quot;t&quot;,a.type=&quot;radio&quot;,o.radioValue=&quot;t&quot;===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length&gt;1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&amp;&amp;8!==f&amp;&amp;2!==f)return&quot;undefined&quot;==typeof a.getAttribute?r.prop(a,b,c):(1===f&amp;&amp;r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    void 0!==c?null===c?void r.removeAttr(a,b):e&amp;&amp;&quot;set&quot;in e&amp;&amp;void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+&quot;&quot;),c):e&amp;&amp;&quot;get&quot;in e&amp;&amp;null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&amp;&amp;&quot;radio&quot;===b&amp;&amp;r.nodeName(a,&quot;input&quot;)){var c=a.value;return a.setAttribute(&quot;type&quot;,b),c&amp;&amp;(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&amp;&amp;b.match(K);if(e&amp;&amp;1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length&gt;1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&amp;&amp;8!==f&amp;&amp;2!==f)return 1===f&amp;&amp;r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&amp;&amp;&quot;set&quot;in e&amp;&amp;void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&amp;&amp;&quot;get&quot;in e&amp;&amp;null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,&quot;tabindex&quot;);return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&amp;&amp;a.href?0:-1}}},propFix:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&amp;&amp;b.parentNode&amp;&amp;b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&amp;&amp;(b.selectedIndex,b.parentNode&amp;&amp;b.parentNode.selectedIndex)}}),r.each([&quot;tabIndex&quot;,&quot;readOnly&quot;,&quot;maxLength&quot;,&quot;cellSpacing&quot;,&quot;cellPadding&quot;,&quot;rowSpan&quot;,&quot;colSpan&quot;,&quot;useMap&quot;,&quot;frameBorder&quot;,&quot;contentEditable&quot;],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(&quot; &quot;)}function nb(a){return a.getAttribute&amp;&amp;a.getAttribute(&quot;class&quot;)||&quot;&quot;}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if(&quot;string&quot;==typeof a&amp;&amp;a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&amp;&amp;&quot; &quot;+mb(e)+&quot; &quot;){g=0;while(f=b[g++])d.indexOf(&quot; &quot;+f+&quot; &quot;)&lt;0&amp;&amp;(d+=f+&quot; &quot;);h=mb(d),e!==h&amp;&amp;c.setAttribute(&quot;class&quot;,h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr(&quot;class&quot;,&quot;&quot;);if(&quot;string&quot;==typeof a&amp;&amp;a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&amp;&amp;&quot; &quot;+mb(e)+&quot; &quot;){g=0;while(f=b[g++])while(d.indexOf(&quot; &quot;+f+&quot; &quot;)&gt;-1)d=d.replace(&quot; &quot;+f+&quot; &quot;,&quot; &quot;);h=mb(d),e!==h&amp;&amp;c.setAttribute(&quot;class&quot;,h)}}return this},toggleClass:function(a,b){var c=typeof a;return&quot;boolean&quot;==typeof b&amp;&amp;&quot;string&quot;===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if(&quot;string&quot;===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&amp;&amp;&quot;boolean&quot;!==c||(b=nb(this),b&amp;&amp;V.set(this,&quot;__className__&quot;,b),this.setAttribute&amp;&amp;this.setAttribute(&quot;class&quot;,b||a===!1?&quot;&quot;:V.get(this,&quot;__className__&quot;)||&quot;&quot;))})},hasClass:function(a){var b,c,d=0;b=&quot; &quot;+a+&quot; &quot;;while(c=this[d++])if(1===c.nodeType&amp;&amp;(&quot; &quot;+mb(nb(c))+&quot; &quot;).indexOf(b)&gt;-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&amp;&amp;(e=d?a.call(this,c,r(this).val()):a,null==e?e=&quot;&quot;:&quot;number&quot;==typeof e?e+=&quot;&quot;:r.isArray(e)&amp;&amp;(e=r.map(e,function(a){return null==a?&quot;&quot;:a+&quot;&quot;})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&amp;&amp;&quot;set&quot;in b&amp;&amp;void 0!==b.set(this,e,&quot;value&quot;)||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&amp;&amp;&quot;get&quot;in b&amp;&amp;void 0!==(c=b.get(e,&quot;value&quot;))?c:(c=e.value,&quot;string&quot;==typeof c?c.replace(ob,&quot;&quot;):null==c?&quot;&quot;:c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,&quot;value&quot;);return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g=&quot;select-one&quot;===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f&lt;0?i:g?f:0;d&lt;i;d++)if(c=e[d],(c.selected||d===f)&amp;&amp;!c.disabled&amp;&amp;(!c.parentNode.disabled||!r.nodeName(c.parentNode,&quot;optgroup&quot;))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)&gt;-1)&amp;&amp;(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)&gt;-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute(&quot;value&quot;)?&quot;on&quot;:a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,&quot;type&quot;)?b.type:b,q=l.call(b,&quot;namespace&quot;)?b.namespace.split(&quot;.&quot;):[];if(h=i=e=e||d,3!==e.nodeType&amp;&amp;8!==e.nodeType&amp;&amp;!pb.test(p+r.event.triggered)&amp;&amp;(p.indexOf(&quot;.&quot;)&gt;-1&amp;&amp;(q=p.split(&quot;.&quot;),p=q.shift(),q.sort()),k=p.indexOf(&quot;:&quot;)&lt;0&amp;&amp;&quot;on&quot;+p,b=b[r.expando]?b:new r.Event(p,&quot;object&quot;==typeof b&amp;&amp;b),b.isTrigger=f?2:3,b.namespace=q.join(&quot;.&quot;),b.rnamespace=b.namespace?new RegExp(&quot;(^|\\.)&quot;+q.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&amp;&amp;!n.noBubble&amp;&amp;!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&amp;&amp;o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&amp;&amp;!b.isPropagationStopped())b.type=g&gt;1?j:n.bindType||p,m=(V.get(h,&quot;events&quot;)||{})[b.type]&amp;&amp;V.get(h,&quot;handle&quot;),m&amp;&amp;m.apply(h,c),m=k&amp;&amp;h[k],m&amp;&amp;m.apply&amp;&amp;T(h)&amp;&amp;(b.result=m.apply(h,c),b.result===!1&amp;&amp;b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&amp;&amp;n._default.apply(o.pop(),c)!==!1||!T(e)||k&amp;&amp;r.isFunction(e[p])&amp;&amp;!r.isWindow(e)&amp;&amp;(i=e[k],i&amp;&amp;(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&amp;&amp;(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each(&quot;blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu&quot;.split(&quot; &quot;),function(a,b){r.fn[b]=function(a,c){return arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin=&quot;onfocusin&quot;in a,o.focusin||r.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||&quot;string&quot;!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,&quot;text/xml&quot;)}catch(d){c=void 0}return c&amp;&amp;!c.getElementsByTagName(&quot;parsererror&quot;).length||r.error(&quot;Invalid XML: &quot;+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+&quot;[&quot;+(&quot;object&quot;==typeof e&amp;&amp;null!=e?b:&quot;&quot;)+&quot;]&quot;,e,c,d)});else if(c||&quot;object&quot;!==r.type(b))d(a,b);else for(e in b)xb(a+&quot;[&quot;+e+&quot;]&quot;,b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(null==c?&quot;&quot;:c)};if(r.isArray(a)||a.jquery&amp;&amp;!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join(&quot;&amp;&quot;)},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,&quot;elements&quot;);return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&amp;&amp;!r(this).is(&quot;:disabled&quot;)&amp;&amp;wb.test(this.nodeName)&amp;&amp;!vb.test(a)&amp;&amp;(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(ub,&quot;\r\n&quot;)}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&amp;])_=[^&amp;]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb=&quot;*/&quot;.concat(&quot;*&quot;),Ib=d.createElement(&quot;a&quot;);Ib.href=qb.href;function Jb(a){return function(b,c){&quot;string&quot;!=typeof b&amp;&amp;(c=b,b=&quot;*&quot;);var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])&quot;+&quot;===d[0]?(d=d.slice(1)||&quot;*&quot;,(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return&quot;string&quot;!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e[&quot;*&quot;]&amp;&amp;g(&quot;*&quot;)}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&amp;&amp;((e[c]?a:d||(d={}))[c]=b[c]);return d&amp;&amp;r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while(&quot;*&quot;===i[0])i.shift(),void 0===d&amp;&amp;(d=a.mimeType||b.getResponseHeader(&quot;Content-Type&quot;));if(d)for(e in h)if(h[e]&amp;&amp;h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+&quot; &quot;+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&amp;&amp;i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&amp;&amp;(c[a.responseFields[f]]=b),!i&amp;&amp;d&amp;&amp;a.dataFilter&amp;&amp;(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(&quot;*&quot;===f)f=i;else if(&quot;*&quot;!==i&amp;&amp;i!==f){if(g=j[i+&quot; &quot;+f]||j[&quot;* &quot;+f],!g)for(e in j)if(h=e.split(&quot; &quot;),h[1]===f&amp;&amp;(g=j[i+&quot; &quot;+h[0]]||j[&quot;* &quot;+h[0]])){g===!0?g=j[e]:j[e]!==!0&amp;&amp;(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&amp;&amp;a[&quot;throws&quot;])b=g(b);else try{b=g(b)}catch(l){return{state:&quot;parsererror&quot;,error:g?l:&quot;No conversion from &quot;+i+&quot; to &quot;+f}}}return{state:&quot;success&quot;,data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:&quot;GET&quot;,isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,accepts:{&quot;*&quot;:Hb,text:&quot;text/plain&quot;,html:&quot;text/html&quot;,xml:&quot;application/xml, text/xml&quot;,json:&quot;application/json, text/javascript&quot;},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;,json:&quot;responseJSON&quot;},converters:{&quot;* text&quot;:String,&quot;text html&quot;:!0,&quot;text json&quot;:JSON.parse,&quot;text xml&quot;:r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){&quot;object&quot;==typeof b&amp;&amp;(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&amp;&amp;(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks(&quot;once memory&quot;),u=o.statusCode||{},v={},w={},x=&quot;canceled&quot;,y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&amp;&amp;(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&amp;&amp;(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&amp;&amp;e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+&quot;&quot;).replace(Eb,qb.protocol+&quot;//&quot;),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||&quot;*&quot;).toLowerCase().match(K)||[&quot;&quot;],null==o.crossDomain){j=d.createElement(&quot;a&quot;);try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+&quot;//&quot;+Ib.host!=j.protocol+&quot;//&quot;+j.host}catch(z){o.crossDomain=!0}}if(o.data&amp;&amp;o.processData&amp;&amp;&quot;string&quot;!=typeof o.data&amp;&amp;(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&amp;&amp;o.global,l&amp;&amp;0===r.active++&amp;&amp;r.event.trigger(&quot;ajaxStart&quot;),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,&quot;&quot;),o.hasContent?o.data&amp;&amp;o.processData&amp;&amp;0===(o.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;(o.data=o.data.replace(yb,&quot;+&quot;)):(n=o.url.slice(f.length),o.data&amp;&amp;(f+=(sb.test(f)?&quot;&amp;&quot;:&quot;?&quot;)+o.data,delete o.data),o.cache===!1&amp;&amp;(f=f.replace(Ab,&quot;$1&quot;),n=(sb.test(f)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+rb++ +n),o.url=f+n),o.ifModified&amp;&amp;(r.lastModified[f]&amp;&amp;y.setRequestHeader(&quot;If-Modified-Since&quot;,r.lastModified[f]),r.etag[f]&amp;&amp;y.setRequestHeader(&quot;If-None-Match&quot;,r.etag[f])),(o.data&amp;&amp;o.hasContent&amp;&amp;o.contentType!==!1||c.contentType)&amp;&amp;y.setRequestHeader(&quot;Content-Type&quot;,o.contentType),y.setRequestHeader(&quot;Accept&quot;,o.dataTypes[0]&amp;&amp;o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+(&quot;*&quot;!==o.dataTypes[0]?&quot;, &quot;+Hb+&quot;; q=0.01&quot;:&quot;&quot;):o.accepts[&quot;*&quot;]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&amp;&amp;(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x=&quot;abort&quot;,t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&amp;&amp;q.trigger(&quot;ajaxSend&quot;,[y,o]),k)return y;o.async&amp;&amp;o.timeout&gt;0&amp;&amp;(i=a.setTimeout(function(){y.abort(&quot;timeout&quot;)},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,&quot;No Transport&quot;);function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&amp;&amp;a.clearTimeout(i),e=void 0,g=h||&quot;&quot;,y.readyState=b&gt;0?4:0,j=b&gt;=200&amp;&amp;b&lt;300||304===b,d&amp;&amp;(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&amp;&amp;(w=y.getResponseHeader(&quot;Last-Modified&quot;),w&amp;&amp;(r.lastModified[f]=w),w=y.getResponseHeader(&quot;etag&quot;),w&amp;&amp;(r.etag[f]=w)),204===b||&quot;HEAD&quot;===o.type?x=&quot;nocontent&quot;:304===b?x=&quot;notmodified&quot;:(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&amp;&amp;x||(x=&quot;error&quot;,b&lt;0&amp;&amp;(b=0))),y.status=b,y.statusText=(c||x)+&quot;&quot;,j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&amp;&amp;q.trigger(j?&quot;ajaxSuccess&quot;:&quot;ajaxError&quot;,[y,o,j?m:n]),t.fireWith(p,[y,x]),l&amp;&amp;(q.trigger(&quot;ajaxComplete&quot;,[y,o]),--r.active||r.event.trigger(&quot;ajaxStop&quot;)))}return y},getJSON:function(a,b,c){return r.get(a,b,c,&quot;json&quot;)},getScript:function(a,b){return r.get(a,void 0,b,&quot;script&quot;)}}),r.each([&quot;get&quot;,&quot;post&quot;],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&amp;&amp;(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&amp;&amp;a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:&quot;GET&quot;,dataType:&quot;script&quot;,cache:!0,async:!1,global:!1,&quot;throws&quot;:!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&amp;&amp;(r.isFunction(a)&amp;&amp;(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not(&quot;body&quot;).each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&amp;&amp;&quot;withCredentials&quot;in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&amp;&amp;!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&amp;&amp;h.overrideMimeType&amp;&amp;h.overrideMimeType(b.mimeType),b.crossDomain||e[&quot;X-Requested-With&quot;]||(e[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&amp;&amp;(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,&quot;abort&quot;===a?h.abort():&quot;error&quot;===a?&quot;number&quot;!=typeof h.status?f(0,&quot;error&quot;):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,&quot;text&quot;!==(h.responseType||&quot;text&quot;)||&quot;string&quot;!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c(&quot;error&quot;),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&amp;&amp;a.setTimeout(function(){c&amp;&amp;d()})},c=c(&quot;abort&quot;);try{h.send(b.hasContent&amp;&amp;b.data||null)}catch(i){if(c)throw i}},abort:function(){c&amp;&amp;c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&amp;&amp;(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/\b(?:java|ecma)script\b/},converters:{&quot;text script&quot;:function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter(&quot;script&quot;,function(a){void 0===a.cache&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;)}),r.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r(&quot;&lt;script&gt;&quot;).prop({charset:a.scriptCharset,src:a.url}).on(&quot;load error&quot;,c=function(a){b.remove(),c=null,a&amp;&amp;f(&quot;error&quot;===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&amp;&amp;c()}}}});var Qb=[],Rb=/(=)\?(?=&amp;|$)|\?\?/;r.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var a=Qb.pop()||r.expando+&quot;_&quot;+rb++;return this[a]=!0,a}}),r.ajaxPrefilter(&quot;json jsonp&quot;,function(b,c,d){var e,f,g,h=b.jsonp!==!1&amp;&amp;(Rb.test(b.url)?&quot;url&quot;:&quot;string&quot;==typeof b.data&amp;&amp;0===(b.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;Rb.test(b.data)&amp;&amp;&quot;data&quot;);if(h||&quot;jsonp&quot;===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,&quot;$1&quot;+e):b.jsonp!==!1&amp;&amp;(b.url+=(sb.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+b.jsonp+&quot;=&quot;+e),b.converters[&quot;script json&quot;]=function(){return g||r.error(e+&quot; was not called&quot;),g[0]},b.dataTypes[0]=&quot;json&quot;,f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&amp;&amp;(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&amp;&amp;r.isFunction(f)&amp;&amp;f(g[0]),g=f=void 0}),&quot;script&quot;}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument(&quot;&quot;).body;return a.innerHTML=&quot;&lt;form&gt;&lt;/form&gt;&lt;form&gt;&lt;/form&gt;&quot;,2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if(&quot;string&quot;!=typeof a)return[];&quot;boolean&quot;==typeof b&amp;&amp;(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(&quot;&quot;),e=b.createElement(&quot;base&quot;),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&amp;&amp;[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&amp;&amp;g.length&amp;&amp;r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(&quot; &quot;);return h&gt;-1&amp;&amp;(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&amp;&amp;&quot;object&quot;==typeof b&amp;&amp;(e=&quot;POST&quot;),g.length&gt;0&amp;&amp;r.ajax({url:a,type:e||&quot;GET&quot;,dataType:&quot;html&quot;,data:b}).done(function(a){f=arguments,g.html(d?r(&quot;&lt;div&gt;&quot;).append(r.parseHTML(a)).find(d):a)}).always(c&amp;&amp;function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each([&quot;ajaxStart&quot;,&quot;ajaxStop&quot;,&quot;ajaxComplete&quot;,&quot;ajaxError&quot;,&quot;ajaxSuccess&quot;,&quot;ajaxSend&quot;],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&amp;&amp;a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,&quot;position&quot;),l=r(a),m={};&quot;static&quot;===k&amp;&amp;(a.style.position=&quot;relative&quot;),h=l.offset(),f=r.css(a,&quot;top&quot;),i=r.css(a,&quot;left&quot;),j=(&quot;absolute&quot;===k||&quot;fixed&quot;===k)&amp;&amp;(f+i).indexOf(&quot;auto&quot;)&gt;-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&amp;&amp;(b=b.call(a,c,r.extend({},h))),null!=b.top&amp;&amp;(m.top=b.top-h.top+g),null!=b.left&amp;&amp;(m.left=b.left-h.left+e),&quot;using&quot;in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return&quot;fixed&quot;===r.css(c,&quot;position&quot;)?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],&quot;html&quot;)||(d=a.offset()),d={top:d.top+r.css(a[0],&quot;borderTopWidth&quot;,!0),left:d.left+r.css(a[0],&quot;borderLeftWidth&quot;,!0)}),{top:b.top-d.top-r.css(c,&quot;marginTop&quot;,!0),left:b.left-d.left-r.css(c,&quot;marginLeft&quot;,!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&amp;&amp;&quot;static&quot;===r.css(a,&quot;position&quot;))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(a,b){var c=&quot;pageYOffset&quot;===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each([&quot;top&quot;,&quot;left&quot;],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+&quot;px&quot;:c})}),r.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(a,b){r.each({padding:&quot;inner&quot;+a,content:b,&quot;&quot;:&quot;outer&quot;+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&amp;&amp;(c||&quot;boolean&quot;!=typeof e),h=c||(e===!0||f===!0?&quot;margin&quot;:&quot;border&quot;);return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf(&quot;outer&quot;)?b[&quot;inner&quot;+a]:b.document.documentElement[&quot;client&quot;+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body[&quot;scroll&quot;+a],f[&quot;scroll&quot;+a],b.body[&quot;offset&quot;+a],f[&quot;offset&quot;+a],f[&quot;client&quot;+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,&quot;**&quot;):this.off(b,a||&quot;**&quot;,c)}}),r.parseJSON=JSON.parse,&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(&quot;jquery&quot;,[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&amp;&amp;(a.$=Ub),b&amp;&amp;a.jQuery===r&amp;&amp;(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>




    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.12787s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>





  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-70e3b0d6db8a244e38107bc491aeebe3143cc21a339e00bfc5d446bac07d7b51.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-f595606838fa8089d82001c6b4da7f6ba33f31dde48065e00390143b90dab642.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-d6af8e24ce0e91bd50a4bcf222948a6f1068acbfa091b8dedc688ceccf197754.js"></script>




  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>
