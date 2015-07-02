(function showConsoleAds() {
  if(typeof console !== "object") return;

  var styles = [
    'background: #0000ff; color: #ffffff;',
    'background: #00ff00; color: #000000;',
    'background: #ff0000; color: #ffffff;',
  ];

  var ads = [{
    text: 'Record visitors as they navigate your website!',
    link: "www.inspectlet.com/?u=nerdyAds"
  }, {
    text: 'Time tracking is just the beginning…',
    link: "http://try.hrv.st/3-77367"
  }, {
    text: "Wayback HN, a cross between the Wayback Machine and Hacker News",
    link: "http://www.waybackhn.com?r=nerdyadsdotcom"
  }, {
    text: "Universal Pause Button",
    link: "https://github.com/ryanries/UniversalPauseButton?r=nerdyadsdotcom"
  }, {
    text: "Prototyping and Team Collaboration Made Simple",
    link: "https://precursorapp.com?r=nerdyadsdotcom"
  }, {
    text: "Percy.io, a continuous visual integration tool",
    link: "https://percy.io?r=nerdyadsdotcom"
  }, {
    text: "Generate reports and analytics on your satisfaction with your job",
    link: "https://www.retroospect.com?r=nerdyadsdotcom"
  }, {
    text: "Convenient and Efficient Scheduling",
    link: "http://start.timeup.io?r=nerdyadsdotcom"
  }, {
    text: "A simple API to quantify and visualize differences",
    link: "https://diff.io?r=nerdyadsdotcom"
  }, {
    text: 'Mock Up Anything In Minutes',
    link: "https://balsamiq.com?r=nerdyadsdotcom"
  }];

  ads.forEach(function (ad, ii) {
    var text = '%c ' + ad.text + ':';
    var style = styles[(ii % styles.length)] + "font-size: 16px;";
    var link = ad.link;
    console.log(text, style, link);
  });
})();