let allDeals = [
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 449, firstName: "Keene", lastName: "Hubball" },
    company: { name: "Yozio", id: 309 },
    emails: [{ type: "Work", email: "keene.hubball@yozio.com" }],
    phones: [
      { type: "Personal", phone: "2917268271" },
      { type: "Work", phone: "7233442129" }
    ],
    crmname: "pipedrive",
    deal: { id: 151, status: "won", value: 0, title: "Yozio Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 91, firstName: "Rosalinda", lastName: "Kelk" },
    company: { name: "Meevee", id: 105 },
    emails: [{ type: "Work", email: "rosalinda.kelk@meevee.com" }],
    phones: [{ type: "Work", phone: "8471883578" }],
    crmname: "pipedrive",
    deal: { id: 428, status: "lost", value: 2200, title: "Meevee Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 1444, firstName: "Gerome", lastName: "McLukie" },
    company: { name: "Edgepulse", id: 716 },
    emails: [{ type: "Other", email: "gerome.mclukie@edgepulse.com" }],
    phones: [{ type: "Personal", phone: "6677468913" }],
    crmname: "pipedrive",
    deal: { id: 600, status: "won", value: 850, title: "Edgepulse Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 117, firstName: "Salaidh", lastName: "Grace" },
    company: { name: "Myworks", id: 80 },
    emails: [{ type: "Work", email: "salaidh.grace@myworks.com" }],
    phones: [
      { type: "Work", phone: "1794278656" },
      { type: "Work", phone: "5715595155" }
    ],
    crmname: "pipedrive",
    deal: { id: 591, status: "lost", value: 2200, title: "Myworks Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 846, firstName: "Tiphanie", lastName: "Fallow" },
    company: { name: "Pixoboo", id: 2087 },
    emails: [{ type: "Other", email: "tiphanie.fallow@pixoboo.com" }],
    phones: [
      { type: "Work", phone: "3896431086" },
      { type: "Work", phone: "1105619110" }
    ],
    crmname: "pipedrive",
    deal: { id: 842, status: "won", value: 900, title: "Pixoboo Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 884, firstName: "Doralin", lastName: "Tie" },
    company: { name: "JumpXS", id: 2261 },
    emails: [{ type: "Other", email: "doralin.tie@jumpxs.com" }],
    phones: [
      { type: "Work", phone: "2047803308" },
      { type: "Work", phone: "3057272983" }
    ],
    crmname: "pipedrive",
    deal: { id: 993, status: "open", value: 15000, title: "JumpXS Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 2749, firstName: "Lek", lastName: "Barrat" },
    company: { name: "Jabberbean", id: 753 },
    emails: [{ type: "Other", email: "lek.barrat@jabberbean.com" }],
    phones: [
      { type: "Work", phone: "2179567052" },
      { type: "Work", phone: "4876761840" }
    ],
    crmname: "pipedrive",
    deal: { id: 1205, status: "won", value: 52, title: "Jabberbean Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 1727, firstName: "Nelle", lastName: "Kunrad" },
    company: { name: "Feedfire", id: 2528 },
    emails: [{ type: "Other", email: "nelle.kunrad@feedfire.com" }],
    phones: [
      { type: "Work", phone: "6384509321" },
      { type: "Personal", phone: "7461578182" }
    ],
    crmname: "pipedrive",
    deal: { id: 927, status: "open", value: 1800, title: "Feedfire Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 129, firstName: "Halie", lastName: "Lowery" },
    company: { name: "Zoonoodle", id: 1178 },
    emails: [{ type: "Other", email: "halie.lowery@zoonoodle.com" }],
    phones: [
      { type: "Work", phone: "5873070761" },
      { type: "Personal", phone: "9845534891" }
    ],
    crmname: "pipedrive",
    deal: { id: 1294, status: "open", value: 900, title: "Zoonoodle Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 3960, firstName: "Rowland", lastName: "Matchett" },
    company: { name: "Dabtype", id: 3113 },
    emails: [{ type: "Other", email: "rowland.matchett@dabtype.com" }],
    phones: [
      { type: "Personal", phone: "5156690013" },
      { type: "Personal", phone: "2647032814" }
    ],
    crmname: "pipedrive",
    deal: { id: 1881, status: "lost", value: 0, title: "Dabtype Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 2552, firstName: "Ewell", lastName: "Mozzetti" },
    company: { name: "Photofeed", id: 5078 },
    emails: [{ type: "Work", email: "ewell.mozzetti@photofeed.com" }],
    phones: [{ type: "Work", phone: "3262730412" }],
    crmname: "pipedrive",
    deal: { id: 1594, status: "won", value: 900, title: "Photofeed Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 1591, firstName: "Mason", lastName: "Espin" },
    company: { name: "Blogspan", id: 5906 },
    emails: [{ type: "Other", email: "mason.espin@blogspan.com" }],
    phones: [{ type: "Personal", phone: "4007265336" }],
    crmname: "pipedrive",
    deal: { id: 1369, status: "lost", value: 900, title: "Blogspan Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 6249, firstName: "Ynes", lastName: "Itzkovsky" },
    company: { name: "Trunyx", id: 5826 },
    emails: [{ type: "Other", email: "ynes.itzkovsky@trunyx.com" }],
    phones: [{ type: "Work", phone: "8084349520" }],
    crmname: "pipedrive",
    deal: { id: 2190, status: "lost", value: 1800, title: "Trunyx Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 2495, firstName: "Cissy", lastName: "Biermatowicz" },
    company: { name: "Topicshots", id: 6661 },
    emails: [{ type: "Work", email: "cissy.biermatowicz@topicshots.com" }],
    phones: [
      { type: "Personal", phone: "8882628739" },
      { type: "Personal", phone: "6234089167" }
    ],
    crmname: "pipedrive",
    deal: { id: 2891, status: "won", value: 2200, title: "Topicshots Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 4178, firstName: "Irina", lastName: "Tulley" },
    company: { name: "Meevee", id: 446 },
    emails: [{ type: "Other", email: "irina.tulley@meevee.com" }],
    phones: [
      { type: "Personal", phone: "8291433231" },
      { type: "Work", phone: "8278796059" }
    ],
    crmname: "pipedrive",
    deal: { id: 2152, status: "open", value: 15000, title: "Meevee Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 7257, firstName: "Randi", lastName: "Hundley" },
    company: { name: "Jaxbean", id: 5924 },
    emails: [{ type: "Work", email: "randi.hundley@jaxbean.com" }],
    phones: [
      { type: "Personal", phone: "1118106450" },
      { type: "Work", phone: "3521848262" }
    ],
    crmname: "pipedrive",
    deal: { id: 1682, status: "lost", value: 900, title: "Jaxbean Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 3390, firstName: "Mart", lastName: "Gartan" },
    company: { name: "Abata", id: 6172 },
    emails: [{ type: "Other", email: "mart.gartan@abata.com" }],
    phones: [
      { type: "Personal", phone: "4402091191" },
      { type: "Work", phone: "5112190105" }
    ],
    crmname: "pipedrive",
    deal: { id: 3372, status: "open", value: 450, title: "Abata Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 6931, firstName: "Dur", lastName: "Hinchshaw" },
    company: { name: "Eamia", id: 2644 },
    emails: [{ type: "Other", email: "dur.hinchshaw@eamia.com" }],
    phones: [
      { type: "Personal", phone: "1572523232" },
      { type: "Personal", phone: "8436576064" }
    ],
    crmname: "pipedrive",
    deal: { id: 3011, status: "won", value: 850, title: "Eamia Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 1795, firstName: "Reine", lastName: "Garstang" },
    company: { name: "Twitterbeat", id: 4947 },
    emails: [{ type: "Work", email: "reine.garstang@twitterbeat.com" }],
    phones: [{ type: "Personal", phone: "4687272195" }],
    crmname: "pipedrive",
    deal: { id: 2993, status: "won", value: 23500, title: "Twitterbeat Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 4486, firstName: "Delcine", lastName: "Tottem" },
    company: { name: "Bubblebox", id: 1677 },
    emails: [{ type: "Other", email: "delcine.tottem@bubblebox.com" }],
    phones: [{ type: "Personal", phone: "6356663981" }],
    crmname: "pipedrive",
    deal: { id: 4027, status: "won", value: 1800, title: "Bubblebox Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 8183, firstName: "Shanie", lastName: "Sincock" },
    company: { name: "Riffpedia", id: 8253 },
    emails: [{ type: "Other", email: "shanie.sincock@riffpedia.com" }],
    phones: [{ type: "Work", phone: "6049826995" }],
    crmname: "pipedrive",
    deal: { id: 3433, status: "open", value: 10000, title: "Riffpedia Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 9399, firstName: "Falito", lastName: "Holtum" },
    company: { name: "Flipopia", id: 3470 },
    emails: [{ type: "Other", email: "falito.holtum@flipopia.com" }],
    phones: [
      { type: "Personal", phone: "9736183412" },
      { type: "Work", phone: "2088094632" }
    ],
    crmname: "pipedrive",
    deal: { id: 3308, status: "won", value: 0, title: "Flipopia Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 11105, firstName: "Myra", lastName: "Huckerby" },
    company: { name: "Kimia", id: 551 },
    emails: [{ type: "Other", email: "myra.huckerby@kimia.com" }],
    phones: [{ type: "Personal", phone: "8951501845" }],
    crmname: "pipedrive",
    deal: { id: 3686, status: "open", value: 15000, title: "Kimia Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 5557, firstName: "Eloisa", lastName: "Hasell" },
    company: { name: "Twiyo", id: 2453 },
    emails: [{ type: "Work", email: "eloisa.hasell@twiyo.com" }],
    phones: [
      { type: "Personal", phone: "6077640206" },
      { type: "Personal", phone: "1469710561" }
    ],
    crmname: "pipedrive",
    deal: { id: 3280, status: "lost", value: 850, title: "Twiyo Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 8672, firstName: "Nikolaos", lastName: "Skule" },
    company: { name: "Meeveo", id: 6770 },
    emails: [{ type: "Other", email: "nikolaos.skule@meeveo.com" }],
    phones: [{ type: "Work", phone: "4794453746" }],
    crmname: "pipedrive",
    deal: { id: 3589, status: "won", value: 10000, title: "Meeveo Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 3876, firstName: "Lonnie", lastName: "Crosfeld" },
    company: { name: "Zooxo", id: 5026 },
    emails: [{ type: "Work", email: "lonnie.crosfeld@zooxo.com" }],
    phones: [{ type: "Personal", phone: "8731536144" }],
    crmname: "pipedrive",
    deal: { id: 3110, status: "open", value: 1800, title: "Zooxo Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 2415, firstName: "Gardy", lastName: "Korf" },
    company: { name: "Ntag", id: 10609 },
    emails: [{ type: "Work", email: "gardy.korf@ntag.com" }],
    phones: [
      { type: "Personal", phone: "5791316985" },
      { type: "Personal", phone: "9067806454" }
    ],
    crmname: "pipedrive",
    deal: { id: 2960, status: "open", value: 23500, title: "Ntag Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 6283, firstName: "Buck", lastName: "Leivesley" },
    company: { name: "Aimbu", id: 11483 },
    emails: [{ type: "Work", email: "buck.leivesley@aimbu.com" }],
    phones: [{ type: "Personal", phone: "2721033477" }],
    crmname: "pipedrive",
    deal: { id: 3440, status: "won", value: 450, title: "Aimbu Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 9786, firstName: "Olympia", lastName: "Ferreras" },
    company: { name: "Roombo", id: 13581 },
    emails: [{ type: "Other", email: "olympia.ferreras@roombo.com" }],
    phones: [
      { type: "Personal", phone: "7169468949" },
      { type: "Work", phone: "1137624219" }
    ],
    crmname: "pipedrive",
    deal: { id: 4879, status: "lost", value: 226, title: "Roombo Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 2012, firstName: "Vale", lastName: "Scoyles" },
    company: { name: "Wikizz", id: 6839 },
    emails: [{ type: "Other", email: "vale.scoyles@wikizz.com" }],
    phones: [{ type: "Work", phone: "4216974847" }],
    crmname: "pipedrive",
    deal: { id: 3919, status: "open", value: 850, title: "Wikizz Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 14859, firstName: "Burtie", lastName: "Dalrymple" },
    company: { name: "Kimia", id: 10668 },
    emails: [{ type: "Work", email: "burtie.dalrymple@kimia.com" }],
    phones: [{ type: "Work", phone: "8322051635" }],
    crmname: "pipedrive",
    deal: { id: 3759, status: "lost", value: 1600, title: "Kimia Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 2329, firstName: "Bastian", lastName: "Frake" },
    company: { name: "Trunyx", id: 11861 },
    emails: [{ type: "Work", email: "bastian.frake@trunyx.com" }],
    phones: [
      { type: "Personal", phone: "1082431874" },
      { type: "Personal", phone: "6222018066" }
    ],
    crmname: "pipedrive",
    deal: { id: 4708, status: "won", value: 360, title: "Trunyx Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 13273, firstName: "Derrick", lastName: "Rives" },
    company: { name: "Buzzbean", id: 8804 },
    emails: [{ type: "Other", email: "derrick.rives@buzzbean.com" }],
    phones: [{ type: "Work", phone: "3136287962" }],
    crmname: "pipedrive",
    deal: { id: 5985, status: "lost", value: 15000, title: "Buzzbean Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 15659, firstName: "Aviva", lastName: "Hennington" },
    company: { name: "Quatz", id: 3867 },
    emails: [{ type: "Other", email: "aviva.hennington@quatz.com" }],
    phones: [{ type: "Work", phone: "8106352163" }],
    crmname: "pipedrive",
    deal: { id: 4272, status: "won", value: 23500, title: "Quatz Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 14501, firstName: "Ethelin", lastName: "Bather" },
    company: { name: "Twinder", id: 5084 },
    emails: [{ type: "Work", email: "ethelin.bather@twinder.com" }],
    phones: [
      { type: "Personal", phone: "6447264315" },
      { type: "Work", phone: "3937835574" }
    ],
    crmname: "pipedrive",
    deal: { id: 4317, status: "lost", value: 360, title: "Twinder Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 1545, firstName: "Darline", lastName: "Lillicrap" },
    company: { name: "Midel", id: 4340 },
    emails: [{ type: "Other", email: "darline.lillicrap@midel.com" }],
    phones: [
      { type: "Personal", phone: "8953061302" },
      { type: "Work", phone: "2287799726" }
    ],
    crmname: "pipedrive",
    deal: { id: 7181, status: "won", value: 500, title: "Midel Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 12116, firstName: "Reilly", lastName: "Mueller" },
    company: { name: "Kazio", id: 7500 },
    emails: [{ type: "Work", email: "reilly.mueller@kazio.com" }],
    phones: [{ type: "Work", phone: "6418379260" }],
    crmname: "pipedrive",
    deal: { id: 5202, status: "open", value: 360, title: "Kazio Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 1996, firstName: "Erik", lastName: "Silson" },
    company: { name: "Skalith", id: 15822 },
    emails: [{ type: "Other", email: "erik.silson@skalith.com" }],
    phones: [
      { type: "Work", phone: "8439268614" },
      { type: "Work", phone: "2024483252" }
    ],
    crmname: "pipedrive",
    deal: { id: 3843, status: "open", value: 450, title: "Skalith Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 16855, firstName: "Jarrett", lastName: "Titchener" },
    company: { name: "Chatterpoint", id: 4171 },
    emails: [{ type: "Work", email: "jarrett.titchener@chatterpoint.com" }],
    phones: [
      { type: "Work", phone: "7324054635" },
      { type: "Work", phone: "6286775904" }
    ],
    crmname: "pipedrive",
    deal: { id: 4539, status: "won", value: 1600, title: "Chatterpoint Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 14807, firstName: "Lila", lastName: "Lilbourne" },
    company: { name: "Kanoodle", id: 7340 },
    emails: [{ type: "Work", email: "lila.lilbourne@kanoodle.com" }],
    phones: [
      { type: "Personal", phone: "5247494988" },
      { type: "Personal", phone: "3326744661" }
    ],
    crmname: "pipedrive",
    deal: { id: 4198, status: "won", value: 226, title: "Kanoodle Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 4542, firstName: "Harwilll", lastName: "Elston" },
    company: { name: "Yozio", id: 6828 },
    emails: [{ type: "Work", email: "harwilll.elston@yozio.com" }],
    phones: [{ type: "Personal", phone: "8082240306" }],
    crmname: "pipedrive",
    deal: { id: 4527, status: "won", value: 850, title: "Yozio Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 8942, firstName: "Abbye", lastName: "Cornwell" },
    company: { name: "Livetube", id: 17253 },
    emails: [{ type: "Other", email: "abbye.cornwell@livetube.com" }],
    phones: [
      { type: "Personal", phone: "8902617921" },
      { type: "Work", phone: "1986007715" }
    ],
    crmname: "pipedrive",
    deal: { id: 4932, status: "won", value: 1600, title: "Livetube Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 3362, firstName: "Elden", lastName: "Godard" },
    company: { name: "Voonix", id: 12342 },
    emails: [{ type: "Work", email: "elden.godard@voonix.com" }],
    phones: [{ type: "Work", phone: "6574747120" }],
    crmname: "pipedrive",
    deal: { id: 8691, status: "open", value: 15000, title: "Voonix Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 11727, firstName: "Nananne", lastName: "Crosby" },
    company: { name: "Gabtune", id: 4878 },
    emails: [{ type: "Other", email: "nananne.crosby@gabtune.com" }],
    phones: [
      { type: "Personal", phone: "6457295991" },
      { type: "Personal", phone: "7334952530" }
    ],
    crmname: "pipedrive",
    deal: { id: 6263, status: "won", value: 100, title: "Gabtune Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 9459, firstName: "Corene", lastName: "Clausson" },
    company: { name: "Skinder", id: 6728 },
    emails: [{ type: "Work", email: "corene.clausson@skinder.com" }],
    phones: [{ type: "Work", phone: "4588878734" }],
    crmname: "pipedrive",
    deal: { id: 5933, status: "won", value: 76500, title: "Skinder Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 18210, firstName: "Hartley", lastName: "Colly" },
    company: { name: "Feedbug", id: 6689 },
    emails: [{ type: "Other", email: "hartley.colly@feedbug.com" }],
    phones: [{ type: "Work", phone: "1885720805" }],
    crmname: "pipedrive",
    deal: { id: 7753, status: "won", value: 76500, title: "Feedbug Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 18958, firstName: "Ara", lastName: "Mion" },
    company: { name: "Photolist", id: 4982 },
    emails: [{ type: "Other", email: "ara.mion@photolist.com" }],
    phones: [
      { type: "Work", phone: "9685177606" },
      { type: "Personal", phone: "5096004714" }
    ],
    crmname: "pipedrive",
    deal: { id: 7005, status: "open", value: 650, title: "Photolist Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 525, firstName: "Lydon", lastName: "Jemmett" },
    company: { name: "Jatri", id: 20707 },
    emails: [{ type: "Work", email: "lydon.jemmett@jatri.com" }],
    phones: [{ type: "Personal", phone: "8187347622" }],
    crmname: "pipedrive",
    deal: { id: 9596, status: "open", value: 1800, title: "Jatri Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 19346, firstName: "Trumaine", lastName: "Starsmeare" },
    company: { name: "Realpoint", id: 18711 },
    emails: [{ type: "Other", email: "trumaine.starsmeare@realpoint.com" }],
    phones: [
      { type: "Personal", phone: "9681801019" },
      { type: "Work", phone: "8984677170" }
    ],
    crmname: "pipedrive",
    deal: { id: 8606, status: "won", value: 52, title: "Realpoint Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 1890, firstName: "Ives", lastName: "Eby" },
    company: { name: "Oyoba", id: 4472 },
    emails: [{ type: "Other", email: "ives.eby@oyoba.com" }],
    phones: [
      { type: "Personal", phone: "6579931548" },
      { type: "Work", phone: "3691791170" }
    ],
    crmname: "pipedrive",
    deal: { id: 7647, status: "won", value: 1800, title: "Oyoba Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 17650, firstName: "Gayler", lastName: "Erni" },
    company: { name: "Kare", id: 1577 },
    emails: [{ type: "Work", email: "gayler.erni@kare.com" }],
    phones: [
      { type: "Work", phone: "2886338969" },
      { type: "Work", phone: "9275443499" }
    ],
    crmname: "pipedrive",
    deal: { id: 5788, status: "won", value: 500, title: "Kare Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 9483, firstName: "Theo", lastName: "Baudou" },
    company: { name: "Yata", id: 3301 },
    emails: [{ type: "Other", email: "theo.baudou@yata.com" }],
    phones: [{ type: "Personal", phone: "8702870842" }],
    crmname: "pipedrive",
    deal: { id: 8313, status: "won", value: 650, title: "Yata Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 11256, firstName: "Chris", lastName: "Loughlin" },
    company: { name: "Skaboo", id: 15941 },
    emails: [{ type: "Other", email: "chris.loughlin@skaboo.com" }],
    phones: [{ type: "Personal", phone: "7857629273" }],
    crmname: "pipedrive",
    deal: { id: 7379, status: "open", value: 2200, title: "Skaboo Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 22629, firstName: "Glory", lastName: "Brando" },
    company: { name: "Meevee", id: 4049 },
    emails: [{ type: "Work", email: "glory.brando@meevee.com" }],
    phones: [{ type: "Work", phone: "7506518329" }],
    crmname: "pipedrive",
    deal: { id: 10069, status: "won", value: 15450, title: "Meevee Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 7710, firstName: "Nathanil", lastName: "Scobbie" },
    company: { name: "Devpoint", id: 3339 },
    emails: [{ type: "Work", email: "nathanil.scobbie@devpoint.com" }],
    phones: [
      { type: "Personal", phone: "2832451933" },
      { type: "Personal", phone: "7576699803" }
    ],
    crmname: "pipedrive",
    deal: { id: 8499, status: "open", value: 500, title: "Devpoint Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 19790, firstName: "Hadley", lastName: "Camus" },
    company: { name: "Twitterwire", id: 8805 },
    emails: [{ type: "Work", email: "hadley.camus@twitterwire.com" }],
    phones: [{ type: "Work", phone: "9696366759" }],
    crmname: "pipedrive",
    deal: { id: 10615, status: "won", value: 360, title: "Twitterwire Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 27585, firstName: "Moria", lastName: "Haggleton" },
    company: { name: "Skilith", id: 3636 },
    emails: [{ type: "Other", email: "moria.haggleton@skilith.com" }],
    phones: [{ type: "Personal", phone: "9444782477" }],
    crmname: "pipedrive",
    deal: { id: 9111, status: "won", value: 1800, title: "Skilith Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 18288, firstName: "Hildagard", lastName: "Ghio" },
    company: { name: "Buzzster", id: 8316 },
    emails: [{ type: "Other", email: "hildagard.ghio@buzzster.com" }],
    phones: [{ type: "Personal", phone: "3807332905" }],
    crmname: "pipedrive",
    deal: { id: 11129, status: "open", value: 100, title: "Buzzster Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 15226, firstName: "Corbin", lastName: "Fleckney" },
    company: { name: "Eamia", id: 15777 },
    emails: [{ type: "Other", email: "corbin.fleckney@eamia.com" }],
    phones: [
      { type: "Personal", phone: "6661550839" },
      { type: "Personal", phone: "7966130566" }
    ],
    crmname: "pipedrive",
    deal: { id: 10137, status: "open", value: 2200, title: "Eamia Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 29668, firstName: "Brenda", lastName: "Banford" },
    company: { name: "Oodoo", id: 966 },
    emails: [{ type: "Other", email: "brenda.banford@oodoo.com" }],
    phones: [{ type: "Work", phone: "8965713875" }],
    crmname: "pipedrive",
    deal: { id: 6714, status: "lost", value: 450, title: "Oodoo Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 10293, firstName: "Emilie", lastName: "Corbally" },
    company: { name: "Livetube", id: 20721 },
    emails: [{ type: "Work", email: "emilie.corbally@livetube.com" }],
    phones: [
      { type: "Work", phone: "8944699782" },
      { type: "Work", phone: "1502745276" }
    ],
    crmname: "pipedrive",
    deal: { id: 11082, status: "open", value: 1800, title: "Livetube Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 399, firstName: "Esther", lastName: "Peele" },
    company: { name: "Skinder", id: 13520 },
    emails: [{ type: "Work", email: "esther.peele@skinder.com" }],
    phones: [
      { type: "Personal", phone: "9478683853" },
      { type: "Personal", phone: "4683677647" }
    ],
    crmname: "pipedrive",
    deal: { id: 8563, status: "won", value: 650, title: "Skinder Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 20650, firstName: "Milty", lastName: "Sijmons" },
    company: { name: "Brightdog", id: 26911 },
    emails: [{ type: "Work", email: "milty.sijmons@brightdog.com" }],
    phones: [
      { type: "Personal", phone: "3028141594" },
      { type: "Personal", phone: "4192352272" }
    ],
    crmname: "pipedrive",
    deal: { id: 9784, status: "won", value: 1600, title: "Brightdog Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 2715, firstName: "Raquela", lastName: "Brainsby" },
    company: { name: "Rhynyx", id: 4157 },
    emails: [{ type: "Other", email: "raquela.brainsby@rhynyx.com" }],
    phones: [
      { type: "Personal", phone: "8827326750" },
      { type: "Work", phone: "1395430398" }
    ],
    crmname: "pipedrive",
    deal: { id: 8442, status: "open", value: 360, title: "Rhynyx Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 11314, firstName: "Rosalyn", lastName: "Jelley" },
    company: { name: "Aivee", id: 28590 },
    emails: [{ type: "Other", email: "rosalyn.jelley@aivee.com" }],
    phones: [
      { type: "Personal", phone: "9492282167" },
      { type: "Work", phone: "6564307080" }
    ],
    crmname: "pipedrive",
    deal: { id: 12146, status: "lost", value: 850, title: "Aivee Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 25550, firstName: "Kinnie", lastName: "Skittle" },
    company: { name: "Linklinks", id: 16678 },
    emails: [{ type: "Work", email: "kinnie.skittle@linklinks.com" }],
    phones: [
      { type: "Work", phone: "1635448713" },
      { type: "Personal", phone: "3134857686" }
    ],
    crmname: "pipedrive",
    deal: { id: 6902, status: "lost", value: 650, title: "Linklinks Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 29298, firstName: "Sterling", lastName: "McPhail" },
    company: { name: "Edgeclub", id: 30488 },
    emails: [{ type: "Work", email: "sterling.mcphail@edgeclub.com" }],
    phones: [
      { type: "Work", phone: "2345486688" },
      { type: "Personal", phone: "2174503068" }
    ],
    crmname: "pipedrive",
    deal: { id: 7135, status: "open", value: 52, title: "Edgeclub Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 3535, firstName: "Mariska", lastName: "Cumbers" },
    company: { name: "Fatz", id: 25112 },
    emails: [{ type: "Other", email: "mariska.cumbers@fatz.com" }],
    phones: [{ type: "Personal", phone: "3499201181" }],
    crmname: "pipedrive",
    deal: { id: 11455, status: "open", value: 76500, title: "Fatz Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 900, firstName: "Abby", lastName: "Meus" },
    company: { name: "Twitterworks", id: 2163 },
    emails: [{ type: "Work", email: "abby.meus@twitterworks.com" }],
    phones: [{ type: "Work", phone: "8561252101" }],
    crmname: "pipedrive",
    deal: { id: 10669, status: "open", value: 2200, title: "Twitterworks Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 16406, firstName: "Bary", lastName: "Monteaux" },
    company: { name: "Pixoboo", id: 30580 },
    emails: [{ type: "Other", email: "bary.monteaux@pixoboo.com" }],
    phones: [{ type: "Work", phone: "5866286202" }],
    crmname: "pipedrive",
    deal: { id: 7513, status: "won", value: 15000, title: "Pixoboo Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 26641, firstName: "Merl", lastName: "Hoble" },
    company: { name: "Brainsphere", id: 21225 },
    emails: [{ type: "Work", email: "merl.hoble@brainsphere.com" }],
    phones: [
      { type: "Personal", phone: "4913927587" },
      { type: "Work", phone: "4712890800" }
    ],
    crmname: "pipedrive",
    deal: { id: 13427, status: "won", value: 2200, title: "Brainsphere Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 18678, firstName: "Aurilia", lastName: "Smorthit" },
    company: { name: "Twimbo", id: 16272 },
    emails: [{ type: "Other", email: "aurilia.smorthit@twimbo.com" }],
    phones: [
      { type: "Personal", phone: "7597125808" },
      { type: "Personal", phone: "6761996699" }
    ],
    crmname: "pipedrive",
    deal: { id: 9863, status: "won", value: 900, title: "Twimbo Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 7533, firstName: "Celisse", lastName: "Olrenshaw" },
    company: { name: "Rhynoodle", id: 29802 },
    emails: [{ type: "Work", email: "celisse.olrenshaw@rhynoodle.com" }],
    phones: [{ type: "Personal", phone: "7017375518" }],
    crmname: "pipedrive",
    deal: { id: 13817, status: "open", value: 23500, title: "Rhynoodle Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 36142, firstName: "Livvie", lastName: "Karus" },
    company: { name: "Innojam", id: 14817 },
    emails: [{ type: "Other", email: "livvie.karus@innojam.com" }],
    phones: [
      { type: "Work", phone: "4571536181" },
      { type: "Personal", phone: "1947230062" }
    ],
    crmname: "pipedrive",
    deal: { id: 14334, status: "lost", value: 226, title: "Innojam Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 21952, firstName: "Gale", lastName: "Parrington" },
    company: { name: "Quimba", id: 10157 },
    emails: [{ type: "Work", email: "gale.parrington@quimba.com" }],
    phones: [{ type: "Personal", phone: "5364183610" }],
    crmname: "pipedrive",
    deal: { id: 14294, status: "won", value: 360, title: "Quimba Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 7583, firstName: "Amberly", lastName: "Philippet" },
    company: { name: "Jayo", id: 22717 },
    emails: [{ type: "Work", email: "amberly.philippet@jayo.com" }],
    phones: [{ type: "Personal", phone: "4799911634" }],
    crmname: "pipedrive",
    deal: { id: 8521, status: "won", value: 650, title: "Jayo Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 4636, firstName: "Leonard", lastName: "Radclyffe" },
    company: { name: "Zoombox", id: 10909 },
    emails: [{ type: "Work", email: "leonard.radclyffe@zoombox.com" }],
    phones: [
      { type: "Personal", phone: "2793517483" },
      { type: "Work", phone: "2359688139" }
    ],
    crmname: "pipedrive",
    deal: { id: 11436, status: "open", value: 500, title: "Zoombox Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 7032, firstName: "Hertha", lastName: "Muehle" },
    company: { name: "Ainyx", id: 29399 },
    emails: [{ type: "Other", email: "hertha.muehle@ainyx.com" }],
    phones: [
      { type: "Work", phone: "7081565602" },
      { type: "Personal", phone: "4936162731" }
    ],
    crmname: "pipedrive",
    deal: { id: 8054, status: "won", value: 52, title: "Ainyx Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 39193, firstName: "Kipper", lastName: "Brace" },
    company: { name: "Minyx", id: 32772 },
    emails: [{ type: "Other", email: "kipper.brace@minyx.com" }],
    phones: [{ type: "Work", phone: "3345247540" }],
    crmname: "pipedrive",
    deal: { id: 11808, status: "won", value: 15450, title: "Minyx Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 36899, firstName: "Kippie", lastName: "Hanscomb" },
    company: { name: "Pixope", id: 32487 },
    emails: [{ type: "Other", email: "kippie.hanscomb@pixope.com" }],
    phones: [{ type: "Personal", phone: "8877815740" }],
    crmname: "pipedrive",
    deal: { id: 12345, status: "lost", value: 500, title: "Pixope Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 37914, firstName: "Warner", lastName: "Foddy" },
    company: { name: "Fivebridge", id: 32895 },
    emails: [{ type: "Other", email: "warner.foddy@fivebridge.com" }],
    phones: [
      { type: "Work", phone: "5177018945" },
      { type: "Personal", phone: "6108818570" }
    ],
    crmname: "pipedrive",
    deal: { id: 11239, status: "lost", value: 1600, title: "Fivebridge Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 28443, firstName: "Fulvia", lastName: "Vaadeland" },
    company: { name: "Quatz", id: 30362 },
    emails: [{ type: "Other", email: "fulvia.vaadeland@quatz.com" }],
    phones: [{ type: "Personal", phone: "9458583184" }],
    crmname: "pipedrive",
    deal: { id: 11969, status: "lost", value: 15000, title: "Quatz Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 16335, firstName: "Nanete", lastName: "Skippings" },
    company: { name: "Eazzy", id: 26805 },
    emails: [{ type: "Other", email: "nanete.skippings@eazzy.com" }],
    phones: [{ type: "Work", phone: "7286600278" }],
    crmname: "pipedrive",
    deal: { id: 9477, status: "lost", value: 52, title: "Eazzy Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 13118, firstName: "Eleonora", lastName: "Duggon" },
    company: { name: "Wordify", id: 41567 },
    emails: [{ type: "Other", email: "eleonora.duggon@wordify.com" }],
    phones: [
      { type: "Personal", phone: "8288646712" },
      { type: "Work", phone: "2451885518" }
    ],
    crmname: "pipedrive",
    deal: { id: 15126, status: "lost", value: 500, title: "Wordify Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 40151, firstName: "Zane", lastName: "Haugen" },
    company: { name: "Kwideo", id: 4945 },
    emails: [{ type: "Other", email: "zane.haugen@kwideo.com" }],
    phones: [
      { type: "Personal", phone: "3742467431" },
      { type: "Personal", phone: "6077309295" }
    ],
    crmname: "pipedrive",
    deal: { id: 15314, status: "open", value: 100, title: "Kwideo Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 33569, firstName: "Isak", lastName: "Veneur" },
    company: { name: "Devpoint", id: 6948 },
    emails: [{ type: "Work", email: "isak.veneur@devpoint.com" }],
    phones: [{ type: "Work", phone: "5369727342" }],
    crmname: "pipedrive",
    deal: { id: 12223, status: "lost", value: 23500, title: "Devpoint Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 41074, firstName: "Starla", lastName: "Humphery" },
    company: { name: "Ozu", id: 29678 },
    emails: [{ type: "Other", email: "starla.humphery@ozu.com" }],
    phones: [{ type: "Personal", phone: "6981532469" }],
    crmname: "pipedrive",
    deal: { id: 8810, status: "won", value: 900, title: "Ozu Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 21209, firstName: "Iolanthe", lastName: "Upwood" },
    company: { name: "Wordware", id: 2069 },
    emails: [{ type: "Other", email: "iolanthe.upwood@wordware.com" }],
    phones: [
      { type: "Personal", phone: "3191792933" },
      { type: "Personal", phone: "3505312343" }
    ],
    crmname: "pipedrive",
    deal: { id: 15514, status: "lost", value: 900, title: "Wordware Deal" }
  },
  {
    creator: { id: 41957, firstName: "Jeff", lastName: "Kuei" },
    person: { id: 41412, firstName: "John", lastName: "Zorzoni" },
    company: { name: "Topicshots", id: 5178 },
    emails: [{ type: "Work", email: "john.zorzoni@topicshots.com" }],
    phones: [{ type: "Work", phone: "8294431663" }],
    crmname: "pipedrive",
    deal: { id: 14877, status: "lost", value: 52, title: "Topicshots Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 31506, firstName: "Lynnell", lastName: "Scole" },
    company: { name: "Edgewire", id: 20471 },
    emails: [{ type: "Work", email: "lynnell.scole@edgewire.com" }],
    phones: [
      { type: "Work", phone: "2481758581" },
      { type: "Work", phone: "8262499218" }
    ],
    crmname: "pipedrive",
    deal: { id: 15272, status: "lost", value: 1600, title: "Edgewire Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 9229, firstName: "Chrisy", lastName: "Audrey" },
    company: { name: "Avamm", id: 40566 },
    emails: [{ type: "Work", email: "chrisy.audrey@avamm.com" }],
    phones: [
      { type: "Personal", phone: "7852374950" },
      { type: "Personal", phone: "9263801733" }
    ],
    crmname: "pipedrive",
    deal: { id: 10361, status: "lost", value: 10000, title: "Avamm Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 30503, firstName: "Meara", lastName: "Rimour" },
    company: { name: "Realcube", id: 34465 },
    emails: [{ type: "Other", email: "meara.rimour@realcube.com" }],
    phones: [{ type: "Personal", phone: "5007917627" }],
    crmname: "pipedrive",
    deal: { id: 10234, status: "lost", value: 226, title: "Realcube Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 23178, firstName: "Cacilia", lastName: "Caccavella" },
    company: { name: "Vipe", id: 19049 },
    emails: [{ type: "Other", email: "cacilia.caccavella@vipe.com" }],
    phones: [
      { type: "Work", phone: "2434388025" },
      { type: "Work", phone: "6213684680" }
    ],
    crmname: "pipedrive",
    deal: { id: 14313, status: "won", value: 1600, title: "Vipe Deal" }
  },
  {
    creator: { id: 41770, firstName: "Frank", lastName: "Bell" },
    person: { id: 43724, firstName: "Thane", lastName: "Newsome" },
    company: { name: "Vimbo", id: 31213 },
    emails: [{ type: "Work", email: "thane.newsome@vimbo.com" }],
    phones: [{ type: "Personal", phone: "1228798911" }],
    crmname: "pipedrive",
    deal: { id: 13850, status: "won", value: 52, title: "Vimbo Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 3835, firstName: "Marci", lastName: "Hayhoe" },
    company: { name: "Yoveo", id: 28764 },
    emails: [{ type: "Other", email: "marci.hayhoe@yoveo.com" }],
    phones: [
      { type: "Work", phone: "1624194655" },
      { type: "Work", phone: "3552080493" }
    ],
    crmname: "pipedrive",
    deal: { id: 18753, status: "won", value: 100, title: "Yoveo Deal" }
  },
  {
    creator: { id: 41978, firstName: "Richard", lastName: "Anderson" },
    person: { id: 34037, firstName: "Hanna", lastName: "Watford" },
    company: { name: "Chatterpoint", id: 29665 },
    emails: [{ type: "Work", email: "hanna.watford@chatterpoint.com" }],
    phones: [
      { type: "Personal", phone: "8603063153" },
      { type: "Personal", phone: "8081163818" }
    ],
    crmname: "pipedrive",
    deal: { id: 12815, status: "won", value: 360, title: "Chatterpoint Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 33199, firstName: "Demetri", lastName: "Zammitt" },
    company: { name: "Kayveo", id: 32842 },
    emails: [{ type: "Work", email: "demetri.zammitt@kayveo.com" }],
    phones: [{ type: "Work", phone: "9593318368" }],
    crmname: "pipedrive",
    deal: { id: 12647, status: "won", value: 500, title: "Kayveo Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 22981, firstName: "Layla", lastName: "Artz" },
    company: { name: "Meevee", id: 12335 },
    emails: [{ type: "Work", email: "layla.artz@meevee.com" }],
    phones: [
      { type: "Personal", phone: "7529803239" },
      { type: "Personal", phone: "2537546663" }
    ],
    crmname: "pipedrive",
    deal: { id: 17069, status: "open", value: 226, title: "Meevee Deal" }
  },
  {
    creator: { id: 2645, firstName: "Keith", lastName: "Muenze" },
    person: { id: 40953, firstName: "Justen", lastName: "Youle" },
    company: { name: "Npath", id: 19507 },
    emails: [{ type: "Work", email: "justen.youle@npath.com" }],
    phones: [{ type: "Personal", phone: "2723927852" }],
    crmname: "pipedrive",
    deal: { id: 16653, status: "lost", value: 76500, title: "Npath Deal" }
  },
  {
    creator: { id: 57509, firstName: "Nikhil", lastName: "Prakash" },
    person: { id: 4889, firstName: "Leopold", lastName: "Elesander" },
    company: { name: "Yakidoo", id: 12877 },
    emails: [{ type: "Other", email: "leopold.elesander@yakidoo.com" }],
    phones: [
      { type: "Personal", phone: "8243957822" },
      { type: "Personal", phone: "8135559115" }
    ],
    crmname: "pipedrive",
    deal: { id: 20005, status: "open", value: 360, title: "Yakidoo Deal" }
  }
];

module.exports = allDeals