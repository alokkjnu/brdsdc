// =========================================================
// BRSPGC College Website – Main JavaScript
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ═══════════════════════════════════════════════════
     LANGUAGE SWITCHER  (English ⇄ Hindi)
     ─ Toggle button #langToggle in topbar
     ─ Marks: data-i18n="key" on any element
     ─ Preference saved in localStorage
     ═══════════════════════════════════════════════════ */
  (function () {
    var T = {
      en: {
        'top.location':'Bartar, Nonhara, Ghazipur (U.P.) 233001','top.code':'College Code: 0513',
        'nav.home':'Home','nav.about':'About Us','nav.admin':'Administration',
        'nav.academic':'Academic','nav.admission':'Admission & Fees','nav.student':'Student Life',
        'nav.info':'Information','nav.faculty':'Faculty','nav.gallery':'Gallery',
        'nav.contact':'Contact','nav.rti':'RTI','nav.antiragging':'Anti Ragging',
        'dd.about.college':'About College','dd.about.vision':'Vision & Mission',
        'dd.about.aishe':'AISHE Certificate','dd.about.devplan':'College Development Plan',
        'dd.about.affiliation':'Affiliation University','dd.about.accreditation':'Accreditation Status',
        'dd.about.facilities':'Facilities',
        'dd.admin.principal':"Principal's Message",'dd.admin.manager':"Manager's Message",
        'dd.admin.director':"Director's Message",
        'dd.academic.programmes':'Programmes','dd.academic.exam':'Examination',
        'dd.academic.statutes':'Statutes / Ordinances','dd.academic.library':'Library',
        'dd.academic.calendar':'Academic Calendar',
        'dd.admission.process':'Admission Process','dd.admission.fee':'Fee Structure',
        'dd.admission.roster':'Reservation Roster','dd.admission.labs':'Labs & Infrastructure',
        'dd.admission.library':'Library','dd.admission.refund':'Fee Refund Policy',
        'dd.student.nss':'NSS','dd.student.sports':'Sports & Curriculum',
        'dd.student.training':'Training Program','dd.student.scholarship':'Scholarship',
        'dd.student.healthcare':'Health Care',
        'dd.info.rti':'Right to Information Act','dd.info.circulars':'Circular & Notice',
        'dd.info.announcements':'Announcement','dd.info.newsletter':'News Letter',
        'dd.info.events':'Events',
        'footer.about':'About College','footer.links':'Quick Links',
        'footer.programmes':'Programmes Offered','footer.contact':'Contact Us',
        'footer.copyright':'© 2024 Baba Ramdev Smarak Post Graduate College. All Rights Reserved.',
        'footer.affiliation':'Affiliated to VBSPU Jaunpur | NCTE Approved | SCERT Affiliated | UGC 2(f) & 12(B)',
        'hero.tag':'Est. 2000 | College Code 0513',
        'hero.title':'Excellence in Higher Education',
        'hero.desc':'NCTE Approved • SCERT Affiliated • Affiliated to Veer Bahadur Singh Purvanchal University, Jaunpur • UGC Recognition under Section 2(f) & 12(B)',
        'hero.btn.admission':'Apply for Admission','hero.btn.about':'About College',
        'stat.students':'Students Enrolled','stat.faculty':'Faculty Members',
        'stat.programmes':'Programmes Offered','stat.years':'Years of Excellence',
        'stat.alumni':'Alumni Network','stat.books':'Library Books',
        'sec.prog.tag':'Academic Programmes','sec.prog.title':'Courses We Offer',
        'sec.prog.sub':'Empowering students through quality education in diverse disciplines',
        'sec.notice.tag':'Latest Updates','sec.notice.title':'Notice Board',
        'sec.ql.tag':'Quick Access','sec.ql.title':'Quick Links','sec.about.tag':'About Us',
        'ql.admission':'Admission','ql.fee':'Fee Structure','ql.exam':'Examination',
        'ql.library':'Library','ql.calendar':'Academic Calendar','ql.scholarship':'Scholarship',
        'ql.nss':'NSS','ql.gallery':'Gallery','ql.rti':'RTI',
        'ql.antiragging':'Anti Ragging','ql.faculty':'Faculty','ql.contact':'Contact Us'
      },
      hi: {
        'top.location':'बरतर, नोनहरा, गाज़ीपुर (उ0प्र0) 233001','top.code':'महाविद्यालय कोड: 0513',
        'nav.home':'होम','nav.about':'हमारे बारे में','nav.admin':'प्रशासन',
        'nav.academic':'शैक्षणिक','nav.admission':'प्रवेश एवं शुल्क','nav.student':'छात्र जीवन',
        'nav.info':'सूचना','nav.faculty':'शिक्षक मंडल','nav.gallery':'गैलरी',
        'nav.contact':'संपर्क','nav.rti':'आरटीआई','nav.antiragging':'रैगिंग विरोधी',
        'dd.about.college':'महाविद्यालय के बारे में','dd.about.vision':'दृष्टि एवं मिशन',
        'dd.about.aishe':'आईशे प्रमाण पत्र','dd.about.devplan':'विकास योजना',
        'dd.about.affiliation':'संबद्ध विश्वविद्यालय','dd.about.accreditation':'मान्यता स्थिति',
        'dd.about.facilities':'सुविधाएं',
        'dd.admin.principal':'प्राचार्य का संदेश','dd.admin.manager':'प्रबंधक का संदेश',
        'dd.admin.director':'निदेशक का संदेश',
        'dd.academic.programmes':'पाठ्यक्रम','dd.academic.exam':'परीक्षा',
        'dd.academic.statutes':'विधियाँ / अध्यादेश','dd.academic.library':'पुस्तकालय',
        'dd.academic.calendar':'शैक्षणिक कैलेंडर',
        'dd.admission.process':'प्रवेश प्रक्रिया','dd.admission.fee':'शुल्क संरचना',
        'dd.admission.roster':'आरक्षण रोस्टर','dd.admission.labs':'प्रयोगशाला एवं अवसंरचना',
        'dd.admission.library':'पुस्तकालय','dd.admission.refund':'शुल्क वापसी नीति',
        'dd.student.nss':'एनएसएस','dd.student.sports':'खेल एवं पाठ्यक्रम',
        'dd.student.training':'प्रशिक्षण कार्यक्रम','dd.student.scholarship':'छात्रवृत्ति',
        'dd.student.healthcare':'स्वास्थ्य सेवा',
        'dd.info.rti':'सूचना का अधिकार अधिनियम','dd.info.circulars':'परिपत्र एवं नोटिस',
        'dd.info.announcements':'घोषणा','dd.info.newsletter':'न्यूज़लेटर',
        'dd.info.events':'कार्यक्रम',
        'footer.about':'महाविद्यालय के बारे में','footer.links':'त्वरित लिंक',
        'footer.programmes':'उपलब्ध पाठ्यक्रम','footer.contact':'संपर्क करें',
        'footer.copyright':'© 2024 बाबा रामदेव स्मारक स्नातकोत्तर महाविद्यालय। सर्वाधिकार सुरक्षित।',
        'footer.affiliation':'वीबीएसपीयू जौनपुर से संबद्ध | एनसीटीई अनुमोदित | एससीईआरटी संबद्ध | यूजीसी 2(f) एवं 12(B)',
        'hero.tag':'स्थापना 2000 | महाविद्यालय कोड 0513',
        'hero.title':'उच्च शिक्षा में उत्कृष्टता',
        'hero.desc':'एनसीटीई अनुमोदित • एससीईआरटी संबद्ध • वीर बहादुर सिंह पूर्वांचल विश्वविद्यालय जौनपुर से संबद्ध • यूजीसी धारा 2(f) एवं 12(B) के तहत मान्यता',
        'hero.btn.admission':'प्रवेश के लिए आवेदन करें','hero.btn.about':'महाविद्यालय के बारे में',
        'stat.students':'नामांकित छात्र','stat.faculty':'शिक्षक सदस्य',
        'stat.programmes':'उपलब्ध पाठ्यक्रम','stat.years':'उत्कृष्टता के वर्ष',
        'stat.alumni':'पूर्व छात्र नेटवर्क','stat.books':'पुस्तकालय पुस्तकें',
        'sec.prog.tag':'शैक्षणिक कार्यक्रम','sec.prog.title':'हमारे पाठ्यक्रम',
        'sec.prog.sub':'विविध विषयों में गुणवत्तापूर्ण शिक्षा के माध्यम से छात्रों को सशक्त बनाना',
        'sec.notice.tag':'ताज़ा अपडेट','sec.notice.title':'सूचना पट्ट',
        'sec.ql.tag':'त्वरित पहुँच','sec.ql.title':'त्वरित लिंक','sec.about.tag':'हमारे बारे में',
        'ql.admission':'प्रवेश','ql.fee':'शुल्क संरचना','ql.exam':'परीक्षा',
        'ql.library':'पुस्तकालय','ql.calendar':'शैक्षणिक कैलेंडर','ql.scholarship':'छात्रवृत्ति',
        'ql.nss':'एनएसएस','ql.gallery':'गैलरी','ql.rti':'आरटीआई',
        'ql.antiragging':'रैगिंग विरोधी','ql.faculty':'शिक्षक मंडल','ql.contact':'संपर्क करें'
      }
    };

    var lang = localStorage.getItem('brspgc_lang') || 'en';

    function applyLang(l) {
      lang = l;
      localStorage.setItem('brspgc_lang', l);
      document.documentElement.lang = (l === 'hi') ? 'hi' : 'en';
      /* translate all marked elements */
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (T[l] && T[l][key] !== undefined) { el.textContent = T[l][key]; }
      });
      /* update toggle button highlight */
      var enEl = document.querySelector('.lang-en-opt');
      var hiEl = document.querySelector('.lang-hi-opt');
      if (enEl) enEl.classList.toggle('active-lang', l === 'en');
      if (hiEl) hiEl.classList.toggle('active-lang', l === 'hi');
    }

    /* apply saved / default language on load */
    applyLang(lang);

    /* toggle button click */
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyLang(lang === 'en' ? 'hi' : 'en');
      });
    }
  }());

  /* ── Mobile Nav Toggle ── */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  /* ── Mobile Dropdown Toggle ── */
  document.querySelectorAll('.nav-item.dropdown .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 1200) {
        e.preventDefault();
        const parent = link.closest('.nav-item.dropdown');
        // Close other open dropdowns
        document.querySelectorAll('.nav-item.dropdown.open').forEach(function (el) {
          if (el !== parent) el.classList.remove('open');
        });
        parent.classList.toggle('open');
      }
    });
  });

  /* ── Sticky Navbar shadow ── */
  const navbar = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar && navbar.classList.add('scrolled');
    } else {
      navbar && navbar.classList.remove('scrolled');
    }
    // Back to top
    const btt = document.getElementById('backToTop');
    if (btt) {
      btt.classList.toggle('visible', window.scrollY > 400);
    }
  });

  /* ── Back to Top ── */
  const btt = document.getElementById('backToTop');
  if (btt) {
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════════════════════════════════════════
     CAMPUS CAROUSEL
     ─ Auto-advances every 4.5 s
     ─ Pauses on hover / touch
     ─ Prev / Next buttons
     ─ Dot navigation
     ─ Keyboard ← → arrows
     ─ Touch / swipe support
     ═══════════════════════════════════════════════ */
  (function () {
    var carousel   = document.getElementById('campusCarousel');
    if (!carousel) return;

    var track      = document.getElementById('carouselTrack');
    var slides     = Array.from(track.querySelectorAll('.carousel-slide'));
    var dots       = Array.from(document.querySelectorAll('.carousel-dot'));
    var prevBtn    = document.getElementById('carouselPrev');
    var nextBtn    = document.getElementById('carouselNext');
    var progressEl = document.getElementById('carouselProgress');

    var total      = slides.length;
    var current    = 0;
    var INTERVAL   = 4500;      // ms between auto-advances
    var timer      = null;
    var progTimer  = null;

    function goTo(idx) {
      // Wrap around
      idx = ((idx % total) + total) % total;

      // Remove active from current slide
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('active');

      current = idx;

      // Move track
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      // Activate new slide
      slides[current].classList.add('is-active');
      dots[current].classList.add('active');

      // Re-run progress bar
      startProgress();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // ── Progress bar animation ──
    function startProgress() {
      clearTimeout(progTimer);
      if (!progressEl) return;
      progressEl.style.transition = 'none';
      progressEl.style.width = '0%';
      // Force reflow
      void progressEl.offsetWidth;
      progressEl.style.transition = 'width ' + INTERVAL + 'ms linear';
      progressEl.style.width = '100%';
    }

    // ── Auto-play ──
    function startAuto() {
      stopAuto();
      timer = setInterval(next, INTERVAL);
      startProgress();
    }
    function stopAuto() {
      clearInterval(timer);
      if (progressEl) {
        progressEl.style.transition = 'none';
        progressEl.style.width = '0%';
      }
    }

    // ── Init first slide ──
    slides[current].classList.add('is-active');
    dots[current].classList.add('active');
    startAuto();

    // ── Button events ──
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAuto(); });

    // ── Dot events ──
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goTo(parseInt(dot.dataset.slide));
        startAuto();
      });
    });

    // ── Pause on hover ──
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // ── Keyboard navigation ──
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { prev(); startAuto(); }
      if (e.key === 'ArrowRight') { next(); startAuto(); }
    });

    // ── Touch / Swipe support ──
    var touchStartX = 0;
    var touchEndX   = 0;
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {          // minimum swipe distance
        if (diff > 0) next(); else prev();
      }
      startAuto();
    }, { passive: true });

    // ── Pause when tab/window not visible (battery saving) ──
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto(); else startAuto();
    });

  }());

  /* ── Counter Animation ── */
  function animateCounter(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(function () {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }, 16);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateCounter(el, parseInt(el.dataset.count), 1500);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { obs.observe(c); });
  }

  /* ── Gallery Filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.dataset.cat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ── Duplicate ticker for seamless loop ── */
  const tickerItems = document.querySelector('.ticker-items');
  if (tickerItems) {
    tickerItems.innerHTML += tickerItems.innerHTML;
  }

  /* ── Active nav on scroll ── */
  // Close nav on outside click (mobile / tablet)
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 1200) {
      if (navMenu && navMenu.classList.contains('open')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('active');
        }
      }
    }
  });

  /* ── Site Search ── */
  (function () {
    var PAGES = [
      { title:'Home', url:'/', desc:'College homepage with news, programmes and quick links', cat:'General', icon:'fa-home', kw:'home index' },
      { title:'About College', url:'/about', desc:'History, overview and information about BRSPGC', cat:'About', icon:'fa-building', kw:'about history overview college' },
      { title:'Vision & Mission', url:'/about/vision-mission', desc:'Institutional vision, mission and core values', cat:'About', icon:'fa-eye', kw:'vision mission values goals' },
      { title:'AISHE Certificate', url:'/about/aishe', desc:'All India Survey on Higher Education (AISHE) data', cat:'About', icon:'fa-file-alt', kw:'aishe survey certificate' },
      { title:'College Development Plan', url:'/about/development-plan', desc:'Institutional development and growth plans', cat:'About', icon:'fa-chart-line', kw:'development plan growth' },
      { title:'Affiliation University', url:'/about/affiliation', desc:'VBSPU Jaunpur affiliation details', cat:'About', icon:'fa-university', kw:'affiliation vbspu jaunpur university' },
      { title:'Accreditation Status', url:'/about/accreditation', desc:'NAAC accreditation and UGC recognition details', cat:'About', icon:'fa-star', kw:'accreditation naac ugc recognition' },
      { title:'Facilities', url:'/about/facilities', desc:'Campus facilities including labs, library, sports', cat:'About', icon:'fa-tools', kw:'facilities campus infrastructure labs' },
      { title:"Principal's Message", url:'/admin-msg/principal', desc:'Message from the college Principal', cat:'Administration', icon:'fa-user-tie', kw:'principal message administration head' },
      { title:"Manager's Message", url:'/admin-msg/manager', desc:'Message from the college Manager', cat:'Administration', icon:'fa-user-shield', kw:'manager message administration' },
      { title:"Director's Message", url:'/admin-msg/director', desc:'Message from the college Director', cat:'Administration', icon:'fa-user-graduate', kw:'director message administration' },
      { title:'Academic Programmes', url:'/academic/programmes', desc:'BA, BSc, BCom, MA, MSc, BEd, DElEd courses offered', cat:'Academic', icon:'fa-graduation-cap', kw:'programmes courses ba bsc bcom ma msc bed deled btc' },
      { title:'Examination', url:'/academic/examination', desc:'Examination schedule, forms and results', cat:'Academic', icon:'fa-pen-alt', kw:'examination exam schedule result form' },
      { title:'Statutes & Ordinances', url:'/academic/statutes', desc:'University statutes and academic ordinances', cat:'Academic', icon:'fa-gavel', kw:'statutes ordinances rules regulations' },
      { title:'Library', url:'/academic/library', desc:'Library resources, books, journals and e-resources', cat:'Academic', icon:'fa-book', kw:'library books journals reading resources' },
      { title:'Academic Calendar', url:'/academic/calendar', desc:'Academic year calendar, holidays and event schedule', cat:'Academic', icon:'fa-calendar-alt', kw:'calendar academic year schedule holidays' },
      { title:'Admission Process', url:'/admission/process', desc:'Step-by-step admission process and eligibility criteria', cat:'Admission', icon:'fa-tasks', kw:'admission process eligibility apply' },
      { title:'Fee Structure', url:'/admission/fee-structure', desc:'Course-wise fee details and payment schedule', cat:'Admission', icon:'fa-rupee-sign', kw:'fee structure amount payment charges rupees' },
      { title:'Reservation Roster', url:'/admission/reservation-roster', desc:'SC / ST / OBC / EWS reservation details', cat:'Admission', icon:'fa-list-ol', kw:'reservation roster sc st obc ews quota' },
      { title:'Labs & Infrastructure', url:'/admission/labs-infra', desc:'Science labs, computer lab and campus infrastructure', cat:'Admission', icon:'fa-flask', kw:'labs laboratory infrastructure computer science' },
      { title:'Fee Refund Policy', url:'/admission/fee-refund', desc:'Rules for fee refund on cancellation of admission', cat:'Admission', icon:'fa-undo-alt', kw:'fee refund policy cancellation' },
      { title:'NSS', url:'/student/nss', desc:'National Service Scheme activities and enrolment', cat:'Student Life', icon:'fa-hands-helping', kw:'nss national service scheme volunteer social' },
      { title:'Sports & Curriculum', url:'/student/sports', desc:'Sports activities and co-curricular programmes', cat:'Student Life', icon:'fa-running', kw:'sports games athletics curriculum co-curricular' },
      { title:'Training Program', url:'/student/training', desc:'Skill development and vocational training', cat:'Student Life', icon:'fa-chalkboard-teacher', kw:'training program skill development vocational' },
      { title:'Scholarship', url:'/student/scholarship', desc:'Government and institutional scholarships for students', cat:'Student Life', icon:'fa-medal', kw:'scholarship grant financial aid stipend' },
      { title:'Health Care', url:'/student/healthcare', desc:'Medical facility and health services for students', cat:'Student Life', icon:'fa-heartbeat', kw:'health care medical facility hospital' },
      { title:'Right to Information Act', url:'/info/rti', desc:'RTI disclosures and information requests', cat:'Information', icon:'fa-balance-scale', kw:'rti right information act disclosure' },
      { title:'Circulars & Notices', url:'/info/circulars', desc:'Official circulars and notices from administration', cat:'Information', icon:'fa-bullhorn', kw:'circular notice official announcement order' },
      { title:'Announcements', url:'/info/announcements', desc:'Latest college announcements and updates', cat:'Information', icon:'fa-bell', kw:'announcement update news latest' },
      { title:'News Letter', url:'/info/newsletter', desc:'College newsletter and publications', cat:'Information', icon:'fa-newspaper', kw:'newsletter publication magazine' },
      { title:'Events', url:'/info/events', desc:'Upcoming and past college events and activities', cat:'Information', icon:'fa-calendar-check', kw:'events activities cultural sports fest programme' },
      { title:'Faculty', url:'/faculty', desc:'Teaching and non-teaching staff details', cat:'General', icon:'fa-chalkboard-teacher', kw:'faculty staff teacher professor lecturer' },
      { title:'Gallery', url:'/gallery', desc:'Photo gallery of campus, events and activities', cat:'General', icon:'fa-images', kw:'gallery photos pictures campus events' },
      { title:'Contact Us', url:'/contact', desc:'Address, phone, email and location map', cat:'General', icon:'fa-phone-alt', kw:'contact address phone email location ghazipur' },
      { title:'RTI', url:'/rti', desc:'Right to Information statutory disclosures', cat:'General', icon:'fa-balance-scale', kw:'rti right information transparency' },
      { title:'Anti Ragging', url:'/anti-ragging', desc:'Anti-ragging policy, helpline and committee details', cat:'General', icon:'fa-shield-alt', kw:'anti ragging helpline policy committee ugc' }
    ];

    var overlay  = document.getElementById('searchOverlay');
    var openBtn  = document.getElementById('searchToggle');
    var closeBtn = document.getElementById('searchClose');
    var input    = document.getElementById('searchInput');
    var results  = document.getElementById('searchResults');
    var hint     = document.getElementById('searchHint');
    if (!overlay) return;

    function openSearch() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      input.value = '';
      results.innerHTML = '';
      if (hint) hint.style.display = 'block';
      setTimeout(function () { input.focus(); }, 80);
    }
    function closeSearch() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (openBtn)  openBtn.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        overlay.classList.contains('open') ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    });

    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '';
        if (hint) hint.style.display = 'block';
        return;
      }
      if (hint) hint.style.display = 'none';
      var matched = PAGES.filter(function (p) {
        return (p.title + ' ' + p.desc + ' ' + p.kw + ' ' + p.cat).toLowerCase().indexOf(q) !== -1;
      });
      if (!matched.length) {
        results.innerHTML = '<div class="search-no-results"><i class="fas fa-search"></i>No pages found for &ldquo;<strong>' + q + '</strong>&rdquo;</div>';
        return;
      }
      results.innerHTML = matched.map(function (p) {
        return '<a href="' + p.url + '" class="search-result-item">' +
          '<div class="search-result-icon"><i class="fas ' + p.icon + '"></i></div>' +
          '<div class="search-result-body">' +
            '<div class="search-result-title">' + p.title + '</div>' +
            '<div class="search-result-meta">' + p.desc + '</div>' +
          '</div>' +
          '<span class="search-result-cat">' + p.cat + '</span>' +
        '</a>';
      }).join('');
    });
  }());

  /* ── Animate on scroll ── */
  const animEls = document.querySelectorAll('.prog-card, .notice-item, .faculty-card, .quick-card');
  if (animEls.length && window.IntersectionObserver) {
    const fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .4s ease, transform .4s ease';
      fadeObs.observe(el);
    });
  }

});
