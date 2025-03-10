export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  readingTime: string;
}

export const blogCategories = [
  "Design",
  "Technology",
  "Travel",
  "Productivity",
  "Lifestyle"
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Essence of Minimal Design in Modern Web Development",
    excerpt: "Exploring how minimalism influences modern design trends and why less continues to be more in digital experiences.",
    content: `
      <p>
        Minimalism in web design isn't just about aesthetics; it's a philosophy that emphasizes clarity and purpose. By stripping away unnecessary elements, designers can create digital spaces that guide users intuitively, focusing their attention on what truly matters.
      </p>

      <p>
        The core principles of minimalist design include:
      </p>

      <ul>
        <li>Intentional use of white space</li>
        <li>Limited color palette</li>
        <li>Purposeful typography</li>
        <li>Functional elements only</li>
      </ul>

      <p>
        These principles work together to create interfaces that feel clean, focused, and distinctly modern. But achieving true minimalism requires restraint and thoughtful consideration – knowing what to remove is often more challenging than knowing what to add.
      </p>

      <h2>The Balance of Form and Function</h2>

      <p>
        Great minimalist design never sacrifices usability for aesthetics. Instead, it finds the perfect balance where visual elements enhance understanding and guide user behavior naturally. This harmony creates experiences that feel both beautiful and intuitive.
      </p>

      <p>
        Modern websites that exemplify minimalist principles often share these characteristics:
      </p>

      <p>
        When implemented thoughtfully, minimalism creates digital experiences that feel luxurious precisely because they don't overwhelm. The careful attention to detail and emphasis on quality over quantity resonates with users who face information overload daily.
      </p>

      <h2>Looking Forward</h2>

      <p>
        As digital environments become increasingly complex, the value of minimalist design continues to grow. By creating spaces where users can focus without distraction, designers provide a genuine service – helping people engage more meaningfully with content in an age of constant noise.
      </p>

      <p>
        The future of minimalism in design will likely continue to evolve, embracing new technologies while maintaining its core philosophy: that true innovation often lies not in adding more, but in perfecting what remains when everything unnecessary has been removed.
      </p>
    `,
    date: "May 15, 2023",
    category: "Design",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "6 min read"
  },
  {
    id: "2",
    title: "How Smart Technology is Reshaping Our Daily Lives",
    excerpt: "From smart homes to wearable tech, we explore how intelligent devices are subtly transforming our everyday routines.",
    content: `
      <p>
        Smart technology has become so seamlessly integrated into our lives that we often forget how recently these innovations appeared. Just a decade ago, the idea of speaking commands to your home or having your refrigerator order groceries seemed like science fiction. Today, these features are increasingly commonplace.
      </p>

      <p>
        The transformation is happening across several key areas:
      </p>

      <h2>The Connected Home</h2>

      <p>
        Modern homes are becoming orchestrated environments where lighting, climate, security, and entertainment systems respond to our presence and preferences. Voice assistants act as the conductors of this domestic symphony, allowing us to control our surroundings with simple commands.
      </p>

      <p>
        More impressively, these systems learn from our behaviors, anticipating our needs before we express them. Lights that dim automatically in the evening, thermostats that adjust based on our routines, and security systems that recognize familiar faces are creating homes that feel attentive and responsive.
      </p>

      <h2>Wearable Intelligence</h2>

      <p>
        Beyond our homes, technology has become something we carry with us – or increasingly, wear on our bodies. Smartwatches and fitness trackers have evolved from simple step counters to sophisticated health monitors that track sleep patterns, heart rhythms, and even blood oxygen levels.
      </p>

      <p>
        These devices create a continuous stream of personal data that helps us understand our bodies and behaviors in unprecedented detail. When combined with intelligent analysis, this information can guide us toward healthier choices and even detect potential health issues before symptoms appear.
      </p>

      <h2>The Ethical Dimension</h2>

      <p>
        As we embrace these technologies, important questions arise about privacy, security, and autonomy. When our homes are listening and our devices are watching, how do we protect our personal information? And as systems become more proactive, where is the line between helpful anticipation and unwelcome presumption?
      </p>

      <p>
        Finding the right balance will be crucial as we navigate this new landscape. The most successful smart technologies will be those that augment our capabilities without diminishing our agency – tools that make us more effective rather than more dependent.
      </p>
    `,
    date: "June 3, 2023",
    category: "Technology",
    author: {
      name: "Maya Johnson",
      avatar: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "8 min read"
  },
  {
    id: "3",
    title: "Finding Focus in a Distracted World",
    excerpt: "Practical strategies for reclaiming your attention and doing deep work in an era of constant interruptions.",
    content: `
      <p>
        The modern world presents a paradox: we have more tools for productivity than ever before, yet many of us struggle to focus long enough to use them effectively. Our attention has become perhaps our scarcest resource, constantly divided between devices, notifications, and competing demands.
      </p>

      <p>
        This fragmentation comes at a cost. When our focus is continually broken, we lose not only efficiency but also the capacity for deep thinking—the kind that leads to meaningful insights and creative breakthroughs.
      </p>

      <h2>Understanding the Attention Economy</h2>

      <p>
        Many of the digital tools we rely on are designed specifically to capture and hold our attention. Social media platforms, news sites, and entertainment services employ sophisticated techniques to keep us engaged, creating an economy where our focus is the primary currency.
      </p>

      <p>
        Recognizing these dynamics is the first step toward regaining control. Once we understand how these systems work to attract our attention, we can make more conscious choices about where and how we direct our focus.
      </p>

      <h2>Strategies for Deep Focus</h2>

      <p>
        Fortunately, there are proven techniques for cultivating sustained attention in this challenging environment:
      </p>

      <ul>
        <li><strong>Time blocking:</strong> Schedule specific periods for focused work, with clear boundaries around when you'll be unavailable for other tasks.</li>
        <li><strong>Digital minimalism:</strong> Regularly audit your digital tools, eliminating those that consume more attention than they provide in value.</li>
        <li><strong>Environment design:</strong> Create physical and digital spaces that minimize distractions and signal to your brain that it's time for focused work.</li>
        <li><strong>Attention training:</strong> Practices like meditation build the mental muscle of bringing your focus back when it wanders.</li>
      </ul>

      <h2>The Rewards of Deep Work</h2>

      <p>
        Building these habits isn't easy, but the benefits extend far beyond improved productivity. When we engage in deep work regularly, we experience greater satisfaction and a sense of craftsmanship in our efforts. Complex problems that seemed insurmountable become manageable when approached with sustained focus.
      </p>

      <p>
        Perhaps most importantly, reclaiming our attention allows us to be more present in our lives—to fully engage not just with our work, but with the people and experiences that matter most to us.
      </p>
    `,
    date: "July 12, 2023",
    category: "Productivity",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "7 min read"
  },
  {
    id: "4",
    title: "Discovering Hidden Gems: The Art of Slow Travel",
    excerpt: "How slowing down and immersing yourself in local culture creates more meaningful travel experiences.",
    content: `
      <p>
        In an age of bucket lists and Instagram-worthy destinations, travel can sometimes feel more like a checklist than an experience. The pressure to see everything—to collect landmarks and attractions like tokens—often leaves travelers exhausted rather than enriched.
      </p>

      <p>
        Slow travel offers an alternative approach. Rather than rushing from sight to sight, it encourages deeper engagement with fewer places, creating space for genuine connection and discovery.
      </p>

      <h2>Beyond the Highlights</h2>

      <p>
        Every popular destination has its must-see attractions, but the most memorable experiences often happen away from these well-trodden paths. A morning routine at a local café, a conversation with a shopkeeper, or a stroll through a residential neighborhood can reveal the authentic character of a place in ways that famous landmarks rarely do.
      </p>

      <p>
        These moments aren't usually planned—they emerge naturally when we allow ourselves enough time and openness to encounter them. By staying longer in one location and venturing beyond tourist centers, we create opportunities for these serendipitous discoveries.
      </p>

      <h2>Cultivating Presence</h2>

      <p>
        Slow travel also invites us to engage our senses more fully. Instead of experiencing a place primarily through a camera lens or screen, we can absorb the subtle details that make it unique: the quality of light at different times of day, the ambient sounds of a neighborhood, the aromas from local kitchens.
      </p>

      <p>
        This sensory immersion creates memories that are richer and more enduring than photographs alone. Years later, a particular scent or sound might instantly transport you back, evoking not just images but the feeling of being in that place.
      </p>

      <h2>Practical Approaches</h2>

      <p>
        Embracing slow travel doesn't necessarily require months-long sabbaticals (though those are wonderful if possible). Even within the constraints of a typical vacation, we can make choices that foster deeper experiences:
      </p>

      <ul>
        <li>Choose fewer destinations and stay longer in each place</li>
        <li>Rent apartments or homes rather than staying in tourist districts</li>
        <li>Learn basic phrases in the local language</li>
        <li>Shop at markets and prepare some of your own meals</li>
        <li>Use walking and public transport to experience daily life</li>
      </ul>

      <p>
        These practices help us move from being observers of a place to temporary participants in its rhythms and routines.
      </p>

      <h2>The Lasting Impact</h2>

      <p>
        Beyond creating more meaningful vacations, slow travel can fundamentally shift our relationship with place and culture. It nurtures curiosity, adaptability, and appreciation for different ways of life—qualities that enrich our perspective long after we've returned home.
      </p>

      <p>
        In a world that increasingly values speed and volume, choosing to travel slowly is a small but significant countercultural act—one that rewards us with experiences of depth rather than breadth, and connections that continue to resonate in unexpected ways.
      </p>
    `,
    date: "August 28, 2023",
    category: "Travel",
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "5 min read"
  },
  {
    id: "5",
    title: "The Subtle Art of Creating Meaningful Spaces",
    excerpt: "How thoughtfully designed environments influence our mood, productivity, and wellbeing.",
    content: `
      <p>
        The spaces we inhabit shape us in ways both obvious and imperceptible. From the lighting that regulates our circadian rhythms to the textures that provide sensory comfort, our surroundings constantly influence our physical state, emotional responses, and cognitive performance.
      </p>

      <p>
        Yet in the rush of daily life, we often overlook this profound relationship between ourselves and our environments. We accept spaces as we find them rather than considering how they might better serve our needs and aspirations.
      </p>

      <h2>The Psychology of Space</h2>

      <p>
        Research in environmental psychology reveals how deeply our surroundings affect us. Natural light boosts mood and energy levels. Views of nature reduce stress and improve focus. Even ceiling height influences thinking patterns, with higher ceilings associated with more abstract and creative thought.
      </p>

      <p>
        These effects operate largely below conscious awareness, influencing us whether we recognize them or not. By understanding these mechanisms, we can make more intentional choices about the spaces where we spend our time.
      </p>

      <h2>Creating Intentional Environments</h2>

      <p>
        Thoughtful space design begins with awareness of purpose. Different activities benefit from different environmental qualities:
      </p>

      <ul>
        <li>Focus work thrives in spaces with minimal visual distraction and moderate sound absorption</li>
        <li>Creative collaboration benefits from flexible arrangements and tools for visual thinking</li>
        <li>Restoration happens best in environments with soft textures, natural elements, and a sense of refuge</li>
      </ul>

      <p>
        By designing spaces that align with their intended functions, we reduce the friction between our environment and our goals. This alignment creates a sense of ease that conserves mental energy for the tasks themselves.
      </p>

      <h2>The Personal Touch</h2>

      <p>
        Beyond these functional considerations, our environments also serve as expressions of identity. Objects with personal meaning, artifacts that tell stories from our lives, and choices that reflect our values all transform generic spaces into places that feel distinctly our own.
      </p>

      <p>
        This personalization isn't mere decoration—it creates a sense of belonging and continuity that grounds us amidst change. Environments that reflect who we are help reinforce our sense of self and purpose.
      </p>

      <h2>Small Changes, Significant Impact</h2>

      <p>
        Creating meaningful spaces doesn't necessarily require major renovations or expense. Often, the most powerful interventions are subtle adjustments:
      </p>

      <ul>
        <li>Rearranging furniture to improve flow and functionality</li>
        <li>Introducing plants or natural materials</li>
        <li>Adjusting lighting to support circadian rhythms</li>
        <li>Reducing visual clutter to create a sense of order</li>
        <li>Adding elements that engage multiple senses</li>
      </ul>

      <p>
        These modest changes can dramatically alter how a space feels and functions, creating environments that support rather than hinder our intentions.
      </p>

      <h2>A Lasting Practice</h2>

      <p>
        Ultimately, creating meaningful spaces is less about achieving a perfect end result than developing an ongoing relationship with our environments. As our needs and circumstances evolve, so too will the spaces that serve us best.
      </p>

      <p>
        By maintaining awareness of how our surroundings affect us and making adjustments accordingly, we harness the subtle but significant power of our environments to enhance our daily experience and support our deeper aspirations.
      </p>
    `,
    date: "September 5, 2023",
    category: "Lifestyle",
    author: {
      name: "Ethan Lee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "6 min read"
  },
  {
    id: "6",
    title: "Embracing Digital Minimalism in an Era of Excess",
    excerpt: "How adopting a more intentional approach to technology can reduce stress and improve focus.",
    content: `
      <p>
        In the modern digital landscape, abundance has become a burden rather than a benefit. The average person now faces a constant barrage of apps, notifications, subscriptions, and digital tools—each promising to improve our lives but collectively creating an overwhelming cognitive load.
      </p>

      <p>
        Digital minimalism offers a counterbalance to this excess. More than simply using fewer apps or spending less time on devices, it represents a philosophical approach to technology—one that asks us to align our digital tools with our deeper values and purposes.
      </p>

      <h2>Beyond Surface-Level Solutions</h2>

      <p>
        Many attempts to address digital overload focus on symptoms rather than causes. We try app blockers and screen time limits, but continue to feel pulled in too many directions by our technology.
      </p>

      <p>
        Digital minimalism suggests a more fundamental reassessment. Rather than starting with what digital tools we currently use and looking for ways to use them less, it asks us to start from zero and intentionally add back only those technologies that serve our most important values.
      </p>

      <h2>The Selection Process</h2>

      <p>
        This selective approach requires asking deeper questions about each technology we consider adopting:
      </p>

      <ul>
        <li>Does this tool serve something I deeply value?</li>
        <li>Is it the best way to serve this value?</li>
        <li>How can I use this tool in a way that maximizes benefit and minimizes harm?</li>
      </ul>

      <p>
        By applying these filters rigorously, we can build a digital environment that feels liberating rather than overwhelming—one where each tool has a clear purpose and place in our lives.
      </p>

      <h2>Practical Implementation</h2>

      <p>
        Embracing digital minimalism typically begins with a reset period—a temporary break from optional technologies that creates space to reevaluate our relationship with them. This might mean a 30-day period where social media, video streaming, and other discretionary digital tools are set aside.
      </p>

      <p>
        During this time, we rediscover analog activities that bring satisfaction and meaning. We also have the opportunity to experience the initial discomfort that often accompanies digital detox—the phantom urge to check devices, the fear of missing out, the reflexive reach for stimulation when bored.
      </p>

      <p>
        As this discomfort subsides, clarity often emerges about which digital tools truly enhance our lives and which merely create the illusion of necessity.
      </p>

      <h2>Sustainable Practices</h2>

      <p>
        After this reset, the challenge becomes establishing sustainable practices that preserve intentionality in our ongoing relationship with technology. Some practices that help maintain digital minimalism include:
      </p>

      <ul>
        <li>Scheduled times for checking communication tools rather than continuous availability</li>
        <li>Physical separation from devices during dedicated periods for deep work or presence</li>
        <li>Regular digital decluttering to remove apps, subscriptions, and accounts that no longer serve a clear purpose</li>
        <li>Community support through shared commitments to digital boundaries</li>
      </ul>

      <h2>A Richer Digital Life</h2>

      <p>
        Paradoxically, using fewer digital tools often creates a richer experience with the ones we keep. When we're not constantly switching between dozens of apps and services, we can engage more deeply with those that remain, discovering capabilities and nuances we previously missed.
      </p>

      <p>
        The ultimate promise of digital minimalism isn't a life with less technology, but a life where technology serves its proper role—as a tool that helps us create the life we want to live, rather than a distraction that pulls us away from it.
      </p>
    `,
    date: "October 15, 2023",
    category: "Technology",
    author: {
      name: "Noah Wilson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    readingTime: "7 min read"
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check if we're filtering by category
  const categoryMatch = lowercaseQuery.match(/category:(\w+)/i);
  let categoryFilter = '';
  let searchTerms = lowercaseQuery;
  
  if (categoryMatch) {
    categoryFilter = categoryMatch[1].toLowerCase();
    // Remove the category filter from search terms
    searchTerms = lowercaseQuery.replace(/category:\w+/i, '').trim();
  }
  
  return blogPosts.filter(post => {
    // Apply category filter if present
    if (categoryFilter && !post.category.toLowerCase().includes(categoryFilter)) {
      return false;
    }
    
    // If no search terms left after removing category filter, return true
    if (!searchTerms) return true;
    
    // Otherwise search in title, excerpt and content
    return (
      post.title.toLowerCase().includes(searchTerms) ||
      post.excerpt.toLowerCase().includes(searchTerms) ||
      post.content.toLowerCase().includes(searchTerms)
    );
  });
};
