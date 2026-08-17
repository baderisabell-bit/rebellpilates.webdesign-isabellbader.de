/*Sprache wechseln*/
let currentLang = localStorage.getItem('lang') || 'de';

const translations = {
    de: {
    telefon: 'Telefon: +49 174 8238738',
    email: 'EMail: rebellpilates@pm.me',
    pilates: 'Pilates',
    instruktor: 'Instrukteur',
    leistungsangebote: 'Leistungsangebote',
    apparate: 'Apparate',
    training: 'Training',
    erfahrungen: 'Erfahrungen',
    studio: 'Studio',
    welcome: 'Willkommen bei Rebell Pilates, wo das originale Körpertraining von Joseph Pilates unter voller Diskretion praktiziert wird. Pilates hat seine Methode entwickelt und Contrology genannt, um das strukturelle Gleichgewicht wiederherzustellen, den Körper auf intelligente Weise zu stärken und eine echte muskuläre Kontrolle zu entwickeln. Der Ansatz ist korrigierend, präzise und systematisch verwurzelt. Unser Unterricht folgt der traditionellen Methode auf authentischen Geräten, basierend auf den Patenten von Joseph Pilates. Jede Bewegung baut auf der vorherigen auf. Der Ablauf ist fließend und logisch. Jede Einheit hat einen Zweck. Dies ist diszipliniertes Training für langfristige strukturelle Gesundheit und Fitness. Wir stellen Qualität über Quantität. Bei Rebell Pilates Pilates ist jede Trainingseinheit Teil eines disziplinierten Systems, das auf strukturelle Integrität, funktionelle Kraft und lebenslange Beweglichkeit ausgerichtet ist. Erlebe originales Pilates so, wie es unterrichtet werden sollte, mit Präzision, Fokus und Integrität. Wenn dir personalisiertes Training und langfristiges Fitness wichtig sind,  ist Rebell Pilates für dich richtig. Der Name „Pilates“ ist rechtlich nicht geschützt und Rebell Pilates ist das einzige ausgestattete Studio in München, das nach der ursprünglichen Methode aus dem New Yorker Gym unterrichtet.',
    youtubeNotice: 'Mit dem Klick auf "Play" erklären Sie sich damit einverstanden, dass Daten an YouTube übermittelt werden.',
    josephpilates: 'Hubertus Joseph Pilates (1883-1967) entwickelte im 20. Jahrhundert eine Bewegungstechnik, die sich als Zwei-Wege-Dehnung mit starkem Zentrum zusammenfassen lässt. Sie stärkt die Rücken-, Rumpf-, und Bauchmuskeln, da alle Bewegungen aus der Mitte entstehen. Die Methode wird auf mehreren speziellen Geräten ausgeführt, so dass das neuromuskuläre Gedächtnis lernt, die Technik in verschiedenen Situationen anzuwenden . Die Sprungfedern assistieren die Muskeln und fordern sie gleichzeitig heraus, ohne die Gelenke zu belasten. Haltung, Beweglichkeit, Koordination und Kraft verbessern sich ganz natürlich durch die Übungen selbst. Contrology ist so konzipiert, dass die korrekte Ausrichtung und strukturelle Korrektur in jede Bewegung integriert sind, wodurch sicherere Bewegungen, schnellere Fortschritte, nachhaltige Ergebnisse und ein geringeres Verletzungsrisiko gewährleistet werden. Menschen beginnen mit Pilates Training zur Haltungskorrektur, zur Linderung chronischer Beschwerden, zur Verbesserung der Beweglichkeit, für mehr Rumpfstabilität und langfristige Kraft. Sie bleiben dabei, weil die Veränderungen messbar, funktional und nachhaltig sind.',
    instruktorin: 'Instrukteur',
    instruktorin_text: 'Alice R. Talkington trainierte u.a. mit vormaligen Schülern von Pilates wie z.B. Jay Grimes (1940-2024) und Edwina Fontaine (1928-2014). Nach der Ausbildung hat Alice in London, Genf, Wien und München als Instrukteurin gearbeitet. 2015 veranstaltete sie Deutschlands ersten großen Kongress für Contrology mit Gratz Pilates (gratzpilates.com) als Equipment Sponsor. Während Alices vierjähriges Aufenthalts in Berlin war ihr Coach Moses Urbano (www.accesspilates.com), ein Protégé von Romana Kryzanowska, die nach dem Tod von Pilates die Führung des originalen Studios übernommen hatte. Bevor sie Rebell Pilates 2024 in Regensburg gründete, war Alice in Frankreich, Hong Kong und USA tätig. Sie ist eine Spezialistin für darstellende Künstler. Zu ihren ehemaligen Kunden gehören Christine Kaufmann, Opernsängerin Albina Shagimuratova, Schauspielerin Astrid Posner, Musiker David Alan Cooper und Schriftsteller Benjamin von Stuckrad-Barre. Zudem hat Alice mit Profisportlern gearbeitet, beispielsweise von den Boston Red Sox, dem Bayerischen Staatsballett, und dem FC Bayern. Alice bildet sich fortlaufend mit weltweit renommierten Trainerinnen weiter, u.a. Inelia Garcia, Kathryn Ross-Nash, und MeJo Wiggin.',
    leistungsangebote: 'Leistungsangebote',
    leistungsangebotedescription: 'Rebell Pilates bietet etwas, das in der heutigen überfüllten Fitnesslandschaft selten geworden ist: echtes, originales Contrology, mit Tiefe, Integrität und Zielbewusstsein unterrichtet. In einer Zeit, in der viele Studios Trends, hohe Teilnehmerzahlen oder schnelle Gruppentrainings in den Vordergrund stellen, konzentrieren wir uns auf die Qualität des Unterrichts, nicht auf die Quantität. Unser Ziel ist es, dir zu helfen, die beste Version deines Körpers durch die  ursprüngliche, von Joseph Pilates entwickelte Methode zu erreichen – ein ganzheitliches Körpertraining, das auf Präzision, Rhythmus und Kontrolle basiert. Wir bieten keine Variante von Pilates an. Wir bieten Contrology an – so, wie es ursprünglich in Form von Einzeltraining unterrichtet werden sollte. Daher bieten wir ausschließlich privates Training im geschützten Raum an.',
    apparate: 'Apparate',
    apparatedescription: 'Genau so wie man auf einem englischen Sattel nicht Western reiten kann, ist es wichtig, Geräte mit den richtigen Abmessungen und Federspannung zu verwenden, um eine sichere und angemessene Technik zu gewährleisten. Joseph Pilates baute mit seinem Bruder Friedrich eigene Geräte. Insgesamt hatte Pilates 26 Patente. Bei Rebell Pilates trainierst du auf erstklassigen und authentischen Geräten, die nach den Spezifikationen von Joseph Pilates produziert werden.',
    testimonials: 'Erfahrungen',
    testimonial1: '"Ich hatte schon immer mit Problemen im unteren Rücken und im Schulterbereich zu kämpfen, aber das Training mit Alice hat für mich einen echten Unterschied gemacht. Seit ich mit ihren Pilates Einheiten begonnen habe, hat sich meine Haltung spürbar verbessert und ich merke einen deutlichen Unterschied in meiner Kraft. Alices fundiertes Wissen über den menschlichen Körper zeigt sich in jeder Einheit. Durch ihre Expertise stellt sie sicher, dass jede Übung sowohl effektiv als auch sicher ist. Außerdem schafft sie es auf eine tolle Art und Weise, die Einheiten abwechslungsreich und motivierend zu gestalten, sodass ich mich jedes Mal darauf freue. Ich kann Alice jedem wärmstens empfehlen, der auf der Suche nach einer kompetenten, einfühlsamen und unterstützenden Pilates Trainerin ist!"',
    testimonial1_author: 'Dr. Amy Kim, DDS - übersetzt aus dem Englischen',
    testimonial2: '"Pilates hat mir geholfen, fokussierter zu sein und meine innere Mitte zu finden und dabei ruhig und gelassen zu bleiben. Ich glaube, dass mir Pilates den entscheidenden Vorteil verschafft hat, als ich mich auf ein wichtiges Vorsprechen vorbereitet habe und auch dabei, im Beruf über mich hinauszuwachsen. Für mich ist Pilates ein Konzept für ein gesundes Leben, das ich regelmäßig in meinen Alltag integrieren kann. Es wurde entwickelt, um Körper und Geist zu stärken, und man kann es täglich machen, ohne danach völlig erschöpft zu sein und trotzdem ein großartiges Training zu bekommen. Das ist für mich die grundlegende Bedeutung von Pilates in meinem Leben. Ich kehre immer wieder dazu zurück und bin jedes Mal froh darüber!"',
    testimonial2_author: 'David Alan Cooper, stellvertretender Solohornist beim Los Angeles Philharmonic - übersetzt aus dem Englischen',
    testimonial3: '"Ich habe schon immer davon geträumt, Pilates auszuprobieren oder zu machen, hatte aber nie die Gelegenheit dazu. Letzten April kam mir ganz spontan der Gedanke, es endlich einmal auszuprobieren. Deshalb habe ich recherchiert, ob es hier überhaupt angeboten wird. Zum Glück bin ich dabei auf Rebell Pilates gestoßen und habe mich darüber informiert. Ich dachte sofort: Das ist perfekt für mich – vor allem, weil es sich um ein individuelles Eins-zu-eins-Training handelt. Daraufhin habe ich Alice direkt eine E-Mail geschrieben – sie ist eine sehr nette und geduldige Person und Trainerin. Das Training hat mir wirklich sehr geholfen, insbesondere im Hinblick auf meine persönlichen Ziele: die Rückenschmerzen zu reduzieren, die ich durch meine Arbeit bekomme, etwas beweglicher zu werden und vieles mehr. Ich kann Rebell Pilates nur wärmstens empfehlen: Die Ausstattung ist perfekt, Alice ist großartig darin, Pilates anzuleiten und zu vermitteln, und die Termine sind sehr flexibel und zeitsparend. Vielen lieben Dank!"',
    testimonial3_author: 'Venette Segundo, Krankenpflegerin - übersetzt aus dem Englischen',
    contact_hero_h1: 'Studio',
    contact_hero_lead: 'Lass uns mit deinem individuellen Training starten',
    contact_info_h2: 'Direkter Kontakt',
    contact_info_email: 'E-Mail:',
    contact_info_email_link: 'rebellpilates@pm.me',
    contact_info_phone: 'Telefonnummer:',
    contact_info_phone_link: '+49 174 8238738',
    contact_info_address: 'Adresse:',
    contact_info_address_value: 'Am Georgenstein 14, 82065 Baierbrunn',
    contact_info_hours: 'Ich antworte werktags in der Regel innerhalb von 24 Stunden.',
    location_h2: 'Standort',
    location_address: 'Am Georgenstein 14, 82065 Baierbrunn',
    location_hours: 'Öffnungszeiten: nach Vereinbarung',
    location_map: 'Karte anzeigen',
    contact_form_name: 'Name',
    contact_form_email: 'E-Mail',
    contact_form_message: 'Nachricht',
    contact_form_telefon: 'Telefonnummer (optional)',
    contact_form_submit: 'Absenden',
    contact_form_success: 'Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.',
    contact_form_error: 'Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.',
    footer_contact: 'Kontakt',
    footer_information: 'Informationen',
    footer_impressum: 'Impressum',
    footer_datenschutz: 'Datenschutz',
    footer_agb: 'Allgemeine Geschäftsbedingungen',
    footer_phone: 'Telefon: +49 174 8238738'
},
    en: {
    telefon: 'Phone: +49 174 8238738',
    email: 'EMail: rebellpilates@pm.me',
    pilates: 'Pilates',
    instruktor: 'Instrukteur',
    leistungsangebote: 'Lessons',
    apparate: 'Apparatuses',
    training: 'Training',
    erfahrungen: 'Experiences',
    studio: 'Studio',
    welcome: 'Welcome to Rebell Pilates, where you can experience Joseph Pilates’ original method of body conditioning in a calm and private environment. Pilates called his work Contrology and developed it to restore structural balance, to strengthen the body intelligently, and to develop genuine muscular control. The approach is corrective, precise, and systematically rooted. Our individual sessions follow the traditional technique on over a dozen authentic pieces of equipment, based on Joseph Pilates’ original patents. The name “Pilates” is not legally protected, and Rebell Pilates is the only equipped studio in the greater Munich area that teaches according to the blueprint developed over decades at the New York City gym. Every session has a purpose. The sequence is logical and individualized. Each movement builds on the previous one. This is disciplined training for long-term health and fitness. We prioritize quality over quantity. At Rebell Pilates Pilates, every workout is part of a holistic system focused on structural integrity, functional strength, and lifelong mobility. Experience original Pilates the way it should be learned, with precision, focus, and authenticity. If you want to feel at least 10 years younger regardless of your age, then Rebell Pilates is right for you.',
    youtubeNotice: 'Mit dem Klick auf "Play" erklären Sie sich damit einverstanden, dass Daten an YouTube übermittelt werden.',
    josephpilates: 'Hubertus Joseph Pilates (1883-1967) developed a technique of movement in the 20th century that can be summarized as a two-way stretch with a strong center and called it Contrology. It strengthens the back, core, and abdominal muscles because all movements originate from the center. The method is performed on several specialized pieces of apparatus so your neuromuscular memory learns to apply the technique in different situations. That’s why you don’t need several dozens of repetitions to achieve results. The springs assist and simultaneously challenge the muscles without placing pressure on the joints. Posture, mobility, coordination, and strength improve naturally through the exercises themselves. Contrology is designed so that correct alignment and structural correction are integrated into every movement, thereby ensuring safe movement, fast progress, sustainable results, and a low risk of injury. People begin Contrology to correct posture, to alleviate chronic conditions like back pain, to improve mobility, to increase core stability, and to build long-term strength. They continue because the changes are measurable, functional, and longlasting.',
    instruktorin: 'Instrukteurin',
    instruktorin_text: 'A former dancer, Alice R. Talkington has the privilege of having studied with former students of Joe and Clara Pilates such as Jay Grimes (1940-2024) and Edwina Fontaine (1928-2014), among others. After completing her teacher training, Alice gained experience as an instructor in London, Geneva, Vienna, and Munich. In 2015, she organized Germany’s first conference for Contrology with Gratz Pilates (gratzpilates.com) as the equipment sponsor. For almost four years in Berlin, Alice’s mentor was Moses Urbano (www.accesspilates.com), a protégé of Romana Kryzanowska, a former student of Pilates who took over the management of the relocated studio after Joe’s death. Before founding Rebell Pilates in Regensburg in 2024, Alice worked in France, Hong Kong, and the USA. Her former clients include Christine Kaufmann (1945-2017), opera singer Albina Shagimuratova, actress Astrid Posner, musician David Alan Cooper, and writer Benjamin von Stuckrad-Barre. Alice continues her education with internationally renowned trainers, most recently Inelia Garcia, Dorothee Vandewalle, and MeJo Wiggin.',
    leistungsangebote: 'Lessons',
    leistungsangebotedescription: 'Rebell Pilates is proud to be able to offer genuine Contrology with depth, integrity, and purpose, something very rare in today’s overcrowded wellness landscape. At a time when many “Pilates” studios put 3 to 14 participants they call “members” on reformer-like equipment and conduct workouts like dance classes, we focus on your individuality and the quality of your movement, not on quantity. Our goal is to help you achieve the best version of your body through the original method developed by Joseph Pilates – holistic full body conditioning with mental engagement based on precision, rhythm, and control. We do not offer a variation of Pilates. We offer Contrology – as it was originally intended to be taught in one-on-one training. Sessions with us are private appointments without wasting time, group pace, music or distractions, and you won’t share the studio space with another lesson. You will have access to all equipment. If you would like to discover whether Contrology is right for you, please book three individual sessions in the current month as a teaser for €269. Should you decide to continue with the training, €90 per session is payable through the end of the current month. This one-time introductory offer is comparable to a gift subscription offered by many theaters in Germany.',
    apparate: 'Apparatuses',
    apparatedescription: 'Just as you can’t ride Western style on an English saddle, it is paramount to use equipment with correct measurements and spring tension to achieve the proper technique and desired results. Joe Pilates built his own equipment with his brother Friedrich. All together Pilates had 26 patents, starting with the Foot Corrector in 1922. The Universal Reformer is the most widely known large apparatus and was patented in Germany in 1924, before Pilates emigrated to New York City in 1926. The Universal Reformer designed by Pilates differs from other similarly-looking “reformers” in that the frame is 80 inches long and it has four springs of equal tension. The straps are made of leather, not rope, for long-lasting use. The wheels for the leather straps are on the frame and not attached to so-called risers, which significantly change the spring tension and the angle of the movements. The footbar is not set in place like the gear bar and can be lowered with the feet, allowing quick transitions between exercises. These features make it possible to perform exercises on the Reformer in proper sequence without pausing and thus to achieve an intensive cardiovascular workout, which is simply not possible if you have to set up or adjust the equipment after each exercise. Joe Pilates always closed his New York studio in August for summer break. He would build and give advanced clients a Wunda Chair, a piece of seating furniture that can be transformed into a fitness device like a take-home Reformer. In addition to the Wunda Chair, Pilates built the High Chair with the strongest springs and the Armchair with the lightest springs. Even smaller and lighter spring resistance can be found on accessories such as the Toe Tensometer. Apparatus without springs include various mats and barrels, which one normally only sees in studios that stay true to the method. Pilates not only tailored the training to his clients, but also made equipment specifically for their needs. For example, he developed the Pedi-Pole for the American soprano Rise Stevens.',
    training: 'Training',
    trainingdescription: 'Healthy individuals without injuries usually start on the Universal Reformer. The four even springs act like a grid and allow the instructor to quickly correct your alignment. Comfortable athletic attire that exposes the ankles are helpful for this reason. Please avoid clothing with zippers, as they can damage the upholstery. Socks are required during the workout. You are welcome to bring a towel and a bottle of water. After the Reformer, you will learn several mat exercises for home practice, and you are strongly urged to do them regularly. This is to encourage consistency and to maintain progress. We will then utilize all of the studio equipment to further develop your training on the Reformer – the centerpiece and foundation of the matwork. For each of your sessions, the instructor will create a workout individually tailored to your body on that particular day with a clear focus and a well thought-out ending that lifts your spirit. A session usually lasts 50 minutes. When Contrology is performed correctly with expert guidance and authentic equipment, it becomes an investment that greatly enhances your quality of life. Each session will give you a better understanding of how you can integrate Contrology into your daily life. If you have a short-term goal (postnatal recovery, preparing for a ski trip or taking up a new sport) or a mid-term goal (reducing back pain, strengthening your pelvic floor, preparing for a marathon) or are pursuing a long-term goal (playing with your grandkids painfree, preventing osteoporosis, slowing down sarcopenia), please let your instructor know when scheduling your appointments so that she can take this into account when planning your training program.',
    testimonials: 'Erfahrungen',
    testimonial1: '"I’ve always struggled with lower back and shoulder problems, but working with Alice has been a game-changer. Since I started her Pilates sessions, my posture has noticeably improved, and I can feel a real difference in my strength. Alice’s deep knowledge of the human body shines through in every session, and her expertise ensures each exercise is both effective and safe. She also has a fantastic way of making the sessions fun and engaging, so I always look forward to them. I highly recommend Alice to anyone looking for a skilled and supportive Pilates instructor!"',
    testimonial1_author: 'Dr. Amy Kim, DDS',
    testimonial2: '"Pilates has helped me get focused and to stay centered and calm. I believe that doing Pilates gave me the competitive edge when I was gearing up for a big audition and to excel at work! It is a design for healthy living, which I can do consistently. It’s designed to strengthen your body and your mind, and it’s something you can do daily without being overly tired afterwards while still getting a great workout in. That’s the basic idea for Pilates in my life. I always come back to it and I’m so glad I do!“',
    testimonial2_author: 'David Alan Cooper, associate principal horn, Los Angeles Philharmonic',
    testimonial3: '"I‘ve always wanted to try or do Pilates but never had the opportunity. Last April, out of the blue, I thought of finally trying it out. That\'s why I did my research to see if it is available here. Luckily, I stumbled upon Rebell Pilates and read about it. And I thought this is perfect for me especially since it is a one-on-one type of learning/activity and immediately sent an email to Alice- who is a very nice and patient person and instructor. Doing this really helped a lot especially with the goals I had in mind, like to reduce the back pain that I get from work, to be a little more flexible, and so on and so forth. I highly recommend Rebell Pilates: the equipment is perfect, Alice is so great in guiding and teaching Pilates, very  time-convenient. Thank you so much!“',
    testimonial3_author: 'Venette Segundo, nurse',
    contact_hero_h1: 'Studio',
    contact_hero_lead: 'Rebell Pilates is located at souterrain level and offers privacy, discretion and anonymity—away from crowded gyms and group classes. Large windows above the premises provide plenty of natural daylight. A separate changing room with a shower is located next to the training room. The studio is located at Georgenstein 14, opposite the Isartal Tennis Park (tennispark-isartal.de) and the Waldgasthof (www.hotelbuchenhain.de) in Buchenhain, and has a designated parking space behind the building. There is plenty of parking in front of the building and on the adjacent streets. By car, the studio can be reached via Wolfratshauser Str. and turning onto Schulweg. On public transport, the studio can be reached on the S7. The studio is 350 meters from the Buchenhain stop. Once you arrive in Buchenhain, head south along Forststraße. After 50 meters, turn left onto Am Einfang, and after 270 meters you will have reached your destination. There are several bicycle parking spaces in front of the entrance.',
    contact_info_h2: 'Direct Contact',
    contact_info_email: 'E-Mail:',
    contact_info_email_link: 'rebellpilates@pm.me',
    contact_info_phone: 'Phonenumber:',
    contact_info_phone_link: '+49 174 8238738',
    contact_info_address: 'Address:',
    contact_info_address_value: 'Am Georgenstein 14, 82065 Baierbrunn',
    contact_info_hours: 'I am usually respond within 24 hours on weekdays.',
    location_h2: 'Location',
    location_address: 'Am Georgenstein 14, 82065 Baierbrunn',
    location_hours: 'Opening Hours: by appointment',
    location_map: 'Show Map',
    contact_form_name: 'Name',
    contact_form_email: 'E-Mail',
    contact_form_message: 'Message',
    contact_form_telefon: 'Phonenumber (optional)',
    contact_form_submit: 'Submit',
    contact_form_success: 'Thank you for your message! I will get back to you as soon as possible.',
    contact_form_error: 'There was a problem sending your message. Please try again later.',
    footer_contact: 'Contact',
    footer_information: 'Information',
    footer_impressum: 'Imprint',
    footer_datenschutz: 'Privacy Policy',
    footer_agb: 'General Terms and Conditions',
    footer_phone: 'Phone: +49 174 8238738'
    }   
};

const langSwitch = document.getElementById('lang-switch');

langSwitch.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'de' ? 'en' : 'de';
    
    document.documentElement.lang = newLang;
    langSwitch.textContent = newLang === 'de' ? 'EN' : 'DE';
    
    // Texte aktualisieren
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[newLang][key]) {
            element.innerHTML = translations[newLang][key];
        }
    });
});

/*Erfahrungen*/
let currentIdx = 1; // Startet beim zweiten (Klasse 'active' im HTML)

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= testimonials.length) currentIdx = 0;
    if (index < 0) currentIdx = testimonials.length - 1;
    
    // Alle ausblenden und Punkte deaktivieren
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Aktuelles anzeigen und Punkt aktivieren
    testimonials[currentIdx].classList.add('active');
    if (dots[currentIdx]) {
        dots[currentIdx].classList.add('active');
    }
}

function nextTestimonial() {
    currentIdx++;
    showTestimonial(currentIdx);
}

function prevTestimonial() {
    currentIdx--;
    showTestimonial(currentIdx);
}

function currentTestimonial(index) {
    currentIdx = index;
    showTestimonial(currentIdx);
}

/*Menu*/
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");

    // Menü öffnen/schließen
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    // Menü schließen beim Klick auf einen Link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    });
});

/*Video-Facade*/
function loadYoutubeVideo(element, videoId) {
  // Erstellt den iFrame
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${nQnLYoUHzps}?autoplay=1`);
  iframe.setAttribute('title', 'YouTube video player');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', 'true');
  
  // Stilt den iFrame so, dass er exakt in den Container passt
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Ersetzt das Vorschaubild durch den echten Player
  element.innerHTML = '';
  element.appendChild(iframe);
  
  // Entfernt den Klick-Event nach dem Laden
  element.onclick = null;
}

let currentApparateIndex = 0;

function moveApparate(direction) {
    const gallery = document.querySelector('.apparate-gallery');
    const totalSlides = document.querySelectorAll('.apparate-gallery .image-block').length;

    currentApparateIndex += direction;

    if (currentApparateIndex < 0) {
        currentApparateIndex = totalSlides - 1;
    } else if (currentApparateIndex >= totalSlides) {
        currentApparateIndex = 0;
    }

    gallery.scrollTo({
        left: gallery.clientWidth * currentApparateIndex,
        behavior: 'smooth'
    });
}

/*Kontaktformular*/
