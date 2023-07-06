const names = {
    acanthus: "Acanthus mollis",
    "all kinds of cabbage, brassicaceous plants": "Brassicae",
    "all kinds of willows": "Salices",
    "angelica, lingwort": "Angelica archangelica",
    ash: "Fraxinus excelsior",
    "atriplex, orache, all-seed, notchweed": "Atriplex silvestris",
    bergamot: "Citrus bergamium",
    "black mustard": "Sinapis nigra",
    "cabbage-lettuce": "Lactuca sativa",
    calamus: "Calamus aromaticus (Acorus calamus)",
    celandine: "Chelidonium majus",
    chickweed: "Stellaria media",
    "cinnamon, Ceylon cinnamon": "Cinnamonum ceylanicum",
    "cinquefoil, five-leaf, finger-grass": "Potentilla reptans",
    "clove tree": "Caryophyllus (Syzygium aromaticum)",
    "common rue": "Ruta graveolens",
    "common scarlet pimpernel": "Anagallis arvensis",
    "corn poppy": "Papa ver rhoeas",
    cucumber: "Cucumis sativus",
    daisy: "Bellis perennis",
    dittany: "Dictamnus albus",
    duckweed: "Lenticula palustris",
    elecampane: "mula helenium",
    eyebright: "Euphrasia officinalis",
    "Florentine iris": "Iris florentina",
    "galium, cleavers, goose grass": "Galium aparine",
    gentian: "Gentiana lutea",
    "German chamomile": "Matricaria chamomilla",
    "German iris": "Iris germanica",
    ginger: "Zingiber officinale",
    grapevine: "Vitis vinifrra",
    "ground ivy": "Glechoma hederacea",
    "hawkweed, mouse-ear": "Hieracium pilosella",
    hyssop: "Hyssopus officinalis",
    juniper: "Juniperus communis",
    "lady's smock, cuckoo flower": "Cardamine pratense",
    laurel: "Laurus nobilis",
    "lemon balm": "Melissa offtcinalis",
    "lemon tree": "Citrus limonum",
    "lesser centaury": "Erythrea centaurium (Entaurium umbellatum)",
    "lime-tree": "Tilia",
    marigold: "Calendula officinalis",
    marshmallow: "Althaea officinalis",
    mistletoe: "Viscum album",
    moneywort: "Lysimachia nummularia",
    "monk's pepper": "Agnus castus",
    moonwort: "Ruta lunaria",
    "myrtle, periwinkle": "Vinca minor",
    nutmeg: "Myristica fragrans",
    "olive tree": "Olea europea",
    "opium poppy": "Papaver somnifrruni",
    "orange tree": "Citrus aurantium",
    orpine: "Sedum telephium",
    "pale iris": "Iris pallida",
    papaya: "Carica papaya",
    passionflower: "Passiflora incarnata",
    peony: "Paeonia officinalis",
    pepper: "Piper",
    plantain: "Plantago major",
    privet: "Ligustrum vulgare",
    "pumpkin, gourd": "Cucurbita Pepo",
    ribwort: "Plantago lanceolata",
    rice: "Oryza sativa",
    "Roman chamomile": "Anthemis nobilis",
    rosemary: "Rosmarinus officinalis",
    "SaintJohn's-wort": "Hypericum perfora turn",
    saxifrage: "Saxifraga",
    sedum: "Telephium vulgare",
    "sharp stonecrop, wall-pepper": "Sedum acre",
    speedwell: "Veronica officinalis",
    sundew: "Drosera rotundifrlia",
    sunflower: "Helian thus anuus",
    turmeric: "Curcuma longa",
    "viper's buglass, blueweed": "Fchium valgare",
    wallflower: "Cheiranthus cheiri",
    "walnut tree": "Juglans regia",
    "water chestnut": "Trapa natans",
    "water lily": "Nymphaea alba",
    watercress: "Nasturtium officinale",
    "white lily": "Lilium album",
    "white mustard": "Sinapis alba",
    "wild angelica": "Angelica silvestris",
    "wild strawberry": "Fragaria vesca",
    zedoary: "Zedoaria (Curcuma zedoaria)",
};

const folk = {
    Angelica:
        'linked sometimes with St. Michael the Archangel and was even called "The Root of the Holy Ghost". It protects against witchcraft, evil spirits, spells and enchantments.',
    "Basil (Sweet)":
        "believed to have derived its name form the Basilisk, the fabulous dragon-like creature that was deadly to anyone who looked at it. This may have spawned the old belief that Basil begot scorpions.",
    "Betony (Wood)":
        "the original herb of Magic and medicine discovered by Chiron the Centaur. Cured against 'elf sickness'. Believed that animals seek it out when ill. Old lore says that if two snakes are put into a ring of Betony, they will fight to the death. Considered magically powerful against evil spirits.",
    Bistort:
        "name means 'twice twisted'. The twisted root resembles a snake. English names include snakeweed and adderwort. Regarded as a cure for snake bites. Lore also says that this herb can help a woman conceive a child.",
    Blackberry:
        "was considered to be a holy plant. In the Highlands, they're called Blessed Brambles. If twined into a wreath with rowan and ivy, will keep away evil spirits. Brambles or alternatively osieres, would be plaited around a grave to keep a ghost from rising. Believed that Christ used a bramble to drive the money changers out of the temple and to spur his donkey onto Jerusalem. Thought to cure various ailments if the sick would walk under an archway of bramble rooted at each end.",
    Broom: "piece of broom is worn in a cap because its ancient reputation as a plant both useful to witches and against them. Was also used as a magic sleep enhancer and as a power in love spells.",
    "Byrony (White)":
        'used in place of European Mandrake root. Helped in fertility spells for barren women. Also called Womandrake and related to the Yam family. In France was called "Herb of Beaten Wives" because the berry juice resembles the black and blue marks of beatings.',
    Centaury:
        "also discovered by Chiron the Centaur. Used to cure fevers. Another powerful herb against Witchcraft and Magic.",
    Chicory:
        "believed to be a cure for failing sight and poor eyes because its flowers only open during sunlight. If gathered by a special ritual, it was believed to make one invisible and also open locked doors and chests. To do so, one must cut the plant with a gold blade on St. Jame's Day, July 25.",
    "Cinquefoil (Latin: Potentilla)":
        'meant "small and powerful". Hung in doorways to keep out evil spirits. A main ingredient in Witch potions and ointments.',
    "Devil's Bit (Scabious)":
        "old lore says that the Devil bit it for envy because the herb had so many good virtues and was so good for mankind. In Cornwall England, was referred to as Devil's Button and to pick the plant one was sure to receive a nocturnal visit from the Devil.",
    Dill: "anti-witch plant. Was used to lull people into stupors and thus mothers used it on their babies to keep them sleepy. Used in and against spells.",
    Eyebright:
        "St. Michael used it along with rue and three drops from the Well of Life to anoint his hurt eyes after his battle with the Devil and the latter's fall.",
    Fennel: "genuine wind-expelling properties. Used to keep evil spirits away especially on Midsummer's Eve when it would be hung with St. John's Wort over doorways. Keyholes blocked with fennel would keep out ghosts. Was also believed to confer longevity and improve strength and courage.",
    Foxglove:
        "associated with fairies and elves as they gave gloves to the fox so he could raid the chickens and escape harm. Said that if the fairies wore these 'gloves' they could do anything. Was believed to be dangerous to cut foxglove but once you'd done so and lived it was a good defense against the little people. In Wales it's juice was rubbed into a floor in the shape of a cross to protect the home from the fey folk. It could also be used to kill a changeling child. Also believed that the souls of the dead inhabited the flowers thus the alternate names of 'bells', 'thimbles' or 'deadman's fingers'.",
    Mugwort:
        'known alternatively as St. John\'s Herb and was considered to be the "Mother of Al Herbs." Some believed that St. John the Baptist wore a girdle of Mugwort in the forest where he lived. Was cured in the Midsummer bonfires and hung up over doorways to keep evil at bay. Also used to keep travelers from getting too weary.',
    Orchid: "another name for Satyrion root which was believed to be a powerful aphrodisiac. Men and women ate the tubers as sexual stimulants and in the hopes of defining what sex a newborn would take.",
    Parsley:
        "not originally considered an herb but rather in connections with both 'noble' and 'funeral'. The Greeks strewn it on graves. It was used on food plates as a garnish as an antidote to poison and thus put on a plate was considered a token of trust. It was also thought if a man ate some of the seeds prior to drinking he'd be able to drink more and still retain his faculties.",
    Peony: "regarded as having a divine origin. Was sacred to Peon, physician to the Gods. Would protect from evil spirits and storms and would in particular protect shepherds and their flocks, farmers and their crops. Was considered as dangerous as Mandrake to dig up and thus the same kinds of protections must be used. It was also believed to be highly dangerous to dig up if a woodpecker was nearby as the gatherer of the herb would lose his sight.",
    Plantain:
        "also known as 'healing herb' in Scotland/Ireland. Was considered a very powerful plant since it could stand back up against the boot heel or chariot wheel crushing it down. Due to this belief, it was used to treat wounds and bruises.",
    Rosemary:
        "was dropped into coffins as a way of letting the dead know that you'd not forget them. Also very protective against physical injury and thunder/lightning. Could renew youth and help 'special' enterprises to grow and succeed.",
    Sage: "ancient reputation as a healing plant and thought to confer long life. Tradition says that if the plant lives or dies so will a business owner's livelihood thrive or fail.",
    "Solomon's Seal":
        "it's said to bear a symbol on its roots, the two interwoven triangles which make up the hexagram, will scare off evil spirits! The white flowers were used in love potions and the plant was used to help 'knit bones' together.",
    Tarragon:
        "also known as Little Dragon - reputed to have sprung up where the banished serpent from the Garden of Eden brushed up over the ground along with Mugwort and Wormwood. Since Dragons were both terrifying and protective, it was believed to cure snake-bite.",
    "Viper's Bugloss":
        "the seeds resemble a viper's head and thus thought to be another cure against snake bite.",
    Yarrow: "also known as Bloodwort - noted for its wound healing powers and was regarded as another herb dedicated to the Devil.",
};

const teas = {
    Anise: "Protection, purification, awareness, joy. For treating coughs, bronchitis and a stuffy nose, good breath freshener, digestive aid and relieves upset stomach and flatulence, treatment for colic. Relieves the discomfort of menopause. Promotes milk production in nursing mothers. Sedative.",
    Basil: "Protection, love, healing relationships, courage, fertility, exorcism. Calming the nerves, settling the stomach, and easing cramps and good for the bladder.",
    "Catnip (flavor with mint)":
        "Peace. Used to treat colds and insomnia. Lowers fevers, dries up postnasal drip, gets rid of bad headaches and relieves sore aching bones due to colds and flu.",
    Chamomile:
        "Love, Relaxation. Calming. Great for digestion, fevers, burns, anti-inflammatory for wounds, and sedative for nervous disorders. Relieves stomachaches and diarrhea in infants and children (always use in diluted form). Gentle sleep inducer. Makes an excellent insect repellent, simply by splashing some tea on face, arms and feet.",
    Cayenne:
        "Excellent flu fighter. Promotes fast recovery, stops internal and external bleeding, said to prevent heart attacks and also helps with depression and headaches.",
    Cinnamon:
        "Spiritual quests, augmenting power, love, success, psychic work, healing, cleansing. Digestive aid. Used for diarrhea, dysentery or general indigestion.",
    Clove: "Dispels negativity, protection, draws money, defrays gossip, vision, cleansing. An expectorant for colds, also good for relief of nausea or vomiting. An analgesic helping prevent disease and infection.",
    Comfrey:
        "Safe travel, draws money, healing. Slows bleeding, aids colds, eases burns. As a tea may be applied to bites, sores, rashes, broken bones, and cuts.",
    Dandelion:
        "Divination, welcoming, messages. Ground root can be used as a coffee substitute. A tonic and a relief for common stomach problems. Use a handful of flower tops to 1 pint of boiling water.",
    Fennel: "Purification, protection, healing, money. Employed as an appetite suppressant and digestive aid. Weak solution can help babies with gas.",
    Ginger: "Protection, Coughs and Colds. Power, success, love, money. (place a few slices of fresh ginger in boiling water) Good for cramps, to stimulate the digestive organs, migraines and nausea, external stiffness. For pain you can also soak cloths in ginger tea and apply them directly to the painful areas. A good healing tea is made from a pinch of peppermint, a pinch of ginger and either a pinch of clove powder or 2 bruised cloves, add 1 cup of hot water and steep.",
    Ginseng:
        "Love, wishes, beauty, desire. Stimulant, tonic, an agent for prolonged life. Also a mild pain killer, and improves blood circulation. Reported to successfully treat asthma, bronchitis, cancer, flatulence, diabetes, weakness, fever, coughs and heartburn, and a mild stimulant. Relieves stress and moderate heart disease.",
    Lemon: "Purification, love, blessings. Sweetens breath. Antiseptic, antibacterial and hypotensive. For chills and sore throat, the juice of a lemon mixed in a glass of honey and warm water. Stimulates the digestive system.",
    "Mint, Spearmint, Peppermint":
        "Draws money, healing, strength, augments power, purification, luck, safe travel. Aids upset stomachs, flu, and can be used to ease hiccups. Used instead of aspirin, particularly for premenstrual headaches. Aids the respiratory and circulatory systems. An anti-inflammatory and an antiseptic. Ideal for treating indigestion,, flatulence, varicose veins, migraine, skin irritations, rheumatism, toothache, and general fatigue.",
    Nettle: "Averts danger, protection, healing. Use gloves to handle so as to avoid getting pricked. High in vitamin C and iron and can ease asthma and up your energy levels.",
    Rosemary:
        "Improves memory, sleep, purification, youth, love, power, healing, protection, intellectual. Promotes healing of wounds, acts as an antiseptic, and can be a mild stimulant. Good for treating flu, stress, and headaches or body aches. Mental and physical booster.",
    Thyme: "Sleep, psychic energy, courage, healing. Powerful antiviral, antibiotic, and diuretic properties. It helps eliminate wastes from the body. Is used in treating whooping coughs, warts, rheumatism and acne. Useful for poor digestion, exhaustion, colds, and infections, and with honey is an effective treatment for sore throats. Also used as a fever breaker, headache reducer and to be rid of intestinal worms, and also a great insect repellent. Use both the leaves and flowers. This tea works best for headaches when taken cold.",
    Valerian:
        "Love, calming, sleep. Promotes relaxation while counteracting the effects of insomnia, anxiety, nervousness, headaches, premenstrual syndrome and menstrual cramping. Gets fighting couples together.",
    Yarrow: "Courage, love, psychic abilities, divination. A very potent healer, it intensifies the medicinal action of other herbs taken with it. Helps eliminate toxins (good for colds). The tea drunk prior to divination will enhance one's powers of perception (a touch of added peppermint enhances its action). Also stops arthritis symptoms such as swelling & inflammation and generally ends aching, sore muscles, stiff joints or back pain.",
    Acacia: "Symbolizes purity, air, and used in initiations, psychic workings, and protection. Also viewed as a Mother tree, the gum from it symbolizing menstrual blood. Tree of the Egyptian goddess Neith, Osirus, Astarte, Ishtar, and Diana.",
    Alder: "Sacred to the god Bran. Represents resurrection, rebirth, and fire.",
    Apple: "Used in love Magick and also for peace, happiness, prosperity, perpetual youth, and healing. Represents water. Associated with Venus, Hercules, Diana, Apollo, Hera, Athena, and Idunn.",
    Ash: "Represents water, the Universal Mother, and the source for unborn souls. Used in healing, protection, and sea Magick. Traditional Yule log. Associated with Poseidon, Neptune, Woden, Thor, and Mars.",
    Aspen: "Used for phyllomancy which is divination by leaf rustling. Used for protection.",
    Cypress:
        "Used for Maypoles, easing losses, healing, past life workings, and protection. Represents earth.",
    Elder: "A witch tree and often used to make wands. Used for healing, love, protection, and. Sacred to the goddess Hel. Represents air. Associated with Venus.",
    Hawthorne:
        "Called the May tree. Represents water and the White Goddess Maia. Used for female sexuality, cleansing, marriage, love, and protection.",
    Hazel: "Sacred to witches and the Celtic sea god Manannan. Often used to make all-purpose wands and used in fertility, divination, marriage, protection, and reconciliation. Symbolizes female wisdom and air. Associated with Artemis and Diana.",
    Oak: "Used for healing, strength, protection, masculinity and for fertility magic. Represents fire. Associated with Dagda, Dianus, Jupiter, Zeus, Cybele, Rhea, Janus, Cernunnos, and Herne.",
    Pine: "Symbolizes immortality and represents earth. Pine cones represent fertility. Used for purification, health, fortune, fertility, and prosperity. Associated with Pan, Attis, Venus, and Cybele.",
    Willow: "Represents water. Used in moon, wishing magic, healing, protection, enchantments, and easy delivery of babies. Associated with Artemis, Persephone, Hecate, Ceres, Hera, and Circe.",
};

const oilsMagickal = {
    amber: {
        definition_1: {
            text: "This rich scent is used to harmonize the aura, and bring the yin and yang into balance within one's self.",
            planetary_rulerships: ["Mercury"],
        },
    },
    apple: {
        definition_1: {
            text: "This oil is best worn between the Autumn Equinox and Yule for its high energy of wisdom in Magick.",
            planetary_rulerships: ["Venus"],
            diety_rulerships: ["Aphrodite"],
        },
    },
    basil: {
        definition_1: {
            text: "Used to soothe tempers between lovers in troublesome times; it is also good for love potions, wealth, floor washes, and protection spells.",
            planetary_rulerships: ["Mars"],
            diety_rulerships: ["Vishnu", "Erzulu"],
        },
        definition_2:
            "The scent of basil causes sympathy between two people so wear to avoid major clashes. It creates harmony of all kinds. Prostitutes used to wear it in Spain to attract business.",
    },
    bay: {
        definition_1: {
            text: "Best used for clairvoyance and to enhance psychic visions, but also known for protection.",
            planetary_rulerships: ["Sun"],
            diety_rulerships: ["Apollo", "Faunus", "Eros"],
        },
    },
    bergamot: {
        definition_1: {
            text: "In herbal folklore, it is said that the oil of Bergamot leaves, when rubbed on money, will ensure the return of riches; it is also well known for prosperity spells.",
            planetary_rulerships: ["Mercury"],
        },
        definition_2:
            "Used in protective rituals and also in drawing prosperity. Wear on the palm of each hand.",
    },
    carnation: {
        definition_1: {
            text: "This sweet and floral scent is traditionally used to ensure strength and good health, and for protection. In candle Magick, it is used as an aid in path working.",
            planetary_rulerships: ["Sun"],
            diety_rulerships: ["Jupiter"],
        },
        definition_2:
            "This is an oil of power. It is used as an energy restorer after exertion, as an aid to healing, and in consecration ceremonies. Should be worn when extra energy for a ritual is desired.",
    },
    cedar: {
        definition_1: {
            text: "The oil from this sacred tree is used for purification, and to rid a person of bad dreams.",
            planetary_rulerships: ["Sun"],
        },
    },
    cedarwood: {
        definition_1: {
            text: "Used in Magick for wealth and prosperity.",
            planetary_rulerships: ["Jupiter"],
            diety_rulerships: ["Wood Nymphs"],
        },
    },
    cherry: {
        definition_1: {
            text: "Used in all love Magick for attraction.",
            planetary_rulerships: ["Venus"],
        },
    },
    cinnamon: {
        definition_1: {
            text: "In it's oil form, it is known to raise spiritual vibrations, draw money, and stimulate psychic powers.",
            planetary_rulerships: ["Sun"],
            diety_rulerships: ["VenusAphrodite"],
        },
        definition_2:
            "A high-vibration oil, used for personal protection. It is also a sexual stimulant in the female. Added to any incense, it increases its powers. Mixed with powdered sandalwood, it makes an incense suitable for all religious or spiritual magic. God for meditation, illumination, and so on.",
    },
    clove: {
        definition_1: {
            text: "It is worn to attract the opposite sex; in candle Magick it is used to gain prosperity.",
            planetary_rulerships: ["Jupiter"],
        },
        definition_2:
            "An aphrodisiac, worn to attract lovers. Inhaled, the oil helps memory and eyesight.",
    },
    coconut: {
        definition_1: {
            text: "This oil is worn to ensure chastity, in a literal or magickal sense.",
            planetary_rulerships: ["Moon"],
        },
    },
    cypress: {
        definition_1: {
            text: "Also known as the tree of death, this oil is used in Magick in times of requiem and mourning. It is worn to strengthen longevity of life and for healing.",
            planetary_rulerships: ["Saturn"],
            diety_rulerships: [
                "Mithras",
                "Pluto",
                "Artemis",
                "Cupid",
                "Hecate",
            ],
        },
        definition_2:
            "An oil of blessing, consecration and protection. It is a symbol of the Earth-element, as well as of death. When attending a funeral of a friend or loved one, wear this oil so that you will be uplifted by the meaning of death as the doorway to but another life. It also effectively screens out the negative vibrations of the mourners. Wear on Samhain to become aware and remember those who have passed on.",
    },
    frankincense: {
        definition_1: {
            text: "Sacred to the Egyptians, this oil is worn to protect against negativity, and is used as a sacred anointing oil.",
            planetary_rulerships: ["Sun"],
            diety_rulerships: ["RaBaal"],
        },
        definition_2:
            "One of the most sacred of all oils, used to anoint magical tools, the altar, etc. A strong purifier used in exorcisms, purification rituals, and blessings.",
    },
    gardenia: {
        definition_1: {
            text: "Sacred to the Goddess, this oil is used to bring peaceful vibrations and to attract good spirits into the circle.",
            planetary_rulerships: ["Moon"],
        },
        definition_2:
            "Wear to attract love. A powerful feminine magnetic oil. Protective.",
    },
    geranium: {
        definition_1: {
            text: "This sweet floral scent is used to attract others in matters of love;",
            planetary_rulerships: ["Venus"],
        },
    },
    honeysuckle: {
        definition_1: {
            text: "Wear to increase psychic abilities and clairvoyance; in candle Magick, use to increase money and prosperity.",
            planetary_rulerships: ["Jupiter"],
        },
        definition_2:
            "An oil of the mind, it promotes quick thinking and is often used as a memory aid by dabbing on the temples. Also used in prosperity rituals.",
    },
    jasmine: {
        definition_1: {
            text: "This moon flower is worn at night to induce sleep and cause prophetic dreams; in candle Magick it is used for love and dream Magick.",
            planetary_rulerships: ["Moon"],
            diety_rulerships: ["Vishnu"],
        },
        definition_2:
            "Symbol of the Moon, and of the mysteries of the night. Jasmine oil is used to attract love. The scent helps one relax, sleep, and also facilitates childbirth. It is sometimes used for meditation and general anointing purposes. This is a purely spiritual oil.",
    },
    juniper: {
        definition_1: {
            text: "This woody, pine scent is used as an aid in meditation and spiritual enlightenment. In Magick, it is used to communicate with animals.",
            planetary_rulerships: ["Sun"],
        },
    },
    lavender: {
        definition_1: {
            text: "This bittersweet flowery scent is used in healing and to bring peace into a troublesome relationship. Also known for magicks pertaining to memory, peace and happiness.",
            planetary_rulerships: ["Mercury"],
        },
        definition_2:
            "Used in healing and purifying rituals, and also to arouse sexual desire in men. Prostitutes wore it extensively to advertise their trade and to attract customers.",
    },
    lilac: {
        definition_1: {
            text: "This gentle, sweet scent is used in candle Magick, as an aid in mental development and past life recollection. It is worn to keep away baneful spirits.",
            planetary_rulerships: ["Venus"],
        },
        definition_2:
            "Induces Far Memory, the act of recalling past lives. It is also useful in inducing clairvoyant powers in general. Brings peace and harmony.",
    },
    lily: {
        definition_1: {
            text: "This oil is best used magickally to stop manipulation in love affairs. It is also worn for its protective energy.",
            planetary_rulerships: ["Moon"],
            diety_rulerships: ["Venus", "Juno", "Kwan Yin"],
        },
    },
    lime: {
        definition_1: {
            text: "This citrus oil is used for healing, love and protection.",
            planetary_rulerships: ["Sun"],
        },
    },
    lotus: {
        definition_1: {
            text: "Used for healing energies and fertility. Also known to attract good fortune.",
            planetary_rulerships: ["Moon"],
        },
        definition_2:
            "The sacred oil of the ancient Egyptians, lotus oil has a high spiritual vibration and is suitable for blessing, anointing, meditation, and as a dedicatory oil to your god(s). It is also used in healing rituals. One who wears lotus oil is sure of good fortune and much happiness.",
    },
    magnolia: {
        definition_1: {
            text: "This oil is used to maintain a faithful relationship.",
            planetary_rulerships: ["Venus"],
        },
        definition_2:
            "An excellent oil for meditation and psychic development. It also brings peace and harmony.",
    },
    musk: {
        definition_1: {
            text: "This oil is worn as a sexual attractor, and stimulates the psychic body; magickally, it is used to anoint the censor.",
            planetary_rulerships: ["Venus"],
        },
        definition_2:
            'The universally accepted "sex scent". It is also worn to purify and to gain courage. It is a magnetic oil, worn with equal success by both sexes.',
    },
    myrrh: {
        definition_1: {
            text: "One of the sacred anointing oils, it is worn for blessing, protection, and consecration; magickally it is used for purification and meditation.",
            planetary_rulerships: ["Moon"],
            diety_rulerships: ["Isis", "Adonis", "Ra", "Marian"],
        },
        definition_2:
            "A purification, protection and hex-breaking oil. Possesses a high vibratory rate, making it excellent for the more religious rituals of magic. Anoint the house every morning and evening as part of any protection ritual.",
    },
    narcissus: {
        definition_1: {
            text: "This scent is good for overcoming restlessness, and creating harmony. When worn with patchouli, it creates a high sexual atmosphere.",
            planetary_rulerships: ["Mercury"],
        },
        definition_2:
            '"Stupidfyer". This oil brings peace and harmony, soothes the nerves and relaxes the conscious mind. A "narcotic" type oil.',
    },
    orchid: {
        definition_1: {
            text: "This sensuous, floral scent is worn to attract love; in candle Magick, it is used for creativity, psychic perception, and mental clarity.",
            planetary_rulerships: ["Venus"],
        },
    },
    patchouli: {
        definition_1: {
            text: "The rich, earthy smell is best known for its capabilities to raise high sexual energy; in candle Magick, it is used to increase prosperity.",
            planetary_rulerships: ["Saturn"],
        },
        definition_2:
            "A very powerful occult oil, one of the magnetic oils to be worn by men. It attracts women. Also wards off negativity and evil, gives peace of mind, and is very sensual.",
    },
    pine: {
        definition_1: {
            text: "This evergreen scent, best worn during Yuletide, is used to cleanse the aura; in candle Magick, it is used to increase prosperity.",
            planetary_rulerships: ["Mars"],
            diety_rulerships: [
                "Cybele",
                "Pan",
                "Venus",
                "Attis",
                "Dionysus",
                "Astarte",
            ],
        },
    },
    rose: {
        definition_1: {
            text: "This rich, seductive scent is used to promote thoughts of love and affection. In Magick, it is used in all aspects of love",
            planetary_rulerships: ["Venus"],
            diety_rulerships: [
                "Hathor",
                "Eros",
                "Cupid",
                "Demeter",
                "Isis",
                "Adonis",
            ],
        },
        definition_2:
            'The love oil. Used in all love operations, added to baths, and to induce peace and harmony. Take a handful of rose buds, place them in a silver goblet. Pour one dram rose oil over them. Let soak for a week. After this, on a Friday night, burn them over the charcoal to infuse your house with loving vibrations. This is an excellent "peace" incense, and can be done regularly to ensure domestic tranquility.',
    },
    sage: {
        definition_1: {
            text: "This oil is best used for purification of self, and one's home. It is also known for longevity, wisdom, and power.",
            planetary_rulerships: ["Jupiter"],
        },
    },
    sandalwood: {
        definition_1: {
            text: "This is known to be one of the most spiritual oils, and an excellent base for most anointing oils; it is also used for healing, meditation, and prayer.",
            planetary_rulerships: ["Moon"],
        },
        definition_2:
            "Protective, very healing, this oil is used to anoint. It also aids one in seeing past incarnations. Try anointing the forehead to promote the Sight.",
    },
    vanilla: {
        definition_1: {
            text: "This very soothing scent increases loving and lustful energy.",
            planetary_rulerships: ["Venus"],
        },
        definition_2:
            "A vitalizing oil, said to be sexually arousing in women. Use as an energy restorer. Sometimes used to gain extra power during magical ceremonies.",
    },
    vetiver: {
        definition_1: {
            text: "This oil is worn to attract a lover; it is used in candle Magick to repel negativity.",
            planetary_rulerships: ["Venus"],
        },
    },
    violet: {
        definition_1: {
            text: "This light, floral scent is used in healing, wards off evil, and helps smooth out tensions in a love affair.",
            planetary_rulerships: ["Venus"],
        },
        definition_2:
            "The oil is used in love operations and is sometimes sexually exciting. However, many people cant's stand the fragrance of the violet, for some curious reason. Once thought to be sacred to the Fairy Queen. Very healing, added to baths.",
    },
    "ylang-ylang": {
        definition_1: {
            text: "A very soothing oil, used in all aspects of healing. And is used in sex Magick.",
        },
        definition_2:
            'Makes its wearer irresistible to the opposite sex. Also soothes the problems of married life. Can help in finding a job. If worn to interviews you will be much calmer and more impressive to the interviewer. Sometimes called "Flower of Flowers."',
    },
    acacia: {
        definition_2:
            "Possessing high spiritual vibrations, this oil is worn to aid meditation and to develop psychic powers. Some also use it to anoint their altars, censers, and candles.",
    },
    "all-spice": {
        definition_2:
            "Very vitalizing. Gives added determination and energy, excellent for convalescents. Anoint daily.",
    },
    almond: {
        definition_2:
            "Almond oil, the symbol of wakefulness to the Egyptians, is used in prosperity rituals (anointing candles, money, etc.) and also added to money incenses.",
    },
    anise: {
        definition_2:
            "A boon to clairvoyance, it is often added to a ritual bath preceding any attempt at divination. It is also worn during divinatory rituals.",
    },
    "apple blossom": {
        definition_2:
            "Wear to promote happiness and success. Anoint candles during love rituals. Add to bath to aid relaxation.",
    },
    bayberry: {
        definition_2:
            'Anoint green candles for prosperity in the home. Brings "luck to your home and gold to your pocket." A magnetic oil to be worn by men.',
    },
    benzoin: {
        definition_2:
            "This oil brings peace of mind. It is used in purification ceremonies. A drop or two smoldering on a charcoal block will effectively clear the area with billowing clouds of smoke.",
    },
    camphor: {
        definition_2:
            "Wear to strengthen psychic powers. Also anoint yourself when you have decided to break off with a lover, or when they have done so with you and you find it hard to let go.",
    },
    cinquefoil: {
        definition_2:
            'Protective, strengthens the five senses. Also "five lucks"- love, money, health, power and wisdom, so is often used to anoint amulet and charm bags.',
    },
    coriander: {
        definition_2: "A love oil used to anoint candles.",
    },
    "cumin seed": {
        definition_2:
            "Brings peace and harmony to the home. Anoint all doorways once a week just before sunrise when the household is asleep ad all is quiet.",
    },
    cyclamen: {
        definition_2:
            "Worn to ease childbirth by the expectant mother. Also used in love and marriage spells.",
    },
    eucalyptus: {
        definition_2:
            "A healing oil, very useful in recuperation after long illnesses. Cures colds with daily application to the throat, forehead and wrists, and by adding it to healing baths. Also used for purifications.",
    },
    ginger: {
        definition_2: "A tropical aphrodisiac. Induces passion.",
    },
    heliotrope: {
        definition_2:
            "High spiritual vibrations, drenched with the energies of the Sun. Aids in clairvoyance.",
    },
    hyacinth: {
        definition_2:
            "Brings peace of mind to the mentally disturbed. A very relaxing oil.",
    },
    hyssop: {
        definition_2:
            "Increases finances, and is added to the bath to create a purifying atmosphere. An excellent oil to wear during all types of magical rituals.",
    },
    "lemon grass": {
        definition_2:
            "An aid to the psychic powers. Wear on the forehead. Spiritualists and mediums use it, for it helps make contact with spirits.",
    },
    melilot: {
        definition_2:
            "Fights depression, or what the old Witches used to call melancholy.",
    },
    mimosa: {
        definition_2:
            "Used in healing rituals, and also in producing prophetic dreams. Anoint the forehead before retiring.",
    },
    mint: {
        definition_2:
            "Used in prosperity spells, and to increase one's business. Anoint wallets, etc.",
    },
    neroli: {
        definition_2:
            "Magnetic women's oil. Rubbed between the breasts to attract men, or onto the temples to give peace.",
    },
    nutmeg: {
        definition_2:
            "This oil is rubbed onto the temples and the third eye to help in meditation and to induce sleep. It is protective as well.",
    },
    "orange blossom": {
        definition_2:
            "To make a person in the mood for marriage, wear this oil. many women add it to their daily baths to build up their attractiveness. Sometimes known as mantrap.",
    },
    "orris root": {
        definition_2:
            "Attracts the opposite sex. Douse your clothes with the oil.",
    },
    peony: {
        definition_2:
            "A lucky scent for all who need customers, success in business, or good fortune.",
    },
    peppermint: {
        definition_2:
            "Used to create changes within one's life. Also used to relax and allow one to unwind.",
    },
    "rose geranium": {
        definition_2:
            "Oil of protection. Anoint window sills, doors of house. Wear on self. Also imparts courage to the wearer. An excellent oil to use to bless a new home or apartment. A few drops on a charcoal block will release its powerful vibrations throughout the entire house. Also used to anoint censers.",
    },
    rosemary: {
        definition_2:
            "A very vitalizing oil, rosemary is used in healing rituals and also to promote prudence, common sense, and self assurance. It aids mental powers when rubbed onto the temples. It is also protective and is used much like Rose Geranium. Rub onto the temples to ease pain of headache and in all healing rituals.",
    },
    rue: {
        definition_2:
            "To break up negativity and curses, anoint a sprig of dried rue with this oil. Tie up in a red bag and carry for protection. Add nine drops of the oil to the bath every night for nine nights in succession during the waning moon to break a spell that has been cast against you. Salt may be added to the bath as well.",
    },
    saffron: {
        definition_2: "Wear to aid in the development of clairvoyant powers.",
    },
    sesame: {
        definition_2: "Gives hope to one who is sick, discouraged or lonely.",
    },
    "sweet pea": {
        definition_2:
            "One of the most beautiful of all scents, sweet pea oil is worn to attract strangers of all kinds, some of whom may become lovers or friends. Wear as a personal oil.",
    },
    spikenard: {
        definition_2:
            "Wear during rituals to the ancient deities of Egypt, also to anoint sacred objects, such as altars, tools, etc.",
    },
    tuberose: {
        definition_2:
            "Mistress of the Night, as it is also known, is an excellent aphrodisiac. Promotes peace and also aids in psychic powers. Men wear it to attract women. Very much a physical oil.",
    },
    vervain: {
        definition_2:
            "Assists in obtaining material objects. It also stimulates creativity. Aids those who desire success in the performing and creative arts.",
    },
    wisteria: {
        definition_2:
            "The door between the world of men and the realm of the Gods, the passport to higher consciousness and existence, and to bring illumination. Wear only when in complete serenity.",
    },
};

const oilsPractical = {
    Agarwood: {
        "Aquilaria Agollacha":
            "The main properties of this oil are as an anti parasite oil. It is traditionally used to treat malaria. Also it is extensively used in Japan and the Far East as an aphrodisiac. In Aromatherapy it is reputed to be the most effective aphrodisiac Essential oil.",
    },
    Ajowan: {
        "Trachyspermum Ammi":
            "This oil is frequently used for circulatory problems. It also has good muscle relaxing properties. However over use can cause skin irritation in some people.",
    },
    Alcohol: {
        _default:
            "In Aromatherapy Alcohol is used to clean equipment, but it can also be used as a base for making natural Perfumes. Do not Ingest.",
    },
    "Aloe &amp; Seaweed Gel": {
        _default:
            "A cooling and skin conditioning base, can be used on its own, but with the addition of 3% Parsley Seed (Petroselinum Sativum) makes a wonderful eye gel, that can help remove the shadows from tired eyes.",
    },
    "Aloe Vera Gel": {
        _default:
            "Professional Aromatherapist's use this cool, skin conditioning base (with Essential oils added) for treating clients who are undergoing radiation treatment to counter the dermal damage done. It can also be used with the addition of Lavender &amp; Roman Chamomile as an after sun lotion.",
    },
    "Ambrette Seed": {
        "Hibiscus Abelmoschus":
            "Frequently used for muscle aches and pains due to sport or activity fatigue. Helps poor circulation too. Also used as an anti-depressant.",
    },
    Amyris: {
        "Amyris Balsamifera":
            "The traditional use of Amyris is as a muscle relaxant, emollient, soothing agent and a stimulant. It can be used to treat neck muscle stress when mixed with Ylang-Ylang or Marjoram.",
    },
    "Angelica Root": {
        "Angelica Archangelica":
            "A useful oil, but it should be avoided by pregnant women, and diabetics. That said, professional Aromatherapists use Angelica during childbirth to help expel the placenta. A good tonic oil that can aid convalesces. It can also be used to help with draining the lymphatic system, and helps with period pains. As an appetite stimulant it has been used to treat Anorexia Nervosa. Over use can induce insomnia",
        "Angelica Glaucha":
            "This variation and chemo-type is reputed, from traditional uses on the Indian sub continent, to be effective anti-venom in treating snakebites.",
        "Archangelica Officinalis":
            "As with many Essential oils, where the source plant is grown will effect the quality of the oil produced, also while Angelica Archangelica I s the modern internationally recognized name for the official source plant, Archangelica Officinalis, is the old name. Thus this is the same as Angelica (Angelica Archangelica)",
    },
    "Angelica Seed": {
        "Angelica Archangelica":
            "While Angelica root is a good body tonic the oil from the seeds works well as a skin tonic, and may help with various skin conditions.",
    },
    "Anise Star": {
        "Illicum Verum":
            "This is used as an energizing and toning oil, and has traditionally been used in China as a deodorant. It can be used to good effect for Asthma. It can also help with hangovers. However it has a slight dermal toxicity so should be used diluted and infrequently.",
    },
    "Apricot Kernel": {
        "Prunus Armeniaca":
            "As with all the carrier oils used in Aromatherapy, the oil should be chosen to match the skin type. Apricot Kernel is especially suited to dry &amp; normal skin types.",
    },
    "Avocado (Refined)": {
        "Persea Americana":
            "Normally used as an addition to other carrier oils at a rate of 10%-25%. As it has a re-hydrating effect it is good for dry skin and conditions like eczema. However it does appear to exacerbate Psoriasis in some people.",
    },
    "Basil Linalool": {
        "Ocimum Basilicum":
            "Forget the Prozac, Basil can be good for the relief of depression. But over use will cause depression. Avoid if pregnant. Good for respiration conditions, such as Asthma and Bronchitis. As it has an effect upon Adrenal Cortex it can be effective with allergies.",
    },
    Bay: {
        "Pimenta Racemosa":
            "One of the traditional uses of Bay is as an aphrodisiac, as it's a stimulating &amp; energizing oil, this could be true. Bay is great for easing the muscles after sporting activity and its a good hair tonic too.",
    },
    Benzoin: {
        "Styrax Benzoin":
            "Can be used as a joint rub to relieve the pain and discomfort of Arthritis. Is also reputed to help with problem such as premature ejaculation. It's a good oil for dry cracked skin and chilblains.",
    },
    Bergamot: {
        "Citrus Bergamia":
            "Without Bergamot oil there would be no Earl Grey tea. But in Aromatherapy this oil has many uses. It has good effects upon people with breathing problems. Also this oil is useful for helping with digestive problems as well as dispelling internal parasites. Bergamot is very useful for most skin conditions, especially when mixed with Eucalyptus, especially acne and oily skin conditions. Caution, as this oil is phototoxic. It is perfectly safe if used on areas of the skin that are covered by clothing before going out into the sun.",
    },
    "Bergamot FCF (Bergaptene Free)": {
        "Citrus Bergamia":
            "As it is the Bergaptene that has the phototoxic effect in this oil, this Bergaptene Free variant is also offered. It should be noted that most professional Aromatherapist's don't use this variant as it is seen as less effective.",
    },
    "Birch Sweet": {
        "Betula Lenta":
            "The birch oils are generally good for helping the body remove toxins and purifying the blood. A good kidney tonic too.",
    },
    "Black pepper": {
        "Piper Nigrum":
            "Flatulence and Rheumatism are two conditions that this oil can be used to relieve. As it gives localized increase in blood flow, it is a good oil for helping tone muscles, as well as relives the aches and strains from exercise. Over use can cause a skin rash on sensitive skins.",
    },
    Borage: {
        "Borago Officinalis":
            "Borage seed carrier oil is a good skin conditioning oil. In Aromatherapy it is normally blended with other carrier oils and only used at 5% to 10% of the total volume of carrier.",
    },
    Cajuput: {
        "Melaleuca Minor":
            "Also sometimes known as White Tea Tree. One of the traditional uses of this oil is as an Insect repellent, this combined with it's antiseptic and deodorant properties make this a great oil for the traveler.",
    },
    Calendula: {
        "Calendula Officinalis":
            "Calendula infused carrier oil, made from the African Marigold, is used for its skin healing properties. The Absolute oil while used mainly for its perfume, can increase the skin conditioning properties to a skin care blend of essential oils.",
    },
    Camelia: {
        "Thea Sinenis":
            "Used in traditional Chinese medicine for treating skin conditions, in Aromatherapy it is very good for very sensitive and mature skin.",
    },
    Camphor: {
        "Cinnamomum Camphora":
            "With it's cooling and skin conditioning properties, this oil can make a great after sun lotion. But it should be avoided while pregnant.",
    },
    Caraway: {
        "Carum Carvi":
            "A great pick me up oil for the emotions. Also very good for digestive problems. Further as this oil helps stimulate localized circulation it can give color to a pale complexion. And when mixed with Dill, it can be used to stimulate milk flow in nursing mothers.",
    },
    Cardamom: {
        "Elletaria Cardomomum":
            "This oil has soothing and muscle relaxing qualities. It has traditionally been used as a treatment for impotence too.",
    },
    Carnation: {
        "Dianthus Caryophylius":
            "Used predominately as a perfume ingredient, but is also reputed to be an aphrodisiac.",
    },
    "Carrot (Infused)": {
        "Daucus Carota":
            "As the scent of carrot seed is not liked by some, the addition of 5%-10% to your carrier oil can give some of the skin rejuvenating properties of the Essential Oil.",
    },
    "Carrot seed": {
        "Daucus Carota":
            "It is claimed that this oil is good for treating Premature Aging. But it is a very good oil to use in a make up removal blend. However it's aroma is not seen as pleasant by many and needs to be used in a blend.",
    },
    Cassia: {
        "Cinnamomum Cassia":
            "As this oil can cause serious skin irritation, it should not be used in massage, but as it is reputed to help adults with chronic Asthma it can be used in a Vaporizer or Diffuser.",
    },
    "Cedarwood Atlas": {
        "Cedrus Atlantica":
            "Also known as White Cedarwood, it is reputed to be best for long standing conditions such as Bronchitis. In Native American Cultures it is used as an aid to meditation. Works well on oily skin problems, and when blended with Frankincense and Cypress, it can be used to soften the skin. Avoid if pregnant.",
    },
    "Cedarwood Texas": {
        "Juniperus Texas":
            "As with other Cederwood's it is used as a perfume fixative, as well as holding scents in Aromatherapy blends.",
    },
    "Cedarwood Virginian": {
        "Juniperus Viriginiana":
            "As with other Cederwood's it is used as a perfume fixative, as well as holding scents in Aromatherapy blends.",
    },
    "Celery Seed": {
        "Apium Graveolens":
            "A good oil for diabetics to use as it can help prevent Glaucoma. It is a useful oil for tired eyes too.",
    },
    "Chamomile Blue": {
        "Chamomilla Recutita":
            "First; in spite of international agreements there is some confusion over the name of this oil. Often it is known as German Chamomile, and even Hungarian Chamomile. Also in the 1940s the international scientific world agreed that the Latin name for the source plant would change from Matricaria Chamomilla to Chamomilla Recutita. Thus under any of these names it is the same oil. Distinctive by its strong blue color. Each of the Chamomile's has its own uses in Aromatherapy, this one is traditionally used as a soothing and toning oil.",
    },
    "Chamomile Maroc": {
        "Ormenis Multicaulis":
            "Sometimes know as wild Chamomile, it is not a true Chamomile but a few drops in a base of Wheatgerm makes a wonderful skin conditioner.",
    },
    "Chamomile Roman": {
        "Anthemis Nobilis":
            "This is the main Chamomile used in Aromatherapy. This particular oil is frequently used to treat Menstrual Problems, from PM to helping in the relief of period pains. Good for dry and itchy skins and a brilliant skin cleanser. Good for reducing puffiness and improving the elasticity of the skin.",
    },
    "Cinnamon Bark": {
        "Cinnamomum Zeylanicum":
            "A very potent oil that will cause skin rashes if overused, it is often best not used in massage. It is great at aiding the tired mind.",
    },
    "Cinnamon Leaf": {
        "Cinnamomum Zeylanicum":
            "This oil can cause skin irritation! However it is a milder, yet still potent, oil than Cinnamon Bark. It is useful for tightening loose skin. Use infrequently.",
    },
    Citronella: {
        "Cymbopogan Nardus":
            "As this oil is a good insect repellent and a great skin conditioner, when combined with Neroli and Bergamot. Also great for helping with sweaty feet.",
    },
    "Clary Sage": {
        "Salvia Sclarea":
            "A truly feminine oil. As this oil mimics the female and helps balance the reproductive hormones, it is the main Aromatherapy treatment for many menstrual problems. Depression is just one of the many problems this versatile oil can be used to treat. However as this oil can make concentration difficult it should not be used if driving. As it can induce a feeling of nausea when mixed with Alcohol, it can be helpful in treating alcoholics, as well as an aid to beating dependency on other drugs too.",
    },
    "Clove Bud": {
        "Eugenia Caryophyllata":
            "Famously used to relief toothache it also has other uses. It has been found to be effective in treating Lupus. It can cause skin irritation, but even people with the most sensitive skins can still carefully use this oil. It can be used in a diffuser or vaporizer during the winter to ward off infections.",
    },
    "Coconut (Fractionated)": {
        "Cocus Nucifera":
            "Fractionated coconut is a wonderfully light oil that is suitable for all skin types, and it smells great too.",
    },
    Coriander: {
        "Coriandrum Sativum":
            "This warming oil can be very good for dry chapped hands, as well as arthritic and rheumatic pain. Said to help revitalize the glandular system.",
    },
    Cubeb: {
        "Piper Cubeba":
            "As with many spice oils it is used to improve circulation, and thus may help with Arthritis and Rheumatism. Also useful for drying out congestion in the upper respiratory tract.",
    },
    Cumin: {
        "Cuminum Cyminum":
            "A warming oil that is said to help with Osteoarthritis and muscular pain. It has a tonic action on the heart and is often used by professional Aromatherapist's to treat clients at risk of heart attack. Helps increase lactation in women.",
    },
    "Cumin Black": {
        "Nigella Sativa":
            "Often used to increase fertility and increase sexual desire in men, as well as normalize the menstrual cycle in women.",
    },
    Cypress: {
        "Cupressus Sempervirens":
            "With it's anti-viral properties, this oil can be used as a treatment for cold sores. Also a good treatment for heavy periods. Good for oily skins and often used to help with acne. However it is important to note that this oil is FLAMMABLE.",
    },
    Davana: {
        "Artermisia Pallens":
            "With its fine cognac aroma, this oil is often used in male toiletries. As it has good skin conditioning properties it is a good post shaving oil. But as it is reputed to be the second most potent aphrodisiac Essential oil, Agarwood being the first... Well this reputation can only be a case for personal experimentation.",
    },
    "Dill Seed": {
        "Anethum Graveoleons":
            "Often used to promote lactation in nursing mothers. It also has a beneficial effect in promoting healing in the dermas.",
    },
    Elemi: {
        "Canarium Luzonicum":
            "Elemi is one of the oils used in Conventional medicine, as the oil helps with regeneration of broken bones the oil is used in plaster bandages that hospitals use for plaster casts. Because of its effect upon the skeleton, it may help with Osteoporosis. On the skin it has a drying and cooling effects, and is seen as effective in chronic skin conditions.",
    },
    "Eucalyptus 80/85": {
        "Eucalyptus Globulus":
            "Is one of the well-known Essential oils, and has been used for years (since 1788) to treat chest conditions. As it aids the body in expelling mucous. With it's analgesic properties Eucalyptus can be a great treatment for sunburn. It also clears congested skin. Also is very good for the treatment of cystitis. However as it raises blood pressure it should be avoided by people with hypertension as well as people with Epilepsy.",
    },
    "Eucalyptus Dives": {
        "Eucalyptus Dives":
            "As there are over 600 species of Eucalyptus, there are other variants that produce therapeutic oil. While all the therapeutic Eucalyptus oils have a beneficial effect upon Asthma, this one appears to be most effective for most people.",
    },
    "Evening Primrose (10% GLA)": {
        "Oenothera Biennis":
            "As this oil is high in Gamma Linoleic acid, it is a very good skin conditioner and is normally used at 10 to 20% of total carrier oil.",
    },
    "Fennel sweet": {
        "Foeniculum Vulgare":
            "Good skin cleansing properties, and reputed to keep wrinkles at bay. This oil can be a great help for the relief of Menopausal Problems.",
    },
    "Fir Needle": {
        "Abies Sibirica":
            "Has a good effect upon the respiratory system, and is suitable for all chest conditions. Also a gentle warming action upon tired muscles. Further it balances chemicals in the body and could be useful for metabolic conditions.",
    },
    Frankincense: {
        "Boswellia Thurifera":
            "This oil has the effect of helping to slow down breathing and with its calming effect upon the mind, is frequently used to aid meditation. Also useful as a tonic for uterine problems, and can be useful during labour. Could help with postnatal depression. Reputed to help smooth out wrinkles, and give new life to mature skin.",
    },
    Galbanum: {
        "Ferula Galbaniflua":
            "A very useful oil for female reproductive problems. As it helps with problems such as scanty periods, it should be avoided in pregnancy. In Menopause it can help with hot flushes and mood swings associated with the change. Good for mature skins too.",
    },
    Garlic: {
        "Allium Sativum":
            "While a very useful oil, the strength of the aroma prevents many people using this oil. As a strong antiseptic it can be used for many skin conditions. Best used in a blend with other oils and at a rate of 1% or less, or the result is a loss of friends.",
    },
    Geranium: {
        "Pelogonium Graveoleons":
            "Very useful for all skin types as it helps keep the skin supple. A good tonic for the liver and kidneys too.",
    },
    Ginger: {
        "Zingiber Officinalis":
            "A great warming, stimulating yet grounding oil. Very effective in dealing with colds and other upper respiratory conditions. Helps drying catarrh. Also very good for digestive problems. Helps reduce bruising.",
    },
    "Grape seed": {
        "Vitis Vinifera":
            "Often used in Aromatherapy as a cheap oil, but it is not easily absorbed into the dermas in many people. However it is good for retaining the Essential oils.",
    },
    Grapefruit: {
        "Citrus Paradisi":
            "A great mind balancing and up lifting oil. Reputed to help with BI-polar disorder (Manic Depression) used in many cosmetic products as it is said to help with reducing cellulite. Also useful in balancing the kidneys and helping to remove toxins. Said to nourish skin cells too.",
    },
    "Guiacac Wood": {
        "Bulnesia Sarmienti":
            "A very useful oil for helping with the menopause. As it can help with inducing vaginal secretion has added to its reputation as an aphrodisiac too. As it helps tighten the skin, it is useful for mature skin.",
    },
    Hazelnut: {
        "Corylus Avellana":
            "A carrier oil that seems best for dry to normal skin types. Best used at 25% of carrier oil total.",
    },
    "Ho Leaf": {
        "Cinnamomum Camphora":
            "As this oil has an Aroma almost identical to Rosewood, a seriously endangered spices, it is often used to replace the rosewood in perfumes. However it does not have the same therapeutic effects and as yet its uses in Aromatherapy are unknown.",
    },
    Hop: {
        "Humulus Lupulus":
            "A mild calming Oil that can help with sleeping. As it also has mild analgesic qualities it is particularly useful for any painful condition that prevents sleep. A potent oil on the skin and it should not be over used.",
    },
    Hyssop: {
        "Hyssopus Officinalis":
            "Safety first, as this is a very potent oil it should be avoided by pregnant women, and people with high blood pressure, as well as people with Epilepsy. This oil is reputed to help with grief. A very effective oil for helping scars to heal.",
    },
    Immortelle: {
        "Helichrysium Angustifolia":
            "One of the most important oils in the Aromatherapist's Pharmacopoeia. As it boosts the immune system it can raise the persons vitality. Lessens the effect of shock, and helps with fears and phobias. Helps with depression too. This oil also helps the skin regenerate, and promotes cell growth. With it's anti-fungal, anti-bacterial and anti viral properties, it is a very effective oil for various conditions. Such as Candida, cold sores, acne, etc. And when blended with Bergamot, Lavender and Yarrow is said to be an effective treatment for Psoriasis.",
    },
    Jasmine: {
        "Jasminum Grandiflorum":
            "An extremely useful oil for treating depression. It stimulates, uplifts and helps boost self-confidence. It should be avoided during pregnancy, but it can be used to speed delivery, once contractions have started. Further it can help with postnatal depression, while also help the mother bond with baby. Also reputedly promotes lactation in nursing mothers too. A great beauty oil, helping all skin types, and dry skin in particular. A blend of 1% in Macadamia nut or Jojoba makes a wonderful moisturizer for very sensitive skins. Makes a wonderful hair conditioner too. While it is possible to produce a Jasmine Essential Oil, it lacks the wonderful aroma of the Absolute. Also as the absolute, as with all absolute oils, is only used at half the dilution of an essential oil 0.5% - 2.5% the use of the absolute is better value.",
    },
    Jojoba: {
        "Simmondsia Chinensis":
            "Less an oil than a wax. In Aromatherapy it is normally used at 5% to 20% of the total volume of carrier oil. However as it also acts as a natural preservative, and holds the scent of rare oils so well, it can be used as the only carrier oil in beauty applications. At 10% of total volume, makes a wonderful hair conditioner too.",
    },
    "Juniper Berry": {
        "Juniperis Communis":
            "A great tonic for the liver, has been known to help with cirrhosis. It also helps the blood clear toxins from the blood. Very useful for oily and congested skins. If used in a good skin care blend this oil can be good for the treatment of Acne. Great for the hair too. Best avoided during pregnancy.",
    },
    Kanuka: {
        "Leptospermum Ericoides":
            "This is one of two relatively new oils now used in Aromatherapy. By looking at the traditional medicines of the Maori and Aboriginal peoples, it was discovered that this oil reputedly had good skin toning properties. Labdanum (Cistus Ladaniferus): its main use is as a fixative in perfumes. However as it also has good mood uplifting properties as well as calming and stress reducing properties, it is an effective and useful Aromatherapy oil. It has toning and soothing effect upon the skin too.",
    },
    Lavandin: {
        "Lavandula Hybrida":
            "Lavandin oils comes from a plant that is a hybrid of True Lavender (Lavendula Angustifolia) and Lavender Spike (Lavendula Latifolia). It is very similar to Lavender but without the sedative properties; as such it has the ability to refresh a tired mind. One of its main uses is as a pain killer, and can help with tired and stiff muscles. Its cicatrisant effect can help with mildly scarred and blemished skin.",
    },
    Lavender: {
        "(Spike Lavender) Lavendula Latifolia":
            "This oil is a wonderful cerebro-spinal analgesic, helping calm nerve pain too, makes this very useful oil for sports injury, and other aches and pains. Some times known as the male lavender as the scent is less flowery and more clearer and fresher. As this oil is has as emmenagogic effect it is best avoided in pregnancy.",
        "Lavendula Angustifolia":
            "This is the most used oil in Aromatherapy. It has a soothing and sedative effect, thus helping with sleep difficulties. Further it has a balancing effect upon the central nervous system so may help with bi-polar disorder. Its sedative action also helps reduce blood pressure. It's pain relief properties make it a great oil for sprains or strains, especially in a blend with Marjoram. As it promotes the growth of new cells, it is suitable for all skin conditions. It has a very good effect upon burns and sunburn. Great for healing wounds and preventing infection. A great hair and scalp tonic too. Like Ylang-Ylang, Lavender is available in different levels, 30/32 40/42 50/52. The most therapeutic being a 50/52 but for most uses a 40/42 is standard. In some years, as Essential oils are natural, there will be no 50/52 produced.",
    },
    Lemon: {
        "Citrus Limonum":
            "Felling hot and bothered? Try this cooling and refreshing oil. A good tonic for the circulatory system. As it helps liquefy the blood, it can be very helpful for people with heart problems, and can have a good effect upon varicose veins. Helps brighten dull complexions, and has a good effect upon spider veins and broken capillaries. Further it has a cleansing action upon greasy skin and hair. Strengthens brittle nails. Do not use in direct sunlight, as it is a photo-toxic oil.",
    },
    "Lemon Verbena": {
        "Lippia Citriodora":
            "This oil is famous for helping to banish depression, as it reduces stress and tension it has very beneficial effects upon the mind. Further, by helping to reduce tension it can be useful for stress related sexual problems, and could explain it's reputation as an aphrodisiac. Also this oil reduces puffiness in skin and is a good hair tonic. Some tests have shown this oil to be photo toxic, so best avoided before going out into direct sun light.",
    },
    Lemongrass: {
        "Cymbopogan Flexuosus":
            "A revitalising oil that helps with states of exhaustion, lifting the spirits too. A good tonic for the body, helping the glands. Reputed to help with colitis. In massage it helps make muscles suppler. Helps give good tone to the skin, and helps open the pores, thus can help with clearing acne. Also as it helps keep insects at bay it can be a great oil for the traveler too.",
    },
    Lime: {
        "Citrus Aurantifolia":
            "Useful uplifting oil for helping deal with apathy. As a digestive stimulant it can also help with Anorexia. Its astringent, refreshing and toning qualities helps with greasy skin. As with all the citrus oils it has a photo-toxic effect, so best avoided before going out into direct sun light.",
    },
    "Linden blossom": {
        "Tilia Europaea":
            "A relaxing oil that can help with sleeping problems. Good for reducing blood pressure. On the skin it has a softening and soothing action, and is reputed to help keep wrinkles at bay too. Further it has a reputation for helping with blemished skin. A good scalp and hair tonic that is said to help promote hair growth.",
    },
    "Macadamia Nut": {
        "Macadmia Integrifolia":
            "Potentially one of the most useful of the carrier oils. As the lightest oil, lighter than even Coconut, it is the best carrier oil for people with very sensitive skins. Further as a light oil it can be used on very oily skins, yet is suitable for all skin types.",
    },
    Mandarin: {
        "Citrus Reticulata var Blanco":
            "A much milder oil than many of the other citrus oils. Yet still has the same refreshing quality of this class of oils. When used in a blend with Neroli and Lavender can be used to lessen the effects of stretch marks.",
    },
    Manuka: {
        "Leptopermum Scoparium":
            'Another of the relatively new oils now used in Aromatherapy that have come from traditional medicines of the Maori and Aboriginal peoples. The hype from the main distillers say; "This oil could be more important and effective than Lavender" Away from the hype, it does have good skin regenerating qualities. The New Zealand Fire service are using this oil to treat burns victims, and with its pain killing qualities it is seen as possibly very effective. This oil reputedly had good skin toning properties too.',
    },
    "Marjoram Sweet": {
        "Origanum Marjorama":
            "A wonderful calming oil, helping reduce stress, works well with those whom over work. Helps reduce blood pressure, and aids painful and sore muscles. Helps disperse bruises. As a mild emmenagogue it should be avoided in pregnancy. Also it will diminish sexual desire.",
    },
    "Marjoram Wood": {
        "Thymus Mastichina":
            "See Marjoram Sweet. Also known as Wild Marjoram. The properties of this oil are very similar to Sweet Marjoram but milder.",
    },
    "May Chang": {
        "Litsea Cubeba":
            "This oil has come to Aromatherapy via Traditional Chinese Medicine, where it is used as a Bronchodilator, making it useful for Asthma and other respiratory problems. In TCM it is also used as a heart tonic. A very uplifting oil, and very useful for oily skin and hair.",
    },
    Melissa: {
        "Melissa Officinalis":
            "A wonderful oil that is very useful for shock and bereavement. Useful for states of hysteria too. Further it has a calming effect upon the circulatory system. Melissa is also very useful for menstrual and reproductive problems, and can help some women having difficulty conceiving. Useful with soothing allergic reactions. As it can help stem bleeding it can be useful in a natural After-shave. Further it is useful for greasy skin and hair. It is reputed to counteract baldness.",
    },
    Mimosa: {
        "Acacia Dealbata":
            "A very useful skin conditioning oil, with its soothing and muscle relaxing qualities. Also known as an anti-inflammatory and anti depressant too.",
    },
    Myrrh: {
        "Commiphora Myrrha":
            "A very useful oil for stimulating the immune system. Works well on many gynaecological problems. This oil has a drying effect upon the skin and works well for treating boils and acne. A useful oil for athletes foot too.",
    },
    Myrtle: {
        "Myrtus Communis":
            "Also known as Bog Myrtle. This oil can be useful is quelling feelings of anger. Also can help with night sweats associated with menopause. A good skin cleanser helping clear congested skins. Useful for acne and blemished skin.",
    },
    Neroli: {
        "Citrus Aurantium var Amara":
            "An extremely calming oil that can instill a sense of peace. Useful treating chronic depression, anxiety, hysteria and shock. Useful for insomnia. Also effective in treating neuralgia (nerve pain). Its stress reducing qualities make it useful for treating sexual problems, and could be the source of its reputation as an aphrodisiac. Also aids with emotional problems relating to Pre menstrual syndrome, and irritability and tearfulness in menopause. All in all a very good health tonic. This oil is good for skin, improving elasticity and helping cells to regenerate. Generally an excellent skin conditioner.",
    },
    Niaouli: {
        "Melaleuca Viridflora":
            "Related to Tea Tree (Melaleuca\\Alternifolia) but it has a more pronounced effect upon the immune system. Works well in suppressing any viral infection. A good skin cleanser, firming tissues and aiding healing.",
    },
    Nutmeg: {
        "Myristica Fragrans":
            "Has an overall good effect upon the digestive system, and can aid the body to break down fats. Can be useful in Pre menstrual syndrome, and menopause, as it imitates oestrogen. Also can aid childbirth as it excites the motor nerves strengthening contractions. But best avoided during pregnancy. Also a good hair tonic.",
    },
    Olive: {
        "Olea Europae":
            "This is the same oil as used in cooking but without the preservatives that are frequently added. Thus a cosmetic grade is better for use on the skin. Normally used as just 10% of total volume of carrier. Very good for the skin and hair. In Aromatherapy often used for rheumatic conditions.",
    },
    Orange: {
        "Citrus Aurantium var Dulcis":
            "Adds a little zest to gloomy moods, dispelling stress. Said to help the body absorb vitamin C, and is a great oil to use to clear the air following illness. Promotes the formation of collagen, thus helps to smooth out wrinkles. Also helps dispel toxins from the skin. Suitable for all skin types but most effective on dry skin.",
    },
    "Orange Bitter": {
        "Citrus Aurantium var Amara":
            "See Orange. The bitter orange seems to be more effective for dermatitis.",
    },
    "Oregano Common": {
        "Origanum Vulgare":
            "This oil has beneficial effects upon psychosomatic disorders. Over all a good tonic for the digestive system, especially the liver and spleen. The effect upon the liver could explain its reputation as helping reduce cellulite.",
    },
    Osmanthus: {
        "Osmanthus Fragrans":
            "While its main use is as a perfume ingredient, it does help reduce stress and have some anti depressant qualities too.",
    },
    Palmarosa: {
        "Cymbopogon Martini":
            "A very useful oil for reducing high temperatures in fevers. Has good anti bacterial and anti viral properties too. It is reputed to eradicate wrinkles, as it helps the skin cells balance their water content as well as the natural oil sebum, it could be reducing them. Very useful for dry skins, but a good general skin tonic.",
    },
    "Parsley Seed": {
        "Petroselinum Sativum":
            "A very potent oil that should be used with care. However it has a good cooling and clearing action on the mind. Used mainly as a diuretic to counter water retention during menstruation. It also has been used in fighting cellulite. Also useful when used in labor as it strengthens uterine contractions. But for the same reasons it should not be used during pregnancy, or painful menstruation. It is a good tonic for the digestive system, especially the liver and kidneys as it improves circulation and helps cleanse the blood. However it should not be used in people with kidney problems, as it could over stimulate a weak organ. A good skin and scalp tonic. Use infrequently.",
    },
    Patchouli: {
        "Pogostemon Patchouli":
            "A strong earthy oil that will forever be associated with hippies and the 60s. It has a balancing action upon the mind, useful for overcoming lethargy and increasing objectivity. As it has a mild appetite suppressant quality it is frequently used to aid dieting. It's astringent qualities may help tighten loose skin after dieting too. Useful in the menopause for helping with hot flushes, and is frequently used as a natural deodorant. Also very useful for cracked and weeping skin conditions.",
    },
    "Peach Kernel": {
        "Prunus persica":
            "A very useful carrier oil, suitable for all skin types, but especially dry skins. Can be used as moisturizing base too.",
    },
    Peppermint: {
        "Mentha Arvensis":
            "Should more correctly be called Cornmint, Very good for helping clear the respiratory system. Is reputed to help speed up the metabolism and has been used to help with weight loss. A refreshing oil that can sharpen the senses in the morning. Can irritate sensitive skins, and over use can over stimulate the nervous system.",
        "Mentha Piperita":
            "A cooling and soothing oil. Very effective for all respiratory conditions, and has a relaxing effect upon digestive problems. The cooling effect upon joint inflammation can make it useful for arthritis, and it works on muscle pain too. A useful skin cleanser that helps remove blackheads, and its cooling action can relieve itching and help with sunburn. Effective upon greasy skin and hair.",
    },
    Petitgrain: {
        "Citrus Aurantium":
            "A nice calming oil that can be used to aid Convalescence. A good cleansing oil that can help clearing up blemishes like pimples or even acne.",
    },
    "Pimento Berry": {
        "Pimento Officinalis":
            "A potent yet useful oil, which helps stimulate local circulation. This can aid rheumatic and arthritic conditions. Also can help with muscle cramp and pain. It can be a good overall tonic for the body. Over use on the skin can cause a rash.",
    },
    "Pimento Leaf": {
        "Pimento Officinalis":
            "A milder effect than Pimento Berry, and more suitable for people with sensitive skin.",
    },
    "Pine Needle": {
        "Pinus Sylvestris":
            "A very powerful antiseptic. Helps with Bronchitis and other respiratory conditions. A useful Kidney cleanser, and it can help with cystitis. Further it has an anti-inflammatory effect upon the gall bladder. Also has a beneficial effect upon prostrate problems in men. And is reputed to help overcome male impotency. In women it can help with uterine inflammation too.",
    },
    Ravensara: {
        "Ravensara Aromatica":
            "A very useful oil for cleaning and clearing the breathing passages. Also works well upon the sinuses too. A useful toning oil that can help tighten underused muscles, further it can help keep the breasts firm. Useful for treating menstrual cramps too.",
    },
    "Rose Hip": {
        "Rosa Mosqueta":
            "The skin rejuvenating properties of rose are utilized in this carrier oil. Normally used at 5% to 10% of total carrier oil volume, it can add a feel of luxury to a conditioning blend.",
    },
    "Rose Otto": {
        "Rosa damascena":
            "This is a truly feminine oil. It's effect upon the mind is reputed to be more pronounced in women, and is said to make her feel more positive about herself. Said to increase the production of dopamine. Further this oil is a useful tonic for reproductive problems, from aiding pre menstrual syndrome to aiding vaginal secretions during intercourse. Yet it also is reputed to increase semen production in men. Useful for all skin types, yet particularly effective on Mature, Dry, or Sensitive skin. Further it can soften hard skin, and is a wonderful oil for hardworking hands. A valuable treatment for broken and thread veins.",
    },
    Rosemary: {
        "Rosmarinus Officinalis":
            "A wonderful energizing oil, with its pain killing qualities without the sedative action makes it a useful oil for muscular aches and pains. A good oil for treating headaches and Migraine. A useful toning oil. Said to help with anemia, and is reputed to help with cellulite too. Useful for sagging and puffy skin. However as it raises blood pressure it should be avoided by people with hypertension as well as people with Epilepsy.",
    },
    Rosewood: {
        "Aniba Rosaeaodora":
            "Also known as Bois de Rose. Illegal logging and rain forest depletion has seriously endangered this source spices. It is however still useful for chronic conditions. Yet it is it's reputation as an aphrodisiac that seems to keep it on the general market.",
    },
    Sage: {
        "Salvia lavandulaefolia":
            "A calming oil when used sparingly. Beneficial for menstrual and reproductive problems. As it imitates Oestrogen, it can help with regulating the menstrual cycle. Has a good reputation for aiding conception. Further in menopause it can help with excessive sweating and hot flushes. Useful tonic for the liver and kidneys, promotes urine flow, and this diuretic effect can help with weight loss. Very effective in helping close large pores. Gives dull hair back its shine.",
        "Salvia Officinalis":
            "See Sage (Salvia lavandulaefolia). This variant has a toxic effect, even at low doses, so is best avoided for home use. Sage (Salvia lavandulaefolia) does not have this toxic effect but is still a potent oil.",
    },
    "Sandalwood Mysore": {
        "Santalum Album":
            "While Sandalwood does grow in other areas of the world, it only the Sandalwood from the Mysore region that has the full therapeutic effect. It has a strong calming effect but should not be used for depression as it can deepen the depression. However it is very useful for helping the terminally ill as it can bring feelings of acceptance. A useful oil for it's genito-urinary action and can be used to treat Cystitis. A useful skin oil especially for dry skin, and skin conditions. Further it can help with acne.",
    },
    Savoury: {
        "Satureja Hortensis":
            "A very powerful antiseptic, very useful for helping formation of scar tissue. Also aids insect stings and bites. A soothing oil that can help with burns too. Reputed to be an aphrodisiac.",
        "Satureja Montana":
            "See Savoury (Satureja Hortensis). This is the winter Savoury; (Satureja Hortensis) is the Summer Savoury.",
    },
    Spearmint: {
        "Mentha Spicata":
            "A useful oil for treating nausea and may help with travel sickness too. Can soothe itchy skin. Wonderfully refreshing skin cleanser, but as a potent oil it should be used with care and only on localized areas, never to be used on whole body massage.",
    },
    Spikenard: {
        "Nardostachys Jatamansi":
            "A wonderful relaxing oil that can help induce restful sleep. Also its anti-inflammatory action can help with inflamed skin conditions.",
    },
    "St John's Wort": {
        "Hypericum Perfotatum":
            "Recent research in Germany has shown this oil to be very useful for helping treat mild to moderate depression. However this oil does have a photo-toxic action, so best used at 50% of total carrier oil volume.",
    },
    "Sweet Almond": {
        "Prunus Amygdalus":
            "The most widely used carrier oil in Aromatherapy. Suitable for all skin types, and can be used on it's own as a moisturizer.",
    },
    Tagetes: {
        "Tagetes Minuta":
            "A useful oil for helping regain a grip on the emotions. It's anti microbial action makes it a useful oil for mosquito bites, also useful for keeping them at bay. Very useful for fungal infections like athletes foot. A very potent oil, do not over use.",
    },
    Tangerine: {
        "Citrus Reticulata":
            "As the Tangerine is an earlier harvested Mandarin, See also Mandarin. Helps give color to pale complexions. When blended with Lavender and Neroli it can smooth out stretch marks. A useful skin cleanser.",
    },
    Tarragon: {
        "Artemisia Dracunculus":
            "A wonderful oil for helping with apathy and boredom, thus helping with anorexia. A good kidney tonic that also helps eliminate uric acid. Useful in treating weeping skin conditions.",
    },
    "Tea Tree": {
        "Melaleuca Alternifolia":
            "The anti-viral, anti-septic, and anti-fungal properties of this oil make it one of the most useful and popular oils in Aromatherapy. It has been shown to boost the immune system, and is very useful in helping fight disease. Very useful for all skin conditions, and all skin types.",
    },
    Thuja: {
        "Thuja Occidentalis":
            "Used by Professional therapists to treat psoriasis and other skin conditions. But as this oil is toxic it should not be used at home.",
    },
    "Thyme Red": {
        "Thymus Vulgaris":
            "See Thyme White. There is a myth that White Thyme comes from the white flowering plant and the red from the red flowering plant. In fact it is oxidization of the oil. This oxidisation has an effect upon the potency of the oil, and makes it kinder if used for treating conditions like cystitis.",
    },
    "Thyme White": {
        "Thymus Vulgaris":
            "An extremely potent oil and one of the best natural antiseptics known. It is known to become toxic from over use. Very useful for most respiratory conditions, and is known to stimulate white blood cells. Further it can reduce the swelling in Arthritic joints. Useful when dealing with loss of period, but as a potent emmenagogue it should not be used while pregnant. Very useful for clearing dandruff too. Should not be used by people with high blood pressure.",
    },
    "Thyme White - Rectified": {
        "Thymus Vulgaris":
            "See Thyme White. Due to the toxic side effects, this rectified version of Thyme is preferable for home use.",
    },
    "Thyme Wild": {
        "Serpolet Thymus Serpyllum":
            "See Thyme White. This oil is useful for helping with menstruation following a miscarriage.",
    },
    Turmeric: {
        "Curcuma Longa":
            "This warming oil can help lift the emotions. Helpful in dealing with rheumatic pain.",
    },
    "Valerian Root": {
        "Valeriana Wallachi":
            "It's main use is as nerve stimulant and pain killer. Normally used at less than 1% in a blend.",
    },
    Vanilla: {
        "Vanilla Planifolia":
            "A wonderful oil for softening and smoothing the skin. Also widely used as an aphrodisiac.",
    },
    Vetivert: {
        "Vetiveria Zizanoides":
            "A panacea for stress. A great oil to use just before a job interview or taking an exam. Also useful for deep-rooted psychological problems. It is reputed to help improve the oxygen carrying capacity of the blood, and could help with muscular aches and pains. Also helps with clearing acne. Violet Leaf (Viola Oderata): An excellent oil for the kidneys and bladder, making it useful for treating cystitis. Also eases lower back pain associated with kidney problems. Reputed to help with jaundice and the effects over drinking can have on the liver. Further it can help with low libido. Can alleviate irritability and hot flushes in the menopause. Also a great oil for healing cracked nipples, but the blend would need to be washed off with Witch Hazel if the cracked nipples are the result of nursing baby.",
    },
    "Vitamin E": {
        "Dl-Alpha tocopherol":
            "As a natural preservative, it is very useful in binding and preserving blends. Moreover, it does appear to help nourish the skin too.",
    },
    "Wheatgerm Refined": {
        "Triticum Sativum":
            "Normally used at 10% of total carrier oil. As it has great skin conditioning properties it can be used as a skin-conditioning base. Useful for prematurely ageing skin, as well as conditions like eczema, and psoriasis.",
    },
    Wintergreen: {
        "Gaultheria Procubens":
            "A useful skin cleanser that needs to be used at no more than 2% dilution. Very harmful and possibly fatal if taken internally. Avoid if pregnant.",
    },
    "Witch Hazel": {
        "Hamamelis Virginiana":
            "A simple and wonderful cleanser. Especially useful for cleaning the skin of the face before and after massage on the face.",
    },
    Yarrow: {
        "Achillea Millefolium":
            "After Clary Sage, this oil is the most important oil for treating Menstrual and reproductive problems in women. For many conditions it could be first choice but as a very potent oil, it can induce headaches and irritate the skin. However it is a great tonic for the body, and stimulates the bone marrow improving the production of red blood cells. Said to help with varicose veins. Very useful for back pain. It helps clear oily skin, and is a slow but sure healing oil on inflamed wounds, chapped hands, ulcers and cuts. Also a very good scalp and hair conditioner, that seems to stimulate hair growth.",
    },
    "Ylang Ylang Extra": {
        "Cananga Odorata":
            "Sometimes also described as Superior. A very useful oil for reducing stress as it helps regulate adrenaline flow. Very useful for reducing blood pressure. The feeling of joy and togetherness this oil can inspire has given it a reputation as an aphrodisiac, and it can be used to treat sexual problems. Further it can help a mother bond with her child especially after a caesarean birth. A very useful oil for the skin helping balance the natural oils in the skin. Further it is reputed to help keep breasts firm. Also a great scalp tonic, reputed to help produce a luxurious head of hair.",
    },
    "Ylang Ylang I": {
        "Cananga Odorata":
            "Ylang Ylang has five levels of scent, and each has similar therapeutic values. However the contra indications of these oils, predominately headaches and nausea from over use, are less pronounced in the higher levels. See Ylang Ylang Extra.",
    },
    "Ylang Ylang Complete": {
        "Cananga Odorata":
            "Some say that the combination of the four distillations of the levels, is best for Aromatherapy.",
    },
};

export { names, folk, teas, oilsMagickal, oilsPractical };
