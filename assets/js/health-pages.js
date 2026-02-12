// Health & HRT Pages Content

const healthPages = {
    'health-disclaimer': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>⚠️ Medical Disclaimer</h1>
                    <p>Please read carefully before accessing HRT & Health content</p>
                </div>

                <div class="content-section">
                    <div class="info-box warning">
                        <h4>🏥 This Is Not Medical Advice</h4>
                        <p><strong>IMPORTANT:</strong> The information provided in the HRT & Health section is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations.</p>
                    </div>

                    <h2>Before You Continue</h2>
                    
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">👨‍⚕️</span>
                            <h3>Consult Healthcare Professionals</h3>
                            <p>Always speak with qualified medical professionals before starting, stopping, or changing any medical treatment, including hormone replacement therapy (HRT).</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">🔬</span>
                            <h3>Individual Variation</h3>
                            <p>Every body is different. What works for one person may not work for another. Hormone effects, timelines, and side effects vary widely.</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">⚖️</span>
                            <h3>Risks & Benefits</h3>
                            <p>All medical treatments carry risks and benefits. Only you and your doctor can determine if HRT is right for you based on your medical history.</p>
                        </div>
                    </div>

                    <h2>What This Section DOES Provide</h2>
                    <ul>
                        <li>General education about hormone replacement therapy mechanisms</li>
                        <li>Overview of common medications used in feminizing HRT</li>
                        <li>Typical timeline of physical and psychological changes (with variation noted)</li>
                        <li>Information about different delivery methods (oral, injections, transdermal)</li>
                        <li>General guidance on monitoring and safety considerations</li>
                        <li>Mental health and wellness information</li>
                    </ul>

                    <h2>What This Section Does NOT Provide</h2>
                    <ul>
                        <li>Specific dosage recommendations for individuals</li>
                        <li>Prescriptions or instructions to self-medicate</li>
                        <li>Diagnosis of any medical conditions</li>
                        <li>Replacement for professional medical care</li>
                        <li>Legal advice regarding HRT access in your region</li>
                    </ul>

                    <div class="info-box warning">
                        <h4>⚠️ DIY HRT Dangers</h4>
                        <p><strong>We strongly discourage self-medication without medical supervision.</strong> DIY hormone therapy can lead to:</p>
                        <ul>
                            <li>Incorrect dosing causing health complications</li>
                            <li>Lack of monitoring for serious side effects (blood clots, liver damage, cardiovascular issues)</li>
                            <li>Counterfeit or contaminated medications from unregulated sources</li>
                            <li>Legal consequences in some jurisdictions</li>
                        </ul>
                        <p>If you cannot access traditional healthcare, seek informed consent clinics, telehealth services (Plume, Folx Health), or LGBTQ+ community health centers.</p>
                    </div>

                    <h2>Age & Legal Considerations</h2>
                    <div class="info-box info">
                        <h4>Minors & HRT</h4>
                        <p>In most regions, hormone therapy for minors requires parental consent and involvement of pediatric endocrinologists or specialized gender clinics. Laws vary by country and state. This site does not provide guidance for minors seeking HRT without parental support - please consult with school counselors, trusted adults, or youth advocacy organizations like The Trevor Project.</p>
                    </div>

                    <h2>Mental Health Note</h2>
                    <div class="info-box success">
                        <h4>💚 HRT Is Not a Substitute for Therapy</h4>
                        <p>While HRT can significantly improve dysphoria and mental well-being for many people, it works best when combined with:</p>
                        <ul>
                            <li>Gender-affirming therapy or counseling</li>
                            <li>Supportive community and relationships</li>
                            <li>Healthy coping mechanisms</li>
                            <li>Treatment for co-occurring mental health conditions</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h4>By continuing to the HRT & Health section, you acknowledge:</h4>
                        <ul>
                            <li>✅ This information is educational only, not medical advice</li>
                            <li>✅ You will consult healthcare professionals before making medical decisions</li>
                            <li>✅ You understand individual results vary and timelines are approximate</li>
                            <li>✅ You will not use this information to self-medicate without supervision</li>
                        </ul>
                    </div>

                    <div class="hero-buttons">
                        <a href="#health-hrt" class="btn btn-primary" data-route>I Understand - Continue to HRT Basics</a>
                        <a href="#home" class="btn btn-secondary" data-route>Return to Home</a>
                    </div>
                </div>
            </div>
        `,
        ar: `<div class="container"><div class="section-header"><h1>⚠️ تنويه طبي</h1></div></div>`
    },

    'health-hrt': {
        en: `
            <div class="container">
                <div class="section-header">
                    <h1>HRT Basics 💊</h1>
                    <p>Understanding feminizing hormone replacement therapy</p>
                </div>

                <div class="content-section">
                    <h2>What is Feminizing HRT?</h2>
                    <p>Hormone Replacement Therapy (HRT) for feminization involves taking estrogen and anti-androgens (testosterone blockers) to induce physical and emotional changes that align with a more feminine presentation. It is primarily used by transgender women and some non-binary/femboy individuals who desire feminization.</p>

                    <div class="info-box info">
                        <h4>Who Uses Feminizing HRT?</h4>
                        <ul>
                            <li><strong>Transgender women:</strong> To align body with gender identity</li>
                            <li><strong>Non-binary individuals:</strong> Who desire feminine characteristics</li>
                            <li><strong>Some femboys:</strong> Though many femboys do NOT pursue HRT and are comfortable with their AMAB (assigned male at birth) bodies</li>
                        </ul>
                        <p><strong>Note:</strong> Being a femboy does not require HRT. Many femboys express femininity through fashion and presentation without medical intervention. HRT is a personal choice based on body dysphoria and desired changes.</p>
                    </div>

                    <h2>Core Medications</h2>
                    
                    <h3>Estrogen (Feminizing Hormone)</h3>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">💊</span>
                            <h3>Oral Estradiol</h3>
                            <p><strong>Brands:</strong> Estrofem, Progynova, Estrace</p>
                            <p><strong>How taken:</strong> Pill, swallowed or sublingual (under tongue)</p>
                            <p><strong>Pros:</strong> Convenient, easy to adjust dose</p>
                            <p><strong>Cons:</strong> Daily dosing, first-pass liver metabolism, may be less effective</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">💉</span>
                            <h3>Injectable Estradiol</h3>
                            <p><strong>Types:</strong> Estradiol valerate, cypionate</p>
                            <p><strong>How taken:</strong> Intramuscular injection every 3-14 days</p>
                            <p><strong>Pros:</strong> More consistent levels, bypasses liver, often more effective</p>
                            <p><strong>Cons:</strong> Requires injections, availability issues in some regions</p>
                        </div>

                        <div class="card">
                            <span class="card-icon">🩹</span>
                            <h3>Transdermal Estradiol</h3>
                            <p><strong>Types:</strong> Patches (Climara, Vivelle) or gel</p>
                            <p><strong>How taken:</strong> Applied to skin, absorbed over time</p>
                            <p><strong>Pros:</strong> Steady levels, bypasses liver, lower clot risk</p>
                            <p><strong>Cons:</strong> Skin irritation, patches may fall off, harder to achieve high levels</p>
                        </div>
                    </div>

                    <h3>Anti-Androgens (Testosterone Blockers)</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Mechanism</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Spironolactone</strong></td>
                                <td>Androgen receptor blocker</td>
                                <td>Common in US. Side effect: increased urination, potassium retention. Check levels regularly.</td>
                            </tr>
                            <tr>
                                <td><strong>Cyproterone Acetate</strong></td>
                                <td>Progestin, reduces testosterone production</td>
                                <td>Common in Europe. Stronger blocker but more side effects. Liver monitoring required.</td>
                            </tr>
                            <tr>
                                <td><strong>Bicalutamide</strong></td>
                                <td>Androgen receptor blocker</td>
                                <td>Newer option, fewer side effects than spiro or cypro. Gaining popularity.</td>
                            </tr>
                            <tr>
                                <td><strong>Finasteride/Dutasteride</strong></td>
                                <td>5α-reductase inhibitor</td>
                                <td>Blocks DHT (a potent form of T). Used for hair loss, sometimes added to HRT.</td>
                            </tr>
                            <tr>
                                <td><strong>Monotherapy (high-dose E only)</strong></td>
                                <td>Estrogen suppresses T naturally</td>
                                <td>No separate blocker needed if E levels are high enough (~200-300 pg/mL). Requires injections or high-dose oral/patches.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>How HRT Works</h2>
                    <div class="info-box">
                        <h4>The Two-Part Process</h4>
                        <p><strong>1. Suppress Testosterone:</strong> Anti-androgens block testosterone production or action, stopping masculinizing effects and allowing feminization.</p>
                        <p><strong>2. Introduce Estrogen:</strong> Estrogen induces feminine fat redistribution, breast growth, skin softening, and other changes.</p>
                        <p><strong>Together:</strong> They shift your body's hormone profile from typical male range (testosterone 300-1000 ng/dL) to typical female range (testosterone <50 ng/dL, estrogen 100-200 pg/mL).</p>
                    </div>

                    <h2>Expected Changes (See Timeline page for details)</h2>
                    <ul>
                        <li><strong>Physical:</strong> Breast development, softer skin, fat redistribution to hips/thighs/butt, reduced body hair growth, decreased muscle mass, possible minor facial changes</li>
                        <li><strong>Emotional:</strong> Emotional range may broaden, decreased random erections, changes in libido, possible mood improvements</li>
                        <li><strong>What does NOT change:</strong> Voice (requires training), bone structure, height, hand/foot size</li>
                    </ul>

                    <h2>Requirements to Start HRT</h2>
                    <div class="card-grid">
                        <div class="card">
                            <span class="card-icon">🏥</span>
                            <h3>Informed Consent Model</h3>
                            <p>Many clinics (Planned Parenthood, LGBTQ+ health centers) use informed consent - you discuss risks/benefits with doctor and can start HRT same-day without therapy letter. Requires:</p>
                            <ul>
                                <li>Age 18+ (or parental consent if minor)</li>
                                <li>Blood tests to establish baseline</li>
                                <li>Informed consent form signing</li>
                            </ul>
                        </div>

                        <div class="card">
                            <span class="card-icon">📋</span>
                            <h3>Traditional Gatekeeping Model</h3>
                            <p>Some providers require gender dysphoria diagnosis and therapy letter. Requirements:</p>
                            <ul>
                                <li>Therapist letter diagnosing gender dysphoria</li>
                                <li>Endocrinologist consultation</li>
                                <li>Sometimes "Real Life Experience" (living as gender for period of time)</li>
                            </ul>
                            <p>This model is becoming less common but still exists in some areas.</p>
                        </div>
                    </div>

                    <h2>Monitoring & Safety</h2>
                    <div class="info-box warning">
                        <h4>Regular Blood Work is Essential</h4>
                        <p><strong>Baseline (before starting):</strong> Testosterone, estrogen, liver function, kidney function, cholesterol, blood count</p>
                        <p><strong>Follow-up schedule:</strong></p>
                        <ul>
                            <li>3 months after starting</li>
                            <li>6 months</li>
                            <li>Then every 6-12 months</li>
                        </ul>
                        <p><strong>Why:</strong> Monitor hormone levels (too high or low), check for liver/kidney stress, watch for blood clotting risk, ensure safe levels.</p>
                    </div>

                    <h2>Costs & Access</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Approximate Cost (US, without insurance)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Oral estradiol + spiro</td>
                                <td>$20-40/month</td>
                            </tr>
                            <tr>
                                <td>Injectable estradiol</td>
                                <td>$30-80/month (varies by formulation)</td>
                            </tr>
                            <tr>
                                <td>Patches</td>
                                <td>$50-200/month</td>
                            </tr>
                            <tr>
                                <td>Initial consultation</td>
                                <td>$100-300</td>
                            </tr>
                            <tr>
                                <td>Blood work</td>
                                <td>$50-200 per test</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="info-box success">
                        <h4>Affordable Access Options</h4>
                        <ul>
                            <li><strong>Telehealth:</strong> Plume ($99/month all-inclusive), Folx Health ($59-129/month), QueerMed</li>
                            <li><strong>Insurance:</strong> Many US insurers now cover HRT. Check your plan.</li>
                            <li><strong>GoodRx:</strong> Use GoodRx coupons to reduce medication costs by 50-80%</li>
                            <li><strong>Community health centers:</strong> Sliding scale fees based on income</li>
                        </ul>
                    </div>

                    <div class="hero-buttons">
                        <a href="#health-timeline" class="btn btn-primary" data-route>View Transition Timeline</a>
                        <a href="#health-mental" class="btn btn-accent" data-route>Mental Health Support</a>
                    </div>
                </div>
            </div>
        `,
        ar: `<div class="container"><div class="section-header"><h1>أساسيات العلاج الهرموني 💊</h1></div></div>`
    }
};

// Merge with pages
if (typeof pages !== 'undefined') {
    Object.assign(pages, healthPages);
}
