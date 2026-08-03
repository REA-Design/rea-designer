/*
=====================================================
REA.DESIGNER PORTFOLIO
MAIN JAVASCRIPT
=====================================================
*/

console.log("REA Portfolio Ready");

/* =====================================================
   PORTFOLIO DATA
   -----------------------------------------------------
   عدّلي هنا فقط. كل مشروع إله الحقول التالية تعدليها لحاله:
     title    → اسم المشروع
     subtitle → عنوان فرعي قصير (مثال: "براند منتجات فلسطينية")
     desc     → وصف مختصر يظهر تحت الصورة بكرت المعرض
     about    → نبذة أوسع ومختلفة تظهر بصفحة تفاصيل المشروع
                (تحت "نبذة عن المشروع") - لازم تكتبيها لحالها،
                مش نفس الـ desc
     colors   → مصفوفة ألوان (كود Hex) خاصة فيه هو بس
     fonts    → مصفوفة الخطوط المستخدمة فيه هو بس (اسم + عينة)

   كل مشروع (بكل التصنيفات: شعارات، كروت عمل، مطبوعات، هوية
   بصرية) إله colors و fonts خاصين فيه، مش مشتركين مع غيره -
   عدّلي أي وحدة بدون ما تأثر على الباقي.

   ما تلمسي أي شي تاني (الصور بتتربط تلقائيًا برقم المشروع
   جوه مجلده: 1.png / 2.png / 3.png / 4.png).
===================================================== */

const projectsInfo = {

    logo: [
        {
            title: "ASHWAQ.SHOP",
            subtitle: "متجر متخصص بتقديم منتجات فلسطينية ",
            desc: "صُمم  الشعار ليعكس أصالة العلامة التجارية ويبرز هويتها بأسلوب عصري.",
            about: "تم تطوير هوية الشعار بالتعاون مع صاحبة المشروع لتجسيد روح المنتجات الفلسطينية الأصيلة، من خلال طائر السنونو المزخرف بنقشة التطريز الفلسطيني وغصن الزيتون، مع اختيار عناصر بصرية تنقل إحساس التراث بأسلوب عصري يليق بمتجر إلكتروني.",
            colors: ["#1A1A1A", "#B23A2E", "#C9A227", "#6E7B3A", "#FFFFFF"],
            fonts: [
                { name: "خط العنوان (Acumin Pro Bold)", sample: "Aa" },
                { name: "خط الوصف (Acumin Pro)", sample: "Aa" }
            ]
        },
        {
            title: "AROMA ELEGANCE",
            subtitle: "براند عطور فاخر",
            desc: "صُمم الشعار ليعكس الفخامة والرقي ويبرز هوية العلامة التجارية بأسلوب أنيق.",
            about: "استوحينا تصميم الشعار من فكرة الفخامة الهادئة، بزخرفة زهرة لوتس أحادية اللون ترمز للنقاء والعطور الفاخرة، مع خط طباعي كلاسيكي يعكس مستوى العلامة التجارية ويمنحها حضورًا بصريًا راقيًا.",
            colors: ["#12141C", "#FFFFFF", "#F7F5F0"],
            fonts: [
                { name: "Playfair Display  ", sample: "Aa" },
                { name: "Cormorant Garamond ( )", sample: "Aa" }
            ]
        },
        {
            title: "REA.DESIGNER",
            subtitle: "استوديو تصميم إبداعي",
            desc: " صُمم الشعار ليعكس الإبداع والاحتراف ويجسد هوية العلامة التجارية بأسلوب مميز.",
            about: "شعار الاستوديو نفسه صُمم ليكون بصمة بصرية تلخص فلسفة العمل: تحويل الأفكار إلى هويات متكاملة. الشكل مستوحى من دمج حرفي الاسم بأسلوب خط عربي حر يشبه جناح طائر، بجانب ريشة ترمز للإبداع والكتابة، على خلفية أخضر بترولي عميق يمنح إحساسًا بالثقة والفخامة.",
            colors: ["#0E4B53", "#F3EFE4"],
            fonts: [
                { name: "للعنوان رمز خطي مرسوم يدويًا ", sample: "Aa" },
                { name: "Montserrat (   REA.DESIGNER)", sample: "Aa" }
            ]
        },
        {
            title: "AL RAHEEQ DRY CLEAN",
            subtitle: "شركة متخصصة في خدمات الغسيل التجاري",
            desc: "صُمم الشعار ليعكس الاحترافية والثقة ويعبر عن هوية الشركة بأسلوب حديث.",
            about: "تم تصميم الشعار ليعكس النظافة والاحترافية التي تقدمها الشركة، برمز غسالة مبسّط ممزوج بورقة نبات وهالة ذهبية توحي بالنقاء والفخامة، ضمن دائرة رفيعة تمنح الشعار طابعًا متوازنًا يناسب قطاع الخدمات التجارية الراقية.",
            colors: ["#1F3B3A", "#2E8B84", "#C9A25E", "#FDFBF7"],
            fonts: [
                { name: "Playfair Display ", sample: "Aa" },
                { name: "Montserrat Light ", sample: "Aa" }
            ]
        }
    ],

    "business-cards": [
        {
            title: "ASHWAQ.SHOP",
            subtitle: "متجر متخصص بتقديم منتجات فلسطينية ",
            desc: "صُمم  الكرت ليعكس أصالة العلامة التجارية ويبرز هويتها بأسلوب عصري.",
            about: "تم تطوير هوية الشعار بالتعاون مع صاحبة المشروع لتجسيد روح المنتجات الفلسطينية الأصيلة، مع اختيار عناصر بصرية تنقل إحساس التراث بأسلوب عصري يليق بمتجر إلكتروني.",
            colors: ["#1A1A1A", "#B23A2E", "#C9A227", "#6E7B3A", "#FFFFFF"],
            fonts: [
                { name: " Acumin Pro Bold  ", sample: "Aa" },
                { name: "Acumin Pro", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 2",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 3",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 4",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        }
    ],

    prints: [
        {
            title: "اسم المشروع 1",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 2",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 3",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 4",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        }
    ],

    /* مثال معبأ كنموذج - عدّلي النص زي ما تحبي */
    branding: [
        {
            title: "ASHWAQ.SHOP",
            subtitle: "براند منتجات فلسطينية",
            desc: "هوية بصرية تعكس أصالة المنتجات الفلسطينية وتبرزها بأسلوب عصري يرسخ حضور العلامة التجارية.",
            about: "تم تطوير هوية الشعار بالتعاون مع صاحبة المشروع لتجسيد روح المنتجات الفلسطينية الأصيلة، مع اختيار عناصر بصرية تنقل إحساس التراث بأسلوب عصري يليق بمتجر إلكتروني.",
            colors: ["#1A1A1A", "#B23A2E", "#C9A227", "#6E7B3A", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 2",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 3",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        },
        {
            title: "اسم المشروع 4",
            subtitle: "عنوان فرعي قصير",
            desc: "وصف عن المشروع.",
            about: "نبذة تفصيلية أوسع عن قصة المشروع وفكرته - عدّليها من هون لتختلف عن الوصف المختصر اللي فوق.",
            colors: ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"],
            fonts: [
                { name: "اسم الخط الأول", sample: "Aa" },
                { name: "اسم الخط الثاني", sample: "Aa" }
            ]
        }
    ]

};

/* الألوان والخطوط الافتراضية لأي مشروع - تقدري تغيريها لكل مشروع لو حبيتي */
const defaultColors = ["#0E4B53", "#C8A96B", "#222222", "#FAF8F5", "#FFFFFF"];
const defaultFonts  = [
    { name: "اسم الخط الأول", sample: "Aa" },
    { name: "اسم الخط الثاني", sample: "Aa" }
];

function buildProject(folder, index){
    const info = (projectsInfo[folder] && projectsInfo[folder][index - 1]) || {};
    return {
        id: folder + "-" + index,
        image: "images/" + folder + "/" + index + ".png",
        title: info.title || "اسم المشروع",
        subtitle: info.subtitle || "",
        desc: info.desc || "وصف عن المشروع.",
        about: info.about || info.desc || "نبذة تفصيلية عن المشروع.",
        colors: info.colors || defaultColors,
        fonts: info.fonts || defaultFonts,
        /* صور تطبيقات الهوية (سلايدر أسفل الصفحة) - أضيفي المسارات هون */
        applications: [
            "images/" + folder + "/applications/" + index + "-1.png",
            "images/" + folder + "/applications/" + index + "-2.png",
            "images/" + folder + "/applications/" + index + "-3.png",
            "images/" + folder + "/applications/" + index + "-4.png"
        ]
    };
}

function buildCategory(folder){
    return [1, 2, 3, 4].map(function(i){ return buildProject(folder, i); });
}

const portfolioData = {
    logo:            buildCategory("logo"),
    "business-cards": buildCategory("business-cards"),
    prints:          buildCategory("prints"),
    branding:        buildCategory("branding")
};

/* ترتيب التصنيفات في "الكل" */
const allCategoriesOrder = ["logo", "business-cards", "prints", "branding"];

/* أسماء وأيقونات التصنيفات لعرضها فوق كل بطاقة (اختياري) */
const categoryLabels = {
    logo: "تصميم شعار",
    "business-cards": "كرت عمل",
    prints: "مطبوعات",
    branding: "هوية بصرية"
};

/* =====================================================
   SOCIAL MEDIA DATA (ريلز / ستوري / بوستات)
   -----------------------------------------------------
   عدّلي هنا فقط: اسم ووصف كل ريل/ستوري/بوست لحاله.
===================================================== */

const socialInfo = {

    reels: [
        { title: "اسم الريل 1", caption: "وصف قصير عن الريل." },
        { title: "اسم الريل 2", caption: "وصف قصير عن الريل." },
        { title: "اسم الريل 3", caption: "وصف قصير عن الريل." },
        { title: "اسم الريل 4", caption: "وصف قصير عن الريل." }
    ],

    stories: [
        { title: "اسم الستوري 1", caption: "وصف قصير عن الستوري." },
        { title: "اسم الستوري 2", caption: "وصف قصير عن الستوري." },
        { title: "اسم الستوري 3", caption: "وصف قصير عن الستوري." },
        { title: "اسم الستوري 4", caption: "وصف قصير عن الستوري." }
    ],

    posts: [
        { title: "اسم البوست 1", caption: "وصف قصير عن البوست." },
        { title: "اسم البوست 2", caption: "وصف قصير عن البوست." },
        { title: "اسم البوست 3", caption: "وصف قصير عن البوست." },
        { title: "اسم البوست 4", caption: "وصف قصير عن البوست." }
    ]

};

/* سوشيال ميديا: ريلز / ستوري / بوستات - 4 لكل قسم */
const socialData = {
    reels: [1, 2, 3, 4].map(function(i){
        const info = socialInfo.reels[i - 1] || {};
        return {
            id: "reels-" + i,
            video: "images/social/reels/" + i + ".mp4",
            poster: "images/social/reels/" + i + "-cover.png",
            title: info.title || "منشور REA.DESIGNER",
            caption: info.caption || "تصميم منشور سوشال ميديا لعلامة تجارية."
        };
    }),
    stories: [1, 2, 3, 4].map(function(i){
        const info = socialInfo.stories[i - 1] || {};
        return {
            id: "stories-" + i,
            image: "images/social/stories/" + i + ".png",
            title: info.title || "منشور REA.DESIGNER",
            caption: info.caption || "تصميم منشور سوشال ميديا لعلامة تجارية."
        };
    }),
    posts: [1, 2, 3, 4].map(function(i){
        const info = socialInfo.posts[i - 1] || {};
        return {
            id: "posts-" + i,
            image: "images/social/posts/" + i + ".png",
            title: info.title || "منشور REA.DESIGNER",
            caption: info.caption || "تصميم منشور سوشال ميديا لعلامة تجارية."
        };
    })
};


document.addEventListener("DOMContentLoaded", function(){


/* =====================================================
   CONTACT LINKS
===================================================== */

const contactLinks = {
    whatsapp: "https://wa.me/970568445517",
    linktree: "https://linktr.ee/rea.designer",
    email: "mailto:rea.advertising99@gmail.com"
};

const whatsappLink = document.getElementById("whatsapp-link");
const linktreeLink = document.getElementById("linktree-link");
const emailLink = document.getElementById("email-link");

if(whatsappLink){ whatsappLink.href = contactLinks.whatsapp; }
if(linktreeLink){ linktreeLink.href = contactLinks.linktree; }
if(emailLink){ emailLink.href = contactLinks.email; }


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if(menuButton && mobileMenu){

    menuButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click", function(){
            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });

}


/* =====================================================
   HOME LINK — يضمن الرجوع لأعلى الصفحة كاملة
   (يحل مشكلة تغطية الـ header الثابت لبداية قسم الهيرو)
===================================================== */

document.querySelectorAll('a[href$="#home"]').forEach(function(link){
    link.addEventListener("click", function(e){
        const onIndexPage = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith("/");
        if(onIndexPage){
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.pushState(null, "", "index.html#home");
        }
    });
});

/* لو وصلنا من صفحة تانية (مثلاً portfolio.html) بالرابط index.html#home */
if(location.hash === "#home"){
    window.scrollTo(0, 0);
}


/* =====================================================
   CONTACT SLIDER
===================================================== */

const slides = document.querySelectorAll(".contact-slider .slide");
const dots = document.querySelectorAll(".contact-slider .dot");

let currentSlide = 0;

if(slides.length > 0){

    function showSlide(index){
        slides.forEach(function(slide){ slide.classList.remove("active"); });
        dots.forEach(function(dot){ dot.classList.remove("active"); });
        slides[index].classList.add("active");
        if(dots[index]){ dots[index].classList.add("active"); }
    }

    setInterval(function(){
        currentSlide++;
        if(currentSlide >= slides.length){ currentSlide = 0; }
        showSlide(currentSlide);
    }, 3000);

    dots.forEach(function(dot, index){
        dot.addEventListener("click", function(){
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

}


/* =====================================================
   SKILLS BARS ANIMATION ("مهاراتي")
===================================================== */

const skillItems = document.querySelectorAll(".skill-item");

if(skillItems.length > 0 && "IntersectionObserver" in window){

    const skillObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("in-view");
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: .4 });

    skillItems.forEach(function(item){ skillObserver.observe(item); });

}


/* =====================================================
   TESTIMONIALS SLIDER ("آراء العملاء")
===================================================== */

const testimonialsTrack = document.getElementById("testimonialsTrack");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDotsWrap = document.getElementById("testimonialsDots");
const prevTestimonial = document.getElementById("prevTestimonial");
const nextTestimonial = document.getElementById("nextTestimonial");

if(testimonialsTrack && testimonialCards.length > 0){

    let testimonialIndex = 0;

    testimonialCards.forEach(function(_, i){
        const dot = document.createElement("span");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", function(){
            testimonialIndex = i;
            updateTestimonials();
        });
        if(testimonialDotsWrap){ testimonialDotsWrap.appendChild(dot); }
    });

    function updateTestimonials(){
        testimonialsTrack.style.transform = "translateX(" + (testimonialIndex * 100) + "%)";
        if(testimonialDotsWrap){
            testimonialDotsWrap.querySelectorAll(".dot").forEach(function(dot, i){
                dot.classList.toggle("active", i === testimonialIndex);
            });
        }
    }

    if(nextTestimonial){
        nextTestimonial.addEventListener("click", function(){
            testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
            updateTestimonials();
        });
    }

    if(prevTestimonial){
        prevTestimonial.addEventListener("click", function(){
            testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
            updateTestimonials();
        });
    }

}


/* =====================================================
   PORTFOLIO (portfolio.html)
===================================================== */

const portfolioGrid = document.getElementById("portfolioGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const socialSubtabsWrap = document.getElementById("socialSubtabs");
const subtabButtons = document.querySelectorAll(".subtab-btn");
const emptyMessage = document.getElementById("portfolioEmpty");

if(portfolioGrid){

    let currentCategory = "all";
    let currentSocialTab = "reels";

    function cardTemplate(item, type, categoryKey){

        if(type === "video"){
            return (
                '<div class="portfolio-item" data-id="' + item.id + '">' +
                    '<div class="portfolio-image">' +
                        '<video src="' + item.video + '" poster="' + item.poster + '" controls preload="none"></video>' +
                    '</div>' +
                    '<div class="portfolio-info">' +
                        '<h3>' + item.title + '</h3>' +
                        '<p>' + item.caption + '</p>' +
                    '</div>' +
                '</div>'
            );
        }

        if(type === "image-only"){
            return (
                '<div class="portfolio-item" data-id="' + item.id + '">' +
                    '<div class="portfolio-image">' +
                        '<img src="' + item.image + '" alt="' + item.title + '">' +
                    '</div>' +
                    '<div class="portfolio-info">' +
                        '<h3>' + item.title + '</h3>' +
                        '<p>' + item.caption + '</p>' +
                    '</div>' +
                '</div>'
            );
        }

        /* default: clickable project with full detail page */
        return (
            '<div class="portfolio-item" data-id="' + item.id + '" data-category="' + categoryKey + '">' +
                '<div class="portfolio-image">' +
                    '<img src="' + item.image + '" alt="' + item.title + '">' +
                '</div>' +
                '<div class="portfolio-info">' +
                    '<h3>' + item.title + '</h3>' +
                    (item.subtitle ? '<span class="portfolio-subtitle">' + item.subtitle + '</span>' : '') +
                    '<p>' + item.desc + '</p>' +
                '</div>' +
            '</div>'
        );
    }

    function renderGrid(items, type, categoryKey){
        portfolioGrid.innerHTML = items.map(function(item){
            return cardTemplate(item, type, categoryKey);
        }).join("");

        if(emptyMessage){
            emptyMessage.style.display = items.length === 0 ? "block" : "none";
        }

        attachItemClicks(categoryKey);
    }

    function attachItemClicks(categoryKey){
        portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(card){
            /* الفيديوهات وصور الستوري/البوست ما بتفتح صفحة تفاصيل، فقط الشعارات/كروت العمل/المطبوعات/الهوية */
            if(!categoryKey || categoryKey === "social") return;

            card.addEventListener("click", function(e){
                if(e.target.tagName === "VIDEO") return;
                const id = card.dataset.id;
                const cat = card.dataset.category;
                openProjectDetail(cat, id);
            });
        });
    }

    function renderCategory(category){
        currentCategory = category;

        if(category === "social"){
            if(socialSubtabsWrap){ socialSubtabsWrap.classList.add("active"); }
            renderSocialTab(currentSocialTab);
            return;
        }

        if(socialSubtabsWrap){ socialSubtabsWrap.classList.remove("active"); }

        let items = [];

        if(category === "all"){
            allCategoriesOrder.forEach(function(cat){
                items = items.concat(portfolioData[cat]);
            });
            renderMixedAll();
            return;
        }

        items = portfolioData[category] || [];
        renderGrid(items, "default", category);
    }

    function renderMixedAll(){
        let html = "";
        allCategoriesOrder.forEach(function(cat){
            portfolioData[cat].forEach(function(item){
                html += cardTemplate(item, "default", cat);
            });
        });
        portfolioGrid.innerHTML = html;
        if(emptyMessage){ emptyMessage.style.display = "none"; }
        attachItemClicks("mixed");
    }

    function renderSocialTab(tab){
        currentSocialTab = tab;
        subtabButtons.forEach(function(btn){
            btn.classList.toggle("active", btn.dataset.subtab === tab);
        });

        if(tab === "reels"){
            renderGrid(socialData.reels, "video", "social");
        } else {
            renderGrid(socialData[tab], "image-only", "social");
        }
    }

    filterButtons.forEach(function(btn){
        btn.addEventListener("click", function(){
            filterButtons.forEach(function(b){ b.classList.remove("active"); });
            btn.classList.add("active");
            renderCategory(btn.dataset.filter);
        });
    });

    subtabButtons.forEach(function(btn){
        btn.addEventListener("click", function(){
            renderSocialTab(btn.dataset.subtab);
        });
    });

    /* أول تحميل: يعرض "الكل" */
    renderCategory("all");


    /* =====================================================
       PROJECT DETAIL OVERLAY
    ===================================================== */

    const detailOverlay = document.getElementById("projectDetail");
    const detailClose = document.getElementById("projectDetailClose");
    const detailImage = document.getElementById("detailImage");
    const detailTitle = document.getElementById("detailTitle");
    const detailSubtitle = document.getElementById("detailSubtitle");
    const detailDesc = document.getElementById("detailDesc");
    const detailColors = document.getElementById("detailColors");
    const detailFonts = document.getElementById("detailFonts");
    const detailAppsViewport = document.getElementById("detailAppsViewport");
    const detailAppsDots = document.getElementById("detailAppsDots");

    let appIndex = 0;
    let currentApps = [];
    let appsTimer = null;

    function openProjectDetail(category, id){
        const list = portfolioData[category];
        if(!list) return;
        const project = list.find(function(p){ return p.id === id; });
        if(!project) return;

        detailImage.src = project.image;
        detailImage.alt = project.title;
        detailTitle.textContent = project.title;
        if(detailSubtitle){
            detailSubtitle.textContent = project.subtitle || "";
            detailSubtitle.style.display = project.subtitle ? "block" : "none";
        }
        detailDesc.textContent = project.about;

        detailColors.innerHTML = project.colors.map(function(c){
            return '<span class="color-swatch" style="background:' + c + '"></span>';
        }).join("");

        detailFonts.innerHTML = project.fonts.map(function(f){
            return '<div class="font-sample"><p>' + f.name + '</p><p>' + f.sample + '</p></div>';
        }).join("");

        currentApps = project.applications;
        appIndex = 0;
        renderApps();
        renderAppsDots();
        startAppsAutoplay();

        detailOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
        detailOverlay.scrollTop = 0;
    }

    function renderApps(){
        detailAppsViewport.innerHTML = currentApps.map(function(src, i){
            return '<img src="' + src + '" class="' + (i === appIndex ? "active" : "") + '" alt="تطبيق الهوية">';
        }).join("");
    }

    function renderAppsDots(){
        if(!detailAppsDots) return;
        detailAppsDots.innerHTML = currentApps.map(function(_, i){
            return '<span class="dot' + (i === appIndex ? " active" : "") + '" data-index="' + i + '"></span>';
        }).join("");

        detailAppsDots.querySelectorAll(".dot").forEach(function(dot){
            dot.addEventListener("click", function(){
                appIndex = parseInt(dot.dataset.index, 10);
                renderApps();
                renderAppsDots();
                startAppsAutoplay();
            });
        });
    }

    function startAppsAutoplay(){
        clearInterval(appsTimer);
        appsTimer = setInterval(function(){
            appIndex = (appIndex + 1) % currentApps.length;
            renderApps();
            renderAppsDots();
        }, 3000);
    }

    function stopAppsAutoplay(){
        clearInterval(appsTimer);
    }

    if(detailClose){
        detailClose.addEventListener("click", function(){
            detailOverlay.classList.remove("active");
            document.body.style.overflow = "";
            stopAppsAutoplay();
        });
    }

    document.addEventListener("keydown", function(e){
        if(e.key === "Escape" && detailOverlay.classList.contains("active")){
            detailOverlay.classList.remove("active");
            document.body.style.overflow = "";
            stopAppsAutoplay();
        }
    });

}


/* =====================================================
   FOOTER YEAR
===================================================== */

const yearSpan = document.getElementById("year");
if(yearSpan){ yearSpan.textContent = new Date().getFullYear(); }


});
