import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data based on ID
  const getBlogPost = (postId: string) => {
    const posts = {
      "featured": {
        title: "Featured Adventure: Journey Through the Unknown",
        content: `Embark on an extraordinary expedition that will challenge everything you thought you knew about adventure. This comprehensive journey takes you through some of the world's most breathtaking and unexplored territories, where every step reveals new wonders and unexpected discoveries.

        Our adventure begins in the misty highlands where ancient paths wind through forgotten valleys. The air is crisp with the promise of discovery, and each sunrise brings new possibilities for exploration. Here, time seems to move differently, allowing for deep reflection and genuine connection with the natural world.

        As we progress deeper into uncharted territory, the landscape transforms dramatically. Rolling hills give way to rugged mountain passes, crystal-clear streams carve their way through pristine wilderness, and wildlife thrives in its natural habitat. Every moment presents an opportunity to witness something truly remarkable.

        The final stages of our journey lead us to vantage points that offer panoramic views of untouched landscapes. From these heights, one can truly appreciate the magnitude and beauty of our natural world. It's here that many travelers find not just stunning vistas, but a renewed sense of purpose and connection to the world around them.`
      },
      // Exhibition Blog Posts
      "exhibition-featured": {
        title: "Artifacts of Wonder: A Journey Through Time",
        content: `Step into our most ambitious exhibition yet, where rare artifacts and extraordinary discoveries from expeditions around the world come together to tell the story of human exploration and discovery. This carefully curated collection represents decades of adventure, research, and cultural exchange.

        The exhibition begins with our earliest acquisition - a compass used by 19th-century explorers navigating uncharted territories. Each artifact tells a story, not just of the places they were found, but of the intrepid individuals who ventured into the unknown to bring these treasures to light.

        Interactive displays allow visitors to experience the challenges faced by explorers throughout history. From navigating by the stars to surviving in extreme climates, each section provides immersive insights into the skills and courage required for successful expeditions.

        The centerpiece of the exhibition features recently discovered artifacts from a remote archaeological site, displayed publicly for the first time. These remarkable finds shed new light on ancient civilizations and their sophisticated understanding of astronomy, mathematics, and engineering.`
      },
      "exhibition-1": {
        title: "Mountain Peaks Collection: Scaling New Heights",
        content: `Experience the thrill and beauty of high-altitude exploration through our comprehensive collection of mountain expedition artifacts, photography, and personal accounts from some of the world's most challenging climbs.

        This exhibition showcases equipment evolution from early mountaineering attempts to modern climbing technology. Visitors can examine vintage ice axes, rope systems, and protective gear alongside contemporary equipment, understanding how technological advances have made previously impossible climbs achievable.

        Stunning large-format photography captures the raw beauty and danger of mountain environments. Each image tells a story of perseverance, teamwork, and the relentless pursuit of reaching new heights despite seemingly impossible odds.

        Personal journals and expedition logs provide intimate glimpses into the mindset of climbers facing extreme conditions. These first-hand accounts reveal the physical and psychological challenges that must be overcome to achieve success in the world's most demanding environments.`
      },
      "exhibition-2": {
        title: "Ocean Depths Revealed: Maritime Exploration Treasures",
        content: `Dive into the mysteries of maritime exploration through our extensive collection of underwater discoveries, nautical instruments, and deep-sea expedition artifacts that reveal the ocean's hidden secrets.

        Our underwater archaeology section displays artifacts recovered from shipwrecks spanning several centuries. Each piece tells the story of maritime trade routes, naval history, and the brave souls who ventured across dangerous waters in pursuit of discovery and commerce.

        Interactive marine biology displays showcase specimens and research findings from deep-sea expeditions. Visitors can explore the biodiversity of ocean environments and learn about the cutting-edge technology used to study life in the planet's most extreme underwater conditions.

        The navigation instruments section features historical compasses, sextants, and charts used by explorers to navigate the world's oceans. These tools represent humanity's growing understanding of geography and our relationship with the sea as both highway and barrier.`
      },
      // Excursion Blog Posts
      "excursion-featured": {
        title: "Grand Expedition: Following Ancient Trade Routes",
        content: `Join us on the adventure of a lifetime as we retrace the steps of ancient merchants and explorers along historic trade routes that connected civilizations and cultures across continents. This 21-day journey combines historical discovery with modern adventure travel.

        Our expedition begins in bustling market towns that have served as trading posts for centuries. Here, we'll learn about the goods, ideas, and cultural exchanges that shaped the ancient world. Local historians and archaeologists will guide us through sites that remain largely unchanged since medieval times.

        The middle section of our journey takes us through diverse landscapes - from mountain passes used by ancient caravans to river crossings that determined the fate of entire civilizations. We'll travel using traditional methods when possible, gaining authentic insights into the challenges faced by historical traders.

        The final leg of our expedition reaches major historical centers where trade routes converged. In these locations, we'll explore museums, archaeological sites, and meet with local communities whose ancestors facilitated the cultural exchanges that shaped our modern world.`
      },
      "excursion-1": {
        title: "Artist Studio Visit: Behind the Creative Process",
        content: `Join us for an intimate one-day excursion to visit a renowned local artist in their private studio. This exclusive experience offers a rare glimpse into the creative process and artistic inspiration behind some of the most celebrated contemporary works.

        Our day begins with a guided tour of the artist's workspace, where you'll see works in progress and learn about the techniques, materials, and creative decisions that shape each piece. The artist will share personal stories about their artistic journey and the inspiration behind their most famous works.

        Following the studio tour, participate in a hands-on workshop where you'll try your hand at the artist's signature techniques. Whether it's painting, sculpture, or mixed media, you'll gain practical experience while receiving personalized guidance from a master of their craft.

        The excursion concludes with an exclusive viewing of pieces not available to the public, followed by refreshments and an opportunity for intimate conversation with the artist. This unique experience provides both artistic inspiration and valuable insights into the professional art world.`
      },
      "1": {
        title: "Mountain Expedition Chronicles",
        content: `Experience the thrill of high-altitude adventure in this detailed chronicle of mountain expeditions. From base camps to summit attempts, discover what it takes to conquer some of the world's most challenging peaks.

        The journey begins with extensive preparation, both physical and mental. Every piece of equipment is carefully selected, every route meticulously planned. The mountains demand respect, and successful expeditions require thorough preparation and unwavering determination.

        As altitude increases, the challenges multiply. Thin air, extreme weather conditions, and technical climbing sections test every skill and reserve of strength. Yet with each step higher, the rewards become more profound – stunning vistas, personal growth, and the indescribable satisfaction of pushing beyond perceived limits.

        The summit represents more than just a geographical point; it's a moment of triumph that validates months or even years of preparation. Standing atop a great peak, surrounded by endless mountain ranges stretching to the horizon, provides perspective that extends far beyond the climb itself.`
      },
      "2": {
        title: "Ocean Adventures Unveiled",
        content: `Dive into the mysteries of maritime exploration as we uncover the secrets hidden beneath the waves. From coral reefs to deep-sea trenches, the ocean offers adventures unlike any other environment on Earth.

        The underwater world presents a completely different set of challenges and rewards. Visibility, currents, and marine life all play crucial roles in shaping each diving experience. Every descent reveals new species, geological formations, and underwater landscapes that few humans ever witness firsthand.

        Coral reefs serve as underwater cities, teeming with life and color that rivals any terrestrial ecosystem. The delicate balance of these marine environments provides endless opportunities for discovery and photography, while also highlighting the importance of ocean conservation.

        Deep-sea exploration takes adventure to another level entirely. In the ocean's deepest regions, pressure, darkness, and extreme conditions create an alien world right here on our own planet. These expeditions often yield scientific discoveries that expand our understanding of life itself.`
      },
      "3": {
        title: "Desert Wanderings",
        content: `Navigate through endless dunes and discover the secrets hidden in the world's most remote deserts. These vast landscapes offer unique challenges and profound beauty that can only be appreciated through direct experience.

        Desert travel requires specialized knowledge and equipment. Water management, navigation, and understanding desert weather patterns become matters of survival. Yet those who master these skills gain access to some of Earth's most spectacular and least visited places.

        The silence of the desert is profound and transformative. Without the constant background noise of modern life, travelers often find a clarity of thought and peace that's difficult to achieve elsewhere. Night skies in remote desert regions offer stellar displays that remind us of our place in the cosmos.

        Hidden oases, ancient trade routes, and archaeological sites dot these seemingly barren landscapes. Each discovery tells a story of human adaptation and the remarkable ability of life to thrive in the most challenging environments.`
      },
      "4": {
        title: "Urban Exploration Guide",
        content: `Uncover the hidden gems and secret spots in the world's most fascinating cities. Urban exploration reveals layers of history, culture, and human creativity that often go unnoticed by casual visitors.

        Every city has its hidden stories waiting to be discovered. Abandoned buildings, forgotten tunnels, rooftop gardens, and underground spaces create a parallel world that exists alongside the bustling streets above. Urban explorers learn to see cities through a completely different lens.

        Architecture tells the story of human ambition and creativity across different eras. From ancient foundations to cutting-edge modern structures, cities serve as open-air museums where every building has a tale to tell about the people who built and inhabited it.

        The social dynamics of urban exploration create unique communities bound by shared curiosity and respect for these forgotten places. Documentation through photography and storytelling helps preserve urban history that might otherwise be lost to development and time.`
      },
      "5": {
        title: "Wildlife Encounters",
        content: `Experience close encounters with nature's most magnificent creatures in their natural habitats. Wildlife observation requires patience, respect, and understanding of animal behavior to create meaningful connections with the natural world.

        Successful wildlife encounters depend on understanding animal patterns, seasonal movements, and habitat preferences. The most rewarding experiences often come from quiet observation rather than active pursuit, allowing animals to behave naturally in their environment.

        Photography and documentation play crucial roles in wildlife exploration, but the ethics of observation must always take precedence. Maintaining appropriate distances, minimizing human impact, and supporting conservation efforts ensure these experiences remain available for future generations.

        Each species offers unique insights into adaptation, survival, and the intricate relationships that define healthy ecosystems. From apex predators to the smallest insects, every creature plays a vital role in maintaining the balance of their environment.`
      },
      "6": {
        title: "Cultural Immersion Stories",
        content: `Deep dives into local traditions and customs from around the globe reveal the rich tapestry of human culture and the universal themes that connect us all despite our differences.

        True cultural immersion goes beyond surface-level tourism to engage with communities on a meaningful level. Learning local languages, participating in traditional activities, and forming genuine relationships provide insights that no guidebook can offer.

        Food, music, and storytelling serve as universal languages that transcend cultural barriers. Sharing meals with local families, attending traditional ceremonies, and listening to oral histories create connections that last long after the journey ends.

        Understanding different worldviews and approaches to life challenges assumptions and expands perspectives. These encounters often reveal that while customs may differ, fundamental human values of hospitality, family, and community remain remarkably consistent across cultures.`
      }
    };

    return posts[postId as keyof typeof posts] || posts["featured"];
  };

  const blogPost = getBlogPost(id || "featured");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Blog Post Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
              {blogPost.title}
            </h1>
            
            {/* Featured Image Placeholder */}
            <div className="bg-muted h-80 md:h-96 flex items-center justify-center rounded-lg mb-8">
              <span className="text-muted-foreground text-lg font-medium">Blog Photo</span>
            </div>
          </div>

          {/* Blog Post Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            {blogPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>

        {/* Book Ticket Section */}
        {(id?.includes('exhibition') || id?.includes('excursion')) && (
          <section className="bg-card border-t border-border py-16">
            <div className="container mx-auto px-6 max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
                  Book Ticket
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Tickets
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div className="text-center">
                  <button 
                    type="button"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300 text-lg w-full"
                    onClick={() => alert('Booking feature coming soon! We will contact you to confirm your reservation.')}
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
              Explore Our Collection
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover handcrafted pieces from our talented artists
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300 text-lg">
              Visit Shop
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;