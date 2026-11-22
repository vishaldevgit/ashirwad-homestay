(function () {
  // Inject CSS for offer bar
  var style = document.createElement('style');
  style.textContent = `
    #ashirwad-offer-bar {
      position: relative;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px 48px 10px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      flex-wrap: wrap;
    }
    #ashirwad-offer-bar.mode-off-season {
      background: #1a7a5e;
      color: #fff;
    }
    #ashirwad-offer-bar.mode-festival {
      background: #FF9933;
      color: #fff;
    }
    #ashirwad-offer-bar .bar-book-btn {
      background: #fff;
      padding: 4px 14px;
      border-radius: 20px;
      font-weight: 700;
      text-decoration: none;
      font-size: 13px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    #ashirwad-offer-bar.mode-off-season .bar-book-btn { color: #1a7a5e; }
    #ashirwad-offer-bar.mode-festival .bar-book-btn { color: #FF9933; }
    #ashirwad-offer-bar .bar-dismiss {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: rgba(255,255,255,0.8);
      font-size: 18px;
      cursor: pointer;
      line-height: 1;
      padding: 4px;
    }
    #ashirwad-offer-bar .bar-strike {
      text-decoration: line-through;
      opacity: 0.65;
      font-weight: 400;
    }
    @media (max-width: 600px) {
      #ashirwad-offer-bar { font-size: 12px; gap: 8px; }
    }
  `;
  document.head.appendChild(style);

  function formatPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
  }

  function renderBar(config) {
    // Remove existing bar if any
    var existing = document.getElementById('ashirwad-offer-bar');
    if (existing) existing.remove();

    if (!config || config.mode === 'none') return;

    var bar = document.createElement('div');
    bar.id = 'ashirwad-offer-bar';

    var waMsg = '';
    var innerHtml = '';

    if (config.mode === 'off-season') {
      bar.className = 'mode-off-season';
      waMsg = encodeURIComponent('Hello! I saw the Off-Season Rate offer on your website and want to book Ashirwad Homestay.');
      innerHtml = [
        '<span>🏔️ Off-Season Rate &mdash;',
        '<strong>' + formatPrice(config.offSeason.price) + '/night</strong>',
        '<span class="bar-strike">' + formatPrice(config.offSeason.peakPrice) + '</span>',
        '&nbsp;&middot;&nbsp; Peak Season: ' + formatPrice(config.offSeason.peakPrice) + '</span>',
        '<a class="bar-book-btn" href="https://wa.me/917906174040?text=' + waMsg + '" target="_blank" rel="noopener">Book Now →</a>'
      ].join(' ');
    } else if (config.mode === 'festival') {
      bar.className = 'mode-festival';
      waMsg = encodeURIComponent('Hello! I saw the ' + config.festival.text + ' offer and want to book Ashirwad Homestay.');
      innerHtml = [
        '<span>🎉 ' + config.festival.text + ' &mdash;',
        '<strong>' + formatPrice(config.festival.price) + '/night</strong>',
        '<span class="bar-strike">' + formatPrice(config.festival.originalPrice) + '</span>',
        '&nbsp;&middot;&nbsp; Valid till ' + config.festival.validTill + '</span>',
        '<a class="bar-book-btn" href="https://wa.me/917906174040?text=' + waMsg + '" target="_blank" rel="noopener">Book Now →</a>'
      ].join(' ');
    }

    innerHtml += '<button class="bar-dismiss" aria-label="Close" onclick="document.getElementById(\'ashirwad-offer-bar\').style.display=\'none\';try{localStorage.setItem(\'offerDismissed\',\'1\');}catch(e){}">✕</button>';
    bar.innerHTML = innerHtml;

    // Insert before first element in body
    document.body.insertBefore(bar, document.body.firstChild);

    // Update inline price displays if any
    updateInlinePrices(config);
  }

  var _priceOriginals = [];

  function updateInlinePrices(config) {
    // Restore any previously replaced prices
    _priceOriginals.forEach(function(item) {
      if (item.node.parentNode) item.node.parentNode.replaceChild(item.original, item.node);
    });
    _priceOriginals = [];

    if (!config || config.mode === 'none') return;

    var offerPrice = config.mode === 'off-season' ? config.offSeason.price : config.festival.price;
    var offerStr = formatPrice(offerPrice);
    var origStr = '₹6,000';

    // Walk all text nodes in body, skip the offer bar itself
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) {
      if (node.parentNode && node.parentNode.closest && node.parentNode.closest('#ashirwad-offer-bar')) continue;
      if (node.nodeValue && node.nodeValue.indexOf(origStr) !== -1) {
        nodes.push(node);
      }
    }

    nodes.forEach(function(textNode) {
      var parts = textNode.nodeValue.split(origStr);
      if (parts.length < 2) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function(part, i) {
        frag.appendChild(document.createTextNode(part));
        if (i < parts.length - 1) {
          var wrap = document.createElement('span');
          wrap.innerHTML = '<strong style="color:inherit">' + offerStr + '</strong> <span style="text-decoration:line-through;opacity:0.55;font-size:0.85em;font-weight:400;">' + origStr + '</span>';
          frag.appendChild(wrap);
        }
      });
      var replacement = document.createElement('span');
      replacement.appendChild(frag);
      textNode.parentNode.replaceChild(replacement, textNode);
      _priceOriginals.push({ node: replacement, original: textNode });
    });
  }

  // Default offer shown when Firebase is not yet configured
  var DEFAULT_OFFER = {
    mode: 'festival',
    festival: {
      text: 'New Property Opening Special',
      price: 3000,
      originalPrice: 6000,
      validTill: 'Limited Period'
    },
    offSeason: { price: 3000, peakPrice: 6000 }
  };

  function loadOfferFromFirebase() {
    // Check if Firebase is configured
    if (!window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
      // Firebase not set up yet — use default hardcoded offer
      renderBar(DEFAULT_OFFER);
      return;
    }

    // Load Firebase SDK dynamically
    var sdkScript = document.createElement('script');
    sdkScript.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js';
    sdkScript.onload = function () {
      var fsScript = document.createElement('script');
      fsScript.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js';
      fsScript.onload = function () {
        try {
          if (!firebase.apps.length) {
            firebase.initializeApp(window.FIREBASE_CONFIG);
          }
          var db = firebase.firestore();
          db.collection('settings').doc('offer').get().then(function (doc) {
            if (doc.exists) {
              var config = doc.data();
              // Check dismiss preference
              try {
                var dismissed = localStorage.getItem('offerDismissed');
                // Reset dismiss if config changed (compare mode+price as fingerprint)
                var fingerprint = config.mode + (config.mode === 'off-season' ? config.offSeason.price : (config.festival ? config.festival.text : ''));
                var savedFp = localStorage.getItem('offerFingerprint');
                if (savedFp !== fingerprint) {
                  localStorage.removeItem('offerDismissed');
                  localStorage.setItem('offerFingerprint', fingerprint);
                  dismissed = null;
                }
                if (dismissed === '1') return;
              } catch (e) {}
              renderBar(config);
            }
          }).catch(function (err) {
            console.warn('Ashirwad Offer Bar: Could not load offer config', err);
          });
        } catch (err) {
          console.warn('Ashirwad Offer Bar: Firebase init failed', err);
        }
      };
      document.head.appendChild(fsScript);
    };
    document.head.appendChild(sdkScript);
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadOfferFromFirebase);
  } else {
    loadOfferFromFirebase();
  }
})();
