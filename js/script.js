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
            title: "AL RAHEEQ DRY CLEAN",
            subtitle: "كرت عمل لمغسلة ملابس راقية",
            desc: "كرت عمل أنيق بألوان طبيعية هادئة يعكس هوية الخدمة.",
            about: "صُمم الكرت باستخدام نفس هوية الشعار (أخضر داكن وذهبي)، مع مربع QR لمسح رقم التواصل والموقع مباشرة، وزخرفة أوراق نباتية خفيفة تمنحه لمسة فاخرة هادئة.",
            colors: ["#1F4B44", "#C9A227", "#F5F0E6", "#2E6B5E", "#FFFFFF"],
            fonts: [
                { name: "خط العناوين اللاتيني", sample: "Aa" },
                { name: "خط النصوص العربية", sample: "أب" }
            ]
        },
        {
            title: "REA.DESIGNER",
            subtitle: "كرت العمل الشخصي",
            desc: "كرت العمل الرسمي لهوية REA.DESIGNER بلمسة تيل غامق وفضي فاخر.",
            about: "تصميم كرت العمل الشخصي بهوية REA.DESIGNER، بخط عربي مميز للشعار ولمسة معدنية فضية على الحواف، مع مربع QR يوصل مباشرة لكل روابط التواصل.",
            colors: ["#053B42", "#C8A96B", "#F5F1E8", "#064C55", "#FFFFFF"],
            fonts: [
                { name: "Alexandria Bold", sample: "Aa" },
                { name: "Alexandria Regular", sample: "أب" }
            ]
        },
        {
            title: "TRU LINE",
            subtitle: "متجر ألعاب إلكترونية",
            desc: "كرت عمل بهوية جيمنج حديثة بألوان أزرق نيون وأسود.",
            about: "صُمم الكرت ليعكس طابع متجر الألعاب الإلكترونية TRU LINE، باستخدام إضاءة نيون زرقاء ورموز أذرع التحكم (Xbox / PlayStation)، مع مربع QR للتواصل المباشر.",
            colors: ["#000000", "#1A9FFF", "#FFFFFF", "#0D2B45", "#5AC8FA"],
            fonts: [
                { name: "خط العناوين اللاتيني", sample: "Aa" },
                { name: "خط النصوص الفرعية", sample: "Aa" }
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
            title: "AL RAHEEQ DRY CLEAN",
            subtitle: "هوية بصرية لمغسلة ملابس راقية",
            desc: "هوية متكاملة بروح هادئة وأنيقة تناسب طبيعة الخدمة، من الشعار إلى التغليف.",
            about: "صُممت الهوية بألوان طبيعية هادئة (أخضر داكن وذهبي) لتعكس النظافة والفخامة، وطُبّقت على كامل نقاط تواصل العميل مع العلامة: أكياس التغليف، كيس الملابس، بخاخ منعّم الأقمشة، وكرت العمل.",
            colors: ["#1F4B44", "#C9A227", "#F5F0E6", "#2E6B5E", "#FFFFFF"],
            fonts: [
                { name: "خط العناوين اللاتيني", sample: "Aa" },
                { name: "خط النصوص العربية", sample: "أب" }
            ]
        },
        {
            title: "CARAVAN BRO",
            subtitle: "هوية براند مطعم وجبات سريعة",
            desc: "هوية بصرية مرحة وجريئة لمطعم وجبات سريعة، بألوان حيوية وشعار هندسي مميز.",
            about: "اعتمدت الهوية على شكل الماسة لتقسيم عناصر القائمة داخل الشعار نفسه (برجر، بطاطا، مشروبات)، مع لوحة ألوان جريئة تناسب طابع الطعام السريع، وطُبّقت على اللافتة، التغليف، القمصان، والمنيو.",
            colors: ["#E3312B", "#F5C11D", "#B7C644", "#000000", "#E4D2CD"],
            fonts: [
                { name: "Berkshire Swash", sample: "Aa" },
                { name: "خط النصوص", sample: "Aa" }
            ]
        },
        {
            title: "KODOS PALESTINE DATES",
            subtitle: "تغليف منتج تمور فلسطينية",
            desc: "تصميم علبة تغليف فاخرة لمنتج تمور فلسطيني، بطابع تراثي عصري.",
            about: "استخدمت زخارف تطريز فلسطيني وألوان ذهبية دافئة لإبراز أصالة المنتج، مع نافذة شفافة تعرض التمر مباشرة وتصميم يعكس هوية المكان.",
            colors: ["#C9963C", "#8B1E1E", "#FFFFFF", "#2E6B3E", "#1A1A1A"],
            fonts: [
                { name: "خط العناوين العربي", sample: "أب" },
                { name: "خط النصوص اللاتيني", sample: "Aa" }
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

/* عدد صور "تطبيقات الهوية" الافتراضي لكل تصنيف.
   لو حطيتي 0 لتصنيف معيّن، ما رح تظهر فيه فقرة "تطبيقات الهوية" خالص
   (بيبقى بس صورة المشروع الرئيسية + الألوان + الخطوط).
   تقدري كمان تحددي عدد مختلف لمشروع معيّن لحاله عن طريق appsCount
   جوا بيانات المشروع نفسه بملف projectsInfo. */
const defaultAppsCountByCategory = {
    logo: 2,
    "business-cards": 0,
    branding: 0
};

function buildProject(folder, index){
    const info = (projectsInfo[folder] && projectsInfo[folder][index - 1]) || {};
    const appsCount = (typeof info.appsCount === "number")
        ? info.appsCount
        : (defaultAppsCountByCategory[folder] != null ? defaultAppsCountByCategory[folder] : 4);

    const applications = [];
    for (let i = 1; i <= appsCount; i++){
        applications.push("images/" + folder + "/applications/" + index + "-" + i + ".png");
    }

    return {
        id: folder + "-" + index,
        image: "images/" + folder + "/" + index + ".png",
        title: info.title || "اسم المشروع",
        subtitle: info.subtitle || "",
        desc: info.desc || "وصف عن المشروع.",
        about: info.about || info.desc || "نبذة تفصيلية عن المشروع.",
        colors: info.colors || defaultColors,
        fonts: info.fonts || defaultFonts,
        /* صور تطبيقات الهوية (سلايدر أسفل الصفحة) - بتتولد تلقائيًا حسب appsCount فوق */
        applications: applications
    };
}

function buildCategory(folder){
    return [1, 2, 3, 4].map(function(i){ return buildProject(folder, i); });
}

const portfolioData = {
    logo:            buildCategory("logo"),
    "business-cards": buildCategory("business-cards"),
    branding:        buildCategory("branding")
};

/* ترتيب التصنيفات في "الكل" */
const allCategoriesOrder = ["logo", "business-cards", "branding"];

/* أسماء وأيقونات التصنيفات لعرضها فوق كل بطاقة (اختياري) */
const categoryLabels = {
    logo: "تصميم شعار",
    "business-cards": "كرت عمل",
    branding: "هوية بصرية"
};

/* =====================================================
   SOCIAL MEDIA DATA (ريلز / ستوري / بوستات)
   -----------------------------------------------------
   عدّلي هنا فقط: اسم ووصف كل ريل/ستوري/بوست لحاله.
===================================================== */

const socialInfo = {

    reels: [
        { title: "إعلان تشويقي - ASHWAQ.SHOP", caption: "فيديو تشويقي لشعار متجر أشواق شوب المختص ببيع المنتجات الفلسطينية في برلين." },
        { title: "6 رموز... شعار واحد - ASHWAQ.SHOP", caption: "فيديو تشويقي يعرض الرموز الفلسطينية الستة (الخيط الأحمر، المطرزات الفلسطينية، الكوفية، غصن الزيتون، طائر السنونو، وقبة الصخرة) التي دُمجت لاحقاً بانسيابية داخل شعار ASHWAQ.SHOP الواحد." },
        { title: "صوت يصل، وتصميم يُرى", caption: "فيديو تشويقي لإعلان تعاون ما بين REA.DESIGNER وراديو حياة." },
        { title: "معاناة المصمم مع العميل", caption: "فيديو تفاعلي كوميدي." },
        { title: "خلي كرت عرسك يحكي عنك", caption: "تصميم كرت عرس احترافي." }
    ],

    stories: [
        { title: "قبل / بعد - دعوة زفاف", caption: "مقارنة بين تصميم قديم وتصميم دعوة زفاف بهوية REA.DESIGNER." },
        { title: "منشور جديد - AL RAHEEQ", caption: "إعلان عن منشور جديد لهوية AL RAHEEQ DRY CLEAN." },
        { title: "بداية شغل جديد", caption: "ستوري تشويقية عن بداية مشروع جديد." },
        { title: "فقرة حزر فزر", caption: "ستوري تفاعلية من كواليس مشروع قيد التنفيذ." }
    ],

    posts: [] /* استبدلنا الطريقة القديمة بمجموعات (postGroups) تحت */

};

/* ============================================================
   مجموعات البوستات (posts) - كل مجموعة = كارد غلاف، وبالضغط عليه
   بيفتح معرض فيه كل صور المجموعة.

   ready:true  => المجموعة جاهزة وبتظهر بالموقع
   ready:false => المجموعة جاهزة بالكود بس الصور لسا ما وصلت،
                  فما بتظهر بالموقع. لما توصل الصور:
                  1) حطي الصور بمسار "folder" (مسمّاة 1.png, 2.png...)
                  2) غيّري count لعدد الصور الفعلي
                  3) غيّري ready لـ true
   ============================================================ */
const postGroups = [
    {
        id: "radio-hayat-news",
        title: "بوستات إخبارية - راديو حياة",
        desc: "مجموعة بوستات إخبارية صُممت لصفحة راديو حياة.",
        folder: "images/social/posts/radio-hayat-news",
        count: 12,
        ready: true
    },
    {
        id: "radio-hayat-programs",
        title: "بوستات البرامج الإذاعية - راديو حياة",
        desc: "بوستات إعلانية للبرامج الإذاعية على راديو حياة.",
        folder: "images/social/posts/radio-hayat-programs",
        count: 2,
        ready: true
    },
    {
        id: "rea-tips",
        title: "بوستات نصائح تصميم - REA.DESIGNER",
        desc: "مجموعة بوستات نصائح وتوعية بعالم التصميم.",
        folder: "images/social/posts/rea-tips",
        count: 4,
        ready: true
    },
    {
        id: "rea-interactive",
        title: "بوست تفاعلي معلومات - REA.DESIGNER",
        desc: "بوست معلومات تفاعلي بصفحة REA.DESIGNER.",
        folder: "images/social/posts/rea-interactive",
        count: 2,
        ready: true
    },
    {
        id: "design-quality",
        title: "أنت بتعرف؟ - شو يعني التصميم الجيد",
        desc: "سلسلة بوستات تفاعلية توضح مفهوم التصميم الجيد بأسلوب خفيف.",
        folder: "images/social/posts/design-quality",
        count: 3,
        ready: true
    }

    /* ==== مجموعات جاهزة بالكود، بستنى الصور منك — بس فكّي التعليق وعدّلي count وready ====
    ,{
        id: "mawlid-greetings",
        title: "تهنئة المولد النبوي",
        desc: "تصاميم تهنئة بالمولد النبوي الشريف لأكثر من جهة.",
        folder: "images/social/posts/mawlid-greetings",
        count: 0,
        ready: false
    },
    {
        id: "eid-adha-greetings",
        title: "تهنئة عيد الأضحى المبارك",
        desc: "تصاميم تهنئة بعيد الأضحى لأكثر من جهة.",
        folder: "images/social/posts/eid-adha-greetings",
        count: 0,
        ready: false
    },
    {
        id: "eid-fitr-greetings",
        title: "تهنئة عيد الفطر المبارك",
        desc: "تصاميم تهنئة بعيد الفطر لأكثر من جهة.",
        folder: "images/social/posts/eid-fitr-greetings",
        count: 0,
        ready: false
    },
    {
        id: "ramadan-posts",
        title: "بوستات رمضان",
        desc: "مجموعة بوستات وتصاميم خاصة بشهر رمضان.",
        folder: "images/social/posts/ramadan-posts",
        count: 0,
        ready: false
    }
    ==================================================================================== */
];

/* سوشيال ميديا: ريلز مرن (حاليًا 5) وعدد الستوري ثابت 4.
   البوستات بقت منظمة كمجموعات (postGroups) فوق، مو رقم واحد. */
const reelsCount = 5;

const socialData = {
    reels: Array.from({ length: reelsCount }, function(_, idx){
        const i = idx + 1;
        const info = socialInfo.reels[i - 1] || {};
        return {
            id: "reels-" + i,
            video: "images/social/reels/" + i + ".mp4",
            poster: "images/social/reels/" + i + "-cover.png",
            title: info.title || "منشور REA.DESIGNER",
            caption: info.caption || ""
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
    posts: postGroups.filter(function(g){ return g.ready; }).map(function(g){
        return {
            id: g.id,
            image: g.folder + "/1.png",
            title: g.title,
            caption: g.desc,
            gallery: Array.from({ length: g.count }, function(_, i){ return g.folder + "/" + (i + 1) + ".png"; })
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
   FAQ ACCORDION
===================================================== */

document.querySelectorAll(".faq-question").forEach(function(btn){
    btn.addEventListener("click", function(){
        const item = btn.closest(".faq-item");
        const wasActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item.active").forEach(function(openItem){
            openItem.classList.remove("active");
        });
        if(!wasActive){ item.classList.add("active"); }
    });
});


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

    /* لو المستخدم رجع لهاي الصفحة من صفحة تانية (زر رجوع بالمتصفح/الجوال)،
       المتصفح أحياناً بيرجع نسخة محفوظة (bfcache) قبل ما التخطيط يخلص،
       فبنعيد ضبط السلايدر يدويًا لأول عنصر عشان ما يطلع مخربش. */
    window.addEventListener("pageshow", function(){
        testimonialIndex = 0;
        updateTestimonials();
    });

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
                        (item.caption ? '<p>' + item.caption + '</p>' : '') +
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
            /* بس قسم الشعارات (logo) بيفتح صفحة تفاصيل. كروت العمل والهوية البصرية
               بيفتحوا الصورة بملء الشاشة (Lightbox). السوشيال ميديا بدون أي تفاعل. */
            if(!categoryKey || categoryKey === "social") return;

            const cat = card.dataset.category;

            if(cat === "logo"){
                card.addEventListener("click", function(e){
                    if(e.target.tagName === "VIDEO") return;
                    const id = card.dataset.id;
                    openProjectDetail(cat, id);
                });
                return;
            }

            if(cat === "business-cards" || cat === "branding"){
                card.addEventListener("click", function(){
                    const img = card.querySelector("img");
                    if(img){ openLightbox(img.src, img.alt); }
                });
            }
        });
    }

    const imageLightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxClose = document.getElementById("lightboxClose");
    const headerBackBtn = document.getElementById("headerBackBtn");

    const lightboxCloseLabel = document.querySelector("#lightboxClose .lightbox-close-label");

    /* زر "رجوع" واحد موحّد جوا الهيدر الرئيسي - بيبين وبيشتغل سواء كنا
       جوا معرض البوستات أو جوا الستوري، بدل ما يكون لكل واحد زر لحاله */
    function showHeaderBack(action){
        if(!headerBackBtn) return;
        headerBackBtn.classList.add("active");
        headerBackBtn.onclick = action;
    }

    function hideHeaderBack(){
        if(!headerBackBtn) return;
        headerBackBtn.classList.remove("active");
        headerBackBtn.onclick = null;
    }

    function openLightbox(src, alt, mode){
        if(!imageLightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        imageLightbox.classList.toggle("story-mode", mode === "story");
        if(lightboxCloseLabel){
            lightboxCloseLabel.textContent = (mode === "story") ? "رجوع" : "إغلاق";
        }
        imageLightbox.classList.add("active");
        showHeaderBack(closeLightbox);
    }

    function closeLightbox(){
        if(!imageLightbox) return;
        imageLightbox.classList.remove("active");
        imageLightbox.classList.remove("story-mode");
        lightboxImg.src = "";
        if(postGalleryOverlay && postGalleryOverlay.classList.contains("active")){
            showHeaderBack(closePostGallery);
        } else {
            hideHeaderBack();
        }
    }

    if(lightboxClose){ lightboxClose.addEventListener("click", closeLightbox); }
    if(imageLightbox){
        imageLightbox.addEventListener("click", function(e){
            if(e.target === imageLightbox){ closeLightbox(); }
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
        portfolioGrid.classList.remove("is-stories", "is-reels");

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

        /* كلاس خاص لكل نوع محتوى عشان نضبط نسبة العرض (ستوري/ريلز) بالـ CSS */
        portfolioGrid.classList.toggle("is-stories", tab === "stories");
        portfolioGrid.classList.toggle("is-reels", tab === "reels");

        if(tab === "reels"){
            renderGrid(socialData.reels, "video", "social");
        } else if(tab === "posts"){
            renderGrid(socialData.posts, "image-only", "social");
            attachPostGroupClicks();
        } else if(tab === "stories"){
            renderGrid(socialData.stories, "image-only", "social");
            attachStoryClicks();
        } else {
            renderGrid(socialData[tab], "image-only", "social");
        }
    }

    /* الستوري: تفتح بمعاينة بمقاس الستوري (9:16) بدل ما تنفتح بمقاس عشوائي */
    function attachStoryClicks(){
        portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(card){
            const img = card.querySelector("img");
            if(!img) return;
            card.style.cursor = "pointer";
            card.addEventListener("click", function(){
                openLightbox(img.src, img.alt, "story");
            });
        });
    }

    function attachPostGroupClicks(){
        portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(card){
            const id = card.dataset.id;
            const group = socialData.posts.find(function(p){ return p.id === id; });
            if(!group) return;
            card.style.cursor = "pointer";
            card.addEventListener("click", function(){
                openPostGallery(group);
            });
        });
    }

    const postGalleryOverlay = document.getElementById("postGallery");
    const postGalleryTitle = document.getElementById("postGalleryTitle");
    const postGalleryDesc = document.getElementById("postGalleryDesc");
    const postGalleryGrid = document.getElementById("postGalleryGrid");

    const postGalleryBreadcrumb = document.getElementById("postGalleryBreadcrumb");
    const postGalleryFoldersWrap = document.getElementById("postGalleryFolders");

    function renderPostGalleryFolders(activeId){
        if(!postGalleryFoldersWrap) return;
        postGalleryFoldersWrap.innerHTML = socialData.posts.map(function(group){
            return '<button class="folder-pill' + (group.id === activeId ? ' active' : '') +
                   '" data-group-id="' + group.id + '">' + group.title + '</button>';
        }).join("");
        postGalleryFoldersWrap.querySelectorAll(".folder-pill").forEach(function(btn){
            btn.addEventListener("click", function(){
                const group = socialData.posts.find(function(p){ return p.id === btn.dataset.groupId; });
                if(group){ openPostGallery(group); }
            });
        });
        const activeBtn = postGalleryFoldersWrap.querySelector(".folder-pill.active");
        if(activeBtn){ activeBtn.scrollIntoView({ inline: "center", block: "nearest" }); }
    }

    /* شريط تعريف رفيع: سوشيال ميديا › بوستات › اسم المجموعة - بيوري المستخدم
       مكانه بالظبط بسطر واحد بدل تكرار كل مستويات التصفية فوق بعض */
    function renderPostGalleryBreadcrumb(group){
        if(!postGalleryBreadcrumb) return;
        postGalleryBreadcrumb.innerHTML =
            '<button type="button" class="crumb crumb-link" data-crumb="social">سوشيال ميديا</button>' +
            '<span class="crumb-sep">›</span>' +
            '<button type="button" class="crumb crumb-link" data-crumb="posts">بوستات</button>' +
            '<span class="crumb-sep">›</span>' +
            '<span class="crumb crumb-current">' + group.title + '</span>';

        /* البريدكرمب فعّالة: كبسة على "سوشيال ميديا" أو "بوستات" بترجعك
           لهيك مستوى مباشرة بدل ما تكون مجرد نص للعرض */
        postGalleryBreadcrumb.querySelectorAll(".crumb-link").forEach(function(btn){
            btn.addEventListener("click", function(){
                closePostGallery();
                if(btn.dataset.crumb === "social"){
                    filterButtons.forEach(function(fb){
                        fb.classList.toggle("active", fb.dataset.filter === "social");
                    });
                    renderCategory("social");
                    renderSocialTab("reels");
                } else {
                    renderSocialTab("posts");
                }
                window.scrollTo({ top: portfolioGrid.offsetTop - 120, behavior: "smooth" });
            });
        });
    }

    function openPostGallery(group){
        if(!postGalleryOverlay) return;
        postGalleryTitle.textContent = group.title;
        postGalleryDesc.textContent = group.caption;
        postGalleryGrid.innerHTML = group.gallery.map(function(src){
            return '<img src="' + src + '" alt="' + group.title + '">';
        }).join("");
        postGalleryGrid.querySelectorAll("img").forEach(function(img){
            img.addEventListener("click", function(){ openLightbox(img.src, img.alt); });
        });
        renderPostGalleryBreadcrumb(group);
        renderPostGalleryFolders(group.id);
        postGalleryOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
        window.scrollTo({ top: 0 });
        showHeaderBack(closePostGallery);
    }

    function closePostGallery(){
        if(!postGalleryOverlay) return;
        postGalleryOverlay.classList.remove("active");
        document.body.style.overflow = "";
        hideHeaderBack();
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

        /* الألوان والخطوط تظهر بس لقسم الشعارات (logo) */
        const detailColorsBlock = document.getElementById("detailColorsBlock");
        const detailFontsBlock = document.getElementById("detailFontsBlock");
        const showColorsAndFonts = category === "logo";

        if (detailColorsBlock) detailColorsBlock.style.display = showColorsAndFonts ? "" : "none";
        if (detailFontsBlock) detailFontsBlock.style.display = showColorsAndFonts ? "" : "none";

        detailColors.innerHTML = project.colors.map(function(c){
            return '<span class="color-swatch" style="background:' + c + '"></span>';
        }).join("");

        detailFonts.innerHTML = project.fonts.map(function(f){
            return '<div class="font-sample"><p>' + f.name + '</p><p>' + f.sample + '</p></div>';
        }).join("");

        currentApps = project.applications;
        appIndex = 0;

        const detailAppsBlock = document.getElementById("detailAppsBlock");
        if (currentApps.length === 0){
            if (detailAppsBlock) detailAppsBlock.style.display = "none";
            stopAppsAutoplay();
        } else {
            if (detailAppsBlock) detailAppsBlock.style.display = "";
            renderApps();
            renderAppsDots();
            startAppsAutoplay();
        }

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
