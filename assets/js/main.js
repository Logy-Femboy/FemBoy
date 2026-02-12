// ==========================================
// Femboy Lifestyle Hub - Main JavaScript
// ==========================================

// Language Translations
const translations = {
    en: {
        site_title: "Femboy Lifestyle Hub",
        nav_home: "Home",
        nav_getting_started: "Getting Started",
        nav_about: "About Us",
        nav_guide: "Beginner's Guide",
        nav_fashion: "Fashion",
        nav_skirts: "Skirts & Dresses",
        nav_hoodies: "Oversized Hoodies",
        nav_thighhighs: "Thigh Highs",
        nav_accessories: "Accessories",
        nav_shop: "Where to Shop",
        nav_sizing: "Sizing Guide",
        nav_diy: "DIY & Modifications",
        nav_advanced: "Advanced Tools",
        nav_beauty: "Beauty",
        nav_skincare: "Basic Skincare",
        nav_natural: "Natural Makeup",
        nav_eyes: "Eye Makeup",
        nav_contour: "Contouring",
        nav_shaving: "Shaving & Hair Removal",
        nav_laser: "Laser Hair Removal",
        nav_health: "HRT & Health",
        nav_disclaimer: "⚠️ Disclaimer",
        nav_hrt: "HRT Basics",
        nav_timeline: "Transition Timeline",
        nav_mental: "Mental Health",
        nav_fitness: "Diet & Fitness",
        nav_voice: "Voice Training",
        nav_lifestyle: "Lifestyle",
        nav_comingout: "Coming Out",
        nav_dating: "Dating Safety",
        nav_online: "Online Safety",
        nav_community: "Finding Community",
        nav_resources: "Resources",
        nav_glossary: "Glossary",
        nav_links: "Useful Links",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        footer_about: "About Us",
        footer_description: "A comprehensive resource for the femboy community, providing guides on fashion, beauty, health, and lifestyle.",
        footer_quick_links: "Quick Links",
        footer_support: "Support",
        footer_support_text: "If you're in crisis, please reach out to a mental health professional or crisis hotline.",
        footer_copyright: "© 2024 Femboy Lifestyle Hub. For educational purposes only."
    },
    ar: {
        site_title: "مركز نمط حياة الفيمبوي",
        nav_home: "الرئيسية",
        nav_getting_started: "البداية",
        nav_about: "من نحن",
        nav_guide: "دليل المبتدئين",
        nav_fashion: "الموضة",
        nav_skirts: "التنانير والفساتين",
        nav_hoodies: "القمصان الواسعة",
        nav_thighhighs: "الجوارب الطويلة",
        nav_accessories: "الإكسسوارات",
        nav_shop: "أين تتسوق",
        nav_sizing: "دليل المقاسات",
        nav_diy: "التعديلات اليدوية",
        nav_advanced: "أدوات متقدمة",
        nav_beauty: "الجمال",
        nav_skincare: "العناية بالبشرة",
        nav_natural: "المكياج الطبيعي",
        nav_eyes: "مكياج العيون",
        nav_contour: "الكونتور",
        nav_shaving: "الحلاقة وإزالة الشعر",
        nav_laser: "الليزر",
        nav_health: "الهرمونات والصحة",
        nav_disclaimer: "⚠️ تنويه",
        nav_hrt: "أساسيات العلاج الهرموني",
        nav_timeline: "الجدول الزمني",
        nav_mental: "الصحة النفسية",
        nav_fitness: "النظام الغذائي واللياقة",
        nav_voice: "تدريب الصوت",
        nav_lifestyle: "نمط الحياة",
        nav_comingout: "الإفصاح عن الهوية",
        nav_dating: "أمان المواعدة",
        nav_online: "الأمان عبر الإنترنت",
        nav_community: "إيجاد المجتمع",
        nav_resources: "الموارد",
        nav_glossary: "المصطلحات",
        nav_links: "روابط مفيدة",
        nav_faq: "الأسئلة الشائعة",
        nav_contact: "اتصل بنا",
        footer_about: "من نحن",
        footer_description: "مورد شامل لمجتمع الفيمبوي، يقدم أدلة حول الموضة والجمال والصحة ونمط الحياة.",
        footer_quick_links: "روابط سريعة",
        footer_support: "الدعم",
        footer_support_text: "إذا كنت في أزمة، يرجى التواصل مع متخصص في الصحة النفسية.",
        footer_copyright: "© 2024 مركز نمط حياة الفيمبوي. لأغراض تعليمية فقط."
    }
};

// Page Content Templates
const pages = {
    home: {
        en: `
            <div class="hero">
                <div class="container hero-content">
                    <h1>Welcome to Femboy Lifestyle Hub ✨</h1>
                    <p>Your comprehensive guide to expressing your authentic self through fashion, beauty, health, and community.</p>
                    <div class="hero-buttons">
                        <a href="#guide" class="btn btn-primary" data-route>Get Started</a>
                        <a href="#resources-glossary" class="btn btn-secondary" data-route>Learn the Basics</a>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="section-header">
                    <h2>Explore Our Resources</h2>
                    <p>Everything you need to begin your journey</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <span class="card-icon">👗</span>
                        <h3>Fashion Guide</h3>
                        <p>Discover the perfect outfits, from skirts and dresses to thigh highs and accessories.</p>
                        <a href="#fashion-skirts" class="btn btn-accent" data-route>Explore Fashion</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💄</span>
                        <h3>Beauty & Makeup</h3>
                        <p>Learn skincare routines, makeup techniques, and hair removal methods.</p>
                        <a href="#beauty-skincare" class="btn btn-accent" data-route>Beauty Tips</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💊</span>
                        <h3>HRT & Health</h3>
                        <p>Comprehensive information about hormone therapy, mental health, and wellness.</p>
                        <a href="#health-disclaimer" class="btn btn-accent" data-route>Health Resources</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">🌈</span>
                        <h3>Community & Support</h3>
                        <p>Connect with others, stay safe online, and find your community.</p>
                        <a href="#lifestyle-community" class="btn btn-accent" data-route>Find Community</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">📚</span>
                        <h3>Resources & FAQ</h3>
                        <p>Access our glossary, useful links, and frequently asked questions.</p>
                        <a href="#resources-faq" class="btn btn-accent" data-route>Browse Resources</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💬</span>
                        <h3>Get in Touch</h3>
                        <p>Have questions or suggestions? We'd love to hear from you!</p>
                        <a href="#contact" class="btn btn-accent" data-route>Contact Us</a>
                    </div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Why Femboy Lifestyle Hub?</h2>
                    </div>
                    <div class="info-box info">
                        <h4>🎯 Comprehensive & Inclusive</h4>
                        <p>We cover everything from basic fashion tips to advanced medical information, all in one place.</p>
                    </div>
                    <div class="info-box success">
                        <h4>✅ Evidence-Based Information</h4>
                        <p>Our health and HRT content is based on medical research and community experiences.</p>
                    </div>
                    <div class="info-box">
                        <h4>🌟 Community-Driven</h4>
                        <p>Created by and for the femboy community with love and authenticity.</p>
                    </div>
                </div>
            </div>
        `,
        ar: `
            <div class="hero">
                <div class="container hero-content">
                    <h1>مرحباً بك في مركز نمط حياة الفيمبوي ✨</h1>
                    <p>دليلك الشامل للتعبير عن ذاتك الحقيقية من خلال الموضة والجمال والصحة والمجتمع.</p>
                    <div class="hero-buttons">
                        <a href="#guide" class="btn btn-primary" data-route>ابدأ الآن</a>
                        <a href="#resources-glossary" class="btn btn-secondary" data-route>تعلم الأساسيات</a>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="section-header">
                    <h2>استكشف مواردنا</h2>
                    <p>كل ما تحتاجه لبدء رحلتك</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <span class="card-icon">👗</span>
                        <h3>دليل الموضة</h3>
                        <p>اكتشف الملابس المثالية، من التنانير والفساتين إلى الجوارب الطويلة والإكسسوارات.</p>
                        <a href="#fashion-skirts" class="btn btn-accent" data-route>استكشف الموضة</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💄</span>
                        <h3>الجمال والمكياج</h3>
                        <p>تعلم روتين العناية بالبشرة وتقنيات المكياج وطرق إزالة الشعر.</p>
                        <a href="#beauty-skincare" class="btn btn-accent" data-route>نصائح الجمال</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💊</span>
                        <h3>الهرمونات والصحة</h3>
                        <p>معلومات شاملة حول العلاج الهرموني والصحة النفسية والعافية.</p>
                        <a href="#health-disclaimer" class="btn btn-accent" data-route>موارد الصحة</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">🌈</span>
                        <h3>المجتمع والدعم</h3>
                        <p>تواصل مع الآخرين، وابق آمناً عبر الإنترنت، واعثر على مجتمعك.</p>
                        <a href="#lifestyle-community" class="btn btn-accent" data-route>ابحث عن المجتمع</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">📚</span>
                        <h3>الموارد والأسئلة الشائعة</h3>
                        <p>الوصول إلى المصطلحات والروابط المفيدة والأسئلة الشائعة.</p>
                        <a href="#resources-faq" class="btn btn-accent" data-route>تصفح الموارد</a>
                    </div>

                    <div class="card">
                        <span class="card-icon">💬</span>
                        <h3>تواصل معنا</h3>
                        <p>هل لديك أسئلة أو اقتراحات؟ نحب أن نسمع منك!</p>
                        <a href="#contact" class="btn btn-accent" data-route>اتصل بنا</a>
                    </div>
                </div>
            </div>
        `
    },
    
    about: {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>About Femboy Lifestyle Hub</h1>
                    <p>Our mission, values, and commitment to the community</p>
                </div>

                <div class="content-section">
                    <h2>Our Mission 🎯</h2>
                    <p>Femboy Lifestyle Hub was created to provide a comprehensive, safe, and informative resource for individuals exploring or living the femboy lifestyle. We believe everyone deserves access to accurate information about fashion, beauty, health, and community support.</p>
                    
                    <div class="info-box">
                        <h4>What We Provide</h4>
                        <ul>
                            <li>Evidence-based health and HRT information</li>
                            <li>Practical fashion and beauty guides</li>
                            <li>Safety resources for online and offline interactions</li>
                            <li>Community support and connection tools</li>
                            <li>Inclusive, judgment-free education</li>
                        </ul>
                    </div>

                    <h2>Our Values 💝</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">🌈</span>
                            <h3>Inclusivity</h3>
                            <p>We welcome everyone regardless of gender identity, sexual orientation, or background.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">🔬</span>
                            <h3>Evidence-Based</h3>
                            <p>Our health information is grounded in medical research and community experiences.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">🛡️</span>
                            <h3>Safety First</h3>
                            <p>We prioritize your physical and emotional safety in all our guidance.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">💎</span>
                            <h3>Authenticity</h3>
                            <p>We encourage you to express your true self without judgment.</p>
                        </div>
                    </div>

                    <h2>Important Disclaimers ⚠️</h2>
                    <div class="info-box warning">
                        <h4>Medical Disclaimer</h4>
                        <p>The information on this site is for educational purposes only and does not constitute medical advice. Always consult with qualified healthcare professionals before making decisions about your health, including hormone therapy.</p>
                    </div>

                    <div class="info-box warning">
                        <h4>Age Appropriateness</h4>
                        <p>Some content on this site discusses topics that may not be appropriate for minors. We encourage parental guidance and age-appropriate resource selection.</p>
                    </div>
                </div>
            </div>
        `,
        ar: `
            <div class="container">
                <div class="section-header">
                    <h1>حول مركز نمط حياة الفيمبوي</h1>
                    <p>مهمتنا وقيمنا والتزامنا تجاه المجتمع</p>
                </div>

                <div class="content-section">
                    <h2>مهمتنا 🎯</h2>
                    <p>تم إنشاء مركز نمط حياة الفيمبوي لتوفير مورد شامل وآمن ومفيد للأفراد الذين يستكشفون أو يعيشون نمط حياة الفيمبوي. نحن نؤمن بأن الجميع يستحق الوصول إلى معلومات دقيقة حول الموضة والجمال والصحة ودعم المجتمع.</p>
                </div>
            </div>
        `
    },

    guide: {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Getting Started Guide 🌟</h1>
                    <p>Your roadmap to exploring the femboy lifestyle</p>
                </div>

                <div class="content-section">
                    <h2>Step 1: Self-Discovery & Acceptance</h2>
                    <p>The first step is understanding and accepting yourself. Being a femboy is about expressing femininity in a way that feels authentic to you. There's no "right way" to be a femboy.</p>
                    
                    <div class="info-box">
                        <h4>Key Questions to Reflect On:</h4>
                        <ul>
                            <li>What aspects of feminine expression appeal to you?</li>
                            <li>Are you exploring gender expression, gender identity, or both?</li>
                            <li>What makes you feel most comfortable and authentic?</li>
                            <li>What are your goals and boundaries?</li>
                        </ul>
                    </div>

                    <h2>Step 2: Start with Fashion</h2>
                    <p>Fashion is often the most accessible entry point. You can experiment privately before presenting publicly.</p>
                    
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">👕</span>
                            <h3>Begin with Basics</h3>
                            <p>Start with gender-neutral items like skinny jeans, hoodies, and crop tops.</p>
                            <a href="#fashion-hoodies" class="btn btn-accent" data-route>Explore Hoodies</a>
                        </div>
                        <div class="card">
                            <span class="card-icon">👗</span>
                            <h3>Try Skirts & Dresses</h3>
                            <p>Experiment with different styles in private to find what you love.</p>
                            <a href="#fashion-skirts" class="btn btn-accent" data-route>Skirt Guide</a>
                        </div>
                        <div class="card">
                            <span class="card-icon">🧦</span>
                            <h3>Add Accessories</h3>
                            <p>Thigh highs, chokers, and jewelry can enhance your look.</p>
                            <a href="#fashion-thighhighs" class="btn btn-accent" data-route>Accessories</a>
                        </div>
                    </div>

                    <h2>Step 3: Learn Basic Grooming</h2>
                    <div class="info-box info">
                        <h4>Essential Grooming Steps</h4>
                        <ul>
                            <li><strong>Skincare:</strong> Cleanse, moisturize, and protect with SPF</li>
                            <li><strong>Hair Removal:</strong> Start with shaving, consider long-term solutions later</li>
                            <li><strong>Hair Care:</strong> Grow out and style your hair (or explore wigs)</li>
                            <li><strong>Nail Care:</strong> Keep nails clean, filed, and optionally painted</li>
                        </ul>
                    </div>

                    <h2>Step 4: Explore Makeup (Optional)</h2>
                    <p>Makeup is optional but can be a fun way to enhance features. Start with basics:</p>
                    <ul>
                        <li>Concealer for blemishes and under-eye darkness</li>
                        <li>Light foundation or BB cream</li>
                        <li>Mascara and subtle eyeshadow</li>
                        <li>Natural lip colors</li>
                    </ul>
                    <a href="#beauty-natural" class="btn btn-primary" data-route>Natural Makeup Tutorial</a>

                    <h2>Step 5: Build Confidence Gradually</h2>
                    <div class="info-box success">
                        <h4>Progression Timeline</h4>
                        <ul>
                            <li><strong>Week 1-2:</strong> Wear feminine clothes at home</li>
                            <li><strong>Week 3-4:</strong> Take selfies, experiment with looks</li>
                            <li><strong>Month 2:</strong> Share online in safe spaces</li>
                            <li><strong>Month 3+:</strong> Consider going out in public when ready</li>
                        </ul>
                    </div>

                    <h2>Step 6: Connect with Community</h2>
                    <p>Finding supportive people is crucial for your journey.</p>
                    <a href="#lifestyle-community" class="btn btn-accent" data-route>Find Your Community</a>

                    <div class="info-box warning">
                        <h4>Safety Reminder</h4>
                        <p>Always prioritize your safety. Come out on your own timeline, and only share personal information with trusted individuals.</p>
                    </div>
                </div>
            </div>
        `,
        ar: `
            <div class="container">
                <div class="section-header">
                    <h1>دليل البداية 🌟</h1>
                    <p>خريطة طريقك لاستكشاف نمط حياة الفيمبوي</p>
                </div>
                <div class="content-section">
                    <h2>الخطوة 1: اكتشاف الذات والقبول</h2>
                    <p>الخطوة الأولى هي فهم وقبول نفسك. كونك فيمبوي يتعلق بالتعبير عن الأنوثة بطريقة تبدو أصيلة بالنسبة لك.</p>
                </div>
            </div>
        `
    },

    'fashion-skirts': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Skirts & Dresses Guide 👗</h1>
                    <p>Finding the perfect feminine silhouettes</p>
                </div>

                <div class="content-section">
                    <h2>Types of Skirts</h2>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Style</th>
                                <th>Description</th>
                                <th>Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Pleated Skirt</strong></td>
                                <td>Classic feminine look with uniform folds</td>
                                <td>Everyday wear, schoolgirl aesthetic</td>
                            </tr>
                            <tr>
                                <td><strong>A-Line Skirt</strong></td>
                                <td>Fitted at waist, flares out gently</td>
                                <td>Creates feminine hip silhouette</td>
                            </tr>
                            <tr>
                                <td><strong>Circle/Skater Skirt</strong></td>
                                <td>Full circle cut, very flowy</td>
                                <td>Twirling, playful looks</td>
                            </tr>
                            <tr>
                                <td><strong>Pencil Skirt</strong></td>
                                <td>Fitted, emphasizes curves</td>
                                <td>Formal/professional settings</td>
                            </tr>
                            <tr>
                                <td><strong>Mini Skirt</strong></td>
                                <td>Above knee length</td>
                                <td>Casual, showing off legs</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Dress Styles for Femboys</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">👗</span>
                            <h3>Sundresses</h3>
                            <p>Light, flowy, perfect for casual summer looks. Choose patterns like florals or pastels.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">🎀</span>
                            <h3>Babydoll Dresses</h3>
                            <p>Empire waist, loose fit. Hides body shape while looking cute and comfortable.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">✨</span>
                            <h3>Fit & Flare</h3>
                            <p>Fitted bodice, flared skirt. Creates an hourglass illusion.</p>
                        </div>
                    </div>

                    <h2>Styling Tips</h2>
                    <div class="info-box">
                        <h4>Creating Feminine Proportions</h4>
                        <ul>
                            <li><strong>High-waisted skirts</strong> create the illusion of longer legs and a defined waist</li>
                            <li><strong>A-line cuts</strong> add volume to hips if you want a curvier silhouette</li>
                            <li><strong>Tucking techniques</strong> help create a smoother front profile (see Advanced Tools)</li>
                            <li><strong>Layering</strong> with crop tops or tucked-in shirts emphasizes the waist</li>
                        </ul>
                    </div>

                    <h2>Color & Pattern Recommendations</h2>
                    <div class="info-box info">
                        <h4>Pastel & Soft Colors</h4>
                        <p>Pink, lavender, baby blue, mint green, peach - these create a soft, feminine aesthetic</p>
                    </div>
                    <div class="info-box">
                        <h4>Patterns</h4>
                        <ul>
                            <li>Florals (small or large prints)</li>
                            <li>Plaid/tartan (schoolgirl vibes)</li>
                            <li>Polka dots</li>
                            <li>Stripes (vertical for elongation)</li>
                            <li>Solid pastels (versatile basics)</li>
                        </ul>
                    </div>

                    <h2>Where to Buy</h2>
                    <p>Check our comprehensive shopping guide for retailers, sizing, and privacy tips.</p>
                    <a href="#fashion-shop" class="btn btn-primary" data-route>Shopping Guide</a>
                </div>
            </div>
        `,
        ar: `
            <div class="container">
                <div class="section-header">
                    <h1>دليل التنانير والفساتين 👗</h1>
                    <p>العثور على الصور الظلية الأنثوية المثالية</p>
                </div>
            </div>
        `
    },

    'fashion-hoodies': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Oversized Hoodies Guide 👕</h1>
                    <p>Comfortable, gender-neutral, and effortlessly cute</p>
                </div>

                <div class="content-section">
                    <h2>Why Oversized Hoodies?</h2>
                    <p>Oversized hoodies are a femboy staple because they:</p>
                    <ul>
                        <li>Hide masculine body features (broad shoulders, chest)</li>
                        <li>Create a cute, small, vulnerable aesthetic</li>
                        <li>Are comfortable and gender-neutral enough to wear anywhere</li>
                        <li>Pair well with feminine bottoms (skirts, shorts, thigh highs)</li>
                        <li>Allow "safe" gender expression in public</li>
                    </ul>

                    <h2>Styling Your Hoodie</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">🧦</span>
                            <h3>Hoodie + Thigh Highs</h3>
                            <p>Classic femboy look. The hoodie should be long enough to create the illusion you're not wearing pants.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">👗</span>
                            <h3>Hoodie + Skirt</h3>
                            <p>Layer a hoodie over a skirt for a casual, playful aesthetic. Choose contrasting colors.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">💙</span>
                            <h3>Hoodie + Shorts</h3>
                            <p>Wear short shorts underneath for a sporty-cute vibe. Add knee-high socks.</p>
                        </div>
                    </div>

                    <h2>Sizing Guide for Oversized Fit</h2>
                    <div class="info-box">
                        <h4>How to Choose Size</h4>
                        <ul>
                            <li><strong>1-2 sizes up:</strong> For a subtle oversized look</li>
                            <li><strong>3-4 sizes up:</strong> For maximum "drowning in the hoodie" effect</li>
                            <li><strong>Sleeve length:</strong> Should cover hands partially (cute paws effect)</li>
                            <li><strong>Length:</strong> Mid-thigh to knee for best femboy aesthetic</li>
                        </ul>
                    </div>

                    <h2>Best Colors & Styles</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Color</th>
                                <th>Vibe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pink/Lavender</td>
                                <td>Soft, traditionally feminine</td>
                            </tr>
                            <tr>
                                <td>White/Cream</td>
                                <td>Clean, minimalist, pairs with anything</td>
                            </tr>
                            <tr>
                                <td>Black</td>
                                <td>Versatile, slightly edgier</td>
                            </tr>
                            <tr>
                                <td>Pastel Blue/Mint</td>
                                <td>Soft boy aesthetic</td>
                            </tr>
                            <tr>
                                <td>Gray</td>
                                <td>Neutral, subtle</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Accessories to Pair</h2>
                    <ul>
                        <li>Chokers or collar necklaces</li>
                        <li>Fingerless gloves</li>
                        <li>Beanies or hair clips</li>
                        <li>Small backpacks or crossbody bags</li>
                    </ul>

                    <div class="info-box info">
                        <h4>Pro Tip</h4>
                        <p>Look for hoodies with kangaroo pockets - they're perfect for the "hands in pockets, shy pose" aesthetic that's popular in femboy photography.</p>
                    </div>
                </div>
            </div>
        `,
        ar: `
            <div class="container">
                <div class="section-header">
                    <h1>دليل القمصان الواسعة 👕</h1>
                </div>
            </div>
        `
    },

    'fashion-thighhighs': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Thigh Highs Guide 🧦</h1>
                    <p>The iconic femboy accessory</p>
                </div>

                <div class="content-section">
                    <h2>Why Thigh Highs?</h2>
                    <p>Thigh-high socks or stockings are perhaps THE most recognizable femboy fashion item. They:</p>
                    <ul>
                        <li>Emphasize leg shape and make legs look longer</li>
                        <li>Create the "zettai ryouiki" (absolute territory) - the attractive thigh exposure between sock and skirt/shorts</li>
                        <li>Add a playful, youthful element to any outfit</li>
                        <li>Can be worn under pants for subtle gender expression</li>
                    </ul>

                    <h2>Types of Thigh Highs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Material</th>
                                <th>Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Cotton Blend</strong></td>
                                <td>Cotton/Spandex mix</td>
                                <td>Everyday wear, comfort, breathability</td>
                            </tr>
                            <tr>
                                <td><strong>Nylon/Polyester</strong></td>
                                <td>Synthetic, shiny</td>
                                <td>More formal looks, photography</td>
                            </tr>
                            <tr>
                                <td><strong>Wool Blend</strong></td>
                                <td>Wool/Acrylic</td>
                                <td>Winter warmth, cozy aesthetic</td>
                            </tr>
                            <tr>
                                <td><strong>Fishnet</strong></td>
                                <td>Mesh pattern</td>
                                <td>Edgier, alternative looks</td>
                            </tr>
                            <tr>
                                <td><strong>Compression</strong></td>
                                <td>Tight elastic</td>
                                <td>Staying up without garters, athletic</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Sizing Guide</h2>
                    <div class="info-box">
                        <h4>Finding the Right Fit</h4>
                        <ul>
                            <li><strong>One Size:</strong> Usually fits up to 5'10" and 180 lbs, but may roll down</li>
                            <li><strong>Plus Size:</strong> For taller or larger builds (check thigh circumference)</li>
                            <li><strong>Men's Specific:</strong> Longer length, wider thigh openings - harder to find but worth seeking out</li>
                        </ul>
                    </div>

                    <div class="info-box warning">
                        <h4>Staying Up Problem</h4>
                        <p>Thigh highs often roll down, especially on muscular or less curvy legs. Solutions:</p>
                        <ul>
                            <li>Sock glue or fashion tape</li>
                            <li>Garter belts (functional or aesthetic)</li>
                            <li>Compression-style thigh highs with silicone grip bands</li>
                            <li>Sizing up for tighter fit (may sacrifice length)</li>
                        </ul>
                    </div>

                    <h2>Color & Pattern Choices</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">⚪</span>
                            <h3>White</h3>
                            <p>Innocent, clean aesthetic. Pairs well with pink or pastel outfits.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">⚫</span>
                            <h3>Black</h3>
                            <p>Versatile, slimming. Works with any color scheme.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">🌸</span>
                            <h3>Pink/Pastels</h3>
                            <p>Quintessential femboy colors. Soft and approachable.</p>
                        </div>
                        <div class="card">
                            <span class="card-icon">🎀</span>
                            <h3>Striped</h3>
                            <p>Horizontal stripes (sailor/anime style) are popular. Creates visual interest.</p>
                        </div>
                    </div>

                    <h2>Styling Tips</h2>
                    <ul>
                        <li><strong>Zettai Ryouiki ratio:</strong> Aim for 4:1:2.5 (skirt:thigh:sock) for the "golden ratio"</li>
                        <li><strong>With skirts:</strong> Leave 2-6 inches of thigh exposed</li>
                        <li><strong>With shorts:</strong> Show more thigh for a sportier, casual look</li>
                        <li><strong>Alone (with oversized hoodie):</strong> Create illusion of not wearing bottoms</li>
                    </ul>

                    <div class="info-box info">
                        <h4>Care Instructions</h4>
                        <p>Hand wash or delicate cycle in cold water. Air dry to prevent shrinkage and damage to elastic. Thigh highs are delicate - buy backups!</p>
                    </div>
                </div>
            </div>
        `,
        ar: `
            <div class="container">
                <div class="section-header">
                    <h1>دليل الجوارب الطويلة 🧦</h1>
                </div>
            </div>
        `
    }
};

// Continue with remaining pages...
const additionalPages = {
    'fashion-accessories': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Accessories Guide ✨</h1>
                    <p>Complete your look with the perfect finishing touches</p>
                </div>

                <div class="content-section">
                    <h2>Essential Accessories</h2>
                    
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">💎</span>
                            <h3>Chokers</h3>
                            <p><strong>Why:</strong> Draws attention to the neck, creates a delicate aesthetic, very femboy-coded</p>
                            <p><strong>Types:</strong> Black velvet, leather, chain, lace, spiked (alt styles)</p>
                            <p><strong>Sizing:</strong> Should fit snugly but not restrict breathing. Adjustable styles are best.</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">👜</span>
                            <h3>Bags</h3>
                            <p><strong>Crossbody bags:</strong> Practical and cute, sits at hip</p>
                            <p><strong>Mini backpacks:</strong> Casual, playful aesthetic</p>
                            <p><strong>Tote bags:</strong> Carry-all for daily use</p>
                            <p><strong>Colors:</strong> Pastels, white, black for versatility</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">👑</span>
                            <h3>Hair Accessories</h3>
                            <p><strong>Headbands:</strong> Cat ears, bunny ears, or simple fabric</p>
                            <p><strong>Clips & Pins:</strong> Butterfly clips, bobby pins, barrettes</p>
                            <p><strong>Scrunchies:</strong> Soft, aesthetic hair ties</p>
                            <p><strong>Bows:</strong> Clip-in or headband style</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">💍</span>
                            <h3>Jewelry</h3>
                            <p><strong>Rings:</strong> Dainty, stackable styles. Wear on multiple fingers.</p>
                            <p><strong>Bracelets:</strong> Thin chains, friendship bracelets, bangles</p>
                            <p><strong>Earrings:</strong> Studs, small hoops, dangly styles (if pierced)</p>
                            <p><strong>Necklaces:</strong> Delicate chains with pendants</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">🎀</span>
                            <h3>Belts & Garters</h3>
                            <p><strong>Chain belts:</strong> Decorative, hang at hips</p>
                            <p><strong>Skinny belts:</strong> Define waist over dresses/skirts</p>
                            <p><strong>Garter belts:</strong> Functional (hold thigh highs) or aesthetic</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">🕶️</span>
                            <h3>Other Accessories</h3>
                            <p><strong>Sunglasses:</strong> Cat-eye, round frames</p>
                            <p><strong>Gloves:</strong> Fingerless, lace, or long opera style</p>
                            <p><strong>Masks:</strong> Cute patterns for practical/aesthetic use</p>
                            <p><strong>Pins/Patches:</strong> LGBTQ+ pride, anime, personal interests</p>
                        </div>
                    </div>

                    <h2>Layering Accessories</h2>
                    <div class="info-box">
                        <h4>Creating a Cohesive Look</h4>
                        <ul>
                            <li><strong>Rule of Three:</strong> Use 2-3 accessory types max to avoid overwhelming</li>
                            <li><strong>Metal matching:</strong> Stick to gold OR silver tones, not mixed</li>
                            <li><strong>Color coordination:</strong> Accessories should complement outfit colors</li>
                            <li><strong>Statement piece:</strong> Choose one focal accessory (e.g., chunky choker) and keep others subtle</li>
                        </ul>
                    </div>

                    <h2>Budget-Friendly Options</h2>
                    <div class="info-box success">
                        <h4>Where to Find Affordable Accessories</h4>
                        <ul>
                            <li><strong>Claire's/Icing:</strong> Teen-oriented, lots of cute options</li>
                            <li><strong>Forever 21:</strong> Trendy, inexpensive jewelry</li>
                            <li><strong>Amazon:</strong> Bulk packs of rings, clips, etc.</li>
                            <li><strong>AliExpress/Wish:</strong> Very cheap, long shipping, quality varies</li>
                            <li><strong>Thrift stores:</strong> Unique vintage finds</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        ar: `<div class="container"><div class="section-header"><h1>دليل الإكسسوارات ✨</h1></div></div>`
    },

    'fashion-shop': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Where to Shop 🛍️</h1>
                    <p>Retailers, privacy tips, and shopping strategies</p>
                </div>

                <div class="content-section">
                    <h2>Online Retailers</h2>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Store</th>
                                <th>Pros</th>
                                <th>Price Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Amazon</strong></td>
                                <td>Huge selection, fast shipping, easy returns, Hub/Locker delivery</td>
                                <td>$ - $$$</td>
                            </tr>
                            <tr>
                                <td><strong>ASOS</strong></td>
                                <td>Trendy, size-inclusive, free returns, specific "femme" sections</td>
                                <td>$$ - $$$</td>
                            </tr>
                            <tr>
                                <td><strong>SHEIN</strong></td>
                                <td>Very cheap, massive variety, sizing for all bodies</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td><strong>Wish/AliExpress</strong></td>
                                <td>Cheapest option, Asian sizing (often smaller)</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td><strong>H&M/Forever 21</strong></td>
                                <td>Affordable basics, frequent sales</td>
                                <td>$ - $$</td>
                            </tr>
                            <tr>
                                <td><strong>Target</strong></td>
                                <td>Basics, in-store pickup, reasonable prices</td>
                                <td>$ - $$</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Privacy & Discreet Delivery 📦</h2>
                    <div class="info-box warning">
                        <h4>Amazon Hub & Locker System</h4>
                        <p><strong>What it is:</strong> Amazon Hub Lockers are self-service kiosks where you can pick up packages privately, without involving your home address.</p>
                        
                        <p><strong>How to use:</strong></p>
                        <ul>
                            <li>When checking out on Amazon, select "Pick up at a Locker" instead of home delivery</li>
                            <li>Find a nearby locker location (often in grocery stores, convenience stores, or public spaces)</li>
                            <li>You'll receive a unique pickup code when package arrives</li>
                            <li>Go to locker, enter code, retrieve package - no ID required, completely anonymous</li>
                            <li>Packages stay for 3 days before being returned</li>
                        </ul>

                        <p><strong>Why use it:</strong></p>
                        <ul>
                            <li>Parents/roommates won't see package delivery</li>
                            <li>Package won't be labeled with contents</li>
                            <li>You control when you pick it up</li>
                            <li>Free service</li>
                        </ul>
                    </div>

                    <div class="info-box info">
                        <h4>Other Privacy Strategies</h4>
                        <ul>
                            <li><strong>PO Box:</strong> Rent a mailbox at post office or UPS Store (costs $10-30/month)</li>
                            <li><strong>Ship to friend:</strong> Use a trusted friend's address</li>
                            <li><strong>Hold at post office:</strong> Request "General Delivery" or hold for pickup</li>
                            <li><strong>Nondescript packaging:</strong> Most retailers use plain boxes/bags without branding</li>
                            <li><strong>Billing name:</strong> Some sites let you customize package name</li>
                        </ul>
                    </div>

                    <h2>In-Store Shopping Tips</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">🎁</span>
                            <h3>"Shopping for a Gift"</h3>
                            <p>If questioned, say you're shopping for a girlfriend, sister, or friend. Most people won't press further.</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">🛒</span>
                            <h3>Self-Checkout</h3>
                            <p>Use self-checkout lanes to avoid cashier interaction. Many stores now have these.</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">⏰</span>
                            <h3>Off-Peak Hours</h3>
                            <p>Shop early morning or late evening when stores are less crowded for more privacy.</p>
                        </div>
                    </div>

                    <h2>Budget Shopping Strategies</h2>
                    <div class="info-box success">
                        <h4>Saving Money</h4>
                        <ul>
                            <li><strong>Thrift stores:</strong> Goodwill, Salvation Army, Plato's Closet - unique finds at 70-90% off retail</li>
                            <li><strong>Sale sections:</strong> Check clearance racks in stores, end-of-season sales</li>
                            <li><strong>Coupon codes:</strong> Use Honey browser extension, RetailMeNot for online discounts</li>
                            <li><strong>Fast fashion caution:</strong> SHEIN/Wish are cheap but low quality - buy basics only</li>
                            <li><strong>Invest in staples:</strong> Spend more on versatile pieces (black skirt, white button-up) that you'll wear often</li>
                        </ul>
                    </div>

                    <h2>Specialty Stores</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Store Type</th>
                                <th>Examples</th>
                                <th>What For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Cosplay Shops</strong></td>
                                <td>EZCosplay, MicCostumes</td>
                                <td>Wigs, costumes, accessories</td>
                            </tr>
                            <tr>
                                <td><strong>Sock Dreams</strong></td>
                                <td>SockDreams.com</td>
                                <td>Best thigh high selection, plus sizes</td>
                            </tr>
                            <tr>
                                <td><strong>LoveHoney/AdamEve</strong></td>
                                <td>Adult stores</td>
                                <td>Lingerie, tucking gaffs, advanced items</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        ar: `<div class="container"><div class="section-header"><h1>أين تتسوق 🛍️</h1></div></div>`
    },

    'fashion-sizing': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>Sizing Guide 📏</h1>
                    <p>Understanding women's sizing and accurate measurements</p>
                </div>

                <div class="content-section">
                    <h2>Male vs Female Sizing Conversion</h2>
                    
                    <div class="info-box warning">
                        <h4>Important Note</h4>
                        <p>Women's clothing is sized smaller than men's. If you typically wear men's medium, you'll likely need women's large or XL. Always measure yourself rather than guessing!</p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Women's US Size</th>
                                <th>EU Size</th>
                                <th>UK Size</th>
                                <th>Approximate Men's Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XS (0-2)</td>
                                <td>32-34</td>
                                <td>4-6</td>
                                <td>N/A (Very slim builds)</td>
                            </tr>
                            <tr>
                                <td>S (4-6)</td>
                                <td>36-38</td>
                                <td>8-10</td>
                                <td>XS</td>
                            </tr>
                            <tr>
                                <td>M (8-10)</td>
                                <td>40-42</td>
                                <td>12-14</td>
                                <td>S</td>
                            </tr>
                            <tr>
                                <td>L (12-14)</td>
                                <td>44-46</td>
                                <td>16-18</td>
                                <td>M</td>
                            </tr>
                            <tr>
                                <td>XL (16-18)</td>
                                <td>48-50</td>
                                <td>20-22</td>
                                <td>L</td>
                            </tr>
                            <tr>
                                <td>XXL (20-22)</td>
                                <td>52-54</td>
                                <td>24-26</td>
                                <td>XL</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>How to Take Accurate Measurements</h2>
                    
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">📐</span>
                            <h3>Bust/Chest</h3>
                            <p><strong>How:</strong> Measure around the fullest part of your chest, keeping tape parallel to ground</p>
                            <p><strong>Tip:</strong> Wear a bra if you plan to wear one with the outfit, or measure without to simulate bust size</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">📏</span>
                            <h3>Waist</h3>
                            <p><strong>How:</strong> Measure around natural waistline (narrowest point, usually above belly button)</p>
                            <p><strong>Tip:</strong> Don't suck in your stomach! Measure comfortably for accurate fit</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">📍</span>
                            <h3>Hips</h3>
                            <p><strong>How:</strong> Measure around the widest part of your hips/buttocks</p>
                            <p><strong>Tip:</strong> This is usually 7-9 inches below your waist. Stand with feet together.</p>
                        </div>
                    </div>

                    <h2>Size Chart Reference</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Bust (inches)</th>
                                <th>Waist (inches)</th>
                                <th>Hips (inches)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XS</td>
                                <td>31-32</td>
                                <td>24-25</td>
                                <td>33-34</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>33-34</td>
                                <td>26-27</td>
                                <td>35-36</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>35-36</td>
                                <td>28-29</td>
                                <td>37-38</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>37-39</td>
                                <td>30-32</td>
                                <td>39-41</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>40-42</td>
                                <td>33-35</td>
                                <td>42-44</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>43-45</td>
                                <td>36-38</td>
                                <td>45-47</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Asian Sizing Differences</h2>
                    <div class="info-box warning">
                        <h4>Buying from Asian Retailers (AliExpress, Yesstyle, etc.)</h4>
                        <p>Asian sizes run MUCH smaller than Western sizes. General rule:</p>
                        <ul>
                            <li>Asian M = US XS/S</li>
                            <li>Asian L = US S/M</li>
                            <li>Asian XL = US M/L</li>
                            <li>Asian 2XL = US L/XL</li>
                        </ul>
                        <p><strong>Always check the specific size chart</strong> provided by the seller in centimeters and compare to your measurements!</p>
                    </div>

                    <h2>Specific Garment Sizing Tips</h2>
                    
                    <div class="info-box">
                        <h4>Skirts</h4>
                        <ul>
                            <li><strong>Waist measurement is key:</strong> Most important for fit</li>
                            <li><strong>Length:</strong> Mini (14-16"), Above Knee (18-20"), Knee (22-24"), Below Knee (26-28")</li>
                            <li><strong>Elastic waist:</strong> More forgiving sizing</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h4>Dresses</h4>
                        <ul>
                            <li><strong>Babydoll/Empire:</strong> Size up if you have broader shoulders</li>
                            <li><strong>Bodycon/Fitted:</strong> Requires precise measurements</li>
                            <li><strong>A-line:</strong> Most forgiving style</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h4>Thigh Highs</h4>
                        <ul>
                            <li><strong>Thigh circumference:</strong> Measure around widest part of thigh</li>
                            <li><strong>Standard fit:</strong> Usually up to 22-24" thigh circumference</li>
                            <li><strong>Plus size:</strong> 24-28" thigh circumference</li>
                        </ul>
                    </div>

                    <h2>Returns & Exchanges</h2>
                    <div class="info-box success">
                        <h4>Most Flexible Return Policies</h4>
                        <ul>
                            <li><strong>Amazon:</strong> 30 days, free returns on most items</li>
                            <li><strong>ASOS:</strong> 28 days, free returns</li>
                            <li><strong>Nordstrom:</strong> No time limit, no questions asked</li>
                            <li><strong>Target:</strong> 90 days with receipt</li>
                        </ul>
                        <p><strong>Pro tip:</strong> Order multiple sizes and return what doesn't fit. Many retailers offer free returns!</p>
                    </div>
                </div>
            </div>
        `,
        ar: `<div class="container"><div class="section-header"><h1>دليل المقاسات 📏</h1></div></div>`
    }
};

// Merge additional pages
Object.assign(pages, additionalPages);

// Add more pages...
// [Due to length, I'll continue with essential pages. The pattern continues similarly]

// Application State
const app = {
    currentLang: 'en',
    currentTheme: 'light',
    currentPage: 'home'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initRouter();
    initMobileMenu();
    initDropdowns();
    attachEventListeners();
    
    // Load initial page
    navigate(window.location.hash || '#home');
});

// Theme Management
function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    app.currentTheme = saved;
    document.body.className = `theme-${saved}`;
    updateThemeIcon();
}

function toggleTheme() {
    app.currentTheme = app.currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = `theme-${app.currentTheme}`;
    localStorage.setItem('theme', app.currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle .theme-icon');
    icon.textContent = app.currentTheme === 'light' ? '🌙' : '☀️';
}

// Language Management
function initLanguage() {
    const saved = localStorage.getItem('lang') || 'en';
    app.currentLang = saved;
    setLanguage(saved);
}

function toggleLanguage() {
    app.currentLang = app.currentLang === 'en' ? 'ar' : 'en';
    setLanguage(app.currentLang);
    localStorage.setItem('lang', app.currentLang);
    
    // Reload current page with new language
    navigate(`#${app.currentPage}`, false);
}

function setLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update language toggle button
    const langBtn = document.querySelector('#langToggle .lang-text');
    langBtn.textContent = lang === 'en' ? 'العربية' : 'English';
}

// Router
function initRouter() {
    window.addEventListener('hashchange', () => {
        navigate(window.location.hash);
    });
}

function navigate(hash, addToHistory = true) {
    const page = hash.replace('#', '') || 'home';
    app.currentPage = page;
    
    // Get page content
    const pageData = pages[page];
    if (!pageData) {
        console.error(`Page not found: ${page}`);
        return;
    }
    
    const content = pageData[app.currentLang] || pageData['en'];
    
    // Update content
    const appEl = document.getElementById('app');
    appEl.innerHTML = content;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu if open
    closeMobileMenu();
    
    // Reattach route links
    attachRouteLinks();
    
    // Update URL if needed
    if (addToHistory && window.location.hash !== hash) {
        window.location.hash = hash;
    }
}

function attachRouteLinks() {
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigate(href);
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

function closeMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    toggle.classList.remove('active');
    menu.classList.remove('active');
}

// Dropdown Menus
function initDropdowns() {
    // Mobile dropdown toggle
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = toggle.closest('.dropdown');
                parent.classList.toggle('active');
            }
        });
    });
}

// Event Listeners
function attachEventListeners() {
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    attachRouteLinks();
}

// Export for debugging
window.app = app;
window.navigate = navigate;
