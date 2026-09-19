/*Sprache wechseln*/
let currentLang = localStorage.getItem('lang') || 'de';

const translations = {
    de: {
    hero_description: 'Individuelles Einzeltraining für nachhaltige Kraft, Beweglichkeit und körperliche Balance.',
    telefon: 'Telefon: +49 174 8238738',
    email: 'EMail: rebellpilates@pm.me',
    pilates: 'Pilates',
    instruktor: 'Instrukteurin',
    leistungsangebote: 'Leistungsangebote',
    apparate: 'Apparate',
    training: 'Training',
    trainingdescription: 'Gesunde Menschen ohne Verletzungen fangen normalerweise am Universal Reformer an. Die vier gleichmäßigen Federn wirken wie ein Raster und ermöglichen es der Trainerin, deine Ausrichtung schnell zu korrigieren. Bitte trage bequeme Sportkleidung, die deine Knöchel freilegt, damit deine Ausrichtung leichter erkannt werden kann. Wir vermeiden Kleidung mit Reißverschlüssen, da diese die Polsterung beschädigen können. Während des Workouts werden Socken getragen. Du kannst gerne ein Handtuch und eine Flasche Wasser mitbringen. ',
    trainingdescription2: 'Um Fortschritte zu erzielen und konsequent zu bleiben, lernst du 3-5 Mattenübungen, die du auch zu Hause durchführen kannst. Wir werden danach die gesamte Ausstattung des Studios gebrauchen, um dein Training am Reformer – das Herzstück und die Grundlage für Mattenübungen – weiterzuentwickeln. Für jede deiner Trainingseinheiten wird die Instrukteurin ein individuell auf dich maßgeschneidertes Workout mit einem klaren Schwerpunkt und einem gut durchdachten Abschluss erstellen. Ein Workout dauert in der Regel 50 Minuten. Wenn Contrology mit fachkundiger Anleitung und originaler Ausrüstung korrekt ausgeführt wird, wird es zu einer Investition, die deine Lebensqualität steigert. ',
    trainingdescription3: 'Jedes Training wird dir ein besseres Verständnis dafür vermitteln, wie du Contrology täglich in deinem Alltag integrieren kannst. Wenn du ein kurzfristiges Ziel hast (Rückbildung, bevorstehende Skireise oder Aufnahme einer neuen Sportart) oder ein mittelfristiges Ziel verfolgst (Linderung von Rückenschmerzen, Stärkung Ihres Beckenbodens, Vorbereitung auf einen Marathon) oder ein langfristiges Ziel anstrebst (schmerzfrei mit deinen Enkelkindern spielen, Osteoporose vorbeugen, Sarkopenie verlangsamen), teile dies deiner Instrukteurin bitte bei der Terminvereinbarung mit, damit sie dies bei der Planung deines Trainingsprogramms berücksichtigen kann. ',
    erfahrungen: 'Erfahrungen',
    studio: 'Studio',
    welcome: 'Willkommen bei Rebell Pilates, wo du die ursprüngliche Methode von Joseph Pilates in ruhiger und privater Atmosphäre erleben kannst. Pilates hat seine Methode Contrology genannt und entwickelt, um das strukturelle Gleichgewicht wiederherzustellen, den Körper auf intelligente Weise zu stärken und eine echte muskuläre Kontrolle zu entwickeln. Der Ansatz ist korrigierend, präzise und systematisch verwurzelt. Unser Unterricht folgt der traditionellen Methode auf über Dutzend authentischen Geräten, basierend auf den ursprünglichen Patenten von Joseph Pilates. Der Name „Pilates“ ist rechtlich nicht geschützt und Rebell Pilates ist das einzige ausgestattete Studio im Landkreis München, das nach der ursprünglichen Methode aus dem New Yorker Gym unterrichtet. Jede Einheit hat einen Zweck. Der Ablauf ist logisch und maßgeschneidert. Jede Bewegung baut auf der vorherigen auf. Dies ist diszipliniertes Training für langfristige Gesundheit und Fitness. Wir stellen Qualität über Quantität. Bei Rebell Pilates Pilates ist jede Trainingseinheit Teil eines ganzheitlichen Systems, das auf strukturelle Integrität, funktionelle Kraft und lebenslange Beweglichkeit ausgerichtet ist. Erlebe originales Pilates so, wie es gelernt werden sollte, mit Präzision, Fokus und Integrität. Wenn du dich unabhängig vom Alter 10 Jahre jünger fühlen willst, dann ist Rebell Pilates für dich richtig.',
    josephpilates: 'Hubertus Joseph Pilates (1883-1967) entwickelte im 20. Jahrhundert Contrology, eine einzigartige Bewegungstechnik, die sich als eine Dehnung in zwei Richtungen vom starken Zentrum zusammenfassen lässt. Sie stärkt die Rücken-, Rumpf-, und Bauchmuskeln, da alle Bewegungen aus der Mitte heraus entstehen. Die Methode wird auf mehreren speziellen Geräten mit Federn ausgeführt, so dass das neuromuskuläre Gedächtnis lernt, die Technik in verschiedenen Situationen anzuwenden. Daher sind wenige Wiederholungen gebraucht, um die Bewegung beherrschen zu können. Die Sprungfedern assistieren die Muskeln und fordern sie gleichzeitig heraus, ohne die Gelenke zu belasten. Haltung, Beweglichkeit, Koordination und Kraft verbessern sich ganz natürlich durch die Übungen selbst. Contrology ist so konzipiert, dass die korrekte Ausrichtung und strukturelle Korrektur in jede Bewegung integriert sind, wodurch sicherere Bewegungen, schnellere Fortschritte, nachhaltige Ergebnisse und ein geringeres Verletzungsrisiko gewährleistet werden. Menschen beginnen mit Contrology zur Haltungskorrektur, zur Linderung chronischer Beschwerden, zur Verbesserung der Beweglichkeit, für mehr Rumpfstabilität und langfristige Kraft. Sie bleiben dabei, weil die Veränderungen messbar, funktional und nachhaltig sind.',
    instruktorin: 'Instrukteurin',
    instruktorin_text: 'Ehemalige Tänzerin Alice R. Talkington trainierte u.a. mit vormaligen Schülern von Joe und Clara Pilates wie z.B. Jay Grimes (1940-2024) und Edwina Fontaine (1928-2014). Nach der Ausbildung  bei Romana’s Pilates arbeitete Alice in London, Genf, Wien und München als Instrukteurin. 2015 veranstaltete sie Deutschlands ersten Kongress für Contrology mit Gratz Pilates (gratzpilates.com) als Equipment Sponsor. Während ihres vierjährigen Aufenthalts in Berlin war Alices Coach Moses Urbano (www.accesspilates.com), ein  Protégé von Romana Kryzanowska, ehemalige Schülerin von Pilates, die die Führung des umgezogenen Studios nach Joes Tod übernommen hatte. Bevor sie 2024 Rebell Pilates in Regensburg gründete, war Alice in Frankreich, Hong Kong und den USA tätig. Zu ihren ehemaligen Kunden gehören Christine Kaufmann (1945-2017), Opernsängerin Albina Shagimuratova, Schauspielerin Astrid Posner,  Musiker David Alan Cooper und Schriftsteller Benjamin von Stuckrad-Barre. Alice bildet sich fortlaufend mit weltweit renommierten Trainerinnen fort, u.a. Inelia Garcia, Dorothee Vandewalle und MeJo Wiggin.',
    leistungsangebote: 'Leistungsangebote',
    leistungsangebotedescription: 'Rebell Pilates bietet etwas, das in der heutigen überfüllten Fitnesslandschaft selten geworden ist: echtes, originales Contrology  mit Tiefe, Integrität und Zielbewusstsein. In einer Zeit, in der viele “Pilates” Studios 3 bis 14 Teilnehmer auf Reformer-ähnlichen Geräten in den Vordergrund stellen, konzentrieren wir uns auf deine Individualität und die Qualität deiner Bewegungen, nicht auf die Quantität. Unser Ziel ist es, dir zu helfen, die beste Version deines Körpers durch die  ursprüngliche, von Joseph Pilates entwickelte Methode zu erreichen – ein ganzheitliches Körpertraining, das auf Präzision, Rhythmus und Kontrolle basiert. Wir bieten keine Variante von Pilates an. Wir bieten Contrology an – so, wie es ursprünglich in Form von Einzeltraining unterrichtet werden sollte. Trainingseinheiten bei uns sind 1:1 Termine ohne Raumteilung, Gruppendruck, Ablenkungen oder Zeitverschwendung. Dabei stehen dir alle Geräte zur Verfügung. Wenn du herausfinden möchtest, ob Contrology das Richtige für dich ist, buche bitte drei Einzelstunden im laufenden Monat als Teaser für €269. Solltest du entscheiden, mit dem Training fortzusetzen, ist bis Ende des laufenden Monats  €90 pro Einheit zu entrichten. Dieses einmalige Einführungsangebot ist mit einem Geschenkabo bei Theatern vergleichbar.',
    apparate: 'Apparate',
    apparatedescription: 'Genau so wie man auf einem englischen Sattel nicht Western reiten kann, ist es wichtig, Ausrüstung mit den richtigen Abmessungen und Federspannung zu verwenden, um eine sichere und angemessene Technik zu gewährleisten. Joseph Pilates baute mit seinem Bruder Friedrich eigene Geräte. Insgesamt hatte Pilates 26 Patente, beginnend 1922 mit dem Foot Corrector. Das Universal Reformer ist das bekannteste Großgerät, das sich 1924 patentieren ließ, bevor Pilates 1926 nach New York City auswanderte. Das von Pilates konzipierte Universal Reformer unterscheidet sich von anderen ähnlich aussehenden “Reformern”, indem der Rahmen nur 80 Zoll lang ist und es über nur vier Federn mit gleichem Widerstand verfügt. Die Riemen sind aus Leder gefertigt, nicht aus Seil, und bieten eine langanhaltende Nutzung. Die Räder für die Lederriemen sind direkt am Rahmen angesetzt und nicht auf sogenannten Risers, die den Federwiderstand und den Wickel der Bewegungen deutlich verändern. Die Fußstange ist nicht arretiert und kann mit den Füßen abgesenkt werden, wodurch fließende Übergänge zwischen den Übungen ermöglicht werden. Diese Eigenschaften ermöglichen es, ein Workout am Reformer ohne Pause der Reihe nach auszuführen und so ein intensives Cardio-Training zu absolvieren, was nicht möglich wäre, wenn man nach jeder Übung das Gerät einrichten oder anpassen muss. Joseph Pilates schloss sein New Yorker Studio immer  im August für die Sommerpause. Fortgeschrittenen Schülern baute und schenkte er ein Wunda Chair, ein Sitzmöbelstück, das in ein kompaktes Reformer verwandelt werden kann. Neben dem Wunda Chair baute Pilates das High Chair mit den stärksten Federn sowie das Armchair mit den leichtesten Federn. Noch kleineren und leichteren Federwiderstand gibt es bei Kleingeräten wie beim Toe Tensometer. Apparate ohne Federspannung umfassen verschiedene Matten und Barrels, die man normalerweise nur in echten Pilates-Studios sieht. Pilates hat nicht nur das Training, sondern auch die Geräte auf Kunden abgestimmt. Er hat zum Beispiel das Pedi-Pole für die amerikanische Sopranistin Rise Stevens entwickelt.',
    testimonials: 'Erfahrungen',
    testimonial1: 'Ich habe an einem dreiwöchigen Pilatesprogramm mit Alice von Rebell Pilates teilgenommen. Als Arzt weiß ich um die Bedeutung einer guten Rückenschule, um Mobilität, Belastbarkeit und Lebensfreude bis ins hohe Alter zu erhalten. Dementsprechend sah ich meinen Kurs bei Rebell Pilates mit Spannung an. Auch ohne Vorerfahrung im Bereich Pilates holte mich Alice bei meinem aktuellen Kenntnisstand ab und passte die Übungen individuell an mein physisches Niveau an. In dem modern ausgestatteten Studio leitete sie mich bei der Ausführung der Übungen professionell an. Die Kombination aus geführten Übungen an Geräten und freien Körperübungen sicherte eine ausgewogene Belastung und gezielte Förderung der Kernaspekte Kraft und Flexibilität. Alices langjährige Erfahrung im Bereich Pilates zeigte sich in ihrem geschulten Auge und dem Feedback zur Ausführung der einzelnen Übungen. Dabei lag der Fokus stets auf konkreter Ausübung, um einen rückenschonenden Bewegungsablauf zu gewährleisten. Die Trainingseinheiten waren fordernd, doch durch Alices lebendige und positive Art fühlte ich mich nie überfordert. Bereits nach drei Wochen merkte ich, wie sich meine Muskulatur an die neuen funktionellen Anforderungen anpasste und ich mit einer neuen Leichtigkeit im Rückenbereich durch die Woche ging. Zum Ende jeder Trainingseinheit verließ ich das Studio von Rebell Pilates glücklich, angenehm aktiviert und mit Lust auf die nächste Einheit.',
    testimonial1_author: 'Dr. med Leonard Kierer',
    testimonial2: '"Pilates hat mir geholfen, fokussierter zu sein und meine innere Mitte zu finden und dabei ruhig und gelassen zu bleiben. Ich glaube, dass mir Pilates den entscheidenden Vorteil verschafft hat, als ich mich auf ein wichtiges Vorsprechen vorbereitet habe und auch dabei, im Beruf über mich hinauszuwachsen. Für mich ist Pilates ein Konzept für ein gesundes Leben, das ich regelmäßig in meinen Alltag integrieren kann. Es wurde entwickelt, um Körper und Geist zu stärken, und man kann es täglich machen, ohne danach völlig erschöpft zu sein und trotzdem ein großartiges Training zu bekommen. Das ist für mich die grundlegende Bedeutung von Pilates in meinem Leben. Ich kehre immer wieder dazu zurück und bin jedes Mal froh darüber!"',
    testimonial2_author: 'Dr. med Annalisa De Rosa',
    testimonial3: 'Alice ist eine ganz hervorragende Pilatestrainerin. Ihr Studio ist perfekt ausgestattet und sie nutzt die Geräte mit großer Kenntnis sehr effektiv. Ich bin immer wieder verwundert über ihr breites Spektrum an Übungen, die sie für meine Beschwerden zielgerichtet einsetzt. Pilatestraining auf ganz hohem Niveau. Ich mache Pilates (mangels guter Trainer mit vielen Unterbrechungen) seit 40 Jahren.',
    testimonial3_author: 'Dr. Waltraud Wörle',
    contact_hero_h1: 'Studio',
    contact_hero_lead: 'Rebell Pilates liegt im Souterrain und bietet volle Diskretion an - fernab von vollen Fitnessstudios und Gruppenkursen. Große Fenster über den Räumlichkeiten sorgen für ausreichend Tageslicht. Ein separater Umkleideraum mit Dusche befindet sich neben dem Trainingsraum. Das Studio befindet sich am Georgenstein 14 gegenüber dem Tennispark Isartal (tennispark-isartal.de) und dem Waldgasthof (www.hotelbuchenhain.de) in Buchenhain und verfügt über einen ausgewiesenen Stellplatz hinter dem Gebäude.',
    contact_hero_lead2: 'Es gibt genügend Parkplätze vor dem Gebäude und auf den angrenzenden Straßen. Mit dem Auto ist das Studio über die Wolfratshauser Str. und das Abbiegen auf den Schulweg erreichbar. Mit öffentlichen Verkehrsmitteln ist Rebell Pilates mit der S7 erreichbar. Das Studio liegt 350 Meter von der Haltestelle Buchenhain entfernt. In Buchenhain angekommen, begibst du dich auf der Forststraße Richtung Süden. Nach 50 Metern biegst du links Am Einfang ab und nach 270 Meter hast du das Ziel erreicht. Vor der Haustür sind mehrere Stellplätze für Fahrräder vorhanden.',
    contact_info_h2: 'Kontakt',
    contact_info_email: 'E-Mail:',
    contact_info_email_link: 'rebellpilates@pm.me',
    contact_info_phone: 'Telefonnummer:',
    contact_info_phone_link: '+49 174 8238738',
    contact_info_address: 'Adresse:',
    contact_info_address_value: 'Am Georgenstein 14, 82065 Baierbrunn',
    booking_h2: 'Hier buchen',
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
    footer_phone: 'Telefon: +49 174 8238738',
    impressum: 'Impressum',
    impressum_angaben: 'Angaben gemäß § 5 DDG',
    impressum_umsatzsteuer: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:',
    impressum_kontakt: 'Kontakt',
    datenschutz: 'Datenschutzerklärung',
    datenschutz_h2: '1. Datenschutz auf einen Blick',
    datenschutz_allgemeine_hinweise: 'Allgemeine Hinweise',
    datenschutz_allgemeine_hinweise_text: 'Der Schutz deiner personenbezogenen Daten ist uns wichtig. Wir behandeln deine Daten vertraulich und entsprechend den geltenden Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), sowie dieser Datenschutzerklärung.',
    datenschutz_allgemeine_hinweise_text2: 'Auf dieser Website werden personenbezogene Daten nur verarbeitet, soweit dies für den Betrieb der Website, die Bearbeitung deiner Anfragen oder aufgrund deiner Einwilligung erforderlich ist.',
    datenschutz_verantwortliche_stelle: 'Verantwortliche Stelle',
    datenschutz_verantwortliche_stelle2: 'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:',
    telefon2: 'Telefon:',
    email2: 'E-Mail:',
    datenschutz_hosting: "2. Hosting und technische Bereitstellung",
    datenschutz_hosting_text: "Diese Website wird über Cloudflare Pages, einen Dienst der Cloudflare, Inc., bereitgestellt. Anbieter ist:",
    datenschutz_hosting_text2: "Beim Aufruf unserer Website werden durch den Hosting-Anbieter technisch erforderliche Daten verarbeitet. Hierzu können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp und Betriebssystem gehören.",
    datenschutz_hosting_text3: "Die Verarbeitung erfolgt zur sicheren, stabilen und technisch zuverlässigen Bereitstellung der Website.",
    datenschutz_hosting_text4: "<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung unseres Online-Angebots.",
    datenschutz_server_logfiles: "3. Server-Log-Dateien",
    datenschutz_server_logfiles_text: "Bei jedem Aufruf unserer Website können durch den Server bzw. Hosting-Anbieter automatisch technische Informationen erfasst und in sogenannten Server-Log-Dateien gespeichert werden.",
    datenschutz_server_logfiles_text2: "Hierzu können insbesondere gehören:",
    datenschutz_server_logfiles_ip: "IP-Adresse",
    datenschutz_server_logfiles_date: "Datum und Uhrzeit des Zugriffs",
    datenschutz_server_logfiles_page: "aufgerufene Seite bzw. Datei",
    datenschutz_server_logfiles_referrer: "Referrer URL",
    datenschutz_server_logfiles_browser: "Browsertyp und Browserversion",
    datenschutz_server_logfiles_os: "Betriebssystem",
    datenschutz_server_logfiles_hostname: "Hostname des zugreifenden Rechners",
    datenschutz_server_logfiles_text3: "Die Verarbeitung dient insbesondere der technischen Sicherheit, der Fehleranalyse und der Sicherstellung eines störungsfreien Betriebs der Website.",
    datenschutz_server_logfiles_text4: "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb unserer Website.",
    datenschutz_kontaktformular: "4. Kontaktformular und Kontaktaufnahme per E-Mail",
    datenschutz_kontaktformular_h3: "Kontaktformular",
    datenschutz_kontaktformular_text: "Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen verarbeitet.",
    datenschutz_kontaktformular_text2: "Über das Kontaktformular werden folgende Angaben verarbeitet:",
    datenschutz_kontaktformular_name: "Name",
    datenschutz_kontaktformular_email: "E-Mail-Adresse",
    datenschutz_kontaktformular_telefon: "Telefonnummer, sofern angegeben",
    datenschutz_kontaktformular_nachricht: "Inhalt Ihrer Nachricht",
    datenschutz_kontaktformular_text3: "Die Angabe von Name und E-Mail-Adresse ist erforderlich, um Ihre Anfrage bearbeiten und beantworten zu können. Die Angabe einer Telefonnummer ist freiwillig. Die Nachricht selbst wird ebenfalls zur Bearbeitung Ihrer Anfrage verarbeitet.",
    datenschutz_kontaktformular_formspree: "Formspree",
    datenschutz_kontaktformular_formspree_text: "Für die technische Verarbeitung und Übermittlung der über das Kontaktformular gesendeten Nachrichten verwenden wir den Dienst Formspree.",
    datenschutz_kontaktformular_formspree_text2: "Anbieter ist:",
    datenschutz_kontaktformular_formspree_text3: "Wenn Sie das Kontaktformular absenden, werden die eingegebenen Daten (Name, E-Mail-Adresse, gegebenenfalls Telefonnummer und Nachricht) über Formspree verarbeitet. Dabei werden die Daten an die Server von Formspree übermittelt und dort entsprechend der Konfiguration des von uns genutzten Formspree-Dienstes verarbeitet.",
    datenschutz_kontaktformular_formspree_text4: "Formspree kann personenbezogene Daten auch außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums verarbeiten. Nach Angaben von Formspree werden für internationale Datenübermittlungen geeignete datenschutzrechtliche Garantien eingesetzt.",
    datenschutz_kontaktformular_formspree_text5: "Weitere Informationen zur Verarbeitung personenbezogener Daten durch Formspree finden Sie in der <a href=\"https://formspree.io/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Formspree</a>.",
    datenschutz_kontaktformular_formspree_link: "Datenschutzerklärung von Formspree",
    datenschutz_kontaktformular_formspree_text6: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt, sowie Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen. Unser berechtigtes Interesse liegt in der effizienten Bearbeitung und Beantwortung von Kontaktanfragen.",
    datenschutz_kontaktformular_email: "Kontaktaufnahme per E-Mail",
    datenschutz_kontaktformular_email_text: "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten personenbezogenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.",
    datenschutz_kontaktformular_email_text2: "Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    datenschutz_kontaktformular_email_text3: "Soweit gesetzliche Aufbewahrungspflichten bestehen, werden die betreffenden Daten für die Dauer der jeweiligen gesetzlichen Aufbewahrungsfrist gespeichert.",
    datenschutz_kontaktformular_google_maps: "5. Google Maps",
    datenschutz_kontaktformular_google_maps_text: "Auf unserer Website verwenden wir Google Maps, um Ihnen unseren Standort und die Anfahrt zu unserem Studio anzuzeigen.",
    datenschutz_kontaktformular_google_maps_text2: "Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
    datenschutz_kontaktformular_google_maps_text3: "Beim Aufruf der Karte wird eine Verbindung zu Google hergestellt.",
    datenschutz_kontaktformular_google_maps_text4: "Dabei können insbesondere Ihre IP-Adresse und weitere technische Daten an Google übermittelt werden. Dabei kann es auch zu einer Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums, insbesondere in die USA, kommen.",
    datenschutz_kontaktformular_google_maps_text5: "<strong>Rechtsgrundlage:</strong> Die rechtliche Grundlage für die Einbindung und die damit verbundene Datenübermittlung sollte geprüft und an die konkrete Nutzung angepasst werden.",
    datenschutz_kontaktformular_google_maps_text6: "Weitere Informationen zum Datenschutz bei Google finden Sie unter: <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">https://policies.google.com/privacy</a>",
    datenschutz_kontaktformular_youtube: "6. YouTube",
    datenschutz_kontaktformular_youtube_text: "Auf unserer Website werden Videos der Plattform YouTube eingebunden. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
    datenschutz_kontaktformular_youtube_text2: "Beim Aufruf des Videos wird eine Verbindung zu YouTube hergestellt.",
    datenschutz_kontaktformular_youtube_text3: "Dabei können insbesondere Ihre IP-Adresse und weitere technische Daten an Google übermittelt werden. Dabei kann es auch zu einer Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums, insbesondere in die USA, kommen.",
    datenschutz_kontaktformular_youtube_text4: "Rechtsgrundlage: Die rechtliche Grundlage für die Einbindung und die damit verbundene Datenübermittlung sollte geprüft und an die konkrete Nutzung angepasst werden.",
    datenschutz_kontaktformular_youtube_text5: "Weitere Informationen zum Datenschutz bei Google finden Sie unter: <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">https://policies.google.com/privacy</a>",
    datenschutz_kontaktformular_rechte: "8. Ihre Rechte",
    datenschutz_kontaktformular_rechte_text: "Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung und Einschränkung der Verarbeitung.",
    datenschutz_kontaktformular_rechte_text2: "Darüber hinaus haben Sie, soweit die gesetzlichen Voraussetzungen vorliegen, das Recht auf Datenübertragbarkeit und das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.",
    datenschutz_kontaktformular_rechte_text3: "Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.",
    datenschutz_kontaktformular_rechte_text4: "Zur Ausübung Ihrer Rechte können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.",
    datenschutz_kontaktformular_beschwerderecht_h3: "Beschwerderecht bei einer Aufsichtsbehörde",
    datenschutz_kontaktformular_beschwerderecht: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.",
    datenschutz_kontaktformular_widerspruch: "9. Widerspruch gegen die Nutzung von Kontaktdaten für Werbung",
    datenschutz_kontaktformular_widerspruch_text: "Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.",
    datenschutz_kontaktformular_widerspruch_text2: "Die Betreiberin der Website behält sich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.",
    datenschutz_kontaktformular_aktualitaet: "10. Aktualität dieser Datenschutzerklärung",
    datenschutz_kontaktformular_aktualitaet_text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn dies aufgrund rechtlicher oder technischer Änderungen erforderlich wird. Es gilt jeweils die zum Zeitpunkt des Besuchs dieser Website aktuelle Fassung.",
    datenschutz_kontaktformular_aktualitaet_stand: "Stand: 24.09.2026" 
},
    en: {
    hero_description: 'Personalized one-on-one training for lasting strength, flexibility, and physical balance.',
    telefon: 'Phone: +49 174 8238738',
    email: 'EMail: rebellpilates@pm.me',
    pilates: 'Pilates',
    instruktor: 'Instructor',
    leistungsangebote: 'Lessons',
    apparate: 'Apparatuses',
    training: 'Training',
    erfahrungen: 'Experiences',
    studio: 'Studio',
    welcome: 'Welcome to Rebell Pilates, where you can experience Joseph Pilates’ original method of body conditioning in a calm and private environment. Pilates called his work Contrology and developed it to restore structural balance, to strengthen the body intelligently, and to develop genuine muscular control. The approach is corrective, precise, and systematically rooted. Our individual sessions follow the traditional technique on over a dozen authentic pieces of equipment, based on Joseph Pilates’ original patents. The name “Pilates” is not legally protected, and Rebell Pilates is the only equipped studio in the greater Munich area that teaches according to the blueprint developed over decades at the New York City gym.',
    welcome_description: 'Every session has a purpose. The sequence is logical and individualized. Each movement builds on the previous one. This is disciplined training for long-term health and fitness. We prioritize quality over quantity. At Rebell Pilates Pilates, every workout is part of a holistic system focused on structural integrity, functional strength, and lifelong mobility. Experience original Pilates the way it should be learned, with precision, focus, and authenticity. If you want to feel at least 10 years younger regardless of your age, then Rebell Pilates is right for you.',
    josephpilates: 'Hubertus Joseph Pilates (1883-1967) developed a technique of movement in the 20th century that can be summarized as a two-way stretch with a strong center and called it Contrology. It strengthens the back, core, and abdominal muscles because all movements originate from the center. The method is performed on several specialized pieces of apparatus so your neuromuscular memory learns to apply the technique in different situations. That’s why you don’t need several dozens of repetitions to achieve results. The springs assist and simultaneously challenge the muscles without placing pressure on the joints. Posture, mobility, coordination, and strength improve naturally through the exercises themselves. Contrology is designed so that correct alignment and structural correction are integrated into every movement, thereby ensuring safe movement, fast progress, sustainable results, and a low risk of injury. People begin Contrology to correct posture, to alleviate chronic conditions like back pain, to improve mobility, to increase core stability, and to build long-term strength. They continue because the changes are measurable, functional, and longlasting.',
    instruktorin: 'Instructor',
    instruktorin_text: 'A former dancer, Alice R. Talkington has the privilege of having studied with former students of Joe and Clara Pilates such as Jay Grimes (1940-2024) and Edwina Fontaine (1928-2014), among others. After completing her teacher training, Alice gained experience as an instructor in London, Geneva, Vienna, and Munich. In 2015, she organized Germany’s first conference for Contrology with Gratz Pilates (gratzpilates.com) as the equipment sponsor. For almost four years in Berlin, Alice’s mentor was Moses Urbano (www.accesspilates.com), a protégé of Romana Kryzanowska, a former student of Pilates who took over the management of the relocated studio after Joe’s death. Before founding Rebell Pilates in Regensburg in 2024, Alice worked in France, Hong Kong, and the USA. Her former clients include Christine Kaufmann (1945-2017), opera singer Albina Shagimuratova, actress Astrid Posner, musician David Alan Cooper, and writer Benjamin von Stuckrad-Barre. Alice continues her education with internationally renowned trainers, most recently Inelia Garcia, Dorothee Vandewalle, and MeJo Wiggin.',
    leistungsangebote: 'Lessons',
    leistungsangebotedescription: 'Rebell Pilates is proud to be able to offer genuine Contrology with depth, integrity, and purpose, something very rare in today’s overcrowded wellness landscape. At a time when many “Pilates” studios put 3 to 14 participants they call “members” on reformer-like equipment and conduct workouts like dance classes, we focus on your individuality and the quality of your movement, not on quantity. Our goal is to help you achieve the best version of your body through the original method developed by Joseph Pilates – holistic full body conditioning with mental engagement based on precision, rhythm, and control. We do not offer a variation of Pilates. We offer Contrology – as it was originally intended to be taught in one-on-one training. Sessions with us are private appointments without wasting time, group pace, music or distractions, and you won’t share the studio space with another lesson. You will have access to all equipment. If you would like to discover whether Contrology is right for you, please book three individual sessions in the current month as a teaser for €269. Should you decide to continue with the training, €90 per session is payable through the end of the current month. This one-time introductory offer is comparable to a gift subscription offered by many theaters in Germany.',
    apparate: 'Apparatuses',
    apparatedescription: 'Just as you can’t ride Western style on an English saddle, it is paramount to use equipment with correct measurements and spring tension to achieve the proper technique and desired results. Joe Pilates built his own equipment with his brother Friedrich. All together Pilates had 26 patents, starting with the Foot Corrector in 1922. The Universal Reformer is the most widely known large apparatus and was patented in Germany in 1924, before Pilates emigrated to New York City in 1926. The Universal Reformer designed by Pilates differs from other similarly-looking “reformers” in that the frame is 80 inches long and it has four springs of equal tension. The straps are made of leather, not rope, for long-lasting use. The wheels for the leather straps are on the frame and not attached to so-called risers, which significantly change the spring tension and the angle of the movements. The footbar is not set in place like the gear bar and can be lowered with the feet, allowing quick transitions between exercises. These features make it possible to perform exercises on the Reformer in proper sequence without pausing and thus to achieve an intensive cardiovascular workout, which is simply not possible if you have to set up or adjust the equipment after each exercise. Joe Pilates always closed his New York studio in August for summer break. He would build and give advanced clients a Wunda Chair, a piece of seating furniture that can be transformed into a fitness device like a take-home Reformer. In addition to the Wunda Chair, Pilates built the High Chair with the strongest springs and the Armchair with the lightest springs. Even smaller and lighter spring resistance can be found on accessories such as the Toe Tensometer. Apparatus without springs include various mats and barrels, which one normally only sees in studios that stay true to the method. Pilates not only tailored the training to his clients, but also made equipment specifically for their needs. For example, he developed the Pedi-Pole for the American soprano Rise Stevens.',
    training: 'Training',
    trainingdescription: 'Healthy individuals without injuries usually start on the Universal Reformer. The four even springs act like a grid and allow the instructor to quickly correct your alignment. Comfortable athletic attire that exposes the ankles are helpful for this reason. Please avoid clothing with zippers, as they can damage the upholstery. Socks are required during the workout. You are welcome to bring a towel and a bottle of water.',
    trainingdescription2: 'After the Reformer, you will learn several mat exercises for home practice, and you are strongly urged to do them regularly. This is to encourage consistency and to maintain progress. We will then utilize all of the studio equipment to further develop your training on the Reformer – the centerpiece and foundation of the matwork. For each of your sessions, the instructor will create a workout individually tailored to your body on that particular day with a clear focus and a well thought-out ending that lifts your spirit.',
    trainingdescription3: 'A session usually lasts 50 minutes. When Contrology is performed correctly with expert guidance and authentic equipment, it becomes an investment that greatly enhances your quality of life. Each session will give you a better understanding of how you can integrate Contrology into your daily life.',
    trainingdescription4: 'If you have a short-term goal (postnatal recovery, preparing for a ski trip or taking up a new sport) or a mid-term goal (reducing back pain, strengthening your pelvic floor, preparing for a marathon) or are pursuing a long-term goal (playing with your grandkids painfree, preventing osteoporosis, slowing down sarcopenia), please let your instructor know when scheduling your appointments so that she can take this into account when planning your training program.',
    testimonials: 'Experiences',
    testimonial1: '"I’ve always struggled with lower back and shoulder problems, but working with Alice has been a game-changer. Since I started her Pilates sessions, my posture has noticeably improved, and I can feel a real difference in my strength. Alice’s deep knowledge of the human body shines through in every session, and her expertise ensures each exercise is both effective and safe. She also has a fantastic way of making the sessions fun and engaging, so I always look forward to them. I highly recommend Alice to anyone looking for a skilled and supportive Pilates instructor!"',
    testimonial1_author: 'Dr. Amy Kim, DDS',
    testimonial2: '"Pilates has helped me get focused and to stay centered and calm. I believe that doing Pilates gave me the competitive edge when I was gearing up for a big audition and to excel at work! It is a design for healthy living, which I can do consistently. It’s designed to strengthen your body and your mind, and it’s something you can do daily without being overly tired afterwards while still getting a great workout in. That’s the basic idea for Pilates in my life. I always come back to it and I’m so glad I do!“',
    testimonial2_author: 'David Alan Cooper, Principal Horn by New York Philharmonic',
    testimonial3: '"I‘ve always wanted to try or do Pilates but never had the opportunity. Last April, out of the blue, I thought of finally trying it out. That\'s why I did my research to see if it is available here. Luckily, I stumbled upon Rebell Pilates and read about it. And I thought this is perfect for me especially since it is a one-on-one type of learning/activity and immediately sent an email to Alice- who is a very nice and patient person and instructor. Doing this really helped a lot especially with the goals I had in mind, like to reduce the back pain that I get from work, to be a little more flexible, and so on and so forth. I highly recommend Rebell Pilates: the equipment is perfect, Alice is so great in guiding and teaching Pilates, very  time-convenient. Thank you so much!“',
    testimonial3_author: 'Venette Segundo, nurse',
    contact_hero_h1: 'Studio',
    contact_hero_lead: 'Rebell Pilates is located at souterrain level and offers privacy, discretion and anonymity—away from crowded gyms and group classes. Large windows above the premises provide plenty of natural daylight. A separate changing room with a shower is located next to the training room. The studio is located at Georgenstein 14, opposite the Isartal Tennis Park (tennispark-isartal.de) and the Waldgasthof (www.hotelbuchenhain.de) in Buchenhain, and has a designated parking space behind the building. There is plenty of parking in front of the building and on the adjacent streets.',
    contact_hero_lead2: 'By car, the studio can be reached via Wolfratshauser Str. and turning onto Schulweg. On public transport, the studio can be reached on the S7. The studio is 350 meters from the Buchenhain stop. Once you arrive in Buchenhain, head south along Forststraße. After 50 meters, turn left onto Am Einfang, and after 270 meters you will have reached your destination. There are several bicycle parking spaces in front of the entrance.',
    contact_info_h2: 'Contact Us',
    contact_info_email: 'E-Mail:',
    contact_info_email_link: 'rebellpilates@pm.me',
    contact_info_phone: 'Phone:',
    contact_info_phone_link: '+49 174 8238738',
    contact_info_address: 'Address:',
    contact_info_address_value: 'Am Georgenstein 14, 82065 Baierbrunn',
    location_h2: 'Visit Us',
    location_address: 'Am Georgenstein 14, 82065 Baierbrunn',
    booking_h2: 'Book',
    booking: 'book your appointment with us',
    location_hours: 'Opening Hours: by appointment',
    location_map: 'Show Map',
    contact_form_name: 'Name',
    contact_form_email: 'E-Mail',
    contact_form_message: 'Message',
    contact_form_telefon: 'Phone(optional)',
    contact_form_submit: 'Submit',
    contact_form_success: 'Thank you for your message! I will get back to you as soon as possible.',
    contact_form_error: 'There was a problem sending your message. Please try again later.',
    footer_contact: 'Contact',
    footer_information: 'Information',
    footer_impressum: 'Imprint',
    footer_datenschutz: 'Privacy Policy',
    footer_agb: 'General Terms and Conditions',
    footer_phone: 'Phone: +49 174 8238738',
    impressum: 'Imprint',
    impressum_angaben: 'Information according to § 5 DDG',
    impressum_umsatzsteuer: 'VAT identification number according to § 27a UStG:',
    impressum_kontakt: 'Contact',
    datenschutz: 'Privacy Policy',
    datenschutz_h2: '1. Privacy Protection at a Glance',
    datenschutz_allgemeine_hinweise: 'General Information',
    datenschutz_allgemeine_hinweise_text: 'The protection of your personal data is important to us. We treat your data confidentially and in accordance with the applicable data protection regulations, in particular the General Data Protection Regulation (GDPR), as well as this privacy policy.',
    datenschutz_allgemeine_hinweise_text2: 'On this website, personal data is only processed to the extent necessary for the operation of the website, the processing of your inquiries, or based on your consent.',
    datenschutz_verantwortliche_stelle: 'Responsible Body',
    datenschutz_verantwortliche_stelle2: 'The responsible body for the processing of personal data on this website is:',
    telefon2: 'Phone:',
    email2: 'EMail:',
    datenschutz_hosting: "2. Hosting and Technical Provision",
    datenschutz_hosting_text: "This website is provided via Cloudflare Pages, a service provided by Cloudflare, Inc. The provider is:",
    datenschutz_hosting_text2: "When you access our website, the hosting provider processes technically necessary data. This may include, in particular, your IP address, the date and time of access, pages accessed, browser type, and operating system.",
    datenschutz_hosting_text3: "The processing is carried out to ensure the secure, stable, and technically reliable provision of the website.",
    datenschutz_hosting_text4: "<strong>Legal basis:</strong> Art. 6 para. 1 lit. f GDPR. Our legitimate interest is the secure and reliable provision of our online services.",
    datenschutz_server_logfiles: "3. Server Log Files",
    datenschutz_server_logfiles_text: "Each time our website is accessed, the server or hosting provider may automatically collect technical information and store it in so-called server log files.",
    datenschutz_server_logfiles_text2: "This may include, in particular:",
    datenschutz_server_logfiles_ip: "IP address",
    datenschutz_server_logfiles_date: "Date and time of access",
    datenschutz_server_logfiles_page: "Page or file accessed",
    datenschutz_server_logfiles_referrer: "Referrer URL",
    datenschutz_server_logfiles_browser: "Browser type and browser version",
    datenschutz_server_logfiles_os: "Operating system",
    datenschutz_server_logfiles_hostname: "Hostname of the accessing computer",
    datenschutz_server_logfiles_text3: "The processing serves in particular to ensure technical security, analyze errors, and maintain the smooth operation of the website.",
    datenschutz_server_logfiles_text4: "Legal basis: Art. 6 para. 1 lit. f GDPR. Our legitimate interest is the secure and reliable operation of our website.",
    datenschutz_kontaktformular: "4. Contact Form and Contact by Email",
    datenschutz_kontaktformular_h3: "Contact Form",
    datenschutz_kontaktformular_text: "If you contact us using the contact form, the data you enter will be processed to handle your request and for any necessary follow-up questions.",
    datenschutz_kontaktformular_text2: "The following information is processed via the contact form:",
    datenschutz_kontaktformular_name: "Name",
    datenschutz_kontaktformular_email: "Email address",
    datenschutz_kontaktformular_telefon: "Telephone number, if provided",
    datenschutz_kontaktformular_nachricht: "Content of your message",
    datenschutz_kontaktformular_text3: "Providing your name and email address is necessary for us to process and respond to your request. Providing a telephone number is voluntary. The message itself is also processed for the purpose of handling your request.",
    datenschutz_kontaktformular_formspree: "Formspree",
    datenschutz_kontaktformular_formspree_text: "We use the Formspree service for the technical processing and transmission of messages submitted via the contact form.",
    datenschutz_kontaktformular_formspree_text2: "The provider is:",
    datenschutz_kontaktformular_formspree_text3: "When you submit the contact form, the data you enter (name, email address, telephone number if provided, and message) is processed via Formspree. The data is transmitted to Formspree's servers and processed there in accordance with the configuration of the Formspree service we use.",
    datenschutz_kontaktformular_formspree_text4: "Formspree may also process personal data outside the European Union or the European Economic Area. According to Formspree, appropriate data protection safeguards are used for international data transfers.",
    datenschutz_kontaktformular_formspree_text5: "For more information about the processing of personal data by Formspree, please see the <a href=\"https://formspree.io/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Formspree Privacy Policy</a>.",
    datenschutz_kontaktformular_formspree_link: "Formspree Privacy Policy",
    datenschutz_kontaktformular_formspree_text6: "Legal basis: Art. 6 para. 1 lit. b GDPR, insofar as your inquiry is related to the initiation or performance of a contract, and Art. 6 para. 1 lit. f GDPR for other inquiries. Our legitimate interest is the efficient processing and response to contact inquiries.",
    datenschutz_kontaktformular_email: "Contact by Email",
    datenschutz_kontaktformular_email_text: "If you contact us by email, we process the personal data you provide exclusively for the purpose of handling your request and any necessary follow-up questions.",
    datenschutz_kontaktformular_email_text2: "The data will be deleted as soon as the purpose of processing no longer applies, unless statutory retention obligations prevent this.",
    datenschutz_kontaktformular_email_text3: "Where statutory retention obligations apply, the relevant data will be stored for the duration of the applicable statutory retention period.",
    datenschutz_kontaktformular_google_maps: "5. Google Maps",
    datenschutz_kontaktformular_google_maps_text: "We use Google Maps on our website to show you our location and directions to our studio.",
    datenschutz_kontaktformular_google_maps_text2: "The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.",
    datenschutz_kontaktformular_google_maps_text3: "When the map is accessed, a connection to Google is established.",
    datenschutz_kontaktformular_google_maps_text4: "In particular, your IP address and other technical data may be transmitted to Google. Personal data may also be transferred to countries outside the European Union or the European Economic Area, particularly the United States.",
    datenschutz_kontaktformular_google_maps_text5: "<strong>Legal basis:</strong> The legal basis for the integration and the associated data transfer should be reviewed and adapted to the specific implementation.",
    datenschutz_kontaktformular_google_maps_text6: "For more information about data protection at Google, please visit: <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">https://policies.google.com/privacy</a>",
    datenschutz_kontaktformular_youtube: "6. YouTube",
    datenschutz_kontaktformular_youtube_text: "Videos from the YouTube platform are embedded on our website. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.",
    datenschutz_kontaktformular_youtube_text2: "When the video is accessed, a connection to YouTube is established.",
    datenschutz_kontaktformular_youtube_text3: "In particular, your IP address and other technical data may be transmitted to Google. Personal data may also be transferred to countries outside the European Union or the European Economic Area, particularly the United States.",
    datenschutz_kontaktformular_youtube_text4: "Legal basis: The legal basis for the integration and the associated data transfer should be reviewed and adapted to the specific implementation.",
    datenschutz_kontaktformular_youtube_text5: "For more information about data protection at Google, please visit: <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">https://policies.google.com/privacy</a>",
    datenschutz_kontaktformular_rechte: "8. Your Rights",
    datenschutz_kontaktformular_rechte_text: "Within the scope of the applicable legal provisions, you have the right to obtain information about the personal data we store about you, as well as the right to rectification, erasure, and restriction of processing.",
    datenschutz_kontaktformular_rechte_text2: "Furthermore, where the legal requirements are met, you have the right to data portability and the right to object to the processing of your personal data.",
    datenschutz_kontaktformular_rechte_text3: "Where processing is based on your consent, you may withdraw your consent at any time with effect for the future. The lawfulness of processing carried out before the withdrawal remains unaffected.",
    datenschutz_kontaktformular_rechte_text4: "To exercise your rights, you may contact the responsible party named above at any time.",
    datenschutz_kontaktformular_beschwerderecht_h3: "Right to Lodge a Complaint with a Supervisory Authority",
    datenschutz_kontaktformular_beschwerderecht: "You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data.",
    datenschutz_kontaktformular_widerspruch: "9. Objection to the Use of Contact Details for Advertising",
    datenschutz_kontaktformular_widerspruch_text: "The use of the contact details published as part of the legal notice requirements for sending unsolicited advertising and informational materials is hereby prohibited.",
    datenschutz_kontaktformular_widerspruch_text2: "The website operator reserves the right to take legal action in the event of unsolicited advertising, such as spam emails.",
    datenschutz_kontaktformular_aktualitaet: "10. Updates to this Privacy Policy",
    datenschutz_kontaktformular_aktualitaet_text: "We reserve the right to amend this Privacy Policy if this becomes necessary due to legal or technical changes. The version applicable at the time of your visit to the website shall apply.",
    datenschutz_kontaktformular_aktualitaet_stand: "Last updated: 24 September 2026"
    }   
};

const langSwitch = document.getElementById('lang-switch');

function applyLanguage(language) {
    const newLang = translations[language] ? language : 'de';
    document.documentElement.lang = newLang;
    localStorage.setItem('lang', newLang);

    if (langSwitch) langSwitch.textContent = newLang === 'de' ? 'EN' : 'DE';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[newLang][key]) {
            element.innerHTML = translations[newLang][key];
        }
    });
}

applyLanguage(currentLang);

if (langSwitch) langSwitch.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'de' ? 'en' : 'de';
    applyLanguage(newLang);
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
    const siteHeader = document.querySelector(".site-header");
    const navLinks = document.querySelectorAll(".main-nav a");

    // Menü öffnen/schließen
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        siteHeader.classList.toggle("nav-open");
    });

    // Menü schließen beim Klick auf einen Link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
            siteHeader.classList.remove("nav-open");
        });
    });
});

let currentApparateIndex = 0;

// Pfeil-Buttons Klick-Funktion
function moveApparate(direction) {
    const gallery = document.querySelector('.apparate-gallery');
    const slides = document.querySelectorAll('.apparate-gallery .image-block');
    
    if (!gallery || slides.length === 0) return;

    const totalSlides = slides.length;

    currentApparateIndex += direction;

    if (currentApparateIndex < 0) {
        currentApparateIndex = totalSlides - 1;
    } else if (currentApparateIndex >= totalSlides) {
        currentApparateIndex = 0;
    }

    const slideWidth = slides[0].clientWidth;

    gallery.scrollTo({
        left: slideWidth * currentApparateIndex,
        behavior: 'smooth'
    });
}

// Index automatisch aktualisieren, wenn der Nutzer per Touch/Finger wischt
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.apparate-gallery');
    
    if (gallery) {
        let isScrolling;
        
        gallery.addEventListener('scroll', () => {
            // Verhindert zu häufiges Ausführen während der Wischbewegung (Debounce)
            clearTimeout(isScrolling);
            
            isScrolling = setTimeout(() => {
                const slides = document.querySelectorAll('.apparate-gallery .image-block');
                if (slides.length === 0) return;
                
                const slideWidth = slides[0].clientWidth;
                // Berechnet den aktuellen Bild-Index basierend auf der Scroll-Position
                currentApparateIndex = Math.round(gallery.scrollLeft / slideWidth);
            }, 100);
        });
    }
});

/*Hero-Bils*/
document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const prevButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }

    nextButton.addEventListener("click", () => {
        nextSlide();
        resetSlider();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetSlider();
    });

    startSlider();

});

/*Apparate-Gallery*/
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".apparate-gallery");
    const prevButton = document.querySelector(".app-prev");
    const nextButton = document.querySelector(".app-next");

    if (!gallery || !prevButton || !nextButton) return;

    const images = gallery.querySelectorAll(".image-block");
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        gallery.scrollTo({
            left: images[currentIndex].offsetLeft,
            behavior: "smooth"
        });
    }

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    prevButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });
});

/*Kontaktformular*/
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault(); // Verhindert das Neuladen der Seite

            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Sprache auslesen (prüft den Text des Sprach-Buttons)
            const langBtn = document.getElementById("lang-switch");
            // Wenn der Button "DE" anzeigt, ist aktuell EN aktiv (und umgekehrt)
            const currentLang = langBtn && langBtn.textContent.trim().toUpperCase() === "DE" ? "en" : "de";

            // Übersetzungen für Rückmeldungen & Status
            const translations = {
                de: {
                    sending: "Wird gesendet...",
                    success: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.",
                    errorGeneric: "Beim Senden ist ein Fehler aufgetreten.",
                    errorNetwork: "Netzwerkfehler: Bitte überprüfe deine Internetverbindung und versuche es erneut."
                },
                en: {
                    sending: "Sending...",
                    success: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
                    errorGeneric: "An error occurred while sending your message.",
                    errorNetwork: "Network error: Please check your internet connection and try again."
                }
            };

            const t = translations[currentLang] || translations.de;

            // Honeypot (Spam-Schutz) prüfen
            const gotchaInput = form.querySelector('input[name="_gotcha"]');
            if (gotchaInput && gotchaInput.value !== "") {
                return; // Bots stumm abfangen
            }

            // Bestehende Rückmeldungen entfernen
            const existingAlert = form.querySelector(".form-alert");
            if (existingAlert) {
                existingAlert.remove();
            }

            // Formulardaten sammeln
            const formData = new FormData(form);

            // Button-Status ändern
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${t.sending}`;

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showFormMessage(form, t.success, "success");
                    form.reset();
                } else {
                    const data = await response.json();
                    let errorMsg = t.errorGeneric;
                    if (data && data.errors) {
                        errorMsg = data.errors.map(err => err.message).join(", ");
                    }
                    showFormMessage(form, errorMsg, "error");
                }
            } catch (error) {
                showFormMessage(form, t.errorNetwork, "error");
            } finally {
                // Button zurücksetzen
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // Hilfsfunktion zur Anzeige von Meldungen
    function showFormMessage(formElement, message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `form-alert alert-${type}`;
        alertBox.textContent = message;

        alertBox.style.padding = "12px 16px";
        alertBox.style.marginTop = "15px";
        alertBox.style.borderRadius = "6px";
        alertBox.style.fontSize = "0.95rem";
        alertBox.style.textAlign = "center";

        if (type === "success") {
            alertBox.style.backgroundColor = "#d4edda";
            alertBox.style.color = "#155724";
            alertBox.style.border = "1px solid #c3e6cb";
        } else {
            alertBox.style.backgroundColor = "#f8d7da";
            alertBox.style.color = "#721c24";
            alertBox.style.border = "1px solid #f5c6cb";
        }

        formElement.appendChild(alertBox);

        setTimeout(() => {
            if (alertBox) {
                alertBox.remove();
            }
        }, 8000);
    }
});