// 语言数据
const translations = {
    zh: {
        title: '天文探索 - 探索宇宙的奥秘',
        logo: '天文探索',
        'logo.subtitle': 'ASTRONOMY EXPLORATION',
        'nav.home': '主页',
        'nav.about': '关于我们',
        'nav.projects': '项目介绍',
        'nav.contact': '联系我',
        'hero.title1': '探索无限宇宙',
        'hero.title2': '揭秘星辰大海，从这里开始',
        'hero.subtitle': '在浩瀚的星空中，寻找属于你的那颗星',
        'hero.btn1': '开启旅程',
        'hero.btn2': '了解更多',
        'feature.obs.title': '木星：巨行星风暴',
        'feature.obs.desc': '木星是太阳系体积最大的行星，其著名的大红斑是持续数百年的高压风暴。通过望远镜可观察到云带结构与卫星凌日现象。',
        'feature.photo.title': '火星：红色行星地貌',
        'feature.photo.desc': '火星表面分布着火山、峡谷与极冠，其中奥林匹斯山是太阳系已知最高火山。它是未来深空探测与人类登陆研究的重要目标。',
        'feature.planet.title': '土星：壮观行星环',
        'feature.planet.desc': '土星环主要由冰与岩石碎片组成，具有清晰环缝结构。观测土星环倾角变化，可帮助理解行星系统形成与演化过程。',
        'feature.universe.title': '海王星：深蓝巨行星',
        'feature.universe.desc': '海王星位于太阳系外侧，具有剧烈的大气活动和高速风暴，是研究外太阳系环境与行星演化的重要目标。',
        'telescope.title': '望远镜互动观测',
        'telescope.desc': '点击下方望远镜，打开可旋转的 3D 模型，查看月球表面地形细节。',
        'telescope.btn': '🔭 启动望远镜',
        'telescope.modalTitle': '月球地形 3D 观测（Sketchfab）',
        'about.title': '关于我们',
        'about.bg.title': '背景介绍',
        'about.bg.text': '天文探索团队源于成员对宇宙的持续兴趣与学术探索的热情。团队以观测实践与理论学习相结合的方式，围绕基础天文现象、星空文化及科学传播展开活动。在持续的学习与实践中，成员逐步建立起对天文学的系统认知，并尝试将专业知识转化为面向公众的科普内容，提升科学传播能力。',
        'about.team.title': '团队与合作机构',
        'about.team.text': '团队成员由具备不同兴趣方向的高中生组成，分工涵盖观测记录、基础数据整理、内容撰写与视觉呈现等。团队在校内外积极开展交流，与学校社团、天文爱好者组织及科普平台建立合作关系，参与观测活动与科普实践。通过协作与项目推进，团队不断提升成员的研究能力、沟通能力与跨领域合作能力。',
        'about.mission.title': '使命与愿景',
        'about.mission.label1': '使命：',
        'about.mission.p1': '让高质量的天文知识与观测体验触达更多人。',
        'about.mission.label2': '愿景：',
        'about.mission.p2': '成为连接星空与公众的可靠桥梁，陪伴每一位探索者仰望夜空、理解宇宙。',
        'projects.title': '项目介绍',
        'projects.p1.title': 'Minnie-Astrophysics',
        'projects.p1.desc': '基于 LIGO 真实数据，围绕 GW150914 与 GW170817 完成引力波信号的频谱分析、滤波清洗、Q-transform 可视化与音频化（WAV）流程，将“时空涟漪”转化为可看、可听的科研体验。',
        'projects.p1.tag1': '引力波',
        'projects.p1.tag2': 'LIGO',
        'projects.p1.tag3': 'Python',
        'projects.p1.link': '查看项目详情',
        'projects.p2.title': '深空天体摄影',
        'projects.p2.desc': '使用专业设备拍摄深空天体，包括星云、星系、星团等，记录宇宙的壮美。',
        'projects.p2.tag1': '摄影',
        'projects.p2.tag2': '深空',
        'projects.p2.tag3': '后期',
        'projects.p3.title': '卫星追踪系统',
        'projects.p3.desc': '开发实时卫星追踪系统，预测卫星过境时间，帮助天文爱好者观测人造卫星。',
        'projects.p3.tag1': '开发',
        'projects.p3.tag2': '追踪',
        'projects.p3.tag3': '预测',
        'projects.p4.title': '行星数据可视化',
        'projects.p4.desc': '收集整理行星数据，通过可视化方式展示太阳系各行星的特征和轨道信息。',
        'projects.p4.tag1': '数据',
        'projects.p4.tag2': '可视化',
        'projects.p4.tag3': '教育',
        'contact.title': '联系我',
        'contact.subtitle': '让我们一起探索宇宙',
        'contact.desc': '如果您对天文学感兴趣，或者想要交流观测经验，欢迎与我联系！',
        'contact.email.label': '邮箱',
        'contact.social.label': '电话',
        'contact.social.desc': '+86 16622374420',
        'contact.location.label': '位置',
        'contact.location.desc': '中国 · 北京',
        'contact.form.name': '姓名',
        'contact.form.namePlaceholder': '请输入您的姓名',
        'contact.form.email': '邮箱',
        'contact.form.emailPlaceholder': '请输入您的邮箱',
        'contact.form.subject': '主题',
        'contact.form.subjectPlaceholder': '请输入邮件主题',
        'contact.form.message': '留言',
        'contact.form.messagePlaceholder': '请输入您的留言...',
        'contact.form.submit': '发送消息',
        'footer.brand': '天文探索',
        'footer.text': '探索无限，发现可能.'
    },
    en: {
        title: 'Astronomy Exploration - Discover the Universe',
        logo: 'Astro Explore',
        'logo.subtitle': 'ASTRONOMY EXPLORATION',
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title1': 'Explore the Boundless Universe',
        'hero.title2': 'Unveil the Starry Ocean — Your Journey Starts Here',
        'hero.subtitle': 'In the vast starry sky, find your own star',
        'hero.btn1': 'Begin the Journey',
        'hero.btn2': 'Learn More',
        'feature.obs.title': 'Jupiter: Giant Planet Storms',
        'feature.obs.desc': 'Jupiter is the largest planet in the Solar System. Its Great Red Spot is a persistent high-pressure storm that has lasted for centuries, with visible cloud bands and moon transits.',
        'feature.photo.title': 'Mars: Red Planet Terrain',
        'feature.photo.desc': 'Mars features volcanoes, vast canyons, and polar caps. Olympus Mons is the tallest known volcano in the Solar System, making Mars a key target for deep-space exploration.',
        'feature.planet.title': 'Saturn: Spectacular Rings',
        'feature.planet.desc': 'Saturn’s rings are made of ice and rocky debris with clear ring-gap structures. Observing ring tilt changes helps us understand planetary system formation and evolution.',
        'feature.universe.title': 'Neptune: Deep Blue Giant',
        'feature.universe.desc': 'Neptune is an outer Solar System giant with dynamic weather and high-speed winds, making it a key target for studying planetary evolution.',
        'telescope.title': 'Interactive Telescope View',
        'telescope.desc': 'Click the telescope below to open an interactive 3D model and inspect lunar surface terrain details.',
        'telescope.btn': '🔭 Launch Telescope',
        'telescope.modalTitle': 'Lunar Terrain 3D Viewer (Sketchfab)',
        'about.title': 'About Us',
        'about.bg.title': 'Background',
        'about.bg.text': 'The Astronomy Exploration team grew out of curiosity and respect for the cosmos, bringing together people in observation, science communication, and digital media. We focus on public astronomy education and starry-sky culture, and connect enthusiasts with professional institutions through open collaboration.',
        'about.team.title': 'Team & Partner Organizations',
        'about.team.text': 'Our core team spans astronomical observation, data processing, content planning, and visual design. We work with observatories, science venues, university clubs, and imaging partners on observation programs and public events.',
        'about.mission.title': 'Mission & Vision',
        'about.mission.label1': 'Mission: ',
        'about.mission.p1': 'Bring rigorous astronomy knowledge and observing experiences to a wider audience.',
        'about.mission.label2': 'Vision: ',
        'about.mission.p2': 'Serve as a trusted bridge between the stars and the public, accompanying every explorer who looks up and seeks to understand the universe.',
        'projects.title': 'Projects',
        'projects.p1.title': 'Minnie-Astrophysics',
        'projects.p1.desc': 'Using real LIGO data from events such as GW150914 and GW170817, this project delivers a full workflow of spectral analysis, signal cleaning, Q-transform visualization, and WAV sonification—turning abstract spacetime ripples into visible and audible scientific experience.',
        'projects.p1.tag1': 'Gravitational waves',
        'projects.p1.tag2': 'LIGO',
        'projects.p1.tag3': 'Python',
        'projects.p1.link': 'View Project Details',
        'projects.p2.title': 'Deep Sky Astrophotography',
        'projects.p2.desc': 'Using professional equipment to photograph deep sky objects, including nebulae, galaxies, star clusters, etc., recording the magnificence of the universe.',
        'projects.p2.tag1': 'Photography',
        'projects.p2.tag2': 'Deep Sky',
        'projects.p2.tag3': 'Post-processing',
        'projects.p3.title': 'Satellite Tracking System',
        'projects.p3.desc': 'Develop a real-time satellite tracking system to predict satellite transit times and help astronomy enthusiasts observe artificial satellites.',
        'projects.p3.tag1': 'Development',
        'projects.p3.tag2': 'Tracking',
        'projects.p3.tag3': 'Prediction',
        'projects.p4.title': 'Planetary Data Visualization',
        'projects.p4.desc': 'Collect and organize planetary data, and display the characteristics and orbital information of planets in the solar system through visualization.',
        'projects.p4.tag1': 'Data',
        'projects.p4.tag2': 'Visualization',
        'projects.p4.tag3': 'Education',
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Let\'s Explore the Universe Together',
        'contact.desc': 'If you are interested in astronomy or want to exchange observation experiences, please feel free to contact me!',
        'contact.email.label': 'Email',
        'contact.social.label': 'Phone',
        'contact.social.desc': '+86 16622374420',
        'contact.location.label': 'Location',
        'contact.location.desc': 'Beijing, China',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Please enter your name',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'Please enter your email',
        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'Please enter the subject',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Please enter your message...',
        'contact.form.submit': 'Send Message',
        'footer.brand': 'Astronomy Exploration',
        'footer.text': 'Explore infinitely, discover possibilities.'
    }
};

// 当前语言（固定英文）
let currentLang = 'en';

// Tab切换功能
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // 初始化语言
    updateLanguage(currentLang);
    localStorage.setItem('language', 'en');

    // 语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            localStorage.setItem('language', currentLang);
            updateLanguage(currentLang);
            langToggle.querySelector('.lang-text').textContent = currentLang === 'zh' ? 'EN' : '中';
        });
    }

    // 初始化：显示主页
    showTab('home');

    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            showTab(targetTab);
        });
    });

    function showTab(tabName) {
        // 移除所有活动状态
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 激活选中的tab
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);

        if (activeLink && activeContent) {
            activeLink.classList.add('active');
            activeContent.classList.add('active');
        }

        // 滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 这里可以添加实际的表单提交逻辑
            console.log('表单数据:', formData);
            
            // 显示成功消息
            const successMsg = currentLang === 'zh' ? '感谢您的留言！我会尽快回复您。' : 'Thank you for your message! I will reply to you as soon as possible.';
            alert(successMsg);
            
            // 重置表单
            contactForm.reset();
        });
    }

    // 主页按钮点击事件
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const btnText = this.getAttribute('data-i18n');
            if (btnText === 'hero.btn1') {
                showTab('projects');
            } else if (btnText === 'hero.btn2') {
                showTab('about');
            }
        });
    });

    // 望远镜 3D 模型弹窗
    const openTelescope = document.getElementById('openTelescope');
    const closeTelescope = document.getElementById('closeTelescope');
    const terrainModal = document.getElementById('terrainModal');

    if (openTelescope && closeTelescope && terrainModal) {
        openTelescope.addEventListener('click', function() {
            terrainModal.classList.add('show');
            terrainModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });

        const closeModal = function() {
            terrainModal.classList.remove('show');
            terrainModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        closeTelescope.addEventListener('click', closeModal);

        terrainModal.addEventListener('click', function(e) {
            if (e.target === terrainModal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && terrainModal.classList.contains('show')) {
                closeModal();
            }
        });
    }

    // 添加滚动时的导航栏效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        }
        
        lastScroll = currentScroll;
    });

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 更新语言
function updateLanguage(lang) {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新标题
    if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }

    // 更新placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 更新语言切换按钮文本
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.querySelector('.lang-text').textContent = lang === 'zh' ? 'EN' : '中';
    }
}

