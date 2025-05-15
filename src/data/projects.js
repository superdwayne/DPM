// Project categories
export const projectCategories = [
  "All",
  "MCP",
  "AR",
  "AI",
  "Branding",
  "Fashion",
  "Unity",
  "Concept",
  "Three.js",
  "Comfy ui",
  "Machine learning",
  "Projection Mapping",
  "ios"

];



// Project data with categories
export const projects = [

  {
    id: 'touchdesignermcp',
    title: 'TouchDesigner MCP ',
    image: 'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Claude/claude-logo.png',
    categoryId: ['Ai', 'MCP'],
    description: 'Leveraging the power of MCP servers we created a touchdesigner extension that allows for AI agents to control Touchdesigner. ',
    brandLogo: 'https://patchstorage.com/wp-content/uploads/2021/02/TouchDesigner_logo.png',
    heroImage: '/images/lego/playverse.jpeg',
    heroBg: '#707e51',
    heroVideo: '/videos/TD.mp4',
    heroPoster: 'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Claude/claude-logo.png',
    narrative: `Imagine Sarah, an interactive artist preparing for a major museum installation. She opens TouchDesigner, but this time she's not alone. Her AI collaborator, "Synth," awakens—not as a rigid tool, but as a creative partner who understands both her vision and TouchDesigner's intricate node-based ecosystem.
"I want to create an installation that responds to heartbeats and translates them into dynamic particle systems," Sarah describes in natural language.
Synth immediately begins working across multiple layers:`,
    concept: `How might we enable access for AI agents to aid in the creation of immersive experiences via touch designer`,
    quote: '"Where imagination builds worlds without boundaries."',
    tech: `The technical architecture integrates TouchDesigner with AI agents through a sophisticated Python-based MCP server running as a TouchDesigner extension. This server exposes TouchDesigner's functionality as MCP tools, allowing AI agents to programmatically create operators, modify parameters, establish connections, and execute Python scripts within the TD environment. The implementation uses WebSocket for real-time bidirectional communication, enabling AI agents to not only send commands but also receive live feedback about network state changes, performance metrics, and user interactions. On the AI side, agents connect to this MCP server using standard MCP client libraries, gaining access to TouchDesigner's complete object model through a structured API.`,
    imageSections: [
     
      {
        layout: '2x2',
       
        position: 'intro',  // Display after the narrative section
        images: [
          'https://media.licdn.com/dms/image/v2/D4E22AQGlgdTwiP2_Tg/feedshare-shrink_2048_1536/B4EZaa54o3GYAs-/0/1746355588277?e=1749686400&v=beta&t=6OeDr-w_UBLKespL6IU-XWjkAo1xFOJyFLO_BYap0cA',

          
        ]
      },
      
    ],
  
  },

  {
    id: 'lego',
    title: 'Lego:Playverse ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png',
    categoryId: ['Concept', 'Branding'],
    description: 'Welcome kids into the multidimensional universe of play with LEGO®.',
    brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png',
    heroImage: '/images/lego/playverse.jpeg',
    heroBg: '#FFC54F',
  
    projectImages: [
      { url: '/images/lego/minecraft.png', layout: 'fullBleed' },
      { url: '/images/lego/brick.png', layout: '2x2' },
      { url: '/images/lego/musicwall.png', layout: '2x2' }
    ],
    contentSections: [
      {
        type: 'text',
        title: 'The Ask',
        content: `Develop a scalable concept for an experiential live event that offers multiple play areas and allows visitors as well as those unable to attend to participate`
      },
      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/splash.png',
        alt: 'LEGO Playverse Platform Overview',
      },
      {
        type: 'text',
        title: 'The Challenge',
        content: `LEGO® has the platform and ecosystem to truly unleash the true power of play. How can we let our audience experience it?`
      },
      {
        type: 'quote',
        content: '"Play is a universal language. A uniter of all. A powerful force for connection, fun & learning no matter who we are, our age or where we come from."',
        author: 'LEGO Playverse'
      },

      {
        type: 'text',
        title: 'The Concept',
        content: ``
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/playverse.jpeg',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'text',
        title: 'The Campaign',
        content: `PLAYVERSE spills into real life. Across the city, elements start crossing into our universe. `
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/city.jpg',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'text',
        title: 'PLAYVERSE on Social',
        content: `Post across social will leak footage of LEGO® spotting across the city in the days leading up to the event. Each post will serve as a countdown to tease the opening of the event.`
      },

      
      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/lego/instagram-no-sword-story.jpg',
            alt: 'LEGO Creation Scanning Process',
          },
          {
            src: '/images/lego/instagram-no-sword-story1.jpg',
            alt: 'Digital LEGO World',
          }
        ]
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/entrance.jpg',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/map.jpeg',
        alt: 'LEGO Playverse Platform Overview',
      },
      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/lego/city1.gif',
            alt: 'LEGO Creation Scanning Process',
          },
          {
            src: '/images/lego/city2.gif',
            alt: 'Digital LEGO World',
          }
        ]
      },

      {
        type: 'text',
        title: 'The Experience',
        content: `As a visitor explores the PLAYVERSE experience they're are able to visit one of the four station, each station is a different experience represents a different pillir of lego.`
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/musicwall.png',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/lava.png',
        alt: 'LEGO Playverse Platform Overview',
      },
      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/minecraft.png',
        alt: 'LEGO Playverse Platform Overview',
      },
      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/lego/rally.png',
        alt: 'LEGO Playverse Platform Overview',
      },

    ]
  },

  {
    id: 'farfetch-metaverse',
    title: 'Redefining Luxury for the Metaverse',
    image: '/images/farfetchmeta/beauty4.jpeg',
    categoryId: ['Branding', 'Blender', 'Luxury Fashion'],
    description: 'The primary aim of this project is to understand the influence of social media-driven phenomena, specifically Mini-me fashion and Kidfluencer culture, on the luxury kidswear market. Utilizing the data analytics capabilities of FARFETCH, a leading global platform for luxury fashion, the project seeks to dissect consumer and industry involvement in these trends. ',
    heroImage: '/kids.jpeg',
    heroVideo: '/videos/metaverse-video.mp4',
    heroBg: '#9370db', // Purple background

    contentSections: [
      
      {
        type: 'text',
        title: 'The Concept',
        content: `Farfetch into the Metaverse was a project decicated to exploring how Luxury fashion would play a massive role in the metaverse.
        We explored creating a Farfetch metaverse alogside creating a uniqie avatar for the brand. `
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/farfetchmeta/metavers2.gif',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/farfetchmeta/webaverse1.png',
        alt: 'LEGO Playverse Platform Overview',
      },

      {
        type: 'text',
        title: 'UCO Digital avatar',
        content: `UCO was created to embody mutiple personalities, each one represening different personalties traits of a 1001 PFP.
        `
      },

      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/farfetchmeta/beauty1.jpeg',
            alt: 'Mini-me Fashion Trend'
          },
          {
            src: '/images/farfetchmeta/beauty2.jpeg',
            alt: 'New Generation Parents'
          }
          ,
          {
            src: '/images/farfetchmeta/beauty3.jpeg',
            alt: 'New Generation Parents'
          },
          {
            src: '/images/farfetchmeta/beauty4.jpeg',
            alt: 'New Generation Parents'
          }
        ]
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/farfetchmeta/9-ftont.jpeg',
        alt: 'LEGO Playverse Platform Overview',
      },

      
    ]
  },

  {
    id: 'arproduct-recommendations',
    title: 'AR Product Recommendations',
    image: 'https://www.theglobeandmail.com/resizer/v2/H77YIRIBIVFR5F3KTJA3U2JIPE?auth=fe3e8156a0544570b0a3b45701fb8649cd2cf3295c970c5bc9ae835484823fee&width=1200&quality=80',
    categoryId: ['AR','ios'],
    description: 'The recommendation engine will continuously improve through machine learning, making each customer interaction more relevant. The AR component uses 8th Wall to ensure broader accessibility rather than limiting to ARKit/ARCore, demonstrating thoughtful technological decision-making that aligns with business objectives.',
    heroImage: 'https://media.licdn.com/dms/image/v2/D4E22AQFl8wgcbnGxHw/feedshare-shrink_2048_1536/B4EZPGy.EIHAAo-/0/1734207071550?e=1747872000&v=beta&t=VSzsBEeilwvRNL4DqAM7fbfKfmAIKL__UF4fv6x6dd4',
    heroVideo: '/videos/1736797041734.mp4',
    heroPoster: '/images/arproduct/overview.png',
    heroBg: '#cccccc', // Gray background
   brandLogo: '/images/arproduct/testflightQR.png',
   logoSize: 'xlarge',
    qrCodeImage: '/images/arproduct/testflightQR.png',
    qrCodeLabel: 'Join TestFlight Beta',
    
    contentSections: [
      {
        type: 'text',
        title: 'The challenge',
        content: `In the era of digital commerce, consumers face overwhelming product choices while brands struggle to deliver personalized experiences that drive conversion. How can we create a shopping experience that feels tailored and immersive without requiring customers to visit physical stores?`
      },
      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/arproduct/overview.png',
            alt: 'AR Context Visualization'
          },
          {
            src: '/images/arproduct/Intro-page-v2.png',
            alt: 'Virtual Try-On Experience'
          }
        ]
      },
      {
        type: 'text',
        title: 'The Solution',
        content: `An innovative mobile application that bridges the gap between physical and digital shopping experiences through personalized product recommendations enhanced with immersive AR visualization. By combining data-driven personalization with 3D product visualization, customers can see exactly how products will look in their own environment before purchasing.`
      },
      
      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/arproduct/Intro-page.png',
            alt: 'AR Context Visualization'
          },
          {
            src: '/images/arproduct/VTO.png',
            alt: 'Virtual Try-On Experience'
          }
        ]
      },
      
      {
        type: 'text',
        title: 'Technical Architecture',
        content: `The solution combines native iOS development with web-based AR technology, ensuring optimal performance and broad device compatibility. The recommendation engine uses machine learning algorithms that continuously improve through user interactions, while the AR component employs sophisticated rendering techniques for photorealistic visualization.`
      },

      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: '/images/arproduct/webar.png',
            alt: 'AR Context Visualization'
          },
          
        ]
      },
    
    ]
  },

  

  {
    id: 'genai-streetart',
    title: 'Gen AI X Street Art',
    image: 'https://traveladdicts.net/wp-content/uploads/2023/08/Mural-STRAAT-Amsterdam-7.jpg',
    categoryId: ['Gen AI'],
    description: 'This project represents a profound technological innovation in how AI can be embedded in public contexts, moving beyond screen-based interactions to become part of the urban fabric. By developing systems that can interpret and extend the visual languages of street art while responding to community engagement, we\'re establishing new paradigms for AI as a co-creative force in public art. The technical architecture preserves the spontaneity and cultural authenticity central to street art while introducing computational elements that allow for dynamic evolution beyond what either medium could achieve independently.',
    heroVideo: '/videos/1725725287463.mp4',
    brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleLTW4salS-0x5bP__dPzrJvjOFuOZMPPQw&s',
    heroImage: 'https://tickets.straatmuseum.com/custom/straatmuseum/images/logo_black.svg',
    heroBg: '#829bc4', // Green background
    logoSize: 'xlarge',
    logoPosition: 'center',
    logoAspectRatio: 'wide',
    projectImages: [
      'https://gepaktengezakt.be/wp-content/uploads/2025/01/STRAAT-museum-Amsterdam-Featured-image.jpg',
      'https://traveladdicts.net/wp-content/uploads/2023/08/Mural-STRAAT-Amsterdam-7.jpg',

    ],
    concept: `An interactive urban art installation that merges generative AI with traditional street art techniques, allowing artists and the public to collaborate with AI systems to create evolving murals that reflect the cultural pulse of neighborhoods while reimagining public spaces as living, responsive canvases.`,
    narrative: `In a world where digital and physical art forms often exist in separate realms, this project speaks to communities seeking cultural expression that bridges technological innovation with authentic street-level creativity. The narrative centers on democratizing both AI and public art by bringing them together in accessible urban contexts. As passersby interact with these installations, they become part of a collective creative conversation that transcends individual expression, creating art that evolves with the neighborhood's changing identity and concerns. This creates an emotional connection with diverse audiences—from traditional street artists skeptical of technology to tech enthusiasts disconnected from grassroots art movements—by demonstrating how AI can amplify rather than replace human creativity, while making both cutting-edge technology and artistic expression accessible to communities regardless of socioeconomic status. The resulting works tell stories of cultural convergence, preserving the raw authenticity of street art while embracing the emergent possibilities of generative systems.`,
    quote: '"The walls of our cities have always been the original social networks – carrying messages, reflecting identities, and challenging power. By weaving AI into this ancient conversation, we\'re not replacing the human hand but extending its reach, creating a new kind of urban nervous system where technology, art, and community pulse together in harmonious rebellion against both sterile tech and static spaces. — Inspired by Banksy and Ian Goodfellow"',
    tech: `The technological foundation of GEN AI X STREET ART combines computer vision, large language models, and generative adversarial networks into a unified system that responds to both environmental inputs and human-directed creativity. Custom-developed projection mapping systems overlay AI-generated content onto physical surfaces, while specialized thermal cameras and motion sensors capture public interactions without compromising privacy. The innovation lies in our development of "style preservation algorithms" that ensure the AI's contributions maintain the distinctive aesthetic qualities of participating street artists while extending them in new directions. The system includes a distributed edge computing network embedded in weatherproof housings, allowing installations to function without constant cloud connectivity. Additionally, we've developed a proprietary "memory layer" that enables each installation to evolve based on neighborhood interactions while maintaining visual coherence, creating an artwork with both temporal depth and community relevance. This technological approach doesn't merely digitize street art—it creates a new hybrid medium that respects the heritage of urban expression while expanding its possibilities through computational creativity.`,
  },

  {
    id: 'nsdm',
    title: 'NDSM Street Art',
    image: 'https://crob.nl/uploads/cases/ndsm/ndsm-logo.png',
    categoryId: ['AR', 'Street Art', 'Gaussian Splatting'],
    description: 'A digital time capsule preserving the rich history and ephemeral nature of NDSM\'s iconic street art through immersive AR technology.',
    heroVideo: '/videos/ndsm-hero.mp4',
    heroImage: '/WISINWYG.png',
    heroPoster: 'https://images.squarespace-cdn.com/content/v1/638a3f325db0750edd3f91a0/acfb0604-fb93-4ccd-9cc5-ca11b4f6a15d/Stefanie+Pietschmann+-+www.pietschy.de+-+documentary+photography+-+graffiti+-+Amsterdam+-+netherlands+-+NDSM.jpg',
    heroBg: '#A4305B', // Pink/red background
 
    
    contentSections: [
      {
        type: 'text',
        title: 'The Concept',
        content: `The Street Art in NDSM changes daily, where artists paint over the previous street art and graffiti their new art on top. Imagine the layers upon layers of untapped art to be explored - a digital archaeology of creative expression waiting to be uncovered.`
      },
      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/ndsm/ndsm0.jpeg',
        alt: 'NDSM STRAAT Museum Logo',
      },
      {
        type: 'text',
        title: 'The Challenge',
        content: `NDSM has been Amsterdam's creative playground for decades, where international street artists and local talents have transformed industrial ruins into an ever-changing outdoor gallery. But street art is ephemeral by nature - masterpieces are painted over, weathered away, or demolished with old structures. How can we preserve this rich artistic heritage while honoring its inherently transient nature?`
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: '/images/ndsm/ndsm1.jpeg',
        alt: 'NDSM STRAAT Museum Logo',
      },
      {
        type: 'quote',
        content: '"Each layer of paint tells a story, capturing the essence of the moment it was created. Our challenge was to preserve and share these fleeting masterpieces, offering a glimpse into the artistic evolution of NDSM."',
        author: 'NDSM Project Team'
      },
      {
        type: 'text',
        title: 'The Solution',
        content: `A digital time capsule that preserves not just images but the entire spatial experience of these lost works. Using advanced AR technology, we enable visitors to peel back layers of artistic history, experiencing works that otherwise would have been lost forever.`
      },
      {
        type: 'video',
        title: '',
        src: '/videos/NDSM.mp4',
        poster: 'https://vagabundler.com/wp-content/uploads/2023/04/226146498_873547563261907_7859376650006379527_n.jpg',
        layout: 'centered',
        showControls: true,
        autoPlay: true,
        preventModal: true
      },
     
      {
        type: 'text',
        title: 'The Technology',
        content: `By combining 3D Gaussian splatting and Snapchat AR capabilities, this project brings the rich history of NDSM street art to life. Users can explore and interact with virtual representations of artwork, experiencing the evolution and layers of creativity in a groundbreaking digital format.`
      },
      {
        type: 'text',
        title: 'Technical Implementation',
        content: `The technical foundation begins with photogrammetry techniques to capture the current state of each artwork location. From there, 3D Gaussian splatting technology creates ultra-realistic point clouds that render the surfaces with unprecedented detail. Unlike traditional 3D models, this approach preserves the authentic texture and grain of concrete walls, metal surfaces, and weathered paint.`
      },
      {
        type: 'video',
        title: '',
        src: '/videos/ndsm3.mp4',
        poster: 'https://www.simbl.nl/portfolio-news/news-2021-09-speedlight/simbl-york-kapesex-01.jpg',
        layout: 'small',
        showControls: true,
        autoPlay: true,
        preventModal: true
      },
    ]
  },

  {
    id: 'guido',
    title: 'Do you see me?',
    image: 'https://straatmuseum.com/storage/artists/Guido%20de%20Boer%20Straat%20Museum%20Amsterdam.jpg',
    categoryId: ['AR', 'Street Art'],
    description: 'A collaborative exploration of interactive digital art through spatial computing, combining physical and digital environments into a seamless experience.',
    heroVideo: '/videos/Untitled.mp4',
    heroImage: '/WISINWYG.png',
    heroPoster: 'https://straatmuseum.com/storage/artists/Guido%20de%20Boer%20Straat%20Museum%20Amsterdam.jpg',
    heroBg: '#ffffff', // Changed background color
 
     
    contentSections: [
      {
        type: 'text',
        title: 'The Concept',
        content: `The Guido Project explores the intersection of physical and digital art, creating a bridge between traditional artistic expression and cutting-edge technology. This collaborative initiative transforms how we interact with creative works in shared spaces.`
      },
      {
        type: 'image',
        layout: 'fullBleed',
        src: 'https://signsofthetimes.com/wp-content/uploads/2022/10/Straat1.jpg',
        alt: 'Straat museum',
      },
    
      {
        type: 'text',
        title: 'The Technology',
        content: `Using Blippar, we created an interactive experience that combined AR with human interaction. Rather than being passive, this AR experience guided users to answer questions about the artwork`
      },
      
    ]
  },

  {
    id: 'whats-app-ai-agent',
    title: 'Whatsapp AI agent',
    image: 'https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png',
    categoryId: ['Ai'],
    description: 'Breaking Language Barriers, One Message at a Time.',
    heroVideo: '/videos/whatsappagent.mp4',
    brandLogo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png',
    heroImage: 'https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png',
    heroBg: '#187d3d', // Green background
    logoSize: 'large',
    logoPosition: 'center',
    logoAspectRatio: 'wide',
   
    concept: `A real-time WhatsApp message translation agent powered by n8n and Google Gemini that enables non-native speakers to participate naturally in group conversations by automatically translating incoming messages. This solution bridges language barriers in community group chats by seamlessly integrating messaging platforms with AI language capabilities.`,
    narrative: `For anyone living in a foreign country or learning a new language, community group chats can be both essential and intimidating. Missing cultural context or struggling with language barriers can leave you feeling isolated even when you're technically "included."
Consider David, who recently moved to Amsterdam for work. His neighborhood has an active WhatsApp group that shares important local updates, community events, and neighborly assistance. While David is taking Dutch classes, he can't yet follow rapid, colloquial conversations, causing him to miss community events and opportunities to connect.
With our n8n-Gemini translation agent, David no longer needs to copy and paste each message into translation tools or guess at meanings. Each incoming Dutch message is automatically translated to English, allowing him to understand discussions in real-time and respond appropriately. This isn't just about convenience—it's about enabling true community inclusion and cultural integration during the challenging language acquisition period.`,
    quote: '"Missing cultural context or struggling with language barriers can leave you feeling isolated even when you are technically included."',
    tech: `The WhatsApp translator solution leverages a powerful tech stack built around the n8n workflow automation platform, which serves as the orchestration engine for the entire process. This foundation is enhanced through direct integration with the WhatsApp API using n8n's specialized WhatsApp node, enabling seamless message capture and delivery. At the heart of the translation capability is Google Gemini AI, providing sophisticated language processing that captures nuance and context beyond simple word-for-word translation. The system implements webhook services to ensure real-time message processing with minimal latency, critical for maintaining natural conversation flow. For enhanced performance, an optional storage solution can be implemented to maintain message history and conversational context, allowing for more accurate translations that account for ongoing discussions rather than isolated statements.`,
  },
 
  {
    id: 'kidswear-report',
    title: 'FARFETCH - LUXURY KIDSWEAR REPORT',
    image: 'https://companieslogo.com/img/orig/FTCH-eae060de.png?t=1720244491',
    categoryId: ['Branding', 'React', 'Luxury Fashion'],
    description: 'The primary aim of this project is to understand the influence of social media-driven phenomena, specifically Mini-me fashion and Kidfluencer culture, on the luxury kidswear market. Utilizing the data analytics capabilities of FARFETCH, a leading global platform for luxury fashion, the project seeks to dissect consumer and industry involvement in these trends. ',
    heroImage: '/kids.jpeg',
    heroVideo: '/videos/kids.mov',
    heroBg: '#9370db', // Purple background

    contentSections: [
      {
        type: 'text',
        title: 'The Ask',
        content: `Analyze the impact of social media-driven trends, such as Mini-me fashion and Kidfluencer culture, on the luxury kidswear market, and present actionable insights for brands and consumers.`
      },

      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: 'https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Kidsreport/kidfluencer_and_sharenting_7-11-21/intro.jpg',
            alt: 'Mini-me Fashion Trend'
          },
          {
            src: 'https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Kidsreport/kids_turn_five/intro.jpg',
            alt: 'New Generation Parents'
          }
        ]
      },
      {
        type: 'text',
        title: 'The Challenge',
        content: `The luxury kidswear industry is rapidly evolving, shaped by digital engagement, conscious consumption, and the influence of new generations of parents and children. How can brands adapt to these shifts and create meaningful connections?`
      },
      {
        type: 'quote',
        content: `"In the world of luxury kidswear, we don't just dress the next generation—we help shape it. This digital report illuminates how conscious values and heritage craftsmanship are being reimagined through technology, creating experiences as meaningful as they are beautiful."`,
        author: 'FARFETCH Kidswear Report'
      },
      {
        type: 'text',
        title: 'The Concept',
        content: `An interactive digital platform that transforms traditional market reports into immersive experiences, showcasing the evolution of luxury kidswear through data-driven storytelling, interactive visualizations`
      },
      {
        type: 'imageGrid',
        layout: '2x2',
        images: [
          {
            src: 'https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Kidsreport/mini-me/intro.jpg',
            alt: 'Mini-me Fashion Trend'
          },
          {
            src: 'https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Kidsreport/new-gen_parents/intro.jpg',
            alt: 'New Generation Parents'
          }
        ]
      },
      
    ]
  },

  {
    id: 'comfyui-machinelearning',
    title: 'Comfy ui X Machine Learning',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQE6iLdGTCwvMg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726129826738?e=1747872000&v=beta&t=wfxfCnPZq6pBk0730rWROBnp5zFJwJObS8XxClUA3AY',
    categoryId: ['Comfy ui', 'ai', 'Machine learning'],
    description: 'This project represents a profound technological innovation in how AI can be embedded in public contexts, moving beyond screen-based interactions to become part of the urban fabric. By developing systems that can interpret and extend the visual languages of street art while responding to community engagement, we\'re establishing new paradigms for AI as a co-creative force in public art. The technical architecture preserves the spontaneity and cultural authenticity central to street art while introducing computational elements that allow for dynamic evolution beyond what either medium could achieve independently.',
    heroImage: '  https://media.licdn.com/dms/image/v2/D4E22AQFl8wgcbnGxHw/feedshare-shrink_2048_1536/B4EZPGy.EIHAAo-/0/1734207071550?e=1747872000&v=beta&t=VSzsBEeilwvRNL4DqAM7fbfKfmAIKL__UF4fv6x6dd4',
    heroBg: '#829bc4', // Green background
    logoSize: 'xlarge',
    logoPosition: 'center',
    logoAspectRatio: 'wide',
    projectImages: [
      'https://media.licdn.com/dms/image/v2/D4E22AQE6iLdGTCwvMg/feedshare-shrink_800/feedshare-shrink_800/0/1726129826736?e=1747872000&v=beta&t=i7JdiqnDLvJIkybBpCN0WuEPs6_I40d-hFxDHtGbNLA',
      'https://media.licdn.com/dms/image/v2/D4E22AQFl8wgcbnGxHw/feedshare-shrink_2048_1536/B4EZPGy.EIHAAo-/0/1734207071550?e=1747872000&v=beta&t=VSzsBEeilwvRNL4DqAM7fbfKfmAIKL__UF4fv6x6dd4',

    ],
    concept: `Introducing intelligent visual recognition for ComfyUI - a breakthrough that fundamentally transforms image manipulation. This integration brings advanced computer vision directly into the creative workflow, enabling the automatic identification and precise isolation of any element within your images. By instantly generating accurate masks around recognized objects, this technology eliminates the need for manual selection while providing unprecedented control over individual components in your scenes. The system seamlessly enhances ComfyUI's capabilities, allowing creators to selectively modify, enhance, replace, or animate specific objects while preserving the integrity of surrounding elements. Designed for accessibility without sacrificing power, this feature bridges the gap between technical machine learning capabilities and intuitive creative tools.`,
    narrative: `Every creator knows the frustration of wanting to modify just one element in an image. What if you could instantly identify and isolate any object with a single click? ComfyUI's new object detection transforms the creative process from tedious manual masking to intelligent, automated recognition. Digital artists can now focus on imagination rather than selection tools. Designers can rapidly iterate on specific components while preserving composition. Content creators can achieve precision that once required hours of painstaking work. This technology democratizes advanced editing capabilities, putting professional-grade tools in everyone's hands regardless of technical background or experience level.`,
    quote: '"The walls of our cities have always been the original social networks – carrying messages, reflecting identities, and challenging power. By weaving AI into this ancient conversation, we\'re not replacing the human hand but extending its reach, creating a new kind of urban nervous system where technology, art, and community pulse together in harmonious rebellion against both sterile tech and static spaces. — Inspired by Banksy and Ian Goodfellow"',
    tech: `Our implementation leverages the Florence machine learning model directly within the familiar ComfyUI environment, requiring minimal setup and computing resources. The technology works by analyzing visual information across multiple dimensions, identifying objects with remarkable accuracy even in complex scenes. The system generates precise masks that preserve fine details at the edges, enabling clean selections for downstream tasks like inpainting, style transfer, or targeted enhancements. We've optimized the workflow to integrate seamlessly with existing ComfyUI components, allowing creators to simply drop in their images, run the detection process, and immediately apply creative transformations to specific objects. The entire pipeline runs efficiently even on consumer hardware, maintaining creative flow without lengthy processing delays.`,
  },
 
  
  {
    id: 'solaya',
    title: 'SOLAYA Snap lens',
    image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4144c38916a75fdcf193e9de3d522e4e/c6057849-b8e3-477a-bbb8-4ca9c991e38f.jpg',
    categoryId: ['Branding', 'AR'],
    description: 'Gaussian splatting technology transforms the virtual try-on experience by bridging the gap between physical products and digital visualization.',
    heroVideo: '/videos/SOLAYA.mp4',
    heroPoster: '/images/solaya/solaya-hero-poster.jpg',
    brandLogo: 'https://media.licdn.com/dms/image/v2/D4E2CAQFpb9Lx_czHjQ/comment-image-shrink_8192_160/comment-image-shrink_8192_160/0/1734618752232?e=1745175600&v=beta&t=5ounyYBKo2cQC5_TuD3ZpzvCQEpZuUamz4GWbInVllo',
    heroImage: 'https://media.licdn.com/dms/image/v2/D4D0BAQHmGj9RjLW3OA/company-logo_200_200/company-logo_200_200/0/1732024801658/solaya_platform_logo?e=1750291200&v=beta&t=zTKEOmGmXlvVCx4etRINpfmiJAbDTwhQxGOZ1FvjvIk',
    heroBg: '#ffffff', // White background
    logoSize: 'xlarge',
    logoPosition: 'center',
    logoAspectRatio: 'wide',
    qrCodeImage: 'https://media.licdn.com/dms/image/v2/D4E2CAQFpb9Lx_czHjQ/comment-image-shrink_8192_1280/comment-image-shrink_8192_1280/0/1734618752228?e=1747767600&v=beta&t=GG_VW3iXSMFKnni3WDn1t4QoK0UvqX2jv6ZHMjMlGR4',
   
    
    contentSections: [
      {
        type: 'text',
        title: 'The Concept',
        content: `Create a revolutionary virtual try-on solution that leverages cutting-edge Gaussian splatting technology exploring the future of e-commerce.`
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: 'https://framerusercontent.com/images/DLfixHVYGxcQwaoHXGpLGjAwLA.gif',
        alt: 'AR Context Visualization'
      },

      {
        type: 'image',
        layout: 'fullBleed',
        src: 'https://framerusercontent.com/images/EWY3wk2ZoyR4NAcvHfB6pe43iI.jpg',
        alt: 'AR Context Visualization'
          
      },
     
      {
        type: 'text',
        title: 'The Challenge',
        content: `In the competitive landscape of e-commerce and social shopping, consumers increasingly demand authentic digital product experiences before committing to purchase. How can brands showcase products with photorealistic accuracy while maintaining accessibility across mobile devices?`
      },
     
      {
        type: 'text',
        title: 'The Technical Approach',
        content: `The SOLAYA AR system's proprietary scanning process converts physical Adidas footwear into optimized point cloud data, exported as .ply files that preserve essential visual information while maintaining compatibility with Snap Inc.'s AR infrastructure. The integration architecture features specialized shaders that interpret the Gaussian attributes to render the footwear with correct lighting and environmental interaction in real-time.`
      },     
    ]
  },

  {
    id: 'unity-ar',
    title: 'AR - Continuous Reality',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*Qax6C_1pRJ3-Nvx0e0YVNw.png',
    categoryId: ['unity', 'AR'],
    description: 'Continuous Reality is an experimental Unity-based framework that explores uninterrupted AR experiences that seamlessly transition between indoor and outdoor environments. The project investigates how persistent digital objects and interactions can maintain narrative continuity as users physically move through different spatial contexts.',
    heroVideo: '/videos/1729090386367.mp4',
    brandLogo: 'https://s205.q4cdn.com/200788659/files/design/U_Logo_Small_White_RGB_1C.png',
    heroImage: 'https://www.logo-designer.co/storage/2021/01/2021-burger-king-new-logo-design.png',
    logoSize: 'xlarge',
    heroBg: '#0cc182', // Orange background
    concept: `Continuous Reality bridges the traditional boundaries between indoor and outdoor augmented experiences through spatial persistence. This experimental framework maintains uninterrupted AR narrative flow as users physically transition between enclosed and open environments, preserving digital object states, positions, and interactions across context shifts. By anchoring virtual elements to a continuous coordinate system that spans multiple physical spaces, the system creates seamless experiential journeys that mirror how we naturally move through the world. This approach transforms AR from isolated moments into coherent narratives that unfold across diverse environmental contexts, challenging conventional limitations of location-specific immersive design.`,
    narrative: `Our lived experiences don't restart when we walk through doorways—they flow continuously as we transition between spaces. Continuous Reality addresses the fundamental disconnect in current AR experiences, which typically reset or require new initialization when environments change. When users engage with this system, they participate in a persistent narrative that accompanies them from intimate indoor settings to expansive outdoor landscapes, maintaining contextual relevance throughout their journey. This creates a profound sense of digital permanence that dramatically enhances immersion and narrative engagement. By eliminating the artificial boundaries between different physical contexts, we're creating AR experiences that respect how humans naturally form memories and associations across spatial transitions—through continuous, evolving interaction rather than fragmented episodes.`,
    quote: '"Continuous Reality represents a fundamental shift in how we conceive AR experiences. By maintaining persistence as users move between indoor and outdoor environments, we\'re not just solving a technical challenge—we\'re aligning digital experiences with how we naturally experience the world. This continuity creates a profound sense of immersion that discrete, location-specific AR simply cannot match."',
    tech: `Continuous Reality employs Unity's persistent object framework as its foundation, implementing a multi-layered tracking system that maintains spatial coherence across environmental transitions. The technical architecture uses a hybrid localization approach, seamlessly switching between marker-based tracking, visual SLAM, GPS, and inertial data while preserving object states and spatial relationships. Our implementation features a dynamic coordinate transformation system that recalibrates virtual anchor points when transitioning between tracking methods, ensuring precise alignment despite the shift in reference frames. The experience employs environmental detection algorithms that identify transition zones (doorways, thresholds) and preemptively prepare tracking handoffs to minimize disruption. For reliable outdoor operation, the system incorporates geospatial mapping with elevation data, compensating for terrain variations and maintaining accurate placement on uneven surfaces. The framework includes an adaptive rendering pipeline that adjusts visual treatments based on ambient lighting conditions, ensuring digital elements remain visually coherent whether viewed under indoor lighting or natural sunlight. Content is structured through a state-persistent narrative engine that manages event triggers, interaction history, and progression logic across the entire journey, regardless of physical location changes.
`,
  },

  {
    id: 'burgerking-rag',
    title: 'Burgerking - RAG',
    image: 'https://www.logo-designer.co/storage/2021/01/2021-burger-king-new-logo-design.png',
    categoryId: ['RAG'],
    description: 'BrandLingual is an experimental RAG-based framework that transforms how global brands like Burger King localize their brand guidelines across diverse markets. The project explores how artificial intelligence can balance brand consistency with cultural relevance, ensuring guidelines resonate authentically in each market rather than feeling like foreign imports.',
    heroVideo: 'https://dms.licdn.com/playlist/vid/v2/D4E05AQGMh6RREfiDIg/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1723642979926?e=2147483647&v=beta&t=MT1vltF7GIJcamcuI9QnCtMUzMdhiBsJIfMHJLu0OU8',
    brandLogo: 'https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo-1994.png',
    heroImage: 'https://www.logo-designer.co/storage/2021/01/2021-burger-king-new-logo-design.png',
    logoSize: 'xlarge',
    heroBg: '#FF8532', // Orange background
    concept: `BrandLingual employs Retrieval-Augmented Generation (RAG) to transform brand consistency across global markets through intelligent guideline localization. This innovative system preserves Burger King's core identity while adapting brand expressions to cultural contexts, ensuring both global recognition and local resonance. By analyzing the structural elements of Burger King's brand guidelines and reconstructing them with market-specific linguistic and cultural considerations, BrandLingual creates dynamically localized versions that feel native to each market rather than merely translated. This approach elevates global brand governance from mechanical translation to cultural adaptation, ensuring Burger King's voice speaks authentically in every language while maintaining its unmistakable identity.`,
    narrative: `Global brands face a paradox: maintain rigid consistency and risk cultural disconnect, or adapt too freely and dilute brand identity. BrandLingual addresses this tension by understanding that effective global branding requires more than linguistic accuracy—it demands cultural fluency. When marketers engage with this system, they receive guidelines that incorporate local idioms, cultural references, and market-specific examples that resonate authentically with regional teams. This creates a profound sense of brand ownership among local stakeholders while ensuring the core brand architecture remains intact. By transforming clinical translation into cultural adaptation, we're creating brand guidelines that inspire rather than restrict, empowering local teams to express Burger King's identity in ways that genuinely connect with their audiences while preserving the fundamental elements that make the brand globally recognizable.`,
    quote: '"BrandLingual represents a new frontier in global brand management. By using RAG technology to adapt rather than merely translate Burger King\'s guidelines, we\'ve created a system that speaks to cultural nuance while preserving brand integrity. The result isn\'t just better communication—it\'s genuine connection with each market while maintaining a coherent global identity"',
    tech: `BrandLingual harnesses a sophisticated RAG architecture that combines vector embeddings of Burger King's master brand guidelines with region-specific cultural datasets to generate contextually appropriate adaptations. The technical framework employs a three-stage process: first, semantic chunking decomposes the guidelines into conceptual units beyond simple paragraphs, preserving relationship hierarchies between brand elements. Second, the retrieval system identifies analogous cultural touchpoints, idiomatic expressions, and visual preferences specific to target regions. Finally, the generation layer reconstructs guidelines using a fine-tuned large language model that maintains the original intent while incorporating culturally resonant language and references. The system leverages custom vector embeddings trained specifically on brand documentation to ensure higher semantic accuracy than general-purpose embeddings. For visual elements, the framework includes computer vision components that analyze design assets for cultural compatibility and suggest modifications while preserving key brand identifiers. The entire pipeline maintains a comprehensive versioning system, allowing brand managers to track adaptations across markets and observe how regional expressions evolve while examining which elements remain consistent worldwide.`,
  },


  {
    id: 'cheersback',
    title: 'Cheers back - App',
    image: '/images/AppIcon.png',
    categoryId: ['Swift', 'iOS'],
    description: 'A spontaneous thought turned functional prototype: a personal app that remembers when it\'s your turn to buy the next round of drinks. Built in just 45 minutes using Swift and Cursor AI, this project demonstrates the evolving role of the Creative Technologist—where execution now happens at the speed of thought.',
    heroVideo: 'https://dms.licdn.com/playlist/vid/v2/D4E05AQGYCrzlWqFJ4Q/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1728637392968?e=2147483647&v=beta&t=VAIHaEUVypMU7DV_aRHKGsIJCR_nr_Cr2JJZKuSl9KE',
    brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png',
    heroImage: '/images/AppIcon.png',
    heroBg: '#306151',
    concept: `A lightweight iOS app that reminds you to return a social favor—like buying the next round—combining emotional memory with digital utility. A personal assistant for generosity.
Goal: To demonstrate how emerging AI tools and rapid prototyping frameworks empower Creative Technologists to turn spontaneous ideas into testable, tangible products—quickly.`,
    narrative: `During my time at AKQA, I delivered a presentation on how AI is reshaping ideation, concept development, and creative execution. To make this real, I showed a project that started from a very human moment: a friend said, "You owe me a drink."

Instead of forgetting that IOU, I built an app that remembers. Fast forward to today: I recreated the concept in just 45 minutes using Swift and Cursor AI. The app is buggy. The name might suck. But it works—and that's the point.

This moment reflects the era we're in: ideas don't need to sit on slides or rot in a notebook. We're past theorizing. Creative Technologists can now prove their thinking faster than ever.`,
quote: '"You don\'t need weeks to validate an idea—just the right tools and 45 minutes of focused intent."',
    tech: `The app was built using Swift, leveraging its native capabilities to quickly prototype a clean, responsive iOS interface. I used Cursor AI to accelerate development—acting as an AI coding assistant that streamlined everything from setting up views to managing local storage. The prototype uses basic iOS permissions to access contacts and schedule reminders, simulating a lightweight memory system that nudges you when it's your turn to buy a round. The real innovation isn't in the tech stack itself but in the speed and fluidity with which an idea became a functioning app—proof that with the right tools, Creative Technologists can collapse the time between concept and execution dramatically.`,
  },

  {
    id: 'creative-technologist',
    title: 'The mind of a Creative Technologist',
    image: 'https://imagedelivery.net/1KomXrSWiTojGGip43n0SQ/ec6997d3-d6f7-476d-6015-9be4ef910900/public',
    categoryId: ['Fashion', 'Metaverse', 'Avatar'],
    description: 'An immersive metaverse experience that invites people to explore the inner workings of a Creative Technologist\'s brain. It\'s a spatial narrative built from AI tools, interactive environments, and past experiments—part self-portrait, part sandbox. More than a showcase, it\'s a mindset made explorable. Welcome to the architecture of curiosity, code, and creative chaos.',
    heroVideo: 'https://res.cloudinary.com/dx2xhaeds/video/upload/v1698168756/DPM-world_lbtzyn.mov',
    brandLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGB4_M_ll3iLQ/company-logo_200_200/company-logo_200_200/0/1671099689425/arhead_logo?e=2147483647&v=beta&t=lVDeQYd53ZDkohxhtzKME_O0_Zp7eMiHY7AssqPARh4',
    logoSize: 'xlarge',
    heroImage: 'https://imagedelivery.net/1KomXrSWiTojGGip43n0SQ/ec6997d3-d6f7-476d-6015-9be4ef910900/public',
    heroBg: '#306151', // Red/pink background
    concept: `"Inside the Mind of a Creative Technologist"
A spatial metaverse experience where visitors can explore the fragmented, interconnected zones of creativity, logic, experimentation, and emotion that define the mindset of a Creative Technologist. A walk-through brain where ideas are data sculptures, thoughts become interactive prototypes, and each neuron fires off a new perspective on tech-driven creativity.`,
    narrative: `What if you could walk through someone's thought process? Not metaphorically, but literally.
In this metaverse experience, I've reconstructed my mental landscape as a navigable world—part gallery, part playground, part codebase. It's a living archive of experiments, prototypes, half-formed thoughts, and breakthrough moments that reflect how a Creative Technologist works: not linearly, but laterally; not in silos, but through collisions of mediums and disciplines.
From rooms themed around AI-powered ideation to surreal environments built from Swift code and creative failures, every space invites visitors to feel, not just see, how ideas are born, refined, and tested. It's not just a portfolio—it's a thought map you can get lost in.`,
    quote: '"You have seen the work. Now step inside the mind that made it."',
    tech: `The world is built using a modular WebXR/metaverse platform, combining spatial audio, procedural world-building, and real-time interactivity powered by Three.js and WebGL. AI-generated prompts populate idea zones with real-time visualizations, and interactive nodes let users activate past prototypes or trigger short narratives. Tools like Blender, Unity, and Runway were used to design mindscapes that shift between abstract and literal, mimicking the flux of a technologist's mind. The project leverages spatial UX design to translate intangible thought processes into tangible, explorable artifacts—where code, design, and story exist in equal measure.`,
  },

  {
    id: 'gucci-dont-run',
    title: 'Gucci X dont run',
    image: 'https://d2clgeqocjw7k2.cloudfront.net/6402081d4ea873001335b1bf/frame_0000.png',
    categoryId: ['Fashion', 'WebGL'],
    description: 'The project leverages cutting-edge real-time animation technologies while pushing boundaries through the development of responsive animation chaining. By applying fashion design principles to digital character creation, we\'re creating new possibilities for brand expression in virtual spaces, establishing innovative pipelines between traditional fashion design and digital animation.',
    heroVideo: 'https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157214/Guccifalling_rgcohx.mp4',
    brandLogo: 'https://static.vecteezy.com/system/resources/previews/021/059/821/non_2x/gucci-logo-gucci-icon-with-typeface-on-black-background-free-vector.jpg',
    logoSize: 'xlarge',
    heroImage: 'https://d2clgeqocjw7k2.cloudfront.net/6402081d4ea873001335b1bf/frame_0000.png',
    heroBg: '#306151', // Red/pink background
    concept: `A dynamic digital art installation that brings Gucci's brand identity to life through an animated avatar that performs ethereal, choreographed sequences - blending high fashion with digital animation to create an immersive brand experience that transcends traditional static displays.`,
    narrative: `In a world where luxury brands seek deeper connections with digitally-native audiences, "Gucci Fell from Heaven" speaks to those who appreciate both the craftsmanship of high fashion and the artistry of animation. The narrative follows a divine Gucci avatar descending from the celestial realm to our world, bringing with it the brand's signature opulence and transformative beauty. As the avatar moves through various emotional states and poses, it tells a story of fashion as a transcendent form of self-expression – one that bridges the gap between aspiration and attainability, fantasy and reality. This creates an emotional connection with viewers who see fashion not just as clothing but as a vehicle for transformation and identity.`,
    quote: '"Fashion exists in the sky, on the street, it has to do with ideas, the way we live, what is happening. And animation is the perfect medium to capture this constant state of becoming - together they create magic that neither could achieve alone. — Inspired by Coco Chanel"',
    tech: `The technical foundation of "Gucci Fell from Heaven" combines 3D character modeling with sophisticated animation sequencing using Mixamo's motion capture library. We'll develop a custom avatar representing Gucci's aesthetic, meticulously textured with their signature patterns and styling. The innovation lies in our approach to animation chaining - developing a proprietary algorithm that seamlessly blends motion sequences based on proximity sensors that detect viewer engagement. This creates a responsive experience where the avatar's movements evolve based on audience interaction. The installation will utilize real-time rendering through Unity or Unreal Engine to maintain visual fidelity while enabling dynamic performance, with projection mapping capabilities for large-scale presentations at fashion events, retail environments, or public spaces.`,
  },

  {
    id: 'ready-player-me',
    title: 'Ready player me X ',
    image: '/images/23.png',
    categoryId: ['Metaverse', 'Avatar'],
    description: 'This project represents a sophisticated merger of pre-rendered 3D elements with real-time interactive components, creating new possibilities for web-based storytelling. By developing custom middleware that bridges Blender\'s animation capabilities with WebGL\'s real-time rendering, we\'re establishing innovative pipelines for creators to develop rich, interactive experiences without sacrificing visual quality or performance.',
    heroVideo: 'https://res.cloudinary.com/dx2xhaeds/video/upload/v1702641177/HAPEXRPM_q6sgkf.mov',
    brandLogo: 'https://i.seadn.io/s/primary-drops/0x463ee85608241d546476667fa433a83ea2ab8bcf/33425445:about:media:4700cf3c-b1fe-4143-baf1-540eee5d842d.png?w=3840',
    heroImage: 'images/CT/23.png',
    heroBg: '#33333f', // Red/pink background
    concept: `An immersive web experience that synchronizes user scrolling with a Ready Player Me avatar's journey through a beautifully crafted 3D environment, creating a symbiotic relationship between user interaction and narrative progression that elevates standard web browsing into a cinematic, personalized adventure.`,
    narrative: `In today's digital landscape, users crave experiences that respond to them personally while offering meaningful engagement beyond passive consumption. This project speaks to the growing audience of digital natives who expect technology to anticipate and complement their actions. As users scroll through content, their Ready Player Me avatar—a digital extension of themselves—navigates through carefully crafted environments that mirror the emotional and thematic journey of the website's content. This creates a profound connection between user, avatar, and content, where physical interaction (scrolling) translates into virtual movement, making the digital experience feel tangible and personally meaningful. The narrative unfolds at the user's pace, giving them agency over their digital experience while maintaining the artistic integrity of the designed journey.`,
    quote: 'The screen is no longer a window we look through, but a world we step into. With each scroll, we\'re not just navigating content— we\'re choreographing our own digital odyssey, blurring the boundaries between observer and participant in the grand performance of technology. — Inspired by Marshall McLuhan',
    tech: `The technical architecture of this project combines pre-rendered camera animations from Blender with real-time WebGL rendering to create a seamless and responsive experience. We utilize Three.js as our WebGL framework, implementing custom shader programming to achieve high-quality visuals while maintaining performance across devices. The innovation lies in our scroll-based animation controller, which precisely maps user scrolling to both camera movement and avatar animations, creating a synchronized experience that feels natural and intuitive. Ready Player Me's SDK allows for personalized avatar integration, while our custom animation rigging system ensures the avatar's movements appear fluid and realistic throughout the journey. We've developed an adaptive loading system that progressively enhances visual fidelity based on the user's device capabilities, ensuring accessibility across platforms while delivering the best possible experience for each user.`,
  },

  

  {
    id: 'metahuman',
    title: 'Metahuman X blender ',
    image: 'https://cdn1.epicgames.com/ue/product/Screenshot/MHScreen02-1920x1080-4fea450a7dfc23ffad2093ab5f4fa6aa-1920x1080-4fea450a7dfc23ffad2093ab5f4fa6aa.jpg?resize=1&w=1920',
    categoryId: ['Blender', 'Ai'],
    description: 'This project represents a pivotal advancement in the technical pipeline for creating digital humans, breaking down previous barriers between high-end proprietary systems and accessible open-source tools. By developing a bridge between Meta-Human\'s DNA technology and Blender\'s extensible architecture, Polyhammer is establishing new technical standards for how digital humans can be created, manipulated, and integrated with emerging AI technologies, potentially reshaping industries from entertainment to customer service.',
    heroVideo: '/videos/metahuman.mp4',
    brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/939px-Blender_logo_no_text.svg.png',
    // Detailed properties for ProjectDetail component
    heroImage: 'https://cdn1.epicgames.com/ue/product/Screenshot/MHScreen02-1920x1080-4fea450a7dfc23ffad2093ab5f4fa6aa-1920x1080-4fea450a7dfc23ffad2093ab5f4fa6aa.jpg?resize=1&w=1920',
    logoSize: 'xlarge',
    heroBg: '#557073', // Red/pink background
    concept: `A groundbreaking Blender add-on that seamlessly integrates Meta-Human DNA technology into the open-source 3D creation ecosystem, enabling artists and developers to create, manipulate, and animate hyper-realistic digital humans within Blender's familiar workflow for film, gaming, and AI agent applications.`,
    narrative: `In a digital creation landscape where realistic human representation is both challenging and in high demand, this project speaks to artists, game developers, and AI researchers seeking to bridge the uncanny valley without enterprise-level resources. The narrative centers on democratizing access to high-fidelity digital human creation - technology previously reserved for major studios is now available within the beloved open-source Blender ecosystem. As creators experiment with this add-on, they're not just making characters; they're part of a movement that's reshaping how we represent humanity in digital spaces, particularly as AI agents become more prevalent in our daily interactions. This creates an emotional connection with creators who envision digital humans not just as visual assets but as meaningful interfaces for human-AI interaction.`,
    quote: '"The true frontier of digital creation isn\'t just in rendering what\'s real, but in crafting what feels human. As the lines between AI and art continue to blur, tools like this don\'t just change how we create - they transform what it means to be creators in an age where the digital and the human are increasingly intertwined." — Inspired by the work of Polyhammer',
    tech: `Polyhammer\'s Meta-Human DNA Add-on for Blender represents a technological breakthrough in the democratization of digital human creation. The add-on integrates Meta-Human's sophisticated DNA system directly into Blender's node-based workflow, allowing for parametric control over facial features, expressions, and anatomical accuracy. What makes this implementation particularly innovative is its hybrid approach to processing - leveraging both local GPU acceleration and cloud-based computing resources to make computationally intensive operations accessible on consumer hardware. The system preserves Blender's non-destructive workflow while introducing specialized rigging systems optimized for realistic facial animation and subtle micro-expressions crucial for believable AI agent representations. Furthermore, the add-on includes API hooks designed specifically for integration with AI behavior systems, positioning it as not just a modeling tool but a foundational technology for the next generation of interactive digital humans.`,
  },
  {
    id: 'unity-mcp',
    title: 'MCP Unity',
    image: '/images/WISINWYG.png',
    categoryId: ['Unity', 'Ai', "MCP"],
    description: 'This project represents a fundamental shift in the relationship between creator and technology, positioning AI as an active collaborator in the technical execution of creative vision. By developing integrated prompting frameworks that encompass multiple specialized platforms, we\'re establishing new paradigms for human-AI collaboration across the entire 3D creation pipeline, potentially transforming industries from game development to architectural visualization to film production.',
    heroVideo: '/videos/unity.mp4',
    brandLogo: 'https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt9fccf8fb0541654c/650efbfa02b52e8033530b49/Screen_Shot_2021-10-05_at_2.04.58_PM.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale ',
    // Detailed properties for ProjectDetail component
    logoSize: "xlarge",
    heroImage: '/images/WISINWYG.png',
    heroBg: '#cccccc', // Gray background
    concept: `An innovative workflow system that leverages AI assistants like Claude to seamlessly guide and execute complex 3D creation pipelines across multiple platforms, from initial concept design in Blender to final implementation in Unity, dramatically reducing technical barriers and democratizing sophisticated 3D content creation.`,
    narrative: `In a creative landscape where technical complexity often stifles innovation, this project speaks to designers, developers, and creators who have brilliant ideas but lack the technical expertise to bring them to life across multiple 3D platforms. The narrative centers on transforming AI from a mere suggestion tool to an active co-creator that not only understands but can help execute complex cross-platform workflows. As creators interact with Claude through this pipeline, they experience a paradigm shift where their imagination becomes the primary constraint rather than technical know-how. This creates an emotional connection with creators who see their visions materialize through natural language instructions, witnessing the dissolution of traditional barriers between conception and realization, democratizing access to sophisticated digital creation tools that were previously accessible only to those with extensive technical training.`,
    quote: '"The most profound technologies are those that disappear – they weave themselves into the fabric of everyday creation until they become indistinguishable from the creative process itself. With AI bridging our creative platforms, we\'re not just changing how we build digital worlds – we\'re reimagining who gets to build them, and what they might become when imagination, not technical knowledge, becomes our primary currency." — Inspired by Mark Weiser"',
    tech: `The technological foundation of this AI-driven cross-platform pipeline represents a significant advancement in how Model Control Protocols (MCPs) can be interconnected across creative software environments. By developing sophisticated prompt architectures and specialized middleware, the system enables Claude to directly interface with both Blender and Unity through their respective APIs, creating a seamless bridge between conceptualization and implementation. The innovation lies in the development of context-aware instruction processing that translates natural language directives into precise technical operations appropriate for each platform's unique environment. The system maintains state awareness throughout the pipeline, allowing for iterative refinement while preserving creative intent across platform transitions. Additionally, the architecture includes built-in validation processes that ensure compatibility between platforms, automatically identifying and resolving potential issues with geometry, materials, and scale that typically cause friction in cross-platform workflows. This creates not just a more accessible creative process but fundamentally a more efficient one, eliminating the technical debt that accumulates when manually transitioning between design and implementation environments.`,
  },

 

 
  {
    id: 'projection-mapping',
    title: '3D Projection Mapping',
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/78476aff-03dc-4af4-95ff-0c5350796b2b/W+NIKE+DUNK+HIGH.png',
    categoryId: ['Projection Mapping', 'Three.js'],
    description: 'Dimensional Canvas is an experimental Three.js-based framework that explores the creative possibilities of real-time texture projection on 3D models. The project investigates how digital surfaces can transform object perception through dynamic material application, creating an interactive relationship between form, texture, and viewer.',
    // Detailed properties
    heroImage: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/78476aff-03dc-4af4-95ff-0c5350796b2b/W+NIKE+DUNK+HIGH.png',
    heroVideo: 'https://dms.licdn.com/playlist/vid/v2/D4E05AQEkQtCqMbsaLg/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1724323104041?e=2147483647&v=beta&t=dXxNhJjj__jULec80ZvEQBbupIvAQ91KBmtWDkLdv0M',
    heroBg: '#333333', // Dark gray background
    logoSize: "medium",
    brandLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEUAAAD////09PTk5OT6+vq+vr6pqanp6enCwsLu7u6Tk5Pf39+bm5ujo6NhYWHX19fOzs4zMzMZGRlzc3NJSUlubm6MjIx/f39bW1sJCQk8PDy2traFhYWvr69OTk5UVFQnJycgICD9rvCDAAAFK0lEQVRogdVZ27ajIAwN3updvNdaq/7/Tw4oKoH2aFv7MHmZHhduyc5OCBmAn1p//SF4SYh7T3+FTrgFTvwT8ITMZtHqfAcispnZls2p4D1BZiXhiQ5kFlHt0sBZH0g08Js/BEFYnAEeKtDG6JOaR8Jy868diBXsjH3NXh4G0ZdJhkj3Jvl4ID36Kslk0i/gTP+mAXIn6D5NslDG7uYfdURUS+6fgD/W902wFyoeGrg19L1dZu+iWxo2MUDFZsEwmg+SjAq/wd2wRkX+UzBgjoRnl8c/EApsKoHdIwWbByPvVo6C8HEMfCovFKeqi2pOMDvVopyw3PqIAwYDU8qAIctfYLP9q5Ewo3ivjlJig6m8dtuUvjk1qKtYAAbIb3+BRzZc1Jfuq/zpFozcUZcFQEubmF35EnwcDW1HbrH8gM0H+6qs4grryvmn/yICY257ymuL0m0Jm3iNis2cumTLn5f2WZLZ7RVSH4d0mMhocTAaVHMEYfISplE1Aj5fWd0gbjfuK066A9ijWiZ9CXTZKk7jg0BUEq8tYahE+Hh5cdRA25LS12AI0vFCCX3bX8LcujrcUSAhqIGWas4WDF3+LBhI6ZJ5bg5DTYt80EW0Fno5GKMqZIpIr1QQM2K1w9dzZin0nUxY2eFFGBsKopmfpVWW5S7evag5ONC45iC+J9O3WPCD1HN6SENZ6dPKMEOfvCD5a9hyKZ89ZVq5TZGwKDugS3thgRd6Xw2GnGidnkYK6SXPc99f98sOaJFkrNDfB9XNrdAzwnS7ocWPiUSKHlKfJVnn0f6O13LbSA+fYAMK0EOsVWXutTnrIjOi2drnPMeWlZ4uGVdQFYWQHm7QO6pGRaGvnmNLpKf18svX5E+uce2w2gFjjSQwF/qXnc2idGu8r68kGrtFTOi00owKuEWrSKZCX7/CXroXK5N2q3UvRSnxa9B6bHJ7igsvL/lr7FnpBu6oFdJnwlLpoddd5yQbgr+wJ9INwO1KKJNupfNfFe7op5ta/hj+woZU6kMXo6kEMogvuXohMp6kJTbvAq361iZ/I1ud0qo8IbsddqgVGIl0TyIs1a5RB+5PvvoOI13oEhFWKQuNP5ui2cYHPDol9YTSTUQYxaRbh1pei7h5BrV8PFiT/KXGfdopkr83HsGeEfj9rdhSr3e3PnS1m6R04+BdY817eh9BpF5U4UvBZFuh57ftYybXUpOlXhEmJEgD0GrjVujNg9AASndlJdXQlM2T+/uq9DewcdhmRnNobhVVhw+C9GQfcrNaA3ebujZZb3ztkFdzoX8LG7Ty3cLF5OXFssumudNVowlXOt0HRKa0ZR2PwsIvH5IU4nzjN6Z3sZXCFU24sRQJtxZJ1lP3XWxMejgfThGOhOkwjTr1B6MeuS2rxlkjgXJV4Wz7H83ZNk3ch0V/jV6+d8+Gp7aSnm9n0FWTf/QRNuTi9VKqqk6uYPufYYPYbyxX7GA4BxvmXrjHzTyW/0cDo9laHRsp/RtsTnqhciyT/mfrs2cjuWnlK4BzsFlI1Qkps2aR/9dTdn3GQGIh//5b7NiOYQjx6TPfv62vsaeDNFFmDCZ/aJ0xlhbjPXnGwIce1oG2at+2vi1hx8M8YyjtY23VrqH5hjddf2gXn7JvpnT1qJ9mDGeZPqqw3h4PvzRtvGee+P87sYp9HjSo45H3Wp9dS36IDXi8d7Kh8d7ZtjYVP8CGdaj0WXuyY+LK2f4CW5D+bFp1hnHsD9uqfUteTqtOsOiLtmrX4t/t+3+wf1LvQIusMVzdAAAAAElFTkSuQmCC',
    
    concept: `Dimensional Canvas reimagines the relationship between surface and texture through dynamic projection mapping on 3D forms. This experimental framework transforms static models into living canvases for visual expression, where digital textures respond to spatial characteristics, lighting conditions, and viewer perspective. By separating visual identity from physical form, Dimensional Canvas enables unprecedented creative flexibility—allowing a single 3D object to embody infinite visual possibilities without physical modification. The system creates an intermediary artistic space where digital aesthetics and three-dimensional reality converge, challenging conventional notions of object permanence and material identity.`,
    narrative: `In a world increasingly blending digital and physical realities, our visual expectations have evolved beyond static surfaces. Dimensional Canvas speaks to this evolution by treating 3D objects not as fixed entities but as vessels for dynamic visual experiences. When viewers encounter these transformed objects, they experience a moment of perceptual recalibration—the familiar becomes novel, the static becomes fluid. This approach democratizes spatial design by allowing rapid visual iteration without physical fabrication, dramatically expanding creative possibilities for artists, designers, and spatial storytellers. By unbinding texture from physical production constraints, we're enabling more experimental, sustainable, and accessible approaches to visual design—allowing creators to test concepts, iterate rapidly, and implement changes that would be prohibitively expensive or technically impossible in traditional material production.`,
    quote: '"Dimensional Canvas represents a critical evolution in digital materiality. By separating appearance from structure, we\'re not just creating visual effects—we\'re establishing a new paradigm for object identity in the digital age. This approach allows us to explore infinite material iterations without physical waste, bridging the gap between digital experimentation and physical reality."',
    tech: `Dimensional Canvas leverages Three.js as its core technology, harnessing WebGL for real-time rendering of complex textures onto 3D geometry. The technical architecture employs custom shader programs that calculate precise UV mapping coordinates based on camera position, lighting conditions, and surface characteristics. Our implementation utilizes advanced ray-casting techniques to accurately project textures onto non-uniform surfaces while maintaining perspective accuracy across irregular geometry. The rendering pipeline features a multi-pass system that separately calculates diffuse color, specularity, displacement, and environmental reflection, allowing for sophisticated visual effects including surface parallax, material simulation, and light interaction. For optimal performance, the system employs adaptive mesh tessellation—increasing geometric detail only where needed based on texture complexity and viewing distance. The current implementation supports multiple projection modes including planar, cylindrical, spherical, and cubic mapping, with real-time switching capabilities. The code structure employs modular design principles, separating geometric processing, texture management, and shader logic to enable straightforward integration of new mapping techniques and visual effects.`

  },
  // {
  //   id: 'ar-shopping',
  //   title: 'AR Shopping',
  //   image: '/nike-ar.png',
  //   categoryId: ['AR'],
  //   description: 'Augmented reality shopping experience',
  //   heroImage: '/nike-ar.png',
  //   heroVideo: '/videos/Nike.mp4',
  //   heroPoster: '/images/ar-shopping/nike-poster.jpg',
  //   heroBg: '#e37575', // Red/pink background
  //   brandLogo: '/nike-logo.png',
  //   qrCode: '/qr-code.png',
  //   concept: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. With over a decade of hands-on experience, I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   narrative: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   quote: '"This project connects emotionally with users by offering that "try before you buy" experience—right from their mobile device."',
  //   tech: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. With over a decade of hands-on experience, I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   techIcons: ['/ar-icon.png', '/app-store-icon.png', ],
  // },
  // {
  //   id: 'three-shells',
  //   title: 'Three shells',
  //   image: '/grid.jpeg',
  //   categoryId: ['Experiment', 'Comfy ui'],
  //   description: 'Experimental UI concept with 3D elements',
  //   heroImage: '/grid.jpeg',
  //   heroVideo: '/videos/wireframe.mp4',
  //   heroBg: '#333333',
  //   concept: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. With over a decade of hands-on experience, I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   narrative: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   quote: '"This project explores the boundary between digital and physical space through interactive wireframe models."',
  //   tech: `Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. With over a decade of hands-on experience, I've navigated the full spectrum of creative tech projects. But I don't just create; I elevate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through innovative problem-solving approaches, I craft digital narratives that not only showcase what technology can do, but also why it matters on a deeper, emotional level. My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive.`,
  //   techIcons: ['/webgl-icon.png', '/threejs-icon.png'],
  // },
  {
    id: 'gucci',
    title: 'Gucci Fashion',
    image: '/gucci.png',
    categoryId: ['Branding', 'Web GL', 'Comfy ui'],
    description: 'Discover pre-owned luxury fashion in a whole new dimension. Where sustainability meets sophistication, and virtual meets reality.',
    // Detailed properties
    heroImage: '/gucci.png',
    heroVideo: 'https://huggingface.co/datasets/DPM1987/images/resolve/main/video%20(8).mp4',
    heroBg: '#1a8754', // Green background
    brandLogo: '/images/gucci-comfy.png',
    concept: `Democratizing luxury fashion by transforming pre-owned designer items into pristine digital experiences through virtual restoration and try-on technology.`,
    narrative: `Imagine finding that perfect vintage Gucci piece on Vestiaire Collective - but instead of wondering if it's worth the investment or how it might look on you, you experience it in its full luxury potential.
That's where we come in.
We take carefully selected pre-owned designer items and digitally restore them to their original magnificence. Through our innovative process, that pre-loved Gucci bag or coat transforms from a second-hand listing into a luxury experience.`,
    quote: '"Luxury fashion meets cutting-edge technology in this immersive WebGL experience for Gucci."',
    tech: `Our technical infrastructure seamlessly integrates cutting-edge AI and AR technologies to deliver a transformative fashion experience. At the core, we leverage ComfyUI's advanced image processing capabilities to digitally restore pre-owned luxury items, employing sophisticated AI models for texture enhancement, color correction, and detail restoration that brings each piece back to its original splendor. The restored items are then presented on professional fashion models using state-of-the-art style transfer techniques, before being made available for virtual try-on through Snap Inc.'s AR Lens technology.`,
    techIcons: ['/webgl-icon.png', '/threejs-icon.png'],
  },
  
  // Add more projects here following the same format
];

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") {
    return projects;
  }
  
  // Case-insensitive matching for categories
  const lowerCategory = category.toLowerCase();
  return projects.filter(project => 
    project.categoryId.some(cat => cat.toLowerCase() === lowerCategory)
  );
};

// Helper function to get a project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

// Helper function to get related projects
export const getRelatedProjects = (projectId, limit = 3) => {
  const currentProject = getProjectById(projectId);
  if (!currentProject) {
    return [];
  }

  const currentCategories = currentProject.categoryId;
  
  // 1. Find projects sharing at least one category (excluding current)
  let relatedByCategory = projects.filter(project => 
    project.id !== projectId && 
    project.categoryId.some(cat => currentCategories.includes(cat))
  );

  let relatedProjects = relatedByCategory.slice(0, limit);

  // 2. If not enough projects found, fill with other projects
  if (relatedProjects.length < limit) {
    const remainingLimit = limit - relatedProjects.length;
    const existingIds = new Set([projectId, ...relatedProjects.map(p => p.id)]);
    
    const otherProjects = projects.filter(project => !existingIds.has(project.id));
    
    relatedProjects = [...relatedProjects, ...otherProjects.slice(0, remainingLimit)];
  }
  
  // Return the required format including the image
  return relatedProjects.map(project => ({
    id: project.id,
    title: project.title,
    image: project.image
  }));
}; 
