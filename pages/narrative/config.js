// Extracted Archives: story map configuration.
// Paste your Mapbox public token below (the one from your mapping tutorials).
var config = {
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
  style: 'mapbox://styles/mapbox/satellite-v9',

  // Places shown on the map. Points are approximate (town, works or photo geotag),
  // not site boundaries. kind: archive | peat | power | dc
  places: {
    owenduff:      { n: 'Owenduff',        k: 'archive', c: [-9.69, 53.96] },
    ceide:         { n: 'Céide Fields',    k: 'archive', c: [-9.46, 54.30] },
    liffeyhead:    { n: 'Liffey Head',     k: 'archive', c: [-6.29, 53.15] },
    cashel:        { n: 'Cashel Bog',      k: 'archive', c: [-7.33, 52.98] },
    castlebar:     { n: 'Castlebar',       k: 'peat',    c: [-9.30, 53.86] },
    drumack:       { n: 'Near Ballymena',  k: 'peat',    c: [-6.43, 54.94] },
    annaverna:     { n: 'Annaverna',       k: 'peat',    c: [-6.34, 54.08] },
    iveragh:       { n: 'Iveragh',         k: 'peat',    c: [-10.31, 51.89] },
    lullymore:     { n: 'Lullymore',       k: 'power',   c: [-6.93, 53.27] },
    clonsast:      { n: 'Clonsast',        k: 'peat',    c: [-7.13, 53.23] },
    turraun:       { n: 'Turraun',         k: 'peat',    c: [-7.72, 53.26] },
    portarlington: { n: 'Portarlington',   k: 'power',   c: [-7.19, 53.16] },
    allenwood:     { n: 'Allenwood',       k: 'power',   c: [-6.86, 53.29] },
    coilldubh:     { n: 'Coill Dubh',      k: 'peat',    c: [-6.87, 53.31] },
    timahoe:       { n: 'Timahoe',         k: 'peat',    c: [-6.83, 53.33] },
    lanesborough:  { n: 'Lanesborough',    k: 'power',   c: [-7.99, 53.67] },
    rhode:         { n: 'Rhode',           k: 'power',   c: [-7.206, 53.349] },
    boora:         { n: 'Lough Boora',     k: 'peat',    c: [-7.759, 53.213] },
    ferbane:       { n: 'Ferbane',         k: 'power',   c: [-7.83, 53.27] },
    shannonbridge: { n: 'Shannonbridge',   k: 'power',   c: [-8.039, 53.273] },
    derrinlough:   { n: 'Derrinlough',     k: 'power',   c: [-7.88, 53.20] },
    bellacorick:   { n: 'Bellacorick',     k: 'power',   c: [-9.57, 54.12] },
    derrygreenagh: { n: 'Derrygreenagh',   k: 'dc',      c: [-7.22, 53.40] },
    dublin:        { n: 'Dublin',          k: 'dc',      c: [-6.40, 53.36] },
    clonee:        { n: 'Clonee',          k: 'dc',      c: [-6.42, 53.41] },
    ennis:         { n: 'Ennis',           k: 'dc',      c: [-8.98, 52.84] },
    parnell:       { n: 'Parnell Square',  k: 'dc',      c: [-6.264, 53.354] },
    leinsterhouse: { n: 'Leinster House',  k: 'dc',      c: [-6.254, 53.340] }
  },

  chapters: [
    {
      id: 'bog-archive', nav: 'The bog', tl: '10,000 years',
      eyebrow: 'Part 1 - 10,000 years to now',
      title: 'The bog keeps a record',
      text: '<p>A raised or blanket bog is fed only by rain and air, so whatever falls on its surface is locked into the layer of peat growing at that moment.<sup>a</sup> Waterlogged, low-oxygen peat stops things from rotting.<sup>b</sup> Layer by layer, the bog becomes an archive.</p><p>Irish bogs hold pollen that records past vegetation and farming, volcanic ash that dates the layers, metals from industrial air pollution, butter buried in the peat, and human bodies.<sup>c</sup></p>',
      location: { center: [-8.0, 53.45], zoom: 6.3, pitch: 0, bearing: 0 },
      focus: ['owenduff', 'ceide', 'liffeyhead', 'cashel'],
      slips: [
        { k: 'Pollen', t: 'Vegetation and farming, layer by layer. Glenulra, Co. Mayo.', s: 'Molloy and O\'Connell 2020' },
        { k: 'Volcanic ash', t: 'An ash layer from AD 860 lies 0.38 to 0.40 m down at Owenduff, Co. Mayo.', s: 'Tephrabase; Plunkett 2006' },
        { k: 'Lead', t: 'Wicklow mining, then leaded petrol, read in the peat at Liffey Head bog.', s: 'Rosca et al. 2018' },
        { k: 'Bog butter', t: 'Dairy fat buried from about 1700 BC to the 17th century AD.', s: 'Smyth et al. 2019' },
        { k: 'Bog body', t: 'Cashel Man, Co. Laois, died 2141 to 1960 BC. Found during peat milling in 2011.', s: 'National Museum of Ireland' },
        { k: 'Buried fields', t: 'A Neolithic field system kept under blanket bog over 4 m deep in places.', s: 'Caulfield et al. 1998' }
      ]
    },
    {
      id: 'bog-commission', nav: 'The bog', tl: '1809',
      eyebrow: 'Part 1 - 1809 to 1814',
      title: 'A map made to drain the archive',
      text: '<p>In 1809 the British Parliament set up the Bog Commission to survey the extent and depth of Irish bogs and plan how to drain them.<sup>d</sup> Its four reports set out how about 1,013,358 acres could be drained and turned into farmland.<sup>e</sup> The drainage was never carried out, but the maps were reused later, when the state began to see bogs as fuel.<sup>d</sup></p><p>In Mayo the engineer William Bald mapped the bogs near Castlebar in 1811, with sections drawn through the peat.<sup>f</sup> A second archive begins here: paper, made to empty the first.</p>',
      location: { center: [-9.30, 53.86], zoom: 10.2, pitch: 30, bearing: 0 },
      focus: ['castlebar'],
      slips: [
        { k: '1,013,358 acres', t: 'Bog the Commission planned to drain, 1810 to 1814.', s: 'Bord na Móna Living History' },
        { k: 'Bald, 1811', t: 'Map of the bogs near Castlebar, four sheets, with sections.', s: 'NLI MS_UR_007301' }
      ]
    },
    {
      id: 'hand-cutting', nav: 'The bog', tl: 'c. 1885',
      eyebrow: 'Part 1 - c. 1885 to 1963',
      title: 'The sleán and the foot',
      text: '<p>Before machines, turf was cut each May or June with a sleán, a specially shaped spade, to fuel a home for the year.<sup>g</sup> Wet sods were stood upright in groups of five or six to dry, a job called footing, then carted home.<sup>h</sup></p><p>This was extraction at the scale of a household: a bank of bog, a season, a family. It cut into the archive one sod at a time.</p>',
      location: { center: [-8.2, 53.5], zoom: 6.4, pitch: 0, bearing: 0 },
      focus: ['drumack', 'annaverna', 'iveragh'],
      photos: [
        { src: 'images/nli-footing-the-turf-c1885.jpg', cap: '"Footing the Turf", near Ballymena, c. 1885. Robert French, Lawrence Collection, NLI LROY 2870. No known copyright restrictions.', href: 'https://www.flickr.com/photos/nlireland/8538126493/' },
        { src: 'images/nli-turf-cutting-annaverna-c1940.jpg', cap: '"Turf cutting", Annaverna, Co. Louth, c. 1940. Valentine Collection, NLI VAL 8428. No known copyright restrictions.', href: 'https://www.flickr.com/photos/nlireland/6028089667/' },
        { src: 'images/nli-bringing-home-the-turf-kerry-1963.jpg', cap: '"Bringing home the turf", Iveragh, Co. Kerry, June 1963. Richard Tilbrook, NLI TIL852. No known copyright restrictions.', href: 'https://www.flickr.com/photos/nlireland/30482642527/' }
      ]
    },
    {
      id: 'state', nav: 'The bog', tl: '1934',
      eyebrow: 'Part 1 - 1934 to 1962',
      title: 'The state takes up the bog',
      text: '<p>The Turf Development Board was set up in 1934. In 1936 it bought Turraun and Clonsast bogs, and the Lullymore briquette factory began working.<sup>i</sup> Milled peat was first made commercially that year at Lullymore.<sup>j</sup></p><p>Bord na Móna followed in 1946, with 5,138 workers, and planned peat power stations at Portarlington, Allenwood and Lanesborough.<sup>i</sup> Whole villages were built for the work: 572 houses in eight villages under the Coill Dubh scheme of the 1950s.<sup>k</sup> By 1962 Timahoe bog produced 175,000 tonnes of turf a year.<sup>l</sup></p>',
      location: { center: [-7.2, 53.3], zoom: 8.6, pitch: 40, bearing: -10 },
      focus: ['lullymore', 'clonsast', 'turraun', 'portarlington', 'allenwood', 'coilldubh', 'timahoe', 'lanesborough'],
      slips: [
        { k: '5,138', t: 'Bord na Móna workers in 1946.', s: 'BnM rEIAR 2026, p. 4' },
        { k: '572 houses', t: 'In eight worker villages, 1950s.', s: 'Bord na Móna Living History' }
      ]
    },
    {
      id: 'milling', nav: 'The bog', tl: '1952',
      eyebrow: 'Part 1 - 1952 to 1980',
      title: 'Milling the archive away',
      text: '<p>From 1952 new peat works for electricity produced milled peat.<sup>j</sup> Milling scrapes the whole bog surface each season; in production bogs the surface could drop by up to 0.2 m a year.<sup>m</sup> Archaeologists walked the drains because sites were destroyed before they could be recorded.<sup>m</sup></p><p>By 1980 about 17,000 hectares had been drained and developed, and employment peaked at about 7,000.<sup>i</sup> Each season removed centuries of record. Cashel Man, Ireland\'s oldest known bog body, was damaged by milling machinery when he was found in 2011.<sup>n</sup></p>',
      location: { center: [-7.70, 53.24], zoom: 10.6, pitch: 55, bearing: -25 },
      focus: ['boora', 'rhode', 'ferbane', 'derrinlough'],
      photos: [
        { src: 'images/nli-odea-bord-na-mona-train-rhode-1973.jpg', cap: 'Bord na Móna train at Rhode, Co. Offaly, 27 October 1973. James P. O\'Dea, NLI ODEA 113/10. No known copyright restrictions.', href: 'https://www.flickr.com/photos/nlireland/51610180624/' },
        { src: 'images/campbell-lough-boora-1977.jpg', cap: 'Lough Boora, Co. Offaly, 9 September 1977: excavation huts, a milled peat train, Ferbane power station on the horizon. Kieran Campbell, CC BY-SA 2.0.', href: 'https://commons.wikimedia.org/wiki/File:Lough_Boora,_Broughal,_Co._Offaly_-_geograph.org.uk_-_1094987.jpg' }
      ]
    },
    {
      id: 'last-burn', nav: 'The bog', tl: '2020',
      eyebrow: 'Part 1 - 2019 to 2022',
      title: 'The last burn',
      text: '<p>In November 2019 the ESB said West Offaly Power at Shannonbridge and Lough Ree Power at Lanesborough would stop at the end of 2020.<sup>o</sup> Together they burned two million tonnes of peat a year.<sup>p</sup> Both stopped in December 2020.<sup>q</sup></p><p>In January 2021 Bord na Móna ended industrial peat extraction on all its lands.<sup>i</sup> The sale of peat for burning was banned in 2022, though turbary rights still let people cut turf for their own use.<sup>r</sup></p>',
      location: { center: [-8.039, 53.273], zoom: 13.2, pitch: 55, bearing: 30 },
      focus: ['shannonbridge', 'lanesborough'],
      news: ['news/rte-2019-11-08-esb-closures.jpg', 'news/rte-2025-06-06-peat-cutter.jpg']
    },
    {
      id: 'data-archive', nav: 'Data centres', tl: '2015',
      eyebrow: 'Part 2 - 2015 to 2025',
      title: 'The data centre keeps a record',
      text: '<p>A data centre is also an archive: rooms of servers that store and process the data behind everyday life. The Government calls data centres core digital infrastructure.<sup>v</sup> Everyday services such as internet banking now rely on cloud services run from them.<sup>w</sup></p><p>Keeping that archive costs power. In 2015 data centres used 5% of Ireland\'s metered electricity. In 2025 they used 7,663 GWh, or 23%, against 28% for all homes.<sup>x</sup></p>',
      location: { center: [-6.38, 53.37], zoom: 9.8, pitch: 45, bearing: -15 },
      focus: ['dublin', 'clonee'],
      chart: true,
      news: ['news/cso-2026-07-07-data-centres.jpg']
    },
    {
      id: 'rules', nav: 'Data centres', tl: 'Dec 2025',
      eyebrow: 'Part 2 - December 2025 to November 2026',
      title: 'Bring your own power',
      text: '<p>In December 2025 the energy regulator, the CRU, set a new connection policy for data centres, ending a de facto pause on new grid connections.<sup>ab</sup> New centres must source at least 80% of their energy from renewables, so up to 20% can come from fossil fuels.<sup>ac</sup></p><p>Friends of the Irish Environment, Friends of the Earth Ireland and ClientEarth were given leave to challenge the policy in April 2026.<sup>ad</sup> The High Court began hearing the case on 17 November 2026.<sup>ab</sup></p>',
      location: { center: [-7.22, 53.40], zoom: 12.4, pitch: 55, bearing: -20 },
      focus: ['derrygreenagh']
    },
    {
      id: 'siting', nav: 'Data centres', tl: 'Sep 2026',
      eyebrow: 'Part 2 - 2024 to 2026',
      title: 'From the Dublin ring to the bog',
      text: '<p>Most of the load sits around Dublin, where Google won permission to extend its Grange Castle site in September 2026.<sup>y</sup> New proposals move outward: plans for a €1.2 billion data centre in Ennis have gone to Clare County Council,<sup>z</sup> and Bord na Móna offers about 3,000 hectares of its Midlands landbank to high-demand users.<sup>aa</sup></p><p>Map points are approximate centres, not site boundaries.</p>',
      location: { center: [-8.0, 53.35], zoom: 6.5, pitch: 0, bearing: 0 },
      focus: ['dublin', 'clonee', 'ennis', 'derrygreenagh']
    },
    {
      id: 'same-ground', nav: 'Same ground', tl: '2024',
      eyebrow: 'Part 3 - 2024 to 2026',
      title: 'Same ground, new archive',
      text: '<p><strong>Derrinlough.</strong> A briquette factory built from 1957<sup>i</sup> sits beside Derrinlough Wind Farm, whose first 105 MW power deal, signed in 2024, is with Amazon Web Services, the first business to join Bord na Móna\'s Eco Energy Park.<sup>s</sup></p><p><strong>Derrygreenagh.</strong> Permission was granted in April 2026 for a 710 MW gas power plant on the old peat works site.<sup>t</sup> Local radio reports plans for potentially Ireland\'s largest data centre on the same former bogland, with Amazon involved.<sup>u</sup></p><p>Land that stored ten thousand years of record is being prepared to power a different kind of archive.</p>',
      location: { center: [-7.50, 53.32], zoom: 9.4, pitch: 45, bearing: 15 },
      focus: ['derrinlough', 'derrygreenagh'],
      news: ['news/rte-2024-04-30-aws-bnm.jpg', 'news/midlands103-2026-08-13-derrygreenagh.jpg']
    },
    {
      id: 'protest', nav: 'Same ground', tl: '7 Nov 2026',
      eyebrow: 'Part 3 - 7 November 2026',
      title: 'Who the archive is for',
      text: '<p>On 7 November 2026 around two thousand people marched from Parnell Square to Leinster House in Ireland\'s first national protest against data centres, calling for a moratorium on new builds. Groups came from Kildare, Louth, Waterford, Wicklow and Clare.<sup>ae</sup></p><p>The turf cutter and the protester stand at two ends of the same question: whose archive the land holds, and who it is kept for.</p>',
      location: { center: [-6.259, 53.347], zoom: 14.2, pitch: 50, bearing: 10 },
      focus: ['parnell', 'leinsterhouse'],
      news: ['news/rte-2026-11-07-protest.jpg']
    }
  ],

  // CSO Data Centres Metered Electricity Consumption 2025, Table 1 [year, GWh, % of total]
  cso: [[2015,1240,5],[2016,1482,6],[2017,1762,7],[2018,2182,8],[2019,2490,9],[2020,3030,11],[2021,4012,14],[2022,5273,18],[2023,6339,21],[2024,6973,22],[2025,7663,23]],

  // Marsh Anthology style: article screenshots with source lines.
  newsGallery: [
    { src: 'news/rte-2026-11-07-protest.jpg', t: 'Dublin protest hears calls for moratorium on new data centres', o: 'RTÉ News', d: '7 November 2026', u: 'https://www.rte.ie/news/dublin/2026/1107/1598353-data-centres-protest/' },
    { src: 'news/midlands103-2026-08-13-derrygreenagh.jpg', t: 'Offaly councillor calls for housing to be prioritised over data centres', o: 'Midlands 103', d: '13 August 2026', u: 'https://www.midlands103.com/news/midlands-news/offaly-councillor-calls-for-housing-to-be-prioritsied-over-data-centres/' },
    { src: 'news/cso-2026-07-07-data-centres.jpg', t: 'Data Centres Metered Electricity Consumption 2025', o: 'Central Statistics Office', d: '7 July 2026', u: 'https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2025/keyfindings/' },
    { src: 'news/rte-2025-06-06-peat-cutter.jpg', t: 'We\'re dinosaurs \'tormenting\' the EU, says peat cutter', o: 'RTÉ News (Reuters)', d: '6 June 2025', u: 'https://www.rte.ie/news/newslens/2025/0606/1517109-were-dinosaurs-tormenting-the-eu-says-peat-cutter/' },
    { src: 'news/rte-2024-04-30-aws-bnm.jpg', t: 'AWS plans data centres in the Midlands as part of Bord na Móna deal', o: 'RTÉ News', d: '30 April 2024', u: 'https://www.rte.ie/news/business/2024/0430/1446583-aws-plans-data-centres-as-part-of-bord-na-mona-deal/' },
    { src: 'news/rte-2019-11-08-esb-closures.jpg', t: 'ESB to close two peat-fired Midlands power stations', o: 'RTÉ News', d: '8 November 2019', u: 'https://www.rte.ie/news/2019/1108/1089500-esb-power-plants/' }
  ],
  furtherReporting: [
    ['High Court begins hearing challenge to data centre energy policy', 'The Irish Times', '17 Nov 2026', 'https://irishtimes.com/crime-law/courts/2026/11/17/high-court-begins-hearing-challenge-to-data-centre-energy-policy'],
    ['Thousands gather in Dublin for Ireland\'s first national protest against data centres', 'TheJournal.ie', '7 Nov 2026', 'https://www.thejournal.ie/dublin-data-centre-protest-7218841-Nov2026/'],
    ['Google wins planning permission for Dublin data centre extension', 'The Irish Times', '28 Sep 2026', 'https://irishtimes.com/business/2026/09/28/google-wins-planning-permission-for-dublin-data-centre-extension/'],
    ['Environmental groups granted leave to challenge data centre policy', 'The Irish Times', '28 Apr 2026', 'https://www.irishtimes.com/ireland/2026/04/28/environmental-groups-granted-leave-to-challenge-data-centre-policy/']
  ],

  sources: {
    a: ['Rosca, C. et al. (2018). Trace element and Pb isotope fingerprinting of atmospheric pollution sources. Applied Geochemistry 96.', 'https://doi.org/10.1016/j.apgeochem.2018.07.003'],
    b: ['Historic Environment Division, DfC NI (2026). Guidance for Peatland Restoration and the Historic Environment in Northern Ireland.', 'https://www.communities-ni.gov.uk/sites/default/files/2026-08/dfc-guidance-for-peatland-restoration-and-historic-environment-ni.pdf'],
    c: ['Project doc "What Irish bogs store" (11 Nov 2026), compiling Molloy and O\'Connell 2020; Tephrabase, Plunkett 2006; Rosca et al. 2018; Smyth et al. 2019 (Scientific Reports); National Museum of Ireland, Cashel Man; Caulfield et al. 1998 (Radiocarbon).', 'https://doi.org/10.1038/s41598-019-40975-y'],
    d: ['Bruisch, K. and Toomey, L. (2022). RePEAT: Rediscovering historical maps of Ireland\'s peatlands. National Library of Ireland.', 'https://www.nli.ie/news-stories/stories/repeat-rediscovering-historical-maps-irelands-peatlands-times-climate'],
    e: ['Bord na Móna Living History. Story of the original maps.', 'https://www.bordnamonalivinghistory.ie/maps/history-of-maps/'],
    f: ['NLI catalogue. Bald, W. (1811). Map of the bogs near Castlebar, Co. Mayo.', 'https://sources.nli.ie/Record/MS_UR_007301'],
    g: ['National Museum of Ireland. Traditional Irish farming methods.', 'https://museum.ie/en-IE/Collections-Research/Folklife-Collections/Folklife-Collections-List-(1)/Agriculture/Farming-and-fishing-in-rural-Ireland/Traditional-Irish-farming-methods'],
    h: ['Ask About Ireland. Cutting turf.', 'https://askaboutireland.ie/learning-zone/primary-students/looking-at-places/offaly/aspects-of-offaly/cutting-turf'],
    i: ['Bord na Móna Energy Ltd (2026). Remedial EIAR Chapter 2, Background, ACP-324359-26. An Coimisiún Pleanála. Industry document, pp. 3 to 9.', 'https://www.pleanala.ie/publicaccess/SubstituteConsent/324359/EIAR/ACP-324359-26%20Volume%202%20-%20Main%20rEIAR/ACP-324359-26%20rEIAR%20Chapter%2002%20%E2%80%93%20Background.pdf'],
    j: ['Bord na Móna Living History. Milled peat production.', 'https://www.bordnamonalivinghistory.ie/article-detail/milled-peat-production/'],
    k: ['Bord na Móna Living History. Timeline (Coill Dubh village scheme).', 'https://www.bordnamonalivinghistory.ie/'],
    l: ['RTÉ Archives. Turf cutting in Timahoe, broadcast 4 April 1962.', 'https://www.rte.ie/archives/2017/0403/864784-turf-cutting-in-timahoe'],
    m: ['Irish Archaeological Wetland Unit (1997). Fieldwork 1997, Offaly. excavations.ie.', 'https://excavations.ie/report/1997/Offaly/0003000/'],
    n: ['National Museum of Ireland. Cashel Man: Ireland\'s oldest bog body; Mount, C. (2013).', 'https://charles-mount.ie/wp/?p=1029'],
    o: ['ESB (8 Nov 2019). ESB Midlands stations closure. Press release.', 'https://esb.ie/news---insights/press-releases/article/2019/11/08/esb-midlands-stations-closure'],
    p: ['RTÉ News (8 Nov 2019). ESB to close two peat-fired Midlands power stations. Reporting.', 'https://www.rte.ie/news/2019/1108/1089500-esb-power-plants/'],
    q: ['Houses of the Oireachtas (8 Sep 2022). Written answer.', 'https://www.oireachtas.ie/en/debates/question/2022-09-08/97/'],
    r: ['RTÉ News / Reuters (6 Jun 2025). We\'re dinosaurs \'tormenting\' the EU, says peat cutter. Reporting.', 'https://www.rte.ie/news/newslens/2025/0606/1517109-were-dinosaurs-tormenting-the-eu-says-peat-cutter/'],
    s: ['RTÉ News (30 Apr 2024). AWS plans data centres in the Midlands as part of Bord na Móna deal. Reporting.', 'https://www.rte.ie/news/business/2024/0430/1446583-aws-plans-data-centres-as-part-of-bord-na-mona-deal/'],
    t: ['An Coimisiún Pleanála. Case ABP-319023-24, Derrygreenagh power plant (570 MW CCGT and 140 MW OCGT); direction, meeting 10 April 2026: grant.', 'https://www.pleanala.ie/en-ie/case/319023'],
    u: ['Midlands 103 (13 Aug 2026). Offaly councillor calls for housing to be prioritised over data centres. Reporting.', 'https://www.midlands103.com/news/midlands-news/offaly-councillor-calls-for-housing-to-be-prioritsied-over-data-centres/'],
    v: ['Government of Ireland (2022). Statement on the Role of Data Centres in Ireland\'s Enterprise Strategy.', 'https://enterprise.gov.ie/en/publications/publication-files/government-statement-on-the-role-of-data-centres-in-irelands-enterprise-strategy.pdf'],
    w: ['Coveney, S., Minister for Enterprise (23 Nov 2023). Speech at Data Centres Ireland 2023.', 'https://www.gov.ie/en/department-of-enterprise-tourism-and-employment/speeches/speech-by-minister-for-enterprise-trade-and-employment-simon-coveney-at-data-centres-ireland-2023-conference-and-exhibition/'],
    x: ['Central Statistics Office (7 Jul 2026). Data Centres Metered Electricity Consumption 2025, Table 1.', 'https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2025/keyfindings/'],
    y: ['The Irish Times (28 Sep 2026). Google wins planning permission for Dublin data centre extension. Reporting.', 'https://irishtimes.com/business/2026/09/28/google-wins-planning-permission-for-dublin-data-centre-extension/'],
    z: ['Extra.ie (6 Nov 2026). Massive protest against data centres to take place this weekend. Reporting.', 'https://extra.ie/2026/11/06/news/protest-against-data-centres'],
    aa: ['ThinkBusiness. Amazon and Bord na Móna data centres in the Midlands (Eco Energy Park, about 3,000 ha).', 'https://www.thinkbusiness.ie/articles/amazon-bord-na-mona-data-centres-ireland-midlands/'],
    ab: ['The Irish Times (17 Nov 2026). High Court begins hearing challenge to data centre energy policy. Reporting.', 'https://irishtimes.com/crime-law/courts/2026/11/17/high-court-begins-hearing-challenge-to-data-centre-energy-policy'],
    ac: ['Commission for Regulation of Utilities. Decision on new electricity connection policy for data centres; Pinsent Masons, Out-Law (up to 20% non-renewable).', 'https://www.cru.ie/about-us/news/the-cru-publishes-its-decision-on-new-electricity-connection-policy-for-data-centres/'],
    ad: ['ClientEarth (27 Apr 2026). Irish energy regulator sued over latest data centre decision. Press release.', 'https://www.clientearth.org/latest/press-office/irish-energy-regulator-sued-over-latest-data-centre-decision-amidst-climate-and-energy-concerns/'],
    ae: ['RTÉ News (7 Nov 2026). Dublin protest hears calls for moratorium on new data centres. Reporting.', 'https://www.rte.ie/news/dublin/2026/1107/1598353-data-centres-protest/']
  }
};
